﻿<?php	
$количество_лотов = 10;
include_once 'conect.php';

// Подключаем библиотеку с классом Bot
include_once 'myBotApi/Bot.php';
//exit('ok');
$id_bota = strstr($tokenMARKET, ':', true);	

$mysqli = new mysqli($host, $username, $password, $dbname);

// проверка подключения 
if (mysqli_connect_errno()) {
	throw new Exception('Чёт не выходит подключиться к MySQL');	
	exit;
}

// Обработчик исключений
set_exception_handler('exception_handler');

$ссылка_на_амазон = "https://{$aws_bucket}.s3.{$aws_region}.amazonaws.com/";

$показ_одного_лота = '';

$запрос = "SELECT * FROM pzmarkt"; 
if (isset($_GET['id']) && ($_GET['id'] != 'all')) 
	$запрос = "SELECT * FROM pzmarkt WHERE id={$_GET['id']}";

$результат = $mysqli->query($запрос);
if ($результат)	{
	$i = $результат->num_rows;
}else throw new Exception('Не смог проверить таблицу `pzm`.. (работа сайта)');	

if($i>0) $arrS = $результат->fetch_all();		
else throw new Exception('Таблица пуста.. (работа сайта)');
	
if (!$количество_лотов)	$количество_лотов = 10;
	
$a=0;
$дата_публикации = [];
$текст_лота = [];
$ссыль_на_фото = [];
$лот = [];

$i--;

$последний_лот = 0;

if (isset($_POST['last_lot'])) $последний_лот = $_POST['last_lot'];
if (isset($_GET['last_lot'])) $последний_лот = $_GET['last_lot'];

if (isset($_POST['dalee']) || isset($_GET['dalee'])) $последний_лот = $последний_лот + $количество_лотов;
if (isset($_POST['nazad']) || isset($_GET['nazad'])) $последний_лот = $последний_лот - $количество_лотов;

if ($последний_лот) {
	
	$i = $i - $последний_лот;
	
}

while ($a < $количество_лотов){
	if($i >= 0){		
		$format=$arrS[$i][2];
		while (($format=='video')&&($i>0)) {
			$i--;
			$format=$arrS[$i][2];
		}			
		if ($format=='photo') {
			$id_lota=$arrS[$i][0];	
			$otdel=$arrS[$i][1];
			$url=$arrS[$i][4];
			$куплю_продам=$arrS[$i][5];
			$название=$arrS[$i][6];
			$валюта=$arrS[$i][7];
			$хештеги=$arrS[$i][8];
			$юзера_имя=$arrS[$i][9];
			$юникс_дата_публикации = $arrS[$i][12] + 10800;
			$дата_публикации[$a] = date("d.m.Y H:i", $юникс_дата_публикации);
			
			$юзера_имя = str_replace("▪️", "", $юзера_имя);
			
			if (strpos($юзера_имя, "@") !== false) {
				$имя = str_replace("@", "", $юзера_имя);
				$связь = "https://t.me/{$имя}";		
			}else {
				$связь = _дай_связь($mysqli, $юзера_имя);
			}
			
			$текст_лота[$a] = "<p><span class='hesh'>{$куплю_продам}&nbsp;{$otdel}</span></p>
				<p><a href={$url}>{$название}</a></p>
				<p>валюта: {$валюта}</p>
				<p>местонахождение: {$хештеги}</p>
				<p>для связи: <a href={$связь}>{$юзера_имя}</a></p>
				<p>&nbsp;</p>";
				
			$ссыль_на_фото[$a] = $ссылка_на_амазон . $id_lota . ".jpg";
			
			if ( isset($_GET['id']) || ( isset($details) && ($details == 'all') ) ) {
				$запрос = "SELECT podrobno FROM `avtozakaz_pzmarket` WHERE id_zakaz='{$id_lota}'"; 
				$результат = $mysqli->query($запрос);
				if ($результат)	{
					$количество = $результат->num_rows;
				}else throw new Exception('Не смог проверить таблицу `avtozak`.. (работа сайта)');	
				if($количество > 0) {
					$результМассив = $результат->fetch_all(MYSQLI_ASSOC);		
					$подробности = $результМассив[0]['podrobno'];
				}else $подробности = "Нет информации..";						
				$кнопка_подробнее = "<p>{$подробности}&nbsp;<span class='date'>{$дата_публикации[$a]}</span></p>";
			}else {
				$кнопка_подробнее = "<p><a href='/details?id={$id_lota}' title=''>Подробности</a>&nbsp;<span class='date'>{$дата_публикации[$a]}</span></p>";				
			}
			
			$лот[$a] = "<article>
				<a href='#'><div style='width:100%;'><img class='img' src='{$ссыль_на_фото[$a]}' alt=''></div></a>{$текст_лота[$a]}		
					{$кнопка_подробнее}
				</article>";
				
			if (isset($_GET['id']))
				if ($_GET['id'] == $id_lota) {$показ_одного_лота = $лот[$a]; $a++; $a++; break;} 
			
		}
		
		$i--;
	}

	$a++;
}


// закрываем подключение 
$mysqli->close();

// при возникновении исключения вызывается эта функция
function exception_handler($exception) {
	global $mysqli;
	echo "Ошибка! ".$exception->getCode()." ".$exception->getMessage();	  
	$mysqli->close();		
	exit;  	
}


function _дай_связь($mysqli, $имя_клиента) {	
	//global $mysqli;
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

$ссыль_на_канал_подробности = "https://teleg.link/podrobno_s_PZP";

$ссыль_на_саппорт_бота = "https://teleg.link/Prizm_market_supportbot";


// ---------------------------------------
// добавление кнопки "Далее" в конце лотов
// --------------------------------------- 


if (isset($лот[0]) && $лот[0] == "") {	
	$лот[0] = "<article>
		<center>
			<p>Больше лотов нет.</p>
		</center>
	</article>";
	
}elseif (isset($лот[$a-1]) && $лот[$a-1] != "" ) {
	
	if (!$последний_лот) {
		$тип_кн_назад = 'hidden';		
	}else $тип_кн_назад = 'submit';
	
	$action = '/';
	if (isset($_GET['id']))
		if ($_GET['id'] == 'st') $action = '/details/?id=st';
	
	$лот[$a] = "<article id='forms_button'>
		<form action='{$action}' method='post' id='form_nazad'></form>
		<form action='{$action}' method='post' id='form_dalee'></form>
		
			<input type='hidden' name='last_lot' id='last_lot_form_nazad' value='{$последний_лот}' form='form_nazad'>
			<input type='{$тип_кн_назад}' class='button' name='nazad' id='nazad' value='&lt&lt Назад' form='form_nazad'>
			
			<input type='hidden' name='last_lot' id='last_lot_form_dalee' value='{$последний_лот}' form='form_dalee'>				
			<input type='submit' class='button' name='dalee' id='dalee'  value='Вперёд &gt&gt' form='form_dalee'>
	</article>";
		
}else {
	if ($последний_лот) {	
		$action = '/';
		if (isset($_GET['id']))
			if ($_GET['id'] == 'st') $action = '/details/?id=st';
			
		$лот[$a] = "<article>
			<h3><br>
			<center>		
				<form action='{$action}' method='post'>
					<input type='hidden' name='last_lot' id='last_lot' value='{$последний_лот}'>
					<input type='submit' class='button' name='nazad' id='nazad' value='&lt&lt Назад'>					
				</form>
			</center>
			</h3>
		</article>";		
	}
	
	
}



?>		

