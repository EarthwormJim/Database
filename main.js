$("#about,#campers").click(function(){
  $("#about > li, #campers > li").toggle(200);
});
$("#header-image").attr("width", screen.width-18);
$(window).resize(function() {
	$("#header-image").attr("width", screen.width-18);
});

// set the date we're counting down to
var targetDate = new Date("June 1, 2014").getTime();
 
// variables for time units
var months, weeks, days, hours, minutes, seconds;

// timer for updating countdown clock
var timer = setInterval(function(){countdown()}, 1000);

function countdown() {
 
    // find the amount of "seconds" between now and target
    var currentDate = new Date().getTime();
	if (targetDate-currentDate <= 0) {
		document.getElementById("countdown").innerHTML="summer camp is in session!";
		document.getElementById("countdownText").innerHTML="";
		timer.clearInterval();
	}
	else
		var secondsLeft = (targetDate - currentDate) / 1000;

	months = parseInt(secondsLeft / 2678400);
	secondsLeft = secondsLeft % 2678400;
	
	weeks = parseInt(secondsLeft / 604800)
	secondsLeft = secondsLeft % 604800;
	
    days = parseInt(secondsLeft / 86400);
    secondsLeft = secondsLeft % 86400;
     
    hours = parseInt(secondsLeft / 3600);
    secondsLeft = secondsLeft % 3600;
     
    minutes = parseInt(secondsLeft / 60);
    seconds = parseInt(secondsLeft % 60);
	 
    // format countdown string + set tag value
	
    document.getElementById("countdown").innerHTML = months + "m, " + 
	weeks + "w, " +days + "d, " + hours + "h, " + minutes + "m, " + 
	seconds + "s";  
 	
};

// Initialize clock on page
countdown();