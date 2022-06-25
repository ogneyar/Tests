@section('aside')
<article class="aside_content">
	<a href='#'>
		<img src="/img/art/PRIZM.png" />
	</a>
	<h3>Здесь может быть Ваша реклама!</h3>
</article>
<article class="aside_content">
	<h3>Поддержать проект:</h3>
	<article class="tooltip">
		<h5>Кошелёк</h5>
		<input type="text" value="PRIZM-UFSC-9S49-ESJX-79N7S" id="myInput" onclick="myFunction('myInput')" onmouseout="outFunc()" readonly>
		<br><br>			
		<h5>Публичный ключ</h5>
		<input type="text" value="11dcf528f8f2ff9dc3c5005cd6fdc3240ea09ceaf96f2dd261255696ccb2842c" id="myInput2" onclick="myFunction('myInput2')" onmouseout="outFunc()" readonly>
		<br><br>
		<span class="tooltiptext" id="myTooltip">Нажмите чтобы копировать текст в буфер</span>
	</article>
</article>
@show

<script>
/* Функции для копирования текста */
function myFunction(myIn) {
	var copyText = document.getElementById(myIn);
	copyText.select();
	document.execCommand("copy");
	
	var tooltip = document.getElementById("myTooltip");
	tooltip.innerHTML = "Скопировал: " + copyText.value;
}
function outFunc() {
	var tooltip = document.getElementById("myTooltip");
	tooltip.innerHTML = "Нажмите чтобы копировать текст в буфер";
}
/*--------------------------------*/
</script>