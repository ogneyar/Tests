<?php
if ($_SERVER['HTTP_HOST']=='www.prizmarket.ru') header('Location: https://prizmarket.ru');
if ($_SERVER['HTTP_HOST']=='www.prizmarket.online') header('Location: https://prizmarket.online');

include_once '../vendor/autoload.php';

// $количество_лотов = 10;
// include_once 'conect.php';
// include_once 'pzmarket.php';
?>

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
		<meta charset="utf-8" />
		<meta http-equiv="Cache-Control" content="no-cache">

		<meta name="viewport" content="user-scalable=yes, width=device-width, initial-scale=1.0, maximum-scale=1.0">
		<meta name="description" content="Сайт для рекламы товаров/услуг за криптовалюту PRIZM" />
		<meta name="keywords" content="PRIZM, криптовалюта, товары, услуги, куплю, продам, безоплатно, бесплатно" />		
		<!-- имя автора документа -->
		<meta name="author" content="Огънеяръ" />
		<!-- управление роботами -->
		<meta name="robots" content="all,index,follow" />
		<!-- читательская аудитория документа (global - публичный документ) -->
		<meta name="distribution" content="global" />
		<!-- возрастной рейтинг (General - общая категория) -->
		<meta name="Rating" content="General">
		<!-- статус документа (Dynamic - для изменяющихся документов) -->
		<meta name="Document-state" content="Dynamic">

		<title>@yield('title')</title>

        <!-- Font 'Nunito' -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">
				
        <!-- Style css -->
		<link rel="stylesheet" href="/css/app.css">

		<!-- Icons -->
		<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
		<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
		<link rel="manifest" href="/favicon/site.webmanifest">
		<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5">		
		<meta name="msapplication-TileColor" content="#00aba9">
		<meta name="msapplication-config" content="/favicon/browserconfig.xml">
		<meta name="theme-color" content="#ffffff">
		
		<!-- Add libs for jQuery, Ajax... -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script> 
		
		<!-- Основной скрипт сайта -->
		<script src="/js/app.js"></script> 
		
		@if(Request::is('/'))
			@include('layouts.line', ['number' => 1])
		@endif
		@if(Request::is('details'))
			@include('layouts.line', ['number' => 2])
		@endif
		@if(Request::is('category'))
			@include('layouts.line', ['number' => 3])
		@endif		
		@if(Request::is('support'))
			@include('layouts.line', ['number' => 4])
		@endif
		@if(Request::is('about'))
			@include('layouts.line', ['number' => 5])
		@endif		
	
    </head>
	<body>
		<header>
			@include('includes.logo')
			@include('includes.lk_menu')
		</header>

		@include('includes.menu')
		<div id="slideMenu"></div>

		@if(Request::is('/test'))
			@include('includes.hero')
		@endif	

		<div id="wrapper">
			<div id="TopCol">		
				@include('includes.topside')
			</div>
			<div id="leftCol">		
				@yield('content')
			</div>
			<div id="rightCol">
				@include('includes.aside')
			</div>
		</div>
		
		@include('includes.footer')
    </body>
</html>
