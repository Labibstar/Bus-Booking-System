document.addEventListener('DOMContentLoaded', function() {
	
	document.getElementById('pgnrLoad').onclick=function(){
		

		var ajax =new XMLHttpRequest();
		var method= "GET";
		var url="../php/data.php";
		var asynchronous = true ;

		ajax.open(method, url, asynchronous);

		ajax.send();

		ajax.onreadystatechange = function(){

			if(this.readyState==4 && this.status ==200 ){
				var data= JSON.parse(this.responseText);
				console.log(data);
				var html="";
				for(var i=0;i<data.length;i++){
					var id = data[i].id;
					var name = data[i].name;
					var email = data[i].email;
					var phoneNumber = data[i].phoneNumber;
					var noOfJourneys=  data[i].journeyID;

					html += "<tr>";
						html += "<td>" + id + "</td>";
						html += "<td>" + name + "</td>";
						html += "<td>" + email + "</td>";
						html += "<td>" + phoneNumber + "</td>"; 
						html += "<td>" + noOfJourneys + "</td>";
					html += "</tr>";	
				}

				document.getElementById("data").innerHTML= html;

				}
			}
		}
		document.getElementById('editPass').onclick=function(){
		

		var ajax =new XMLHttpRequest();
		var method= "POST";
		var url="../php/editPass.php";
		var asynchronous = true ;

		ajax.open(method, url, asynchronous);

		ajax.send();

		ajax.onreadystatechange = function(){

			if(this.readyState==4 && this.status ==200 ){
				console.log(this.responseText);
			}
		}
	}




		document.getElementById('routeLoad').onclick=function(){
		

		var ajax =new XMLHttpRequest();
		var method= "GET";
		var url="../php/routeData.php";
		var asynchronous = true ;

		ajax.open(method, url, asynchronous);

		ajax.send();

		ajax.onreadystatechange = function(){

			if(this.readyState==4 && this.status ==200 ){
				var data= JSON.parse(this.responseText);

				var html="";
				for(var i=0;i<data.length;i++){
					var routeName = data[i].routename;
					var busesAssigned= data[i].bus;
					

					html += "<tr>";
						html += "<td>" + routeName + "</td>";
						html += "<td>" + busesAssigned + "</td>";
					html += "</tr>";	
				}

				document.getElementById("dataRoute").innerHTML= html;

				}
			}
		}
		document.getElementById('schLoad').onclick=function(){
		

		var ajax =new XMLHttpRequest();
		var method= "GET";
		var url="../php/scheduleData.php";
		var asynchronous = true ;

		ajax.open(method, url, asynchronous);

		ajax.send();

		ajax.onreadystatechange = function(){

			if(this.readyState==4 && this.status ==200 ){
				var data= JSON.parse(this.responseText);
				console.log(data);
				var html="";
				for(var i=0;i<data.length;i++){
					var date = data[i].date;
					var route= data[i].route;
					var travelTime= data[i].travelTime;
					var busno= data[i].busno;
					var seatarrangement= data[i].seatarrangement;
					

					html += "<tr>";
						html += "<td>" + date + "</td>";
						html += "<td>" + route + "</td>";
						html += "<td>" + travelTime + "</td>";
						html += "<td>" + busno + "</td>";
						html += "<td>" + seatarrangement + "</td>";
					html += "</tr>";	
				}

				document.getElementById("dataSchedule").innerHTML= html;

				}
			}
		}


		document.getElementById('logout').onclick=function(){
			location.href="logout.php";


		}

		document.getElementById("routeNav").onclick=function(){
		document.getElementById("routeBox").setAttribute("style","display:''; ");
		document.getElementById("passengerBox").setAttribute("style","display: none; ");
		document.getElementById("scheduleBox").setAttribute("style","display: none; ");
		document.getElementById("routeNav").setAttribute("class"," nav-link active");
		document.getElementById("passengerNav").setAttribute("class"," nav-link");
		document.getElementById("scheduleNav").setAttribute("class"," nav-link");
	}

	document.getElementById("scheduleNav").onclick=function(){
		document.getElementById("routeBox").setAttribute("style","display: none; ");
		document.getElementById("passengerBox").setAttribute("style","display: none; ");
		document.getElementById("scheduleBox").setAttribute("style","display:''; ");	
		document.getElementById("passengerNav").setAttribute("class"," nav-link ");
		document.getElementById("passengerNav").setAttribute("class"," nav-link");
		document.getElementById("scheduleNav").setAttribute("class"," nav-link active");
	}
		document.getElementById("passengerNav").onclick=function(){
		document.getElementById("passengerBox").setAttribute("style","display:''; ");
		document.getElementById("routeBox").setAttribute("style","display: none; ");
		document.getElementById("scheduleBox").setAttribute("style","display: none; ");
		document.getElementById("passengerNav").setAttribute("class"," nav-link active");
		document.getElementById("routeNav").setAttribute("class"," nav-link");
		document.getElementById("scheduleNav").setAttribute("class"," nav-link");
	}
	
	});













