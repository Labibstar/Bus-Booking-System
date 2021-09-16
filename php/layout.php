<?php require 'connect.php';

if(isset($_POST['destination']) &&  isset($_POST['travelTime'])){

	
	
	$travelTime=$_POST["travelTime"];
	$destination=$_POST["destination"];

	$query="SELECT * FROM bus WHERE route ='$destination' AND schedule='$travelTime' ";

	$result=mysqli_query($conn,$query);

	$data=array();
		
	while($row =mysqli_fetch_assoc($result)){

 		$data[] = $row;

 	}
	echo json_encode($data);
}
?>