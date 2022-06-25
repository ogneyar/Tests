@extends('layouts.base')

@section('title')
Категории
@endsection


@section('content')

@php

include_once 'functions.php';

$количество_лотов = 10;
$категория = "";
if (isset($_POST['kategory'])) $категория = $_POST['kategory'];
if (isset($_GET['kategory'])) $категория = $_GET['kategory'];

$сколь_уже_показано = 0;

if (isset($_POST['last_lot'])) $сколь_уже_показано = $_POST['last_lot'];
if (isset($_GET['last_lot'])) $сколь_уже_показано = $_GET['last_lot'];

if (isset($_POST['dalee']) || isset($_GET['dalee'])) $сколь_уже_показано = $сколь_уже_показано + $количество_лотов;
if (isset($_POST['nazad']) || isset($_GET['nazad'])) $сколь_уже_показано = $сколь_уже_показано - $количество_лотов;

if ($категория) {
	
    $лот = _вывод_лотов_по_категории($категория, $сколь_уже_показано, null, $количество_лотов);
    
    foreach($лот as $публикация) {
        echo $публикация;
    }
    
}else include_once 'forms.php';
    
@endphp	

{{-- 
@if($end !== false)
	@include('category.forms')
@endif --}}


@endsection 