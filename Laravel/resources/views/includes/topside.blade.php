<article id="topColPhoto">
	<a href='#'>
		<img src="/img/art/PRIZM.png" />
	</a>
</article>
<article id="topColText">
	<h1><span>
	@php		
		include 'conect.php';
		if ($tester == 'yes') {  	
			echo "TESTMarket";
		}else {
			echo "PRIZMarket";
		}
	@endphp
	</span> - Ваш рынок!</h1>
</article>