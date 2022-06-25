/* САМОЕ НАЧАЛО!!! */

/*require('./bootstrap');*/ /* Временно закоментировал */


$(document).ready(function() {
    
    /* Прилипание меню к верху страницы */
	// функцию скролла привязать к окну браузера
	$(window).scroll(function(){
		var distanceTop = $('#slideMenu').offset().top;
		if ($(window).scrollTop() >= distanceTop)
			$('nav').attr ("id", "fixed");
		else //if ($(window).scrollTop() < distanceTop)
			$('nav').attr ("id", "nav");
	});
	    
});

(function() {
	var doc = document,
		win = window;

	doc.addEventListener("DOMContentLoaded", function(){
		//console.log("Страница загрузилась!");
		center();
		
		win.addEventListener("resize", function() {
			//console.log("Изминился экран!");
			center();
		});
		
	});	
	
	var center = function centering() {
		var img = doc.getElementsByClassName('img');

		for (var i=0;i<img.length;i++) {
			if (img[i].height > img[i].width) {

				//console.log(img[i].width);

				var percent = (img[i].width/img[i].height) * 100;
				img[i].style.width = percent+"%";

				//console.log(percent+"%"); 

				var padding = (img[i].height - img[i].width) / 2;
				img[i].style.paddingLeft = padding+"px";
				img[i].style.paddingRight = padding+"px";

				//console.log(padding+"px");
			}
		}
	};

})();

/*
// события jquery
$(window).resize(function(){    
	// событие, возникающее при изменении ширины экрана
});
$(window).load(function(){
	// инициализация после того, как загрузились изображения на странице
	// теперь страница полностью загружена, включая все фреймы, объекты и картинки
});
*/