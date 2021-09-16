<?php
	session_start();


$sessArr= Array();
	$sessArr[0]=$_SESSION['name'];
	$sessArr[1]= $_SESSION['ticketNo'];
	$sessArr[2]= $_SESSION['noOfPass'];
	$sessArr[3]= $_SESSION['destination'];
	$sessArr[4]= $_SESSION['travelTime'];
	$sessArr[5]=$_SESSION['date']; 


echo json_encode($sessArr);



?>