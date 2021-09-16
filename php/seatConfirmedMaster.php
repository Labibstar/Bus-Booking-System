<html>
<head>
	<title>Congratulations</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, 
		shrink-to-fit=yes">
		
		 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
			
		
		  <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
		 
</head>	

<body>




<?php 
	require 'connect.php';
	session_start();

	if(isset($_POST["ticketNo"])){
	
	$date=$_POST['date'];
	$ticketNo=$_POST['ticketNo'];
	$name=$_POST['name'];
	$layout="1";
	$seats=$_POST["seatName"];
	$destination=$_POST['destination'];
	$travelTime=$_POST['travelTime'];
}
if(isset($_POST["ticketNo2"])){
	$destination=$_POST['destination2'];
	$travelTime=$_POST['travelTime2'];
	$date=$_POST['date2'];
	$ticketNo=$_POST['ticketNo2'];
	$name=$_POST['name2'];
	$layout="2";
	$seats=$_POST["seatName2"];
}

	

	if($layout=="1"){
		$array=str_split($seats,2);
	}
	else{
		$temp=str_split($seats,3);
		$countTemp=count($temp);
		$array= array();
		for($i=0; $i<$countTemp;$i++){
		$array[$i]=substr($temp[$i],0,2);
		}
	}
	
	
	$count=count($array);
	

	for($i=0; $i<$count;$i++){
	$var=''.$array[$i];
	$$var=$array[$i];

	$query="UPDATE schedule SET $var='Booked' WHERE route='$destination' AND travelTime='$travelTime' AND date='$date'";
	$result=mysqli_query($conn,$query);
	
	

	}

	$query2="UPDATE ride SET chosenSeat='$seats' WHERE ticketNo='$ticketNo' AND travelTime='$travelTime' AND date='$date'";
	$result2=mysqli_query($conn,$query2);
?>
<?php	if($result&&$result2){ ?>
		<p style="margin-left:35%; margin-top:15%;">
		<?php echo "You have successfully booked your seats for this passenger.";?><br><?php echo "They will travel to ".$destination." on ".$date."." ?><br><?php echo "Their Ticket number is: ".$ticketNo.". Show this number to the passenger so that they can save it for future reference." ;?><br>
 		<a href="choosingSeatMaster.php" ><button type="button" class="btn btn-success btn-lg">Go Back</button></a>
 		</p>
<?php 	}
	else{ ?>
		<p style="margin-left:35%; margin-top:15%;">
	<?php	echo "Oh something happened so event failed";
	?>
	</p>
<?php	}
?>
</body>
</html>

	



