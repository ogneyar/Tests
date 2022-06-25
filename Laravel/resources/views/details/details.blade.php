@extends('layouts.base')

@section('title')
Подробности
@endsection

@section('content')

@php
    include_once 'conect.php';

    $количество_лотов = 10;
    $категория = "";
    if (isset($_POST['kategory'])) $категория = $_POST['kategory'];
    if (isset($_GET['kategory'])) $категория = $_GET['kategory'];

if ($категория) {
	
	// здесь открывается mysqli и подключаются переменные
	include_once 'functions.php';
	
	if (isset($_POST['last_lot'])) $сколь_уже_показано = $_POST['last_lot'];
	if (isset($_GET['last_lot'])) $сколь_уже_показано = $_GET['last_lot'];

    if (isset($_POST['podrobnosti'])) $подробности = $_POST['podrobnosti'];
	if (isset($_GET['podrobnosti'])) $подробности = $_GET['podrobnosti'];
	
	$лот = _вывод_лотов_по_категории($категория, $сколь_уже_показано, $подробности, $количество_лотов);
	
    foreach($лот as $публикация) {
    	echo $публикация;
    }
	
	// закрывается подключение 
	$mysqli->close();
	
}else {

    $details = 'all';

	include_once 'pzmarket.php';
		
	if ($показ_одного_лота) {
		echo $показ_одного_лота;
	}else {
		foreach($лот as $публикация) {
			echo $публикация;
		}
	}	
	
}
@endphp	


@endsection 