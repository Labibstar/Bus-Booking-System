<html>
<head>
	<title>Book Your Tickets</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, 
		shrink-to-fit=yes">
		
		 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
			
		 <link rel="stylesheet" type="text/css" href="../css/styleBooking.css?newversion">
		
		 <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
		 <script src="../js/bookingScript.js?newversion"></script>  
		 <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap" rel="stylesheet">			
</head>	
<body class="bg-dark col-lg-12 col-md-12 col-12">
<nav class="nav navbar navbar-dark" id="navBar" >
		 <a href="../mainPage.html" class="navbar-brand">
       <img src="../Images/logo.png" style="width:50px ;height: auto;" alt="logo">
      </a>
    </nav> 



<?php session_start(); ?>	
	<script>

$(document).ready(function(){
    $("select.travelTime").change(function(){
        var selectedTime = $(".travelTime option:selected").val();
        var selectedDestination = $(".destination option:selected").val();
        $.ajax({
            type: "POST",
            url: "fareCalc.php",
            data: { travelTime: selectedTime, destination: selectedDestination } 
        }).done(function(data){
        	console.log(data);
        	var data= JSON.parse(data);


				var fare = data[0].price;
				var number= Number(document.getElementById("noOfPass").value);
				var total = fare*number;
            $("#fare").val(total);
        });
    });
     $("select.destination").change(function(){
        var selectedTime = $(".travelTime option:selected").val();
        var selectedDestination = $(".destination option:selected").val();
        $.ajax({
            type: "POST",
            url: "fareCalc.php",
            data: { travelTime: selectedTime, destination: selectedDestination } 
        }).done(function(data){
        	console.log(data);
        	var data= JSON.parse(data);


				var fare = data[0].price;
				var number= Number(document.getElementById("noOfPass").value);
				var total = fare*number;
            $("#fare").val(total);
        });
    });
      $("input.noOfPass").change(function(){
        var selectedTime = $(".travelTime option:selected").val();
        var selectedDestination = $(".destination option:selected").val();
        $.ajax({
            type: "POST",
            url: "fareCalc.php",
            data: { travelTime: selectedTime, destination: selectedDestination } 
        }).done(function(data){
        	console.log(data);
        	var data= JSON.parse(data);


				var fare = data[0].price;
				var number=  Number(document.getElementById("noOfPass").value);
				var total = fare*number;
            $("#fare").val(total);
        });
    });
});
</script>


	<div class="container-fluid">
		<h3 class="text-center text-light">Book Your Tickets</h3>
		<div class="row">
		<div class="col-12 col-lg-12 col-md-12 col-sm-12">
		
			
		<form class="form mx-auto w-50" method="post">
		
		<label class="text-light" for="date">Enter Date of Travel</label>
		<input type="date" class="form-control" id="date" name="date">
		<div class="form-group">
		<label class="text-light" for="namePass">Name of Customer</label>	
		<input text="text" class="form-control mb-2" id="namePass" name="namePass" required>	
		</div>

		
		
		
		
		<div class="form-group">
		<label class="text-light" for="email">Email</label>	
		<input text="email" class="form-control mb-2" id="email" name="email" required>	
		</div>
		
		<div class="form-group">
		<label class="text-light" for="phoneNumber">Phone Number</label>	
		<input text="number" class="form-control mb-2" id="phoneNumber" name="phoneNumber" required>	
		</div>

		<div class="form-group">
		<label class="text-light" for="destination">Destination</label>
		<select id="destination" class="form-control mb-2 destination" name="destination" placeholder="" required>
			<option value="Khulna">Khulna</option>
			<option value="Rangpur">Rangpur</option>
			<option value="Jessore">Jessore</option>
		</select>
		</div>
		<div class="form-group">
		<label class="text-light" for="noOfPass">Number of Passengers</label>	
		<input text="number" class="form-control mb-2 noOfPass" id="noOfPass" name="noOfPass" required>	
		</div>

		<div class="form-group">
		<label class="text-light" for="travelTime">Time of Travel</label>
		<select id="travelTime" class="form-control mb-2 travelTime" name="travelTime" required>
			<option value="Morning">Morning</option>
			<option value="Night">Night</option>
		</select>
		
		<label class="text-light" for="Seat">Total Fare</label>
		<input type="number" class="form-control mb-2" id="fare" name="fare">
		</div>
		
		<div class="form-group">
		
		
		<button type="submit" class="btn btn-primary" id="confirmbtn">Confirm Booking</button>
		</div>
		<button type="button" class="btn btn-success" id="resetbtn">Reset</button>
		</form>	
		</div>
		<div class="col-12 col-lg-12 col-md-12 col-sm-12 text-center">
			
		
			
			<button type="button" class="btn btn-secondary" id="loadFare">Check out our different Fares</button>
			<table class="table table-dark" id="faretable" style="display: none;">
				<thead>
					<tr>
						<th scope="col">Destination</th>
						<th scope="col">Schedule</th>
						<th scope="col">Price</th>
					</tr>
				</thead>
				<tbody id="data">
					
				</tbody>
			</table>	
	</div>
</div>
	

	<?php

	require 'connect.php';

		if($_SERVER['REQUEST_METHOD']=='POST'){
			$name=$_POST['namePass'];
			$email=$_POST['email'];
			$destination=$_POST['destination'];
			$phoneNumber=$_POST['phoneNumber'];
			$noOfPass=$_POST["noOfPass"];
			$travelTime=$_POST['travelTime'];
			$totalFare=$_POST['fare'];
			$ticketNo=rand(100,10000);
			$date=$_POST['date'];


			
		
			$query='INSERT INTO ride (name, email, destination, phoneNumber, noOfPass, travelTime, totalFare,ticketNo, date ) VALUES("'.$name.'","'.$email.'","'.$destination.'","'.$phoneNumber.'","'.$noOfPass.'","'.$travelTime.'","'.$totalFare.'","'.$ticketNo.'","'.$date.'")';
		
			$result=mysqli_query($conn , $query);
			
			$_SESSION["name"] = $name;
			$_SESSION["ticketNo"]= $ticketNo;
			$_SESSION["noOfPass"]= $noOfPass;
			$_SESSION["destination"]= $destination;
			$_SESSION["travelTime"]= $travelTime;
			$_SESSION["date"]= $date;
			

		?>	
 		<p align='center' class="text-light" autofocus >
 		<?php echo "Thank you for traveling with us ", $name,", Here's your ticket no:",$ticketNo," ";?><br>
 		<?php echo "Do you wanna choose your seats for the journey as well?"; ?><br>
 		<a href="../php/choosingSeat.php" ><button type="button" class="btn btn-success btn-lg">Choose Seats</button></a>
 		<a href="../mainPage.html" ><button type="button" class="btn btn-success btn-lg">Go Back</button></a>
		</p>
 	<?php  } ?>
 


	<footer>
		<p id="copyright" align="center" style=" color:white; margin-top: 1%;">DM &copy; 2020</p>
		
		</footer>
</body>
</html>