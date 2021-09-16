<?php
		require 'connect.php';

		
		$name=$_POST['name'];
 		$email=$_POST['email'];
 		$phoneNumber=$_POST['phoneNumber'];
 		

 		$query="UPDATE passenger SET name='$name', email='$email' , phoneNumber='$phoneNumber' WHERE name='$name'";
 		$result=mysqli_query($conn,$query);

 		if($result){
 			echo "success";
 		}
 		else{
 			echo "failed";
 		}

 	?>	