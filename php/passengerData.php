<?php 
 	require 'connect.php';
 	session_start();

 	$name=$_SESSION['name'];

 	$query= "SELECT * FROM passenger WHERE name='$name'";
 	$result=mysqli_query($conn,$query);

 	$row =mysqli_fetch_assoc($result);

 	

 	echo json_encode($row);






?>