document.addEventListener('DOMContentLoaded', function(){ 

	document.getElementById('loadData').onclick=function(){
		

		var ajax =new XMLHttpRequest();
		var method= "GET";
		var url="../php/passengerData.php";
		var asynchronous = true ;

		ajax.open(method, url, asynchronous);

		ajax.send();

		ajax.onreadystatechange = function(){

			if(this.readyState==4 && this.status ==200 ){
				var data= JSON.parse(this.responseText);
				console.log(data);
				var html="";
				
					var name = data.name;
					var email = data.email;
					var phoneNumber = data.phoneNumber;
					var journeyHistory =data.journeyID;

					html += "<tr>";
						html += "<td>" + name + "</td>";
						html += "<td>" + email + "</td>";
						html += "<td>" + phoneNumber + "</td>";
						html += "<td>" + journeyHistory + "</td>"; 
					html += "</tr>";	
				

				document.getElementById("data").innerHTML= html;
				document.getElementById('dataTable').setAttribute("style","display:'';");
				document.getElementById('namePass').value=name;
				document.getElementById('emailPass').value=email;
				document.getElementById('phoneNumberPass').value=phoneNumber;
				
				}
			}
		}

		document.getElementById('editData').onclick=function(){
			document.getElementById('formEdit').setAttribute("style","display:' ';");
		}



		document.getElementById('logout').onclick=function(){
			location.href="logout.php";


		}








});