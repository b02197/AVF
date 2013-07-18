//Michael Eaton
//AVF 1307
//week 1 
//AVF Demo app

//Michael Eaton
//AVF 1307
//week 1 
//AVF Demo app
$('#instaApi').on('pageinit', function(){
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

})
/*$(function(){
var wUrl = "http://api.aerisapi.com/observations/bridgeport,mi?client_id=4J0DvsCTHRMqeVoRsv1mz&client_secret=uwQuCX7jTQ2XaRxgxa3zc88E1AYAZouq3gXlggoH"
$.getJSON(wUrl, outPutScreen);
console.log(wUrl)
});


var outPutScreen = function(data){
alert("loaded");
	console.log(data);
	var ob = data.response.ob;
	$.each(data.response,function(){
		var weath = "<li> The weather outside is '" + ob.weather + "'</li><li>The temp is:" + ob.tempF + "<li>It feels like: " + ob.feelslikeF + "</li><li>Sun Rise it at: "+ ob.sunriseISO + "</li><li>The sun will set at: "+ ob.sunsetISO +"</li>"
		$("#weatherLi").append(weath);
	});
};*/

$('#temp').click(function(){
	 $(function(){
	  	  var url = "http://api.aerisapi.com/observations/bridgeport,mi?client_id=4J0DvsCTHRMqeVoRsv1mz&client_secret=uwQuCX7jTQ2XaRxgxa3zc88E1AYAZouq3gXlggoH"
	  $.getJSON(url, screenTemp);
	  
	  });
})

var screenTemp = function(data){
	console.log(data)
    var ob = data.response.ob;
    
    $.each(data.response, function(index, sun){
           var temp = "<li> The current temperature is: "+ ob.tempF + " F</li>"
           $('#weatherList').append(temp)
    })
}

$('#cloud').click(function(){
	 $(function(){
	  	  var url = "http://api.aerisapi.com/observations/bridgeport,mi?client_id=4J0DvsCTHRMqeVoRsv1mz&client_secret=uwQuCX7jTQ2XaRxgxa3zc88E1AYAZouq3gXlggoH"
	  $.getJSON(url, screencloud);
	  
	  });
})

var screencloud = function(data){
	console.log(data)
    var ob = data.response.ob;
    
    $.each(data.response, function(index, sun){
           var weather = "<li> The current weather is: "+ ob.weather + "</li>"
           $('#weatherList').append(weather)
    })
}

$('#wind').click(function(){
	 $(function(){
	  	  var url = "http://api.aerisapi.com/observations/bridgeport,mi?client_id=4J0DvsCTHRMqeVoRsv1mz&client_secret=uwQuCX7jTQ2XaRxgxa3zc88E1AYAZouq3gXlggoH"
	  	  var name = "food";
	  $.getJSON(url, screenWind);
	  
	  });
})

var screenWind = function(data){
	console.log(data)
    var ob = data.response.ob;
    
    $.each(data.response, function(index, sun){
           var winds = "<li> The current wind speed is: "+ ob.windMPH + " MPH</li>"
           $('#weatherList').append(winds)
    })
}

$('#feel').click(function(){
	 $(function(){
	  	  var url = "http://api.aerisapi.com/observations/bridgeport,mi?client_id=4J0DvsCTHRMqeVoRsv1mz&client_secret=uwQuCX7jTQ2XaRxgxa3zc88E1AYAZouq3gXlggoH"
	  	  var name = "food";
	  $.getJSON(url, screenFeel);
	  
	  });
})

var screenFeel = function(data){
	console.log(data)
    var ob = data.response.ob;
    
    $.each(data.response, function(index, sun){
           var feels = "<li> It feels like: "+ ob.feelslikeF + " F outside.</li>"
           $('#weatherList').append(feels)
    })
}

$('#hum').click(function(){
	 $(function(){
	  	  var url = "http://api.aerisapi.com/observations/bridgeport,mi?client_id=4J0DvsCTHRMqeVoRsv1mz&client_secret=uwQuCX7jTQ2XaRxgxa3zc88E1AYAZouq3gXlggoH"
	  	  var name = "food";
	  $.getJSON(url, screenhum);
	  
	  });
})

var screenhum = function(data){
	console.log(data)
    var ob = data.response.ob;
    
    $.each(data.response, function(index, sun){
           var hums = "<li> The current humiditiy is: "+ ob.humidity + "</li>"
           $('#weatherList').append(hums)
    })
}