@extends('layouts.base')

@section('title')
Главная страница
@endsection

@section('content')

@php
	include_once 'pzmarket.php';

	foreach($лот as $публикация) {
		echo $публикация;
	}
@endphp	

@endsection

{{--
@section('aside')
@parent
<p>Дополнительный текст</p>
@endsection
--}}