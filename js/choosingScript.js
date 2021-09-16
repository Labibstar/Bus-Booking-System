document.addEventListener('DOMContentLoaded', function(){ 


	//go back button //

	document.getElementById("goBackbtn").onclick=function(){
	location.href="booking.php";
	
	}


	
	document.getElementById('seat').addEventListener('change', function(){
			var max = document.getElementById('seat').max;
		var value=document.getElementById('seat').value;
		if(value>max){

			alert("Maximum no of seats chosen");
			document.getElementById('seat').value=max;
			location.href="choosingSeat.php";
						
			}
			
});
	
 
 




	

//counter variables for each seat //	
	
	var ca1=0; var ca2=0;	var ca3=0;	var ca4=0;	var cb1=0;	var cb2=0;	var cb3=0;
	var cb4=0;	var cc1=0;	var cc2=0;	var cc3=0;	var cc4=0;	var cd1=0;	var cd2=0;
	var cd3=0;	var cd4=0;	var ce1=0;	var ce2=0;  var ce3=0;   var ce4=0; var cf1=0; 
	var cf2=0;	var cf3=0; var cf4=0;	var cg1=0;  var cg2=0;  var cg3=0; var cg4=0; 
	var ch1=0; 	var ch2=0; var ch3=0; var ch4=0; var ci1=0; var ci2=0; var ci3=0; var ci4=0; var ci5=0;
	var cb5=0; var cc5=0; var cd5=0; var ce5=0; var cf5=0; var cg5=0; var ch5=0; 
	var c2a1=0;
// Repeating codes for each seat selection//
	
	

	document.getElementById("A1").onclick=function(){
	if(ca1==0){
	document.getElementById("A1").setAttribute("style", "background: green;");
	var id=document.getElementById("A1").id;
	let temp = Number(document.getElementById("seat").value);
	ca1++;
	document.getElementById("seat").value=parseInt(temp+ca1);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	var event = new Event('change');
	document.getElementById("seatName").dispatchEvent(event);

	}
	else{
		document.getElementById("A1").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-ca1);
		ca1--;

		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-2);
		document.getElementById("seatName").value=temp3;
		
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	var event = new Event('change');
	document.getElementById("seatName").dispatchEvent(event);
	}
	}


	document.getElementById("A2").onclick=function(){
	if(ca2==0){
	document.getElementById("A2").setAttribute("style", "background: green;");
	var id=document.getElementById("A2").id;
	let temp = Number(document.getElementById("seat").value);
	ca2++;
	document.getElementById("seat").value=parseInt(temp+ca2);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else {
	document.getElementById("seatName").value=temp1+id;		
	}

	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	
	}
	
	else{
		document.getElementById("A2").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-ca2);
		ca2--;
		
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-2);
		document.getElementById("seatName").value=temp3;
		
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	
	}
	}
	document.getElementById("A3").onclick=function(){
	if(ca3==0){
	document.getElementById("A3").setAttribute("style", "background: green;");
	var id=document.getElementById('A3').id;
	let temp = Number(document.getElementById("seat").value);
	ca3++;
	document.getElementById("seat").value=parseInt(temp+ca3);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("A3").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-ca3);
		ca3--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-2);
		document.getElementById("seatName").value=temp3;
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	}
	document.getElementById("A4").onclick=function(){
	if(ca4==0){
	document.getElementById("A4").setAttribute("style", "background: green;");
	var id=document.getElementById('A4').id;
	let temp = Number(document.getElementById("seat").value);
	ca4++;
	document.getElementById("seat").value=parseInt(temp+ca4);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("A4").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-ca4);
		ca4--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-2);
		document.getElementById("seatName").value=temp3;
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	}
	document.getElementById("B1").onclick=function(){
	if(cb1==0){
	document.getElementById("B1").setAttribute("style", "background: green;");
	var id=document.getElementById('B1').id;
	let temp = Number(document.getElementById("seat").value);
	cb1++;
	document.getElementById("seat").value=parseInt(temp+cb1);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("B1").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-cb1);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		cb1--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-2);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("B2").onclick=function(){
	if(cb2==0){
	document.getElementById("B2").setAttribute("style", "background: green;");
	var id=document.getElementById('B2').id;
	let temp = Number(document.getElementById("seat").value);
	cb2++;
	document.getElementById("seat").value=parseInt(temp+cb2);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("B2").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-cb2);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		cb2--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-2);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("B3").onclick=function(){
	if(cb3==0){
	document.getElementById("B3").setAttribute("style", "background: green;");
	var id=document.getElementById('B3').id;
	let temp = Number(document.getElementById("seat").value);
	cb3++;
	document.getElementById("seat").value=parseInt(temp+cb3);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("B3").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-cb3);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		cb3--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-2);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("B4").onclick=function(){
	if(cb4==0){
	document.getElementById("B4").setAttribute("style", "background: green;");
	var id=document.getElementById('B4').id;
	let temp = Number(document.getElementById("seat").value);
	cb4++;
	document.getElementById("seat").value=parseInt(temp+cb4);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("B4").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-cb4);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		cb4--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-2);
		document.getElementById("seatName").value=temp3;
	}
	}
	
	document.getElementById("C1").onclick=function(){
	if(cc1==0){
	document.getElementById("C1").setAttribute("style", "background: green;");
	var id=document.getElementById('C1').id;
	let temp = Number(document.getElementById("seat").value);
	cc1++;
	document.getElementById("seat").value=parseInt(temp+cc1);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("C1").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-cc1);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		cc1--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-2);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("C2").onclick=function(){
	if(cc2==0){
	document.getElementById("C2").setAttribute("style", "background: green;");
	var id=document.getElementById('C2').id;
	let temp = Number(document.getElementById("seat").value);
	cc2++;
	document.getElementById("seat").value=parseInt(temp+cc2);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("C2").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-cc2);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		cc2--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-2);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("C3").onclick=function(){
	if(cc3==0){
	document.getElementById("C3").setAttribute("style", "background: green;");
	var id=document.getElementById('C3').id;
	let temp = Number(document.getElementById("seat").value);
	cc3++;
	document.getElementById("seat").value=parseInt(temp+cc3);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("C3").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-cc3);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		cc3--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-2);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("C4").onclick=function(){
	if(cc4==0){
	document.getElementById("C4").setAttribute("style", "background: green;");
	var id=document.getElementById('C4').id;
	let temp = Number(document.getElementById("seat").value);
	cc4++;
	document.getElementById("seat").value=parseInt(temp+cc4);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("C4").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-cc4);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		cc4--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-2);
		document.getElementById("seatName").value=temp3;
	}
	}
	
	document.getElementById("D1").onclick=function(){
	if(cd1==0){
	document.getElementById("D1").setAttribute("style", "background: green;");
	var id=document.getElementById('D1').id;
	let temp = Number(document.getElementById("seat").value);
	cd1++;
	document.getElementById("seat").value=parseInt(temp+cd1);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("D1").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-cd1);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		cd1--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-2);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("D2").onclick=function(){
	if(cd2==0){
	document.getElementById("D2").setAttribute("style", "background: green;");
	var id=document.getElementById('D2').id;
	let temp = Number(document.getElementById("seat").value);
	cd2++;
	document.getElementById("seat").value=parseInt(temp+cd2);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("D2").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-cd2);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		cd2--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-2);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("D3").onclick=function(){
	if(cd3==0){
	document.getElementById("D3").setAttribute("style", "background: green;");
	var id=document.getElementById('D3').id;
	let temp = Number(document.getElementById("seat").value);
	cd3++;
	document.getElementById("seat").value=parseInt(temp+cd3);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("D3").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-cd3);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		cd3--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-2);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("D4").onclick=function(){
	if(cd4==0){
	document.getElementById("D4").setAttribute("style", "background: green;");
	var id=document.getElementById('D4').id;
	let temp = Number(document.getElementById("seat").value);
	cd4++;
	document.getElementById("seat").value=parseInt(temp+cd4);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("D4").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-cd4);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		cd4--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-2);
		document.getElementById("seatName").value=temp3;
	}
	}
	
	document.getElementById("E1").onclick=function(){
	if(ce1==0){
	document.getElementById("E1").setAttribute("style", "background: green;");
	var id=document.getElementById('E1').id;
	let temp = Number(document.getElementById("seat").value);
	ce1++;
	document.getElementById("seat").value=parseInt(temp+ce1);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("E1").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-ce1);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		ce1--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-2);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("E2").onclick=function(){
	if(ce2==0){
	document.getElementById("E2").setAttribute("style", "background: green;");
	var id=document.getElementById('E2').id;
	let temp = Number(document.getElementById("seat").value);
	ce2++;
	document.getElementById("seat").value=parseInt(temp+ce2);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("E2").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-ce2);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		ce2--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-2);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("E3").onclick=function(){
	if(ce3==0){
	document.getElementById("E3").setAttribute("style", "background: green;");
	var id=document.getElementById('E3').id;
	let temp = Number(document.getElementById("seat").value);
	ce3++;
	document.getElementById("seat").value=parseInt(temp+ce3);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("E3").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-ce3);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		ce3--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-2);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("E4").onclick=function(){
	if(ce4==0){
	document.getElementById("E4").setAttribute("style", "background: green;");
	var id=document.getElementById('E4').id;
	let temp = Number(document.getElementById("seat").value);
	ce4++;
	document.getElementById("seat").value=parseInt(temp+ce4);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("E4").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-ce4);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		ce4--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-2);
		document.getElementById("seatName").value=temp3;
	}
	}
	
	document.getElementById("F1").onclick=function(){
	if(cf1==0){
	document.getElementById("F1").setAttribute("style", "background: green;");
	var id=document.getElementById('F1').id;
	let temp = Number(document.getElementById("seat").value);
	cf1++;
	document.getElementById("seat").value=parseInt(temp+cf1);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("F1").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-cf1);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		cf1--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-2);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("F2").onclick=function(){
	if(cf2==0){
	document.getElementById("F2").setAttribute("style", "background: green;");
	var id=document.getElementById('F2').id;
	let temp = Number(document.getElementById("seat").value);
	cf2++;
	document.getElementById("seat").value=parseInt(temp+cf2);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("F2").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-cf2);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		cf2--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-2);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("F3").onclick=function(){
	if(cf3==0){
	document.getElementById("F3").setAttribute("style", "background: green;");
	var id=document.getElementById('F3').id;
	let temp = Number(document.getElementById("seat").value);
	cf3++;
	document.getElementById("seat").value=parseInt(temp+cf3);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("F3").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-cf3);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		cf3--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-2);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("F4").onclick=function(){
	if(cf4==0){
	document.getElementById("F4").setAttribute("style", "background: green;");
	var id=document.getElementById('F4').id;
	let temp = Number(document.getElementById("seat").value);
	cf4++;
	document.getElementById("seat").value=parseInt(temp+cf4);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("F4").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-cf4);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		cf4--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-2);
		document.getElementById("seatName").value=temp3;
	}
	}
	
	document.getElementById("G1").onclick=function(){
	if(cg1==0){
	document.getElementById("G1").setAttribute("style", "background: green;");
	var id=document.getElementById('G1').id;
	let temp = Number(document.getElementById("seat").value);
	cg1++;
	document.getElementById("seat").value=parseInt(temp+cg1);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("G1").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-cg1);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		cg1--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-2);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("G2").onclick=function(){
	if(cg2==0){
	document.getElementById("G2").setAttribute("style", "background: green;");
	var id=document.getElementById('G2').id;
	let temp = Number(document.getElementById("seat").value);
	cg2++;
	document.getElementById("seat").value=parseInt(temp+cg2);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("G2").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-cg2);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		cg2--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-2);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("G3").onclick=function(){
	if(cg3==0){
	document.getElementById("G3").setAttribute("style", "background: green;");
	var id=document.getElementById('G3').id;
	let temp = Number(document.getElementById("seat").value);
	cg3++;
	document.getElementById("seat").value=parseInt(temp+cg3);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("G3").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-cg3);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		cg3--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-2);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("G4").onclick=function(){
	if(cg4==0){
	document.getElementById("G4").setAttribute("style", "background: green;");
	var id=document.getElementById('G4').id;
	let temp = Number(document.getElementById("seat").value);
	cg4++;
	document.getElementById("seat").value=parseInt(temp+cg4);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("G4").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-cg4);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		cg4--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-2);
		document.getElementById("seatName").value=temp3;
	}
	}
	
	document.getElementById("H1").onclick=function(){
	if(ch1==0){
	document.getElementById("H1").setAttribute("style", "background: green;");
	var id=document.getElementById('H1').id;
	let temp = Number(document.getElementById("seat").value);
	ch1++;
	document.getElementById("seat").value=parseInt(temp+ch1);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("H1").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-ch1);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		ch1--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-2);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("H2").onclick=function(){
	if(ch2==0){
	document.getElementById("H2").setAttribute("style", "background: green;");
	var id=document.getElementById('H2').id;
	let temp = Number(document.getElementById("seat").value);
	ch2++;
	document.getElementById("seat").value=parseInt(temp+ch2);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("H2").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-ch2);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		ch2--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-2);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("H3").onclick=function(){
	if(ch3==0){
	document.getElementById("H3").setAttribute("style", "background: green;");
	var id=document.getElementById('H3').id;
	let temp = Number(document.getElementById("seat").value);
	ch3++;
	document.getElementById("seat").value=parseInt(temp+ch3);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("H3").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-ch3);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		ch3--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-2);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("H4").onclick=function(){
	if(ch4==0){
	document.getElementById("H4").setAttribute("style", "background: green;");
	var id=document.getElementById('H4').id;
	let temp = Number(document.getElementById("seat").value);
	ch4++;
	document.getElementById("seat").value=parseInt(temp+ch4);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("H4").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-ch4);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		ch4--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-2);
		document.getElementById("seatName").value=temp3;
	}
	}
	
	document.getElementById("I1").onclick=function(){
	if(ci1==0){
	document.getElementById("I1").setAttribute("style", "background: green;");
	var id=document.getElementById('I1').id;
	let temp = Number(document.getElementById("seat").value);
	ci1++;
	document.getElementById("seat").value=parseInt(temp+ci1);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("I1").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-ci1);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		ci1--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-2);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("I2").onclick=function(){
	if(ci2==0){
	document.getElementById("I2").setAttribute("style", "background: green;");
	var id=document.getElementById('I2').id;
	let temp = Number(document.getElementById("seat").value);
	ci2++;
	document.getElementById("seat").value=parseInt(temp+ci2);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("I2").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-ci2);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		ci2--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-2);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("I3").onclick=function(){
	if(ci3==0){
	document.getElementById("I3").setAttribute("style", "background: green;");
	var id=document.getElementById('I3').id;
	let temp = Number(document.getElementById("seat").value);
	ci3++;
	document.getElementById("seat").value=parseInt(temp+ci3);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("I3").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-ci3);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		ci3--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-2);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("I4").onclick=function(){
	if(ci4==0){
	document.getElementById("I4").setAttribute("style", "background: green;");
	var id=document.getElementById('I4').id;
	let temp = Number(document.getElementById("seat").value);
	ci4++;
	document.getElementById("seat").value=parseInt(temp+ci4);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("I4").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-ci4);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		ci4--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-2);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("I5").onclick=function(){
	if(ci5==0){
	document.getElementById("I5").setAttribute("style", "background: green;");
	var id=document.getElementById('I5').id;
	let temp = Number(document.getElementById("seat").value);
	ci5++;
	document.getElementById("seat").value=parseInt(temp+ci5);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("I5").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-ci5);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		ci5--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-2);
		document.getElementById("seatName").value=temp3;
	}
	}
