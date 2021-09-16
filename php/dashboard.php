<html>
<head>
	<title>Dashboard</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, 
		shrink-to-fit=yes">
		
		 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
		
		<link rel="stylesheet" type="text/css" href="../css/styleDashboard.css?newversion">
		
		  <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
		 <script src="../js/dashboardScript.js?newversion"></script>
		 <script src="https://kit.fontawesome.com/295a050f98.js" crossorigin="anonymous"></script>
		 <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap" rel="stylesheet">
</head>   	

<body class="bg-dark">
	<script>
		$(document).ready(function(){
		
		$("input.passID").change(function(){
        var id = $(".passID").val();
        
        $.ajax({
            type: "POST",
            url: "loadPass.php",
            data: { id: id}
        }).done(function(data){
        	console.log(data);
        	var data= JSON.parse(data);
        	console.log(data);
        	document.getElementById("namePass").value=data[0].name;
        	document.getElementById("emailPass").value=data[0].email;
        	document.getElementById("phoneNumberPass").value=data[0].phoneNumber;
        	document.getElementById("JourneyIDPass").value=data[0].JourneyID;
        });
    });
		$("button.editPass").click(function(){
        var id = $(".passID").val();
        var name= $(".namePass").val();
        var email=$(".emailPass").val();
        var phoneNumber=$(".phoneNumberPass").val();
        var journeyId=$(".JourneyIDPass").val();
        $.ajax({
            type: "POST",
            url: "editPass.php",
            data: { id: id, name: name, email: email, phoneNumber: phoneNumber, journeyId: journeyId}
        }).done(function(data){
        	console.log(data);
        	var event = new Event('click');
			document.getElementById("pgnrLoad").dispatchEvent(event);

        	
        	
        });
    });
		$("button.deletePass").click(function(){
        var id = $(".passID").val();
        $.ajax({
            type: "POST",
            url: "delPass.php",
            data: { id: id}
        }).done(function(data){
        	console.log(data);
        	var event = new Event('click');
			document.getElementById("pgnrLoad").dispatchEvent(event);

        	
        	
        });
    });



	});

	</script>	





	<div class="nav navbar justify-content-between" id="navBar">
	<a href="../mainPage.html" class="navbar-brand">
     <img src="../Images/logo.png" style="width:70px ;height: auto;" alt="logo">
    </a>
	<h4 class="text-light">Welcome Admin</h4>
	<button type="button" class="btn btn-secondary" id="logout">Logout</button>
	</div>	
	<div class="nav-flex column" id="navcol">
		
			<a class="nav-link active" href="#" id="passengerNav"><i class="fas fa-user"></i> Passenger</a>
		
		
			<a class="nav-link" href="#" id="routeNav"><i class="fas fa-route"></i> Routes</a>
		
			<a class="nav-link" href="#" id="scheduleNav"><i class="fas fa-clipboard-list"></i> Schedules</a>
		
	</div>	



<div class="container-fluid " id="passengerBox">
	<div class="row">
		<div class="col-lg-4 col-md-12">
			<button class="btn btn-primary" id="pgnrLoad">Load Passenger Data</button>
			<table class="table table-dark">
				<thead>
					<tr>
						<th scope="col">ID</th>
						<th scope="col">Passenger Name</th>
						<th scope="col">Email</th>
						<th scope="col">Phone Number</th>
						<th scope="col">JourneyID</th>
					</tr>
				</thead>
				<tbody id="data">
					
				</tbody>
			</table>		
		</div>
		<div class="col-lg-4 col-md-12" style="margin-left: 25%;">
			<form class="form" method="post">
			<label for="passID" class="text-light">Enter Passenger ID</label>	
			<input type="number" class="form-control mb-2 passID" id="passID" name="passID">
			<input type="text" class="form-control mb-2 namePass" id="namePass" name="namePass">
			<input type="text" class="form-control mb-2 emailPass" id="emailPass" name="emailPass">
			<input type="text" class="form-control mb-2 phoneNumberPass" id="phoneNumberPass" name="phoneNumberPass">
			<input type="text" class="form-control mb-2 JourneyIDPass" id="JourneyIDPass" name="JourneyIDPass">	
			
			<button type="button" class="btn btn-primary editPass" id="editPass">Edit Passenger Data</button>
			
			<button type="button" class="btn btn-danger deletePass " id="deletePass">Delete Passenger</button>
		</form>
	</div>
	</div>
