@php
$вывод = "";
if (isset($_COOKIE['login'])) $вывод = $_COOKIE['login'];

$login_json = json_encode($вывод);
@endphp

<div id="lk_menu">

	<span id="contact">
		<a href="/sign_in">Вход</a>
		<a href="/registration">Регистрация</a>
	</span>

	<ul class="lk_topmenu">
		<li class="lk_topmenu_li">
			<a href="#"><label id="client"></label></a>
				
			<ul class="lk_submenu">	
				<li><a href="/lk/create">Создать заявку</a></li>
				<li><a href="/lk/statements">Ваши заявки</a></li>
				<li><a href="/lk/exit">Выход</a></li>			
			</ul>
				
		</li>
	</ul>

</div>

<script>
$(document).ready (function (){
	var login = <?=$login_json;?>;
	if (login != "") {
		$('#contact').hide ();		
		$('#client').html (login);
		$('#client').show ();
	}else {
		$('.lk_topmenu').hide ();
	}
});
</script>