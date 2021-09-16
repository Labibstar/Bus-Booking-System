<html>
<head>
	<title>Passenger Page</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, 
		shrink-to-fit=yes">
		
		 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
		<link rel="stylesheet" type="text/css" href="../css/stylePassenger.css">	
		 <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
		<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap" rel="stylesheet">
		  
		 <script src="../js/passengerScript.js"></script>  			
</head>	
<body>
	<?php session_start() ?>
	<script>
		$(document).ready(function(){

		$("button.editPass").click(function(){
        
        var name= $(".namePass").val();
        var email=$(".emailPass").val();
        var phoneNumber=$(".phoneNumberPass").val();
        
        $.ajax({
            type: "POST",
            url: "editPassbyPass.php",
            data: { name: name, email: email, phoneNumber: phoneNumber}
        }).done(function(data){
        	console.log(data);
        	var event = new Event('click');
			document.getElementById("loadData").dispatchEvent(event);

        	
        	
        });
    });
});
	</script>	

	<div class="nav navbar justify-content-between" id="navBar">
	<a href="../mainPage.html" class="navbar-brand">
     <img src="../Images/logo.png" style="width:70px ;height: auto;" alt="logo">
    </a>
	<button type="button" class="btn btn-secondary" id="logout">Logout</button>
	</div>	
	<div class="container-fluid">
		<div class="row">
		<div class="col-lg-4 col-md-12">
		<h3>Welcome <?php echo $_SESSION['name']; ?></h3>	
		<button type="button" class="btn btn-danger" id="loadData">Load Your Personal Data</button>
		<table class="table table-dark" id="dataTable" style="display:none">
				<thead>
					<tr>
						
						<th scope="col">Passenger Name</th>
						<th scope="col">Email</th>
						<th scope="col">Phone Number</th>
						<th scope="col">JourneyID</th>
					</tr>
				</thead>
				<tbody id="data">
					
				</tbody>
			</table>

		</div>
	</div>
	<div class="row">
		<div class='col-lg-4 col-md-12'>
			
			
			<button type="button" class="btn btn-primary editData" id="editData">Edit Data</button>
			<form class="form" method="post" id="formEdit" style="display:none;">
			
			<input type="text" class="form-control mb-2 namePass" id="namePass" name="namePass">
			<input type="text" class="form-control mb-2 emailPass" id="emailPass" name="emailPass">
			<input type="text" class="form-control mb-2 phoneNumberPass" id="phoneNumberPass" name="phoneNumberPass">
			
			<button type="button" class="btn btn-primary editPass " id="editPass">Confirm Data</button>
			</form>
			
		</div>
			
	</div>
</div>
<footer class="bg-dark">
		<p id="copyright" align="center" style="margin-top: 1%;">DM &copy; 2020</p>
		
		</footer>	
</body>
</html>		