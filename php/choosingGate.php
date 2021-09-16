<html>
<head>
	<title>DhakaMetro Bus Booking</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, 
		shrink-to-fit=yes">
		
		 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
		
		<link rel="stylesheet" type="text/css" href="../css/styleGate.css">
		
		 
    	<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
  		<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap" rel="stylesheet">
  		
   		
</head>

<body class="bg-danger">
	


	
	<div class="container">
		<div class="row">
			<div class="col-4">
			<div class="container bg-warning" id="ticketBox">	
			<h2>Have A Ticket?</h2>
			<form class="form" method="post">
				<label for="enterTicket" id='enterTicketLabel' >Enter Ticket Number</label>
			<input type="text" class="form-control mb-2 enterTicket" id="enterTicket" name="enterTicket">
			<button type="submit" class="btn btn-primary enterTicketbtn" id="enterTicketbtn">Authorize</button>
			</form>	
		</div>
	</div>	
		<div class='col-4'>
			<div class="container bg-primary" id="masterBox">
			<h2  align='center'>Enter As Ticket Master</h2>
			<button type="button" class="btn btn-success enterTicketbtn" id="loginbtn">Login</button>
		</div>
	</div>
</div>
</div>
<script>
		document.getElementById('loginbtn').onclick= function(){
			location.href="login.php";
		}

	</script>	
<?php
		require "connect.php";
		session_start();

		
		if(isset($_POST['enterTicket'])){
		$ticketNo=$_POST['enterTicket'];

		$query="SELECT * FROM ride WHERE ticketNo='$ticketNo' ";
		$result=mysqli_query($conn,$query);
		
		$rows=mysqli_fetch_assoc($result);

		

			$_SESSION['name']=$rows['name'];
			$_SESSION["ticketNo"]= $rows['ticketNo'];
			$_SESSION["noOfPass"]= $rows['noOfPass'];
			$_SESSION["destination"]= $rows['destination'];
			$_SESSION["travelTime"]= $rows['travelTime'];
			$_SESSION["date"]= $rows['date'];


		if($result){
			echo "Authorized";
			header("location:choosingSeat.php");

		}
		else{
			echo "Sorry you can't choose seats if you haven't booked a ticket yet. Please go to the booking section";
		}


	}

	?>





</body>
<footer>
		<p id="copyright" align="center" style="margin-top: 1%; color: white;">DM &copy; 2020</p>
		
		</footer>	
</html>