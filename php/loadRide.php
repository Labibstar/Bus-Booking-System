<?php

require 'connect.php';


$ticketNo=$_POST['ticketNo'];



$query="SELECT * FROM ride WHERE ticketNo = '$ticketNo' ";

$result=mysqli_query($conn,$query);


if($result){
$data=array();

while($row =mysqli_fetch_assoc($result)){

 		$data[] = $row;

 	}

 	echo json_encode($data);
}
else{
	echo "failed";
}

?>