
//Function to handle the Posting
$(document).ready(function() {
	$("#postBtn").click(function() { 
		var username = $("#username").val();
		var content = $("#content").val();
		$.ajax({
			type: "POST",
			url: "http://localhost:8080/twitterlite-ws-1.0-SNAPSHOT/tweets",
			data: { 
				username: username,
				comment: content 
			},
			success: function(data, textStatus , xhr) {
				printMessage(data)
			}
		});
	});
});


/*
$(document).ready(function(){
  $("#postBtn").click(function(){
  
	var username = $("#username").val();
   var content = $("#content").val();
    $.post("http://localhost:8080/twitterlite-ws-1.0-SNAPSHOT/tweets",
    {
      username: username,
        comment: content  
},
	 function(data,status){
    alert("Data: " + data + "\nStatus: " + status);	
  });
});
});

/*,
    function(data,status){
      alert("Data: " + data + "\nStatus: " + status);
    }*/
	
	
//function to handle the 'show all messages' search	
$(document).ready(function() {
	$("#searchBtn").click(function() { 
		var offset = $("#offset").val();
		var limit = $("#limit").val();
		$.ajax({
			type: "GET",
			url: "http://localhost:8080/twitterlite-ws-1.0-SNAPSHOT/messages",
			data: { 
				offset: offset,
				limit: limit 
			},
			success: function(data, textStatus , xhr) {
				console.log(data);
				$.each(data, function(index) {
					printMessage(data[index]);
					console.log(data[index]);
				});
			}
		});
	});
});


//function to handle the 'mentions' search
$(document).ready(function() {
	$("#mentionsSearchBtn").click(function() { 
		var username = $("#mention").val();
		var offset = $("#offset").val();
		var limit = $("#limit").val();
		$.ajax({
			type: "GET",
			url: "http://localhost:8080/twitterlite-ws-1.0-SNAPSHOT/messages/mention",
			data: { 
				username:username,
				offset: offset,
				limit: limit 
			},
			success: function(data, textStatus , xhr) {
				console.log(data);
				$.each(data, function(index) {
					printMessage(data[index]);
					console.log(data[index]);
				});
			}
		});
	});
});

//function to handle the 'hashtags' search
$(document).ready(function() {
	$("#hashtagsSearchBtn").click(function() { 
		var hashtags = $("#hashtags").val();
		var offset = $("#offset").val();
		var limit = $("#limit").val();
		$.ajax({
			type: "GET",
			url: "http://localhost:8080/twitterlite-ws-1.0-SNAPSHOT/messages/hashtags",
			data: { 
				hashtags:hashtags,
				offset: offset,
				limit: limit 
			},
			success: function(data, textStatus , xhr) {
				console.log(data);
				$.each(data, function(index) {
					printMessage(data[index]);
					console.log(data[index]);
				});
			}
		});
	});
});




//Function that Prints a given message on screen
function printMessage(msg){
	var msgHeader = document.createElement("p");
	var content= document.createElement("p");
	var lineBreak= document.createElement("br");
    msgHeader.innerHTML = "<strong>" + msg.username +"</strong>" +"&nbsp &nbsp"  + "<i>" + msg.msgDate + "</i>" + "</br>"; 	
	$('.mainpanel').append(
		$('<div/>')
			.attr("class", "resultdiv")
			.append(msgHeader)
			.append(msg.content)
      
	);	
}
	
