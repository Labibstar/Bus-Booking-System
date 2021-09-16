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

	$destination=$_SESSION['destination'];
	$travelTime=$_SESSION['travelTime'];
	$ticketNo=$_SESSION['ticketNo'];
	$date=$_SESSION['date'];
	
	$layout=$_POST["layout"];
	$seats=$_POST["seatName"];

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

<?php	if($result&&$result2){?>
		<p style="margin-left:35%; margin-top:15%;">
		<?php echo "You have successfully booked your seats for your journey.";?><br><?php echo "You will travel to ".$destination." on ".$date."." ?><br><?php echo "Your Ticket number is: ".$ticketNo.". Save this number for future reference." ;?><br>
 		<a href="../mainPage.html" ><button type="button" class="btn btn-success btn-lg">Go Home</button></a>
 
 		</p>
<?php	}
	else{ ?>
		<p style="margin-left:35%; margin-top:15%;">
	<?php	echo "Oh something happened so event failed";
	?>
	</p>
<?php	}
?>
	
</body>	
</html>