</div>

	<div class="container-fluid " id="routeBox" style="display:none;">
	<div class="row">
		<div class="col-4">
			<button class="btn btn-secondary" id="routeLoad">Load Route Data</button>
			<table class="table table-dark">
				<thead>
					<tr>
						
						<th scope="col">Route Name</th>
						<th scope="col">Buses Assigned</th>
						
					</tr>
				</thead>
				<tbody id="dataRoute">
					
				</tbody>
			</table>
		</div>
	</div>
	<div class="row">
		<div class="col-4">
			<form class="form" method="post">
			<div class="form-group">
				<select id="routeEdit" class="form-control mb-2 routeEdit" name="routeEdit">
					<option value="Jessore">Jessore</option>
					<option value="Khulna">Khulna</option>
					<option value="Rangpur">Rangpur</option>
				</select>
				</div>
			<div class="form-group">
				<select id="busEdit" class="form-control mb-2 busEdit" name="busEdit">
					<option value="bus1">bus1</option>
					<option value="bus2">bus2</option>
					<option value="bus3">bus3</option>
					<option value="bus4">bus4</option>
					<option value="bus5">bus5</option>
					<option value="bus6">bus6</option>
				</select>
				</div>
				<div class="form-group">
				<select id="busEdit2" class="form-control mb-2 busEdit2" name="busEdit2">
					<option value="bus1">bus1</option>
					<option value="bus2">bus2</option>
					<option value="bus3">bus3</option>
					<option value="bus4">bus4</option>
					<option value="bus5">bus5</option>
					<option value="bus6">bus6</option>
				</select>
				</div>
				<button type="submit" class="btn btn-secondary" id="editRoute">Edit Route Data</button>
			</form>
	</div>
</div>
</div>
<?php
		require 'connect.php';

		if($_SERVER['REQUEST_METHOD']=='POST'){
		
if(isset($_POST['routeEdit'])&& isset($_POST['busEdit'])){
			
			$route=$_POST['routeEdit'];
			$bus1=$_POST['busEdit'];
			$bus2=$_POST['busEdit2'];
			$bus=$bus1.",".$bus2;
			


			

			$query="UPDATE route SET bus='$bus' WHERE routename='$route' ";
		
			$result=mysqli_query($conn , $query);

			if($result){
				echo "successfully added route";
			}
			else{
				echo "failed";
			}
		}
		
	}
	?>	
				
	<div class="container-fluid " id="scheduleBox" style="display:none;">
	<div class="row">
		<div class="col-4">
			<button class="btn btn-danger" id="schLoad" class="text-light" >Load Schedules</button>
			<table class="table table-dark">
				<thead>
					<tr>
						
						<th scope="col">Date</th>
						<th scope="col">Route</th>
						<th scope="col">Travel Time</th>
						<th scope="col">Bus number</th>
						<th scope="col">Seat Arrangement Type</th>
					</tr>
				</thead>
				<tbody id="dataSchedule">
					
				</tbody>
			</table>		
		</div>
		<div class="col-4" style="margin-left: 5%;">	
			<form class="form" method="post">
				<div class="form-group">	
				<label for="date" id='dateLabel' class="text-light">Enter Date of Schedule</label>
				<input type="date" class="form-control mb-2 date" id="date" name="date">
				</div>
				<div class="form-group">
				<label for="route" id="routeLabel" class="text-light">Enter Route of Schedule</label>
				<input type="text" class="form-control mb-2 route" id="route" name="route">
				</div>
				<div class="form-group">
				<select id="travelTime" class="form-control mb-2 travelTime" name="travelTime">
					<option value="Morning">Morning</option>
					<option value="Night">Night</option>
				</select>
				</div>
				<div class="form-group">
				<label for="busno" id="busnoLabel" class="text-light">Choose bus no of Schedule</label>
				<select id="busno" class="form-control mb-2 busno" name="busno">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
				</select>
				</div>
				<div class="form-group">
				<label for="seatarrangement" id="eatarrangementLabel" class="text-light">Enter seat arrangement of Schedule</label>
				<input type="text" class="form-control mb-2 seatarrangement" id="seatarrangement" name="seatarrangement">
				<button type="submit" class="btn btn-danger" id="addSchbtn">Add Schedule</button>
				</div>
			</form>
		</div>
		</div>		
			<?php
		require 'connect.php';

		if($_SERVER['REQUEST_METHOD']=='POST'){
		
if(isset($_POST['date'])){
			$date=$_POST['date'];
			$route=$_POST['route'];
			$travelTime=$_POST['travelTime'];
			$busno=$_POST['busno'];
			$seatarrangement=$_POST['seatarrangement'];


			

			$query='INSERT INTO schedule (date, route, travelTime, busno, seatarrangement) VALUES("'.$date.'","'.$route.'","'.$travelTime.'","'.$busno.'","'.$seatarrangement.'")';
		
			$result=mysqli_query($conn , $query);

			if($result){
				echo "successfully added schedule";

			}
			else{
				echo "failed";
			}
		}

	}
	?>	
	
	</div>
		
	

</body>
</html>