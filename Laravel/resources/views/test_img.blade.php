<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	
	<link rel="stylesheet" href="/css/temp.css">
	<style>
	
	</style>
</head>
<body>
	<div class="one_div">
		<div class="two_div">
			<img class="img" src="temp/temp.jpg" alt="temp photo">
		</div>	
	</div>


<script>
(function() {
	var doc = document;

	doc.addEventListener("DOMContentLoaded", function(event){
		var img = doc.getElementsByClassName('img');
		//var img = doc.querySelectorAll('img_lot');

		//var two_div = doc.getElementsByClassName('two_div');
		//console.log(two_div[0].clientWidth); 

		for (var i=0;i<img.length;i++) {
			if (img[i].height > img[i].width) {

				console.log(img[i].width);
				console.log(img[i].clientWidth); 

				var percent = (img[i].width/img[i].height) * 100;
				img[i].style.width = percent+"%";
				//img[i].style.width = img[i].height+"px";

				//console.log(percent+"%"); 

				var padding = (img[i].height - img[i].width) / 2;
				img[i].style.paddingLeft = padding+"px";
				img[i].style.paddingRight = padding+"px";
				img[i].style.align = "center";

				//console.log(padding+"px");
			}
		}

	});

})();
</script>


</body>
</html>