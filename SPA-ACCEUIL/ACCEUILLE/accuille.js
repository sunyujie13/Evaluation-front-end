


//app var
var app = {};

(function($){
	"use strict";


/*************************
  Predefined Variables
*************************/

	var $window = $(window),
	$document = $(document);

	$( function() {
		$( "#datepickerDepart" ).datepicker();
		$( "#datepickerArrivee" ).datepicker();
		$( "#datepickerSoin" ).datepicker();

	  } );

	  $( function() {
		$( "#speed" ).selectmenu();
	 
		$( "#files" ).selectmenu();
	 
		$( "#number" )
		  .selectmenu()
		  .selectmenu( "menuWidget" )
			.addClass( "overflow" );
	 
		$( "#salutation" ).selectmenu();
	  } );

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

		

	// app.event = function () {

		// $("#button").click(function(){

		// 	$("#monCarre").animate({
		// 		left:"200px",
		// 		height:"300px",
		// 		width:"300px",
		// 		fontSize:"40px"
		// 	},3000);

		// });

	// }

	//Document ready functions
	$document.ready(function () {
		// app.event();
	});

})(jQuery);