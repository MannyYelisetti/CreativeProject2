$(document).ready(function() {

	$("#userSubmit").click(function(e) {
		e.preventDefault();
		var value = $("#userInput").val();
        console.log(value);
        //var x = 0;
        var myurl= "https://dog.ceo/api/breed/" + value + "/images";
		console.log(myurl);
		$.ajax({
		    url : myurl,
		    dataType : "json",
		    success : function(json) {

		    	json = json;
		    	console.log(json);
		    	var image = json.message;

			    var results = "";
				results += '<h2>Here are some cute ' + value + "s</h2>";
				//var y = x + 5;
				for (var x = 0 ; x < 5; x++) {
				 results += '<img src ="' + json.message[x] + '" />';
         //results += '<br><br>';
				}

				$("#userResults").html(results);

				console.log(json);


		    }




    	});



	});

});
