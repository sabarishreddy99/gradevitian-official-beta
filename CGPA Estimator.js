// ----------------------------   POP UP ------------------------------------------------------



function showPopup(){

  document.getElementById('pop-up-result').style.display="flex";
  document.getElementById('pop-up-blur').style.filter="blur(10px)";
}

function closePopup(){

  document.getElementById('pop-up-result').style.display="none";
  document.getElementById('pop-up-blur').style.filter="none";
}
