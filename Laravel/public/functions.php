﻿<?php
include_once 'mysqli.php'; 

/*
** 	Функции для работы сайта
** 	------------------------
**
** exception_handler
**
** _последняя_публикация_на_сайте
** _подтверждён_ли_клиент
** _сравни_токен_и_логин
** _сравни_лот_и_логин
** _удали_лот
** _установка_времени
** _ожидание_публикации
** _выбор_времени_публикации
** _обнулить_секунды
**
** _вывод_лотов_по_категории
** _дай_связь
**
*/

// при возникновении исключения вызывается эта функция
function exception_handler($exception) {
	global $mysqli;
	echo "Ошибка! ".$exception->getCode()." ".$exception->getMessage();
	$mysqli->close();
	exit;
}

// Проверка давно ли была последняя публикация лота у данного клиента
function _последняя_публикация_на_сайте($логин) {	
	global $mysqli;	
	
	if ($логин == 'Огнеяр' || $логин == 'Otrad_ya' || $логин == 'Логин') return true;
	
    $ответ = false;	
	$query = "SELECT date FROM `avtozakaz_pzmarket` WHERE id_client='7' AND username='{$логин}'";	
	$result = $mysqli->query($query);	
	if ($result) {	
		if ($result->num_rows>0) {        
			$результат = $result->fetch_all(MYSQLI_ASSOC);
			$время = time()-80000; // примерно 22 часа, а точнее 22,22222222222	
			$давно = true; // если публикация была давно
			foreach ($результат as $строка) {				
				if ($строка['date']>$время) $давно = false;				
			}		
            if ($давно) $ответ = true;
		}else $ответ = true;	
	}
	//else throw new Exception("Не смог узнать наличие лота у клиента {$логин} (_последняя_публикация_на_сайте)");	
    return $ответ;
}

function _подтверждён_ли_клиент($логин) {
	global $mysqli;	
	
	$ответ = false;
	$запрос = "SELECT vremya FROM `site_users` WHERE login='{$логин}' AND podtverjdenie='true'"; 
	$результат = $mysqli->query($запрос);
	if ($результат)	{
		$количество = $результат->num_rows;	
		if($количество > 0) {
			$ответ = true;			
		}
	}else {
		   echo 'Не смог проверить наличие клиента в базе...';	
		   exit;
	} 
	return $ответ;
}

function _сравни_токен_и_логин($логин, $токен) {
	global $mysqli;	
	
	$ответ = false;
	$запрос = "SELECT vremya FROM `site_users` WHERE login='{$логин}' AND token='{$токен}'"; 
	$результат = $mysqli->query($запрос);
	if ($результат)	{
		$количество = $результат->num_rows;	
		if($количество > 0) {
			$ответ = true;			
		}
	}else {
		   echo 'Не смог сопоставить логин клиента и его токен...';	
		   exit;
	} 
	return $ответ;
}

function _сравни_лот_и_логин($логин, $лот) {
	global $mysqli;	
	
	$ответ = false;
	$запрос = "SELECT date FROM `avtozakaz_pzmarket` WHERE username='{$логин}' AND id_zakaz='{$лот}'"; 
	$результат = $mysqli->query($запрос);
	if ($результат)	{
		$количество = $результат->num_rows;	
		if($количество > 0) {
			$ответ = true;			
		}
	}else {
		   echo 'Не смог сопоставить номер лота и логин клиента...';	
		   exit;
	} 
	return $ответ;
}

function _удали_лот($лот) {
	global $mysqli;	
	
	$ответ = false;
	$запрос = "DELETE FROM `avtozakaz_pzmarket` WHERE id_zakaz='{$лот}'"; 
	$результат = $mysqli->query($запрос);
	if ($результат)	{
		
		$ответ = true;			
		
	}else {
		   echo "Не смог удалить лот {$лот}...";	
		   exit;
	} 
	return $ответ;
}

// функция установки времени публикации
function _установка_времени($номер_лота) {		
	global $mysqli;	
	
	$время = time();	
	$query ="UPDATE `avtozakaz_pzmarket` SET date='{$время}' WHERE id_zakaz={$номер_лота}";		
	$result = $mysqli->query($query);			
	if (!$result) {
		echo "Не смог обновить запись в таблице avtozakaz_pzmarket (_установка_времени)";	
		exit;
	}
	return true;
}

