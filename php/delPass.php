<?php
		require 'connect.php';

		$id=$_POST['id'];
		

 		$query="DELETE FROM passenger WHERE id='$id'";
 		$result=mysqli_query($conn,$query);

 		if($result){
 			echo "success";
 		}
 		else{
 			echo "failed";
 		}

 	?>	