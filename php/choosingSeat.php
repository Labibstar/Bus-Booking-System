<html>
<head>
	<title>Choose Your Seat</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, 
		shrink-to-fit=yes">
		
		 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
			
		 <link rel="stylesheet" type="text/css" href="../css/choosingStyle.css">
		
		  <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
		 <script src="../js/choosingScript.js?newversion"></script>  		
		 <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap" rel="stylesheet">	
</head>

<body class="bg-primary">
	<?php session_start()?>

	<script>
		$(document).ready(function(){
			$.ajax({
				type: "POST",
            url: "session.php",
            data: {},})
            .done(function(data){
            	
            	var data= JSON.parse(data);
            	console.log(data);
            	var name= data[0];
            	var ticketNo= data[1];
				var noOfPass=data[2]; 
				var destination=data[3];
				var travelTime=data[4];
				var date=data[5];           
            	document.getElementById('name').value=name;
            	document.getElementById('noOfPass').value=noOfPass;
 	           	document.getElementById('destination').value=destination;
            	document.getElementById('travelTime').value=travelTime;
            	document.getElementById('ticketNo').value=ticketNo;
            	document.getElementById('date').value=date;
            	document.getElementById('seat').max=noOfPass;
            	document.getElementById('seatLabel').innerHTML="Choose your "+noOfPass+" seat(s)";


            	
            })
         	.always(function(){
				var destination=$(".destination option:selected").val();

            	var travelTime=$(".travelTime option:selected ").val();

        
            	$.ajax({
				type: "POST",
	            url: "fareCalc.php",
    	        data: {destination: destination, travelTime: travelTime},
    	    	}).done(function(data){
    	    	
            	var data=JSON.parse(data);
            	
            	var layout = data[0].seatarrangement;
            	document.getElementById('layout').value=layout;
            	           	
            	if(layout=="2"){
            		document.getElementById("layout2").style.display="";
            		document.getElementById("layout1").style.display="none";
            		document.getElementById("h4").innerHTML="Bus 2";
					 }
            		});

			});

			});	

	</script>
	
	<nav class="nav  navbar justify-content-center" style=" background: #0D47A1 ;">
	<h3 align="center" style=" color:white ;">Choose Your Seats</h3>
	</nav>
	<div class="container-fluid">
		
		<div class="row">
		<div class="col-4">
			<div class="container" id="layout2" style="display: none">
			
			<div class="row justify-content-between seatRow">
				<div class="col-6">	
				<a href="#"  id="A12"><img src="../Images/seat.png">A1</a>
				<a href="#"  id="A22"><img src="../Images/seat.png">A2</a>
				</div>
				
			</div>		
			<div class="row justify-content-between seatRow">
				<div class="col-6">	
				<a href="#"  id="B12"><img src="../Images/seat.png">B1</a>
				<a href="#"  id="B22"><img src="../Images/seat.png">B2</a>
				</div>
				<div class="col-6 ">
				<a href="#"  id="B32" ><img src="../Images/seat.png">B3</a>
				<a href="#" id="B42"><img src="../Images/seat.png">B4</a>
				<a href="#" id="B52"><img src="../Images/seat.png">B5</a>
				</div>
			</div>
			<div class="row justify-content-between seatRow">
				<div class="col-6">	
				<a href="#"  id="C12"><img src="../Images/seat.png">C1</a>
				<a href="#"   id="C22"><img src="../Images/seat.png">C2</a>
				</div>
				<div class="col-6 ">
				<a href="#"   id="C32"><img src="../Images/seat.png">C3</a>
				<a href="#"   id="C42"><img src="../Images/seat.png">C4</a>
				<a href="#"   id="C52"><img src="../Images/seat.png">C5</a>
				</div>
			</div>
			<div class="row justify-content-between seatRow">
				<div class="col-6">	
				<a href="#"  id="D12"><img src="../Images/seat.png">D1</a>
				<a href="#"  id="D22"><img src="../Images/seat.png">D2</a>
				</div>
				<div class="col-6 ">
				<a href="#"  id="D32"><img src="../Images/seat.png">D3</a>
				<a href="#"  id="D42"><img src="../Images/seat.png">D4</a>
				<a href="#"  id="D52"><img src="../Images/seat.png">D5</a>
				</div>
			</div>
			<div class="row justify-content-between seatRow">
				<div class="col-6">	
				<a href="#"   id="E12"><img src="../Images/seat.png">E1</a>
				<a href="#"   id="E22"><img src="../Images/seat.png">E2</a>
				</div>
				<div class="col-6 ">
				<a href="#"  id="E32"><img src="../Images/seat.png">E3</a>
				<a href="#"   id="E42"><img src="../Images/seat.png">E4</a>
				<a href="#"  class="E5" id="E52"><img src="../Images/seat.png">E5</a>
				</div>
			</div>
			<div class="row justify-content-between seatRow">
				<div class="col-6">	
				<a href="#"   id="F12"><img src="../Images/seat.png">F1</a>
				<a href="#"   id="F22"><img src="../Images/seat.png">F2</a>
				</div>
				<div class="col-6 ">
				<a href="#"   id="F32"><img src="../Images/seat.png">F3</a>
				<a href="#"   id="F42"><img src="../Images/seat.png">F4</a>
				<a href="#"   id="F52"><img src="../Images/seat.png">F5</a>
				</div>
			</div>
			<div class="row justify-content-between seatRow" >
				<div class="col-6">	
				<a href="#"   id="G12"><img src="../Images/seat.png">G1</a>
				<a href="#"  id="G22"><img src="../Images/seat.png">G2</a>
				</div>
				<div class="col-6 ">
				<a href="#"  id="G32"><img src="../Images/seat.png">G3</a>
				<a href="#"  id="G42"><img src="../Images/seat.png">G4</a>
				<a href="#"  id="G52"><img src="../Images/seat.png">G5</a>
				</div>
			</div>
			<div class="row justify-content-between seatRow">
				<div class="col-6">	
				<a href="#"  id="H12"><img src="../Images/seat.png">H1</a>
				<a href="#"  id="H22"><img src="../Images/seat.png">H2</a>
				</div>
				<div class="col-6 ">
				<a href="#"  id="H32"><img src="../Images/seat.png">H3</a>
				<a href="#"  id="H42"><img src="../Images/seat.png">H4</a>
				<a href="#"  id="H52"><img src="../Images/seat.png">H5</a>
				</div>
			</div>
			</div>
		</div>	
		
		<div class="col-4">
		
			<h4 id='h4'>Bus 1<br></h4>
			<form class="form" method="post" action="seatConfirmed.php">
		
		<input type="date" class="form-control mb-2 date" id="date" name="date" value="" readonly>
		<input type="text" class="form-control mb-2 name" id="name" name="name" value="" readonly>
		<input type="text" class="form-control mb-2 ticketNo" id="ticketNo" name="ticketNo" value="" readonly>
		<input type="text" class="form-control mb-2 layout" id="layout" name="layout" value="" hidden>
		<input type="number" class="form-control mb-2 noOfPass" id="noOfPass" name="noOfPass" hidden>
		<select id="destination" class="form-control mb-2 destination" name="destination" disabled>
			<option value="Khulna">Khulna</option>
			<option value="Rangpur">Rangpur</option>
			<option value="Jessore">Jessore</option>
		</select>
		<select id="travelTime" class="form-control mb-2 travelTime" name="travelTime" disabled>
			<option value="Morning">Morning</option>
			<option value="Night">Night</option>
		</select>



		<div class="form-group">
		<label for="seat" id='seatLabel'></label>
		<input type="number" class="form-control mb-2 seat" id="seat" name="seat" max="" >

		<label for="seatName" id='seatnameLabel'></label>
		<input type="text" class="form-control mb-2 seatName" id="seatName" name="seatName" hidden>
		
		</div>
		<div class="form-group">
		
		<button type="submit" class="btn btn-success" id="confirmbtn">Confirm Seats</button>
		</div>
		<button type="button" class="btn btn-danger" id="goBackbtn">Go Back</button>
		</form>	
		</div>
		<div class="col-4">
			<div class="container" id="layout1">
			<div class="row justify-content-between seatRow">
				<div class="col-6">	
				<a href="#"  id="A1"><img src="../Images/seat.png">A1</a>
				<a href="#"  id="A2"><img src="../Images/seat.png">A2</a>
				</div>
				<div class="col-6 ">
				<a href="#"  id="A3"><img src="../Images/seat.png">A3</a>
				<a href="#"  id="A4"><img src="../Images/seat.png">A4</a>
				</div>
			</div>		
			<div class="row justify-content-between seatRow">
				<div class="col-6">	
				<a href="#"  id="B1"><img src="../Images/seat.png">B1</a>
				<a href="#"  id="B2"><img src="../Images/seat.png">B2</a>
				</div>
				<div class="col-6 ">
				<a href="#"  id="B3"><img src="../Images/seat.png">B3</a>
				<a href="#"  id="B4"><img src="../Images/seat.png">B4</a>
				</div>
			</div>	
			<div class="row justify-content-between seatRow">
				<div class="col-6">	
				<a href="#"  id="C1"><img src="../Images/seat.png">C1</a>
				<a href="#" id="C2"><img src="../Images/seat.png">C2</a>
				</div>
				<div class="col-6 ">
				<a href="#"  id="C3"><img src="../Images/seat.png">C3</a>
				<a href="#" id="C4"><img src="../Images/seat.png">C4</a>
				</div>
			</div>
			<div class="row justify-content-between seatRow">
				<div class="col-6">	
				<a href="#"  id="D1"><img src="../Images/seat.png">D1</a>
				<a href="#"  id="D2"><img src="../Images/seat.png">D2</a>
				</div>
				<div class="col-6 ">
				<a href="#" id="D3"><img src="../Images/seat.png">D3</a>
				<a href="#"  id="D4"><img src="../Images/seat.png">D4</a>
				</div>
			</div>	
			<div class="row justify-content-between seatRow">
				<div class="col-6">	
				<a href="#"  id="E1"><img src="../Images/seat.png">E1</a>
				<a href="#"  id="E2"><img src="../Images/seat.png">E2</a>
				</div>
				<div class="col-6 ">
				<a href="#" id="E3"><img src="../Images/seat.png">E3</a>
				<a href="#"  id="E4"><img src="../Images/seat.png">E4</a>
				</div>
			</div>
			<div class="row justify-content-between seatRow">
				<div class="col-6">	
				<a href="#"  id="F1"><img src="../Images/seat.png">F1</a>
				<a href="#"  id="F2"><img src="../Images/seat.png">F2</a>
				</div>
				<div class="col-6 ">
				<a href="#"  id="F3"><img src="../Images/seat.png">F3</a>
				<a href="#"  id="F4"><img src="../Images/seat.png">F4</a>
				</div>
			</div>	

			<div class="row justify-content-between seatRow" >
				<div class="col-6">	
				<a href="#"  id="G1"><img src="../Images/seat.png">G1</a>
				<a href="#" id="G2"><img src="../Images/seat.png">G2</a>
				</div>
				<div class="col-6 ">
				<a href="#"  id="G3"><img src="../Images/seat.png">G3</a>
				<a href="#"  id="G4"><img src="../Images/seat.png">G4</a>
				</div>
			</div>
			<div class="row justify-content-between seatRow">
				<div class="col-6">	
				<a href="#"  id="H1"><img src="../Images/seat.png">H1</a>
				<a href="#"  id="H2"><img src="../Images/seat.png">H2</a>
				</div>
				<div class="col-6 ">
				<a href="#"  id="H3"><img src="../Images/seat.png">H3</a>
				<a href="#"  id="H4"><img src="../Images/seat.png">H4</a>
				</div>
			</div>
			<div class="row justify-content-center seatRow" id="backseats">
					
				<a href="#"  id="I1"><img src="../Images/seat.png">I1</a>
				<a href="#"  id="I2"><img src="../Images/seat.png">I2</a>
				<a href="#"  id="I3"><img src="../Images/seat.png">I3</a>
				<a href="#"  id="I4"><img src="../Images/seat.png">I4</a>
				<a href="#"  id="I5"><img src="../Images/seat.png">I5</a>

				
			</div>
		</div>	
		</div>
		
			
			
	
	</div>
	</div>	
	<footer>
		<p id="copyright" align="center" style="margin-top: 1%; color: white;">DM &copy; 2020</p>
		
		</footer>	
</body>		



</html>		