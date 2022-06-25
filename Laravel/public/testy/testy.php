<?php
include_once 'conect.php';

$mysqli = new mysqli($host, $username, $password, $dbname);
if (mysqli_connect_errno()) {	
	echo "<br>Ошибка! Нет подключения к БД.<br>";
}else {	
	
	//dd($mysqli->query("SELECT * FROM `users`")->fetch_all(MYSQLI_ASSOC));
	$результат = $mysqli->query("SELECT * FROM `users`")->fetch_all(MYSQLI_ASSOC);

	echo "<div>";
	foreach($результат as $массив){
		foreach($массив as $запись){
			echo $запись;
			echo " ";
		}
		echo "<br>";
	}
	echo "</div>";
	echo "<br>";


	//$query = "SHOW TABLES";
	//$query = "SELECT * FROM `test_table1` LIMIT 0, 30 ";
	//$query = "INSERT INTO `test_table1` VALUES ('0','0','0','0')";
	//$query = "INSERT INTO `temp` VALUES (0,0,'0','0',0,0)";
	
	/* 
	$mysqli->query("DROP TABLE IF EXISTS `testy`");
	$mysqli->query("CREATE TABLE `testy` (`a` int(11) NOT NULL, `b` int(11) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=latin1");
	$mysqli->query("INSERT INTO `testy` VALUES (4, 5)");
	*/
	
	//$query = "SELECT * FROM `testy`";	
	//$result = $mysqli->query($query);	
	
	/*
	if ($result) {		
		echo "<br>Норм чо<br>";		
		if ($result->num_rows>0) {
			$response = $result->fetch_all(MYSQLI_ASSOC);			
			dd($response);
		}else echo "<br>0 записей<br>";	
	}else {		
		echo "<br>Не смог создать запись в таблице<br>";
		dd($result);	
	}
	*/
	
	$mysqli->close();	
}


?>
