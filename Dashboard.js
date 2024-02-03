const sc1 = JSON.parse(localStorage.getItem("score1"));
const sc2 = JSON.parse(localStorage.getItem("score2"));
const sc3 = JSON.parse(localStorage.getItem("score3"));
document.querySelector("#mcq").innerHTML = "Score "+sc1+" out of 2"; 
document.querySelector("#mtc").innerHTML = "Score "+sc2+" out of 4"; 
document.querySelector("#fill").innerHTML
  = "Score "+sc3+" out of 4"; 
total = sc1+sc2+sc3;
document.querySelector("#tot").innerHTML
= "Score "+total+" out of 10"; 
