//app var
// $(".presentation").animate({
// 	width:'750px',
// })

var bgmusic = document.getElementById('bgmusic');
bgmusic.addEventListener('canplay', function(){
	this.play();
}, false);
window.addEventListener('load', function(){
	window.addEventListener('touchstart', once, false);
}, false);
function once(){
	bgmusic.play();
	window.removeEventListener('touchstart', once, false);
}





var app = {};

(function($){
	"use strict";



	var $window = $(window),
	$document = $(document);


	app.event = function () {
	}

	//Document ready functions
	$document.ready(function () {
		app.event();
	});

})(jQuery);