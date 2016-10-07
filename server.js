$('.sidebar-controls').children()[1].click();

// Close the alert modal
setInterval(function(){
	try{
		$('.modal-footer.ng-scope').children()[0].click();
	}catch(err){

	}
},5000);

// Update location and upload to myJSON server
function updateJSON(x){
	$.ajax({
    		url:"https://api.myjson.com/bins/4x8qw",
    		type:"PUT",
    		data: x,
    		contentType:"application/json; charset=utf-8",
    		dataType:"json",
    		success: function(data, textStatus, jqXHR){
			console.log(x + " updated!");
    		}
	});
}

// Refresh for updated location
setInterval(function(){
	if($('.icon.icon-refresh')[1].parentNode.parentNode.parentNode.children[0].children[1].innerText == "Peerapat ADMIN"){
		if($('.family-members').children()[2].children[1].children[2].className == "ng-hide") {
			var text = $('.family-members').children()[2].children[1].children[1].innerText;
			console.log(text);
			var obj = {lat: parseFloat(text.split("\n")[0].substring(text.split("\n")[0].indexOf(" ")+1)), lng: parseFloat(text.split("\n")[1].substring(text.split("\n")[1].indexOf(" ")+1)), time: Date.now()};
			if(obj.lat > 13.730768 && obj.lat < 13.749580 && obj.lng > 100.521468 && obj.lng < 100.540452) {
				updateJSON(JSON.stringify(obj))
				console.log('updateJSON success');
			} else {
				console.log(JSON.stringify(obj) + " OUTSIDE CHULA!");
			}
			// updateJSON(JSON.stringify(obj))
			// console.log('updateJSON success');
			$('.icon.icon-refresh')[1].parentNode.click();
		}
	}else{
		console.log("error");
	}
},20000);

