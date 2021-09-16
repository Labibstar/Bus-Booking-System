<html>
<head>
	<title>Login Page</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, 
		shrink-to-fit=yes">
		
		 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
		
		<link rel="stylesheet" type="text/css" href="../css/styleLogin.css?newversion">
		
		 <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
		 <script src="../js/loginScript.js?newversion"></script>
		 <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap" rel="stylesheet">
 </head>   	
<body class="bg-dark col-12 col-lg-12 col-md-12">

	<nav class="nav navbar navbar-dark justify-content-start">
	<a href="../mainPage.html" class="navbar-brand">
     <img src="../Images/logo.png" style="width:70px ;height: auto;" alt="logo">
    </a>	
	</nav>


	<div class="container" >
	<div class="row">
	<div class="form">	
	
		<ul class="nav nav-tabs">
			<li class="nav-item"><a class="nav-link" id="regTab" href="#registration"><h4>Register</h4></a></li>
			<li class="nav-item"><a class="nav-link active" id="loginTab" href="#login"><h4>Login</h4></a></li>
		</ul>

		<div class="tab-content" >

		<div id="login" style="display: '' ; ">		
		<form method="Post" id="loginForm">	
		
		<div class="form-group">

			<label for="usernameBox" class="text-light">Enter email</label>		
			<input type="email" class="form-control" id="emailBox" autofocus placeholder="Enter Email" name="email" required>
		</div>
		
		
		<div class="form-group">		
				<label for="passwordBox" class="text-light">Enter Password</label>		
			<input type="password" class="form-control" id="passwordBox" autofocus placeholder="Enter Password" name="password" required>

		</div>
		<div class="form-group">
			<select class="form-control" name="usertype">
  		<option value="Passenger">Passenger</option>
  		<option value="Admin">Admin</option>
  		<option value="ticketmaster">Ticket Master</option>
		</select>
		</div>
		
		<button class="btn btn-success" type="submit" id="loginSubmit">Login</button>
		</form>
		</div>

		</div>

		<div class="tab-content">
		<div id="registration" style="display: none;">	
		<form method="Post" action="registration.php" id="registrationForm">
		<div class="field-wrap">
		<div class="form-group">
			<label for="name" class="text-light">Enter Name</label>
			<input type="text" class="form-control" name="nameReg" id="nameReg">
		</div>
		</div>
		
		<div class="form-group">
			<label for="emailReg" class="text-light">Enter Email</label>
			<input type="email" class="form-control" name="emailReg" id="emailReg" autofocus placeholder="example@email.com">
		</div>
	
		<div class="form-group">
			<label for="phoneNumber" class="text-light">Enter Phone Number</label>
			<input type="number" class="form-control" name="phoneNumberReg" id="phoneNumberReg" autofocus placeholder="+880XXXXXXXXXX">
		</div>
	
				
		<div class="form-group">
			<label for="passwordReg" class="text-light">Enter Password</label>
			<input type="password" class="form-control" name="passwordReg" id="passwordReg" required>
		</div>

		<div class="form-group">
			<label for="confirmpasswordReg" class="text-light">Confirm Password</label>
			<input type="password" class="form-control" name="confirmpasswordReg" id="confirmpasswordReg" required>
		</div>
		
		<button class="btn btn-success" type="submit" id="regSubmit">Register</button>
	</form>
	</div>
	</div>
	</div>
	</div>
	</div>

<?php

require 'connect.php';




if($_SERVER['REQUEST_METHOD']=='POST'){

if(isset($_POST['usertype'])){

$usertype=$_POST['usertype'];

if($usertype=='Passenger'){

	if(isset($_POST['email']) && isset($_POST['password'])){
		$email=mysqli_escape_string($conn,$_POST['email']);
		$password=mysqli_escape_string($conn,md5($_POST['password']));

		
		$query='SELECT * FROM passenger WHERE email="'.$email.'"';
		$result=mysqli_query($conn,$query);
		$rows=mysqli_fetch_assoc($result);


		if($rows['password']==$password){
			session_start();
			$_SESSION['name']=$rows['name'];
			$_SESSION['name']=$rows['name'];
			header("location: passenger.php");
		}
		else{
			echo"<script>alert('Unauthorised passenger Please Register'); </script" ;
		}
	
	}
}
else if($usertype=='Admin'){
	if(isset($_POST['email']) && isset($_POST['password'])){
	$email=mysqli_escape_string($conn,$_POST['email']);
	$password=mysqli_escape_string($conn,md5($_POST['password']));

	
	$query='SELECT * FROM admin';
	$result=mysqli_query($conn,$query);
	$rows=mysqli_fetch_assoc($result);

	
		
	if($rows['password']==$password){
		session_start();

		header("location: dashboard.php");
		}
	else {echo "<script>alert('Unauthorised User'); </script" ;}	
	
}

}
else{
	if(isset($_POST['email']) && isset($_POST['password'])){
	$email=mysqli_escape_string($conn,$_POST['email']);
	$password=mysqli_escape_string($conn,md5($_POST['password']));

	
	$query='SELECT * FROM ticketmaster';
	$result=mysqli_query($conn,$query);
	$rows=mysqli_fetch_assoc($result);

	
		
	if($rows['password']==$password){
		session_start();

		header("location: choosingSeatMaster.php");
		}
	else {echo "<script>alert('Unauthorised ticketmaster'); </script" ;}	

}
}
}
}


?>
	

</body>	
<footer>
		<p id="copyright" align="center" style="margin-top: 1%;">DM &copy; Copyright 2020</p>
		
		</footer>

</html>