document.getElementById("A12").onclick=function(){
	if(ca1==0){
	document.getElementById("A12").setAttribute("style", "background: green;");
	var id=document.getElementById('A12').id;
	let temp = Number(document.getElementById("seat").value);
	ca1++;
	document.getElementById("seat").value=parseInt(temp+ca1);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("A12").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-ca1);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		ca1--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-3);
		document.getElementById("seatName").value=temp3;
	}
	}

	document.getElementById("A22").onclick=function(){
	if(ca2==0){
	document.getElementById("A22").setAttribute("style", "background: green;");
	var id=document.getElementById('A22').id;
	let temp = Number(document.getElementById("seat").value);
	ca2++;
	document.getElementById("seat").value=parseInt(temp+ca2);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("A22").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-ca2);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		ca2--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-3);
		document.getElementById("seatName").value=temp3;
	}
	}
	
	document.getElementById("B12").onclick=function(){
	if(cb1==0){
	document.getElementById("B12").setAttribute("style", "background: green;");
	var id=document.getElementById('B12').id;
	let temp = Number(document.getElementById("seat").value);
	cb1++;
	document.getElementById("seat").value=parseInt(temp+cb1);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("B12").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-cb1);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		cb1--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-3);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("B22").onclick=function(){
	if(cb2==0){
	document.getElementById("B22").setAttribute("style", "background: green;");
	var id=document.getElementById('B22').id;
	let temp = Number(document.getElementById("seat").value);
	cb2++;
	document.getElementById("seat").value=parseInt(temp+cb2);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("B22").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-cb2);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		cb2--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-3);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("B32").onclick=function(){
	if(cb3==0){
	document.getElementById("B32").setAttribute("style", "background: green;");
	var id=document.getElementById('B32').id;
	let temp = Number(document.getElementById("seat").value);
	cb3++;
	document.getElementById("seat").value=parseInt(temp+cb3);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("B32").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-cb3);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		cb3--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-3);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("B42").onclick=function(){
	if(cb4==0){
	document.getElementById("B42").setAttribute("style", "background: green;");
	var id=document.getElementById('B42').id;
	let temp = Number(document.getElementById("seat").value);
	cb4++;
	document.getElementById("seat").value=parseInt(temp+cb4);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("B42").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-cb4);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		cb4--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-3);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("B52").onclick=function(){
	if(cb5==0){
	document.getElementById("B52").setAttribute("style", "background: green;");
	var id=document.getElementById('B52').id;
	let temp = Number(document.getElementById("seat").value);
	cb5++;
	document.getElementById("seat").value=parseInt(temp+cb5);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("B52").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-cb5);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		cb5--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-3);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("C12").onclick=function(){
	if(cc1==0){
	document.getElementById("C12").setAttribute("style", "background: green;");
	var id=document.getElementById('C12').id;
	let temp = Number(document.getElementById("seat").value);
	cc1++;
	document.getElementById("seat").value=parseInt(temp+cc1);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("C12").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-cc1);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		cc1--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-3);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("C22").onclick=function(){
	if(cc2==0){
	document.getElementById("C22").setAttribute("style", "background: green;");
	var id=document.getElementById('C22').id;
	let temp = Number(document.getElementById("seat").value);
	cc2++;
	document.getElementById("seat").value=parseInt(temp+cc2);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("C22").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-cc2);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		cc2--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-3);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("C32").onclick=function(){
	if(cc3==0){
	document.getElementById("C32").setAttribute("style", "background: green;");
	var id=document.getElementById('C32').id;
	let temp = Number(document.getElementById("seat").value);
	cc3++;
	document.getElementById("seat").value=parseInt(temp+cc3);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("C32").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-cc3);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		cc3--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-3);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("C42").onclick=function(){
	if(cc4==0){
	document.getElementById("C42").setAttribute("style", "background: green;");
	var id=document.getElementById('C42').id;
	let temp = Number(document.getElementById("seat").value);
	cc4++;
	document.getElementById("seat").value=parseInt(temp+cc4);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("C42").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-cc4);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		cc4--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-3);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("C52").onclick=function(){
	if(cc5==0){
	document.getElementById("C52").setAttribute("style", "background: green;");
	var id=document.getElementById('C52').id;
	let temp = Number(document.getElementById("seat").value);
	cc5++;
	document.getElementById("seat").value=parseInt(temp+cc5);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("C52").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-cc5);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		cc5--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-3);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("D12").onclick=function(){
	if(cd1==0){
	document.getElementById("D12").setAttribute("style", "background: green;");
	var id=document.getElementById('D12').id;
	let temp = Number(document.getElementById("seat").value);
	cd1++;
	document.getElementById("seat").value=parseInt(temp+cd1);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("D12").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-cd1);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		cd1--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-3);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("D22").onclick=function(){
	if(cd2==0){
	document.getElementById("D22").setAttribute("style", "background: green;");
	var id=document.getElementById('D22').id;
	let temp = Number(document.getElementById("seat").value);
	cd2++;
	document.getElementById("seat").value=parseInt(temp+cd2);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("D22").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-cd2);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		cd2--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-3);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("D32").onclick=function(){
	if(cd3==0){
	document.getElementById("D32").setAttribute("style", "background: green;");
	var id=document.getElementById('D32').id;
	let temp = Number(document.getElementById("seat").value);
	cd3++;
	document.getElementById("seat").value=parseInt(temp+cd3);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("D32").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-cd3);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		cd3--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-3);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("D42").onclick=function(){
	if(cd4==0){
	document.getElementById("D42").setAttribute("style", "background: green;");
	var id=document.getElementById('D42').id;
	let temp = Number(document.getElementById("seat").value);
	cd4++;
	document.getElementById("seat").value=parseInt(temp+cd4);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("D42").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-cd4);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		cd4--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-3);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("D52").onclick=function(){
	if(cd5==0){
	document.getElementById("D52").setAttribute("style", "background: green;");
	var id=document.getElementById('D52').id;
	let temp = Number(document.getElementById("seat").value);
	cd5++;
	document.getElementById("seat").value=parseInt(temp+cd5);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("D52").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-cd5);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		cd5--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-3);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("E12").onclick=function(){
	if(ce1==0){
	document.getElementById("E12").setAttribute("style", "background: green;");
	var id=document.getElementById('E12').id;
	let temp = Number(document.getElementById("seat").value);
	ce1++;
	document.getElementById("seat").value=parseInt(temp+ce1);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("E12").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-ce1);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		ce1--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-3);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("E22").onclick=function(){
	if(ce2==0){
	document.getElementById("E22").setAttribute("style", "background: green;");
	var id=document.getElementById('E22').id;
	let temp = Number(document.getElementById("seat").value);
	ce2++;
	document.getElementById("seat").value=parseInt(temp+ce2);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("E22").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-ce2);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		ce2--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-3);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("E32").onclick=function(){
	if(ce3==0){
	document.getElementById("E32").setAttribute("style", "background: green;");
	var id=document.getElementById('E32').id;
	let temp = Number(document.getElementById("seat").value);
	ce3++;
	document.getElementById("seat").value=parseInt(temp+ce3);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("E32").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-ce3);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		ce3--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-3);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("E42").onclick=function(){
	if(ce4==0){
	document.getElementById("E42").setAttribute("style", "background: green;");
	var id=document.getElementById('E42').id;
	let temp = Number(document.getElementById("seat").value);
	ce4++;
	document.getElementById("seat").value=parseInt(temp+ce4);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("E42").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-ce4);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		ce4--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-3);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("E52").onclick=function(){
	if(ce5==0){
	document.getElementById("E52").setAttribute("style", "background: green;");
	var id=document.getElementById('E52').id;
	let temp = Number(document.getElementById("seat").value);
	ce5++;
	document.getElementById("seat").value=parseInt(temp+ce5);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("E52").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-ce5);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		ce5--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-3);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("F12").onclick=function(){
	if(cf1==0){
	document.getElementById("F12").setAttribute("style", "background: green;");
	var id=document.getElementById('F12').id;
	let temp = Number(document.getElementById("seat").value);
	cf1++;
	document.getElementById("seat").value=parseInt(temp+cf1);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("F12").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-cf1);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		cf1--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-3);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("F22").onclick=function(){
	if(cf2==0){
	document.getElementById("F22").setAttribute("style", "background: green;");
	var id=document.getElementById('F22').id;
	let temp = Number(document.getElementById("seat").value);
	cf2++;
	document.getElementById("seat").value=parseInt(temp+cf2);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("F22").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-cf2);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		cf2--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-3);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("F32").onclick=function(){
	if(cf3==0){
	document.getElementById("F32").setAttribute("style", "background: green;");
	var id=document.getElementById('F32').id;
	let temp = Number(document.getElementById("seat").value);
	cf3++;
	document.getElementById("seat").value=parseInt(temp+cf3);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("F32").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-cf3);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		cf3--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-3);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("F42").onclick=function(){
	if(cf4==0){
	document.getElementById("F42").setAttribute("style", "background: green;");
	var id=document.getElementById('F42').id;
	let temp = Number(document.getElementById("seat").value);
	cf4++;
	document.getElementById("seat").value=parseInt(temp+cf4);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("F42").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-cf4);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		cf4--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-3);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("F52").onclick=function(){
	if(cf5==0){
	document.getElementById("F52").setAttribute("style", "background: green;");
	var id=document.getElementById('F52').id;
	let temp = Number(document.getElementById("seat").value);
	cf5++;
	document.getElementById("seat").value=parseInt(temp+cf5);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("F52").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-cf5);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		cf5--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-3);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("G12").onclick=function(){
	if(cg1==0){
	document.getElementById("G12").setAttribute("style", "background: green;");
	var id=document.getElementById('G12').id;
	let temp = Number(document.getElementById("seat").value);
	cg1++;
	document.getElementById("seat").value=parseInt(temp+cg1);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("G12").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-cg1);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		cg1--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-3);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("G22").onclick=function(){
	if(cg2==0){
	document.getElementById("G22").setAttribute("style", "background: green;");
	var id=document.getElementById('G22').id;
	let temp = Number(document.getElementById("seat").value);
	cg2++;
	document.getElementById("seat").value=parseInt(temp+cg2);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("G22").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-cg2);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		cg2--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-3);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("G32").onclick=function(){
	if(cg3==0){
	document.getElementById("G32").setAttribute("style", "background: green;");
	var id=document.getElementById('G32').id;
	let temp = Number(document.getElementById("seat").value);
	cg3++;
	document.getElementById("seat").value=parseInt(temp+cg3);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("G32").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-cg3);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		cg3--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-3);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("G42").onclick=function(){
	if(cg4==0){
	document.getElementById("G42").setAttribute("style", "background: green;");
	var id=document.getElementById('G42').id;
	let temp = Number(document.getElementById("seat").value);
	cg4++;
	document.getElementById("seat").value=parseInt(temp+cg4);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("G42").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-cg4);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		cg4--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-3);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("G52").onclick=function(){
	if(cg5==0){
	document.getElementById("G52").setAttribute("style", "background: green;");
	var id=document.getElementById('G52').id;
	let temp = Number(document.getElementById("seat").value);
	cg5++;
	document.getElementById("seat").value=parseInt(temp+cg5);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("G52").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-cg5);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		cg5--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-3);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("H12").onclick=function(){
	if(ch1==0){
	document.getElementById("H12").setAttribute("style", "background: green;");
	var id=document.getElementById('H12').id;
	let temp = Number(document.getElementById("seat").value);
	ch1++;
	document.getElementById("seat").value=parseInt(temp+ch1);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("H12").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-ch1);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		ch1--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-3);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("H22").onclick=function(){
	if(ch2==0){
	document.getElementById("H22").setAttribute("style", "background: green;");
	var id=document.getElementById('H22').id;
	let temp = Number(document.getElementById("seat").value);
	ch2++;
	document.getElementById("seat").value=parseInt(temp+ch2);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("H22").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-ch2);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		ch2--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-3);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("H32").onclick=function(){
	if(ch3==0){
	document.getElementById("H32").setAttribute("style", "background: green;");
	var id=document.getElementById('H32').id;
	let temp = Number(document.getElementById("seat").value);
	ch3++;
	document.getElementById("seat").value=parseInt(temp+ch3);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("H32").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-ch3);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		ch3--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-3);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("H42").onclick=function(){
	if(ch4==0){
	document.getElementById("H42").setAttribute("style", "background: green;");
	var id=document.getElementById('H42').id;
	let temp = Number(document.getElementById("seat").value);
	ch4++;
	document.getElementById("seat").value=parseInt(temp+ch4);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("H42").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-ch4);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		ch4--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-3);
		document.getElementById("seatName").value=temp3;
	}
	}
	document.getElementById("H52").onclick=function(){
	if(ch5==0){
	document.getElementById("H52").setAttribute("style", "background: green;");
	var id=document.getElementById('H52').id;
	let temp = Number(document.getElementById("seat").value);
	ch5++;
	document.getElementById("seat").value=parseInt(temp+ch5);
	let temp1=document.getElementById("seatName").value;
	if(temp1===""){
	document.getElementById("seatName").value=id;}
	else{
	document.getElementById("seatName").value=temp1+id;		
	}
	var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
	}
	else{
		document.getElementById("H52").setAttribute("style", "background: white;");
	let temp =Number(document.getElementById("seat").value);
		document.getElementById("seat").value=parseInt(temp-ch5);
		var event = new Event('change');
	document.getElementById("seat").dispatchEvent(event);
		ch5--;
		let temp2=document.getElementById("seatName").value;
		var temp3=temp2.slice(0,-3);
		document.getElementById("seatName").value=temp3;
	}
	}

});