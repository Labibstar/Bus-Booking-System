<?php
require 'connect.php';



	
	
	$travelTime=$_POST["selectTravelTime"];
	$route=$_POST["selectroute"];
	$date=$_POST["selectdate"];

	//$travelTime="Morning";
	//$route="Khulna";
	//$date="2020-10-01";


	$query="SELECT * FROM schedule WHERE route ='$route' AND travelTime='$travelTime' AND date='$date' ";

	$result=mysqli_query($conn,$query);

	$row=mysqli_fetch_assoc($result);

	$data=array_keys($row,"Booked");

	echo json_encode($data);


?>