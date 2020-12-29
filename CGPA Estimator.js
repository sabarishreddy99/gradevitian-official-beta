// ----------------------------   POP UP Result------------------------------------------------------


function showPopup(){

  document.getElementById('pop-up-result').style.display="flex";
  document.getElementById('pop-up-blur').style.filter="blur(10px)";
}

function closePopup(){

  document.getElementById('pop-up-result').style.display="none";
  document.getElementById('pop-up-blur').style.filter="none";
}


//--------------------main content------------------------------------------------------------------
// -------------------------------------reset----------------------------------

function cgpaestreset() {
  document.getElementById("cgpaestform").reset();
}

//---------------------------CGPA Estimator---------------------------------------------------





//<!----CGPA Estimator--->

// function ccestadd(){
// if(document.getElementById("ccredits").value==""){
// document.getElementById("ccredits").value=1;
// cgpaestimation();
// }
// else if(document.getElementById("ccredits").value>=300){
// document.getElementById("ccredits").value=300;
// cgpaestimation();
// }
// else{
// document.getElementById("ccredits").value=parseInt(document.getElementById("ccredits").value)+1;
// cgpaestimation();
// }
// }


// function ccestsub(){
// if(document.getElementById("ccredits").value==1){
// document.getElementById("ccredits").value=1;
// cgpaestimation();
// }
// else if(document.getElementById("ccredits").value>=300){
// document.getElementById("ccredits").value=300;
// document.getElementById("ccredits").value=parseInt(document.getElementById("ccredits").value)-1;
// cgpaestimation();
// }
// else{
// document.getElementById("ccredits").value=parseInt(document.getElementById("ccredits").value)-1;
// cgpaestimation();
// }
// }



// function cnestadd(){
// if(document.getElementById("ncredits").value==""){
// document.getElementById("ncredits").value=1;
// cgpaestimation();
// }
// else if(document.getElementById("ncredits").value>=50){
// document.getElementById("ncredits").value=50;
// cgpaestimation();
// }
// else{
// document.getElementById("ncredits").value=parseInt(document.getElementById("ncredits").value)+1;
// cgpaestimation();
// }
// }


// function cnestsub(){
// if(document.getElementById("ncredits").value==1){
// document.getElementById("ncredits").value=1;
// cgpaestimation();
// }
// else if(document.getElementById("ncredits").value>=50){
// document.getElementById("ncredits").value=50;
// document.getElementById("ncredits").value=parseInt(document.getElementById("ncredits").value)-1;
// cgpaestimation();
// }
// else{
// document.getElementById("ncredits").value=parseInt(document.getElementById("ncredits").value)-1;
// cgpaestimation();
// }
// }




function cgpaestimation() 
{      
 var x = document.getElementById("CGPAneed").value;
 var gpa = document.getElementById("ccgpa").value;
 var cc = parseInt(document.getElementById("ccredits").value); 
 var nc = parseInt(document.getElementById("ncredits").value); 

if((x<=0 || gpa<=0 || cc<=0 || nc<=0)){
document.getElementById("estcgpa").innerHTML = "Kindly check your entries; shouldn't be zero or empty.";
document.getElementById("estcgpa1").innerHTML = "";

}


else if(x>10||gpa>10){
document.getElementById("estcgpa").innerHTML = "Kindly check your entries; Average limit of GPA or CGPA is (0< X <=10).";
document.getElementById("estcgpa1").innerHTML = "";

}


else if(cc>300||nc>50){
document.getElementById("estcgpa").innerHTML = "Kindly check your entries; Credits limitation (1<= Credits Completed <=300 & 1<= Credits Taken <=50 ).";
document.getElementById("estcgpa1").innerHTML = "";

}


else{


var estnum1=((x*(cc+nc))-(gpa*cc))/nc;
if(estnum1<=0){
document.getElementById("estcgpa").innerHTML = "Oops! Your entries are incorrect (or) You need not to attend your Final Examination."
document.getElementById("estcgpa1").innerHTML = "";
}
else if(estnum1>10){
document.getElementById("estcgpa").innerHTML =nc+" Credit(s) you have taken aren't enough to get "+x+" CGPA."+" Excel in the upcomming semesters.";
document.getElementById("estcgpa").style.fontWeight= "bold";
document.getElementById("estcgpa1").innerHTML = "Just missed. You are at it. Best of luck next time!";


}
else if(estnum1>=9){
document.getElementById("estcgpa").innerHTML = "Your minimum GPA in the next sem should be "+estnum1.toFixed(3)+".";
document.getElementById("estcgpa").style.fontWeight= "bold";
document.getElementById("estcgpa1").innerHTML = "You are Terrific! and Happy Learning!";

}
else{
document.getElementById("estcgpa").innerHTML = "Your minimum GPA in the next sem should be "+estnum1.toFixed(3)+".";
document.getElementById("estcgpa").style.fontWeight= "bold";
document.getElementById("estcgpa1").innerHTML = "Happy Learning!";

}


}


}