// функция постановки лота в ожидание публикации
function _ожидание_публикации($номер_лота) {		
	global $tokenAvtoZakaz, $mysqli;		
	
	$ответ = false;	
	
	$id_bota = strstr($tokenAvtoZakaz, ':', true);		
	
	$запрос ="SELECT soderjimoe FROM `variables` WHERE id_bota={$id_bota} AND nazvanie='номер_лота' AND soderjimoe='{$номер_лота}'";				
	$результат = $mysqli->query($запрос);
	if ($результат) {
		if ($результат->num_rows > 0) {			
			echo "<label>Такой заказ в ожидании на публикацию уже есть!</label>";	
			exit;
		}else {
			$время_публикации = _выбор_времени_публикации();
			$запрос ="INSERT INTO `variables` (
				`id_bota`, `nazvanie`, `soderjimoe`, `opisanie`, `vremya`
			) VALUES (
				'{$id_bota}', 'номер_лота', '{$номер_лота}', '', '{$время_публикации}'
			)";						
			$результат = $mysqli->query($запрос);								
			if ($результат) {
				$ответ = $время_публикации;
			}else echo "<label>Не смог добавить запись в таблицу (_ожидание_публикации)</label>";				
		}			
	}else echo "<label>Не смог узнать наличие записи в таблице (_ожидание_публикации)</label>";	

	return $ответ;	
}

// функция проверки наличия лотов в ожидании, если есть, то показывает время последнего в очереди
function _выбор_времени_публикации() {
	global $tokenAvtoZakaz, $mysqli;
	
	$id_bota = strstr($tokenAvtoZakaz, ':', true);
	
	$ответ = false;
	
	$UNIXtime = time();
	$UNIXtime_Moscow = $UNIXtime + 10800;	
	$время = _обнулить_секунды($UNIXtime_Moscow);
	
	$запрос ="SELECT vremya FROM `variables` WHERE id_bota={$id_bota} AND nazvanie='номер_лота'";			
	$результат = $mysqli->query($запрос);
	if ($результат) {	
		$количество = $результат->num_rows;
		if ($количество > 0) {
			$результМассив = $результат->fetch_all(MYSQLI_ASSOC);			
			$последняя_в_очереди = 0;
			foreach($результМассив as $строка) {
				if ($строка['vremya'] > $последняя_в_очереди) $последняя_в_очереди = $строка['vremya'];
			}			
			if ($последняя_в_очереди > $время) $ответ = $последняя_в_очереди + 1200; // + 20 мин
		}		
		if (!$ответ) {			
			$минута = date("i", $время);
			if ($минута > 48) {
				$смещение = 70 - $минута;
			}elseif ($минута > 28) {
				$смещение = 50 - $минута;
			}elseif ($минута > 8) {
				$смещение = 30 - $минута;
			}else $смещение = 10 - $минута;
			$ответ = $время + $смещение * 60;		
		}		
		$счётчик = false;
		while ($счётчик == false) {
			$бронь = _нет_ли_брони($ответ);
			if ($бронь == "свободно") {
				$счётчик = true;
			}else {
				$ответ = $ответ + 1200;
			}				
		}		
	}else echo "<label>Не смог сделать запрос к таблице (_выбор_времени_публикации)</label>";
	return $ответ;
}


// функция удаляет секунды реального времени в юникс времени
function _обнулить_секунды($юникс_время) {	
	$ответ = false;
	$год = date("Y", $юникс_время);
	$месяц = date("m", $юникс_время);
	$день = date("d", $юникс_время);			
	$час = date("H", $юникс_время);
	$минута = date("i", $юникс_время);			
	$ответ = mktime($час, $минута, 0, $месяц, $день, $год);
	return $ответ;
}

