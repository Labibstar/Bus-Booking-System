<?php
 require 'connect.php';

 session_start();

if($_SERVER['REQUEST_METHOD']=='POST'){
		
		
		
		$name=mysqli_escape_string($conn,$_POST['nameReg']);
		$email=mysqli_escape_string($conn,$_POST['emailReg']);	
		$phoneNumber=mysqli_escape_string($conn,$_POST['phoneNumberReg']);
		$password=mysqli_escape_string($conn,md5($_POST['passwordReg']));
		

		$checkQuery=mysqli_query('SELECT * FROM passenger WHERE email='.$email.'"');

		if($checkQuery->numb_rows > 0){
			$_SESSION['message']= 'User already exists!';
		}
		else{
		$query='INSERT INTO passenger (name, email, phoneNumber, password) VALUES("'.$name.'","'.$email.'","'.$phoneNumber.'","'.$password.'")';
		$result=mysqli_query($conn,$query);


		$_SESSION['name']=$_POST['nameReg'];
		$_SESSION['email']=$_POST['emailReg'];


		 header("location: passenger.php");
		 mysql_close($conn);
		}
	}
	


?>