<?php
		require 'connect.php';

		$id=$_POST['id'];
		$name=$_POST['name'];
 		$email=$_POST['email'];
 		$phoneNumber=$_POST['phoneNumber'];
 		$journeyId=$_POST['journeyId'];

 		$query="UPDATE passenger SET name='$name', email='$email' , phoneNumber='$phoneNumber' , journeyId='$journeyId' WHERE id='$id'";
 		$result=mysqli_query($conn,$query);

 		if($result){
 			echo "success";
 		}
 		else{
 			echo "failed";
 		}

 	?>	