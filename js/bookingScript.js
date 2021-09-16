document.addEventListener('DOMContentLoaded', function(){ 

	
	document.querySelector("#date").valueAsDate = new Date();

	


	//Showing Fares//

	document.getElementById("loadFare").onclick=function(){	
	var ajax = new XMLHttpRequest();
		var method= "GET";
		var url="../php/fares.php";
		var asynchronous = true ;

		ajax.open(method, url, asynchronous);

		ajax.send();
		

		ajax.onreadystatechange = function(){

			if(this.readyState==4 && this.status ==200 ){
				console.log(JSON.parse(this.responseText)); 
				var data= JSON.parse(this.responseText);
				
				var html="";
				for(var i=0;i<data.length;i++){
					var route = data[i].route;
					var schedule = data[i].schedule;
					var price = data[i].price;

					html += "<tr>";
						html += "<td>" + route + "</td>";
						html += "<td>" + schedule + "</td>";
						html += "<td>" + price + "</td>"; 
					html += "</tr>";	
				}

				document.getElementById("data").innerHTML= html;
				
				
			}
			else{
				console.log("error");

			}
			


	}
	document.getElementById("faretable").setAttribute("style","display:''; ");
	}

	//reset button //

	document.getElementById("resetbtn").onclick=function(){
	 location.href="booking.php";


	}
	

});