// функция проверяет есть ли бронь публикации на заданное время 
function _нет_ли_брони($время) {		// если нет брОни, вернёт "свободно"
	global $tokenAvtoZakaz, $mysqli;	
	$id_bota = strstr($tokenAvtoZakaz, ':', true);	
	$ответ = false;
	$запрос ="SELECT * FROM `variables` WHERE id_bota={$id_bota} AND nazvanie='бронь' AND vremya='{$время}'";
	$результат = $mysqli->query($запрос);
	if ($результат) {			
		if ($результат->num_rows == 0) $ответ = "свободно";
	}else echo "<label>Не смог узнать наличие записи в таблице (_нет_ли_брони)</label>";		
	return $ответ;	
}


// Вывод лотов по категориям
function _вывод_лотов_по_категории(
		$категория, 
		$сколько_уже_показано = 0, 
		$подробно = '', 
		$сколько_показать = 10		
) {	
	global $mysqli, $aws_bucket, $aws_region;	
   
	$ссылка_на_амазон = "https://{$aws_bucket}.s3.{$aws_region}.amazonaws.com/";

	$лот = [];

	if ($подробно) $запрос = "SELECT * FROM pzmarkt WHERE id='{$подробно}'";
	else $запрос = "SELECT * FROM pzmarkt WHERE otdel='{$категория}'"; 
	$результат = $mysqli->query($запрос); 
	
	if ($результат)	{
		$количество = $результат->num_rows;
	}else throw new Exception('Не смог проверить таблицу `pzm`.. (_вывод_лотов_по_категории)');	

	if($количество > 0) {
        $результМассив = $результат->fetch_all(MYSQLI_ASSOC);		
	}else {
        $лот[0] = "<article>
				<h3><br><center>
					<p>В этой категории ещё нет товаров/услуг.</p>
				</center></h3>
			</article>";
		return $лот;
	} 
		
	$номер = 0;

	$количество--;

	if ($сколько_уже_показано) $количество = $количество - $сколько_уже_показано;

	while ($номер < $сколько_показать){
		
		if($количество >= 0){		
		
			$формат_файла = $результМассив[$количество]['format'];
			while (($формат_файла == 'video') && ($количество > 0)) {
				$количество--;
				$формат_файла = $результМассив[$количество]['format'];
			}			
			if ($формат_файла == 'photo') {
				
				$номер_лота = $результМассив[$количество]['id'];
				$ссылка = $результМассив[$количество]['url'];
				$ссылка = str_replace("t.me", "teleg.link", $ссылка);
				$куплю_продам = $результМассив[$количество]['kuplu_prodam'];
				$название = $результМассив[$количество]['nazvanie'];
				$валюта = $результМассив[$количество]['valuta'];
				$хештеги = $результМассив[$количество]['gorod'];
				$юзера_имя = $результМассив[$количество]['username'];				
				$юникс_дата_публикации = $результМассив[$количество]['time'] + 10800;
				$дата_публикации = date("d.m.Y H:i", $юникс_дата_публикации);
				$юзера_имя = str_replace("▪️", "", $юзера_имя);
				
				if (strpos($юзера_имя, "@") !== false) {
					$имя = str_replace("@", "", $юзера_имя);
					$связь = "https://t.me/{$имя}";		
				}else {
					$связь = _дай_связь($юзера_имя);
				}
				
				$текст_лота = "<p><span class='hesh'>{$куплю_продам}&nbsp;{$категория}</span></p>
					<p><a href={$ссылка}>{$название}</a></p>
					<p>валюта: {$валюта}</p>
					<p>местонахождение: {$хештеги}</p>				
					<p>для связи: <a href={$связь}>{$юзера_имя}</a></p>
					<p>&nbsp;</p>";
					
				$ссыль_на_фото = $ссылка_на_амазон . $номер_лота . ".jpg";		
				
				if ($подробно) {
					$запрос = "SELECT podrobno FROM `avtozakaz_pzmarket` WHERE id_zakaz='{$номер_лота}'"; 
					$результат = $mysqli->query($запрос);
					if ($результат)	{
						$количество = $результат->num_rows;
					}else throw new Exception('Не смог проверить таблицу `avtozak`.. (_вывод_лотов_по_категории)');	
					if($количество > 0) {
						$результМассив = $результат->fetch_all(MYSQLI_ASSOC);		
						$подробности = $результМассив[0]['podrobno'];
					}else $подробности = "Нет информации..";						
					$кнопка_подробнее = "<p>{$подробности}<span>{$дата_публикации}</span></p>";
				}else {
					$кнопка_подробнее = "<p><a href='/details/?id={$номер_лота}' title=''>Подробности</a>&nbsp;<span class='date'>{$дата_публикации}</span></p>";				
				}
				
				$лот[$номер] = "<article>
				<a href='#'><div style='width:100%;'><img class='img' src='{$ссыль_на_фото}' alt=''></div></a>{$текст_лота}
					{$кнопка_подробнее}
				</article>";
					
				if ($подробно == $номер_лота) return $лот;
				
			}
			
			$количество--;
		}

		$номер++;
	}

	if (isset($лот[0]) && $лот[0] == "") {	
		$лот[0] = "<article>
			<h3><br><center>
				<p>Больше лотов нет.</p>
			</center></h3>
		</article>";
		
	}elseif (isset($лот[$номер-1]) && $лот[$номер-1] != "")  { 
		
		if (!$сколько_уже_показано) {
			$тип_кн_назад = 'hidden';		
		}else $тип_кн_назад = 'submit';
		
		$action = '/category';
		
		$лот[$номер] = "<article id='forms_button'>
			<form action='{$action}' method='post' id='form_nazad'></form>
			<form action='{$action}' method='post' id='form_dalee'></form>
			
				<input type='hidden' name='last_lot' id='last_lot_form_nazad' value='{$сколько_уже_показано}' form='form_nazad'>
				<input type='hidden' name='kategory' id='kategory' value='{$категория}' form='form_nazad'>
				<input type='{$тип_кн_назад}' class='button' name='nazad' id='nazad' value='&lt&lt Назад' form='form_nazad'>
				
				<input type='hidden' name='last_lot' id='last_lot_form_dalee' value='{$сколько_уже_показано}' form='form_dalee'>
				<input type='hidden' name='kategory' id='kategory' value='{$категория}' form='form_dalee'>
				<input type='submit' class='button' name='dalee' id='dalee'  value='Вперёд &gt&gt' form='form_dalee'>
		</article>";

			
	}else {
		if ($сколько_уже_показано) {
			$action = '/category';
			$лот[$a] = "<article>
				<h3><br>
				<center>
					<form action='{$action}' method='post'>
						<input type='hidden' name='last_lot' id='last_lot' value='{$последний_лот}'>
						<input type='hidden' name='kategory' id='kategory' value='{$категория}'>
						<input type='submit' class='button' name='nazad' id='nazad' value='&lt&lt Назад'>
					</form>
				</center>
				</h3>
			</article>";
		}
	}

	return $лот;
}


