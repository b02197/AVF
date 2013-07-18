//Michael Eaton
//AVF 1307
//week 1 
//AVF Demo app
//$('#instaApi').on('pageinit', function(){
$('#game').click(function(){
	$(function(){
	  	  var url = "https://api.instagram.com/v1/tags/game/media/recent?callback=?&amp;client_id=a7a95df91793454f90ae6e0602ff6123&amp;min_id=10"
	  	  var name = "game";
	  	  $.getJSON(url, screenoutput);
	  	 });
	  });
		  
$('#cars').click(function(){
	 $(function(){
	  	  var url = "https://api.instagram.com/v1/tags/cars/media/recent?callback=?&amp;client_id=a7a95df91793454f90ae6e0602ff6123&amp;min_id=10"
	  	  var name = "cars";
	  $.getJSON(url, screenoutput);
	  
	  });
})
$('#food').click(function(){
	 $(function(){
	  	  var url = "https://api.instagram.com/v1/tags/food/media/recent?callback=?&amp;client_id=a7a95df91793454f90ae6e0602ff6123&amp;min_id=10"
	  	  var name = "food";
	  $.getJSON(url, screenoutput);
	  
	  });
}) 
	
	var screenoutput = function(data){
	    console.log(data);
	    
	    $("#picData").html("<h3>Your Seach Resalts</h3>");
	    
	    
	    $.each(data.data, function(index, photo){
	           var picture = "<li><img src='" + photo.images.standard_resolution.url + "' alt='" + photo.user.id + "' /><h4>" + photo.user.full_name + ", <em>(" + photo.user.username +")</em></h4></li>";
	           $("#picData").append(picture)
	           });
	};

//})
$(function(){
var wUrl = "http://api.worldweatheronline.com/free/v1/weather.ashx?q=bridgeport%2C+michigan&format=json&num_of_days=5&callback=%3F&key=up7jzu6qf3n9jp5uqsxqe9f2"
$.getJSON(wUrl, screenOut);
})


var screenOut = function(data){
	console.log(data);
	
	$.each(data.data,function(index, weather){
		var weath = "<li><img src='"+ weather.weatherIconURl.value+"'</li>"
		$("#weatherLi").append(weath);
	});
};