<div id="logo">
	<a href="/">
	@php		
		include 'conect.php';
		if ($tester == 'yes') {  	
			echo "TESTMarket";
		}else {
			echo "PRIZMarket";
		}
	@endphp
	</a>
</div>