function _дай_связь($имя_клиента) {	
	global $mysqli;
	$ответ = false;
	$запрос = "SELECT svyazi, svyazi_data FROM site_users WHERE login='{$имя_клиента}'";
	$результат = $mysqli->query($запрос);
	if ($результат) {
		if ($результат->num_rows == 1) {		
			$результМассив = $результат->fetch_all(MYSQLI_ASSOC);
			$связь = $результМассив[0]['svyazi'];
			$данные = $результМассив[0]['svyazi_data'];
			if ($связь == 'Telegram') {
				if (strpos($данные, "@")!==false) {		
					$ник = substr(strrchr($данные, "@"), 1);
					$ответ = "https://teleg.link/{$ник}";
				}else $ответ = "https://teleg.link/{$данные}";
			}elseif ($связь == 'WhatsApp') {
				if (strpos($данные, "+")!==false) {		
					$ник = substr(strrchr($данные, "+"), 1);
					$ответ = "https://wa.me/{$ник}";
				}else $ответ = "https://wa.me/{$данные}";
			}elseif ($связь == 'Wiber') {
				if (strpos($данные, "+")!==false) {		
					$ник = substr(strrchr($данные, "+"), 1);
					$ответ = "https://wb.me/{$ник}";
				}else $ответ = "https://wb.me/{$данные}";
			}
		}
	}
	return $ответ;
}


?>
