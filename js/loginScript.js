document.addEventListener('DOMContentLoaded', function() {

	document.getElementById("regTab").onclick=function(){
		document.getElementById("registration").setAttribute("style","display:''; ");
		document.getElementById("login").setAttribute("style","display: none; ");
		document.getElementById("regTab").setAttribute("class"," nav-link active");
		document.getElementById("loginTab").setAttribute("class"," nav-link");
	}

	document.getElementById("loginTab").onclick=function(){
		document.getElementById("registration").setAttribute("style","display: none; ");
		document.getElementById("login").setAttribute("style","display:''; ");	
		document.getElementById("regTab").setAttribute("class"," nav-link ");
		document.getElementById("loginTab").setAttribute("class"," nav-link active");
	}


		document.getElementById('confirmpasswordReg').addEventListener('change', function(){
			var temp=document.getElementById('passwordReg').value;
			if(temp!=document.getElementById('confirmpasswordReg').value){
				alert("password has to match");
			}
			
	});
	



});