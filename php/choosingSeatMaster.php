<html>
<head>
	<title>Choose Your Seat</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, 
		shrink-to-fit=yes">
		
		 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
			
		 <link rel="stylesheet" type="text/css" href="../css/choosingStyleMaster.css">
		
		  <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
		 <script src="../js/choosingScriptMaster.js?newversion"></script>  	
		 <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap" rel="stylesheet">		
</head>

<body class="bg-dark">
	<script>
		$(document).ready(function(){
    $("button.loadBusbtn").click(function(){
        var selectedTime = $(".selectTravelTime option:selected").val();
        var selectedRoute = $(".selectRoute option:selected").val();
        var selectedDate = $(".selectDate option:selected").val();
        $.ajax({
            type: "POST",
            url: "loadBus.php",
            data: { selectTravelTime: selectedTime, selectroute: selectedRoute, selectdate: selectedDate} 
        }).done(function(data){
        	
        	
        	var data= JSON.parse(data);
        		console.log(data);
        		var temp=document.getElementById("selectTravelTime").value;
        		var layout="";
        		if(temp=="Morning"){
        			layout="1";
        			document.getElementById('layout').value=layout;
        			showLayout1();
        			}
        			else{ 
        				layout="2";
        				document.getElementById('layout').value=layout;
        				showLayout2();
        			}
        		if(layout=="1")	{
        		for(var i=0;i<data.length;i++){
        			var seatid=data[i];
        			document.getElementById(seatid).setAttribute("style","Background: red; pointer-events:none;");

        		}
        		}
        		else{
        			for(var i=0;i<data.length;i++){
        			var seatid=data[i]+"2";
        			console.log(seatid);
        			document.getElementById(seatid).setAttribute("style","Background: red; pointer-events:none;");

        		}

        		}  		
					
    	    });
   		 });
    	 $("button.enterTicketbtn").click(function(){
    	 		var ticketNo=document.getElementById("enterTicket").value;
    	 		 $.ajax({
            type: "POST",
            url: "loadRide.php",
            data: { ticketNo: ticketNo} 
        }).done(function(data){

        	var data= JSON.parse(data);
        		console.log(data);
            	var temp=data[0].travelTime;
            	console.log(temp);
        		var layout="";
        		if(temp=="Morning"){
        			layout="1";
        			
        			showLayout1();
        			document.getElementById('name').value=data[0].name;
        			document.getElementById('destination').value=data[0].destination;
        			document.getElementById('travelTime').value=data[0].travelTime;
            		document.getElementById('date').value=data[0].date;
 	           		document.getElementById('noOfPass').value=data[0].noOfPass;
            		document.getElementById('ticketNo').value=data[0].ticketNo;
            		document.getElementById('seat').max=data[0].noOfPass;
            		document.getElementById('layout').value=layout;
        			}
        			else{ 
        				layout="2";
        				
        				showLayout2();
        				document.getElementById('name2').value=data[0].name;
        				document.getElementById('destination2').value=data[0].destination;
        				document.getElementById('travelTime2').value=data[0].travelTime;
            			document.getElementById('date2').value=data[0].date;
 	           			document.getElementById('noOfPass2').value=data[0].noOfPass;
            			document.getElementById('ticketNo2').value=data[0].ticketNo;
            			document.getElementById('seat').max=data[0].noOfPass;
            			document.getElementById('seat2').max=data[0].noOfPass;
            			document.getElementById('layout2').value=layout;
        			}





        });



    	 });
	});

	</script>	


	<nav class="nav navbar navbar-dark justify-content-between">
	<a href="../mainPage.html" class="navbar-brand">
     <img src="../Images/logo.png" style="width:70px ;height: auto;" alt="logo">
    </a>	
	<h3 class="text-light" align="center">Welcome Ticket Master</h3>
	<button type="button" class="btn btn-secondary" id="logout">Logout</button>
	</nav>
	<div class="container-fluid">
		<div class="row mb-4">
			<div class="col-lg-2 col-md-6 col-sm-12">
				<form class="form" method="post">
				<div class="form-group">
				<label for="selectRoute" id='selectRouteLabel' class="text-light">Select Route</label>	
				<select id="selectRoute" class="form-control mb-2 selectRoute" name="selectRoute">
					<option value="Khulna">Khulna</option>
					<option value="Rangpur">Rangpur</option>
					<option value="Jessore">Jessore</option>
				</select>
			</div>
			</div>	
			<div class="col-lg-2 col-md-6 col-sm-12">	
				<label for="selectTravelTime" id='selectTravelTimeLabel' class="text-light" >Select Travel Time</label>
				<select id="selectTravelTime" class="form-control mb-2 selectTravelTime" name="selectTravelTime">
					<option value="Morning">Morning</option>
					<option value="Night">Night</option>
				</select>
			</div>	
			<div class="col-lg-2 col-md-6 col-sm-12">	
				<label for="selectDate" id='selectDateLabel' class="text-light">Select Date</label>
				<select class="form-control mb-2 selectDate" id="selectDate" name="selectDate" name="selectDate">
					<option value="2020-10-01">2020-10-01</option>
					<option value="2020-10-02">2020-10-02</option>
					<option value="2020-10-03">2020-10-03</option>
				</select>	
			</div>		
			<div class="col-lg-2 col-md-6 col-sm-12" >		
				<button type="button" class="btn btn-danger loadBusbtn" id="loadBusbtn">Load Booked Data</button>
			</div>
					
				</form>
				
			<div class="col-lg-2 col-lg-2 col-md-12">
				<label for="enterTicket" id='enterTicketLabel' class="text-light">Enter Ticket No</label>
			<input type="text" class="form-control mb-2 enterTicket" id="enterTicket" name="enterTicket">
			</div>
			<div class="col-lg-2 col-lg-2 col-md-12">	
			<button type="button" class="btn btn-danger enterTicketbtn" id="enterTicketbtn">Load Passenger's ride Data</button>
			</div>
		</div>
			

		<div class="row justify-content-center" >		

		<ul class="nav nav-pills navbar justify-content-center">
			<li class="nav-item"><a class="nav-link active" id="lay1Tab" href="#layout1">Layout 1</a></li>
			<li class="nav-item"><a class="nav-link" id="lay2Tab" href="#layout2">Layout 2</a></li>
		</ul>

		</div>
	</div>
	
		</div>
	</div>	
		<div class="container" id="layout1">	
		<div class="row" id="rowL1">
			
			<div class="col-lg-3 col-md-6">
		
			<h4 id='h4'>Bus 1<br></h4>
			<form class="form" method="post" action="seatConfirmedMaster.php">
		
		<input type="date" class="form-control mb-2 date" id="date" name="date" value="" readonly>
		<input type="text" class="form-control mb-2 name" id="name" name="name" value="" readonly>
		<input type="text" class="form-control mb-2 ticketNo" id="ticketNo" name="ticketNo" value="" readonly>
		<input type="text" class="form-control mb-2 layout" id="layout" name="layout" value="" hidden>
		<input type="number" class="form-control mb-2 noOfPass" id="noOfPass" name="noOfPass" readonly>
		<input type="text" class="form-control mb-2 destination" id="destination" name="destination" readonly >
		<input type="text" id="travelTime" class="form-control mb-2 travelTime" name="travelTime" readonly>
		



		<div class="form-group">
		<label for="seat" id='seatLabel'></label>
		<input type="number" class="form-control mb-2 seat" id="seat" name="seat" max="" >

		<label for="seatName" id='seatnameLabel'></label>
		<input type="text" class="form-control mb-2 seatName" id="seatName" name="seatName" hidden>
		
		</div>
		<div class="form-group">
		
		<button type="submit" class="btn btn-primary" id="confirmbtn">Confirm Seats</button>
		</div>
		<button type="button" class="btn btn-success" id="goBackbtn">Go Back</button>
		</form>	
		</div>
		<div class="col-lg-8 col-md-9 col-sm-12">
			
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
	<div class="container" id="layout2" style="display:none;">
		<div class="row" id="rowL2">
			
			
			<div class="col-lg-3 col-md-6">
		
			<h4 id='h4'>Bus 2<br></h4>
			<form class="form" method="post" action="seatConfirmedMaster.php">
		
		<input type="date" class="form-control mb-2 date2" id="date2" name="date2" value="" readonly>
		<input type="text" class="form-control mb-2 name2" id="name2" name="name2" value="" readonly>
		<input type="text" class="form-control mb-2 ticketNo2" id="ticketNo2" name="ticketNo2" value="" readonly>
		<input type="text" class="form-control mb-2 layout2" id="layout2" name="layout2" value="" hidden>
		<input type="number" class="form-control mb-2 noOfPass2" id="noOfPass2" name="noOfPass2" disabled>
		<input type="text" class="form-control mb-2 destination2" id="destination2" name="destination2" readonly >
		<input type="text" id="travelTime2" class="form-control mb-2 travelTime2" name="travelTime2" readonly>

		



		<div class="form-group">
		<label for="seat2" id='seatLabel2'></label>
		<input type="number" class="form-control mb-2 seat2" id="seat2" name="seat2" max="" >

		<label for="seatName2" id='seatnameLabel2'></label>
		<input type="text" class="form-control mb-2 seatName2" id="seatName2" name="seatName2" hidden>

		
		</div>
		<div class="form-group">
		
		<button type="submit" class="btn btn-primary" id="confirmbtn2">Confirm Seats</button>
		</div>
		<button type="button" class="btn btn-success" id="goBackbtn2">Go Back</button>
		</form>	
		</div>
		<div class="col-lg-8  col-md-6 col-sm-12">
			
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
	</div>
	<div class="row mt-2" align='center'> 	
	<div class="col-lg-12 col-md-12 col-sm-12" >		
				<button type="button" class="btn btn-success resetbtn" id="resetbtn">Reset</button>
			</div>
	</div>		
	<footer>
		<p id="copyright" align="center" style="margin-top: 1%;">DM &copy; 2020</p>
		
		</footer>		
</body>	
</html>