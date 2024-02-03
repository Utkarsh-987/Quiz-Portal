const table = document.getElementById('matchTable');
var q1 = table.querySelector('#q1');
var a1 = table.querySelector('#a1');
var q2 = table.querySelector('#q2');
var a2 = table.querySelector('#a2');
var q3 = table.querySelector('#q3');
var a3 = table.querySelector('#a3');
var scoreCount = 0;
let f1=false,f2=false,f3=false,f4=false;
q1.addEventListener('click', (ev) => {
  q1.style.backgroundColor = "#ff6347";
  a1.addEventListener('click', (ev) => {
    if (f1==true)return;
    a1.style.backgroundColor = "#ff6347";
    scoreCount++; f1=true;
  });
  a2.addEventListener('click', (ev) => {
    if (f1==true)return;
    a2.style.backgroundColor = "#ff6347";f1=true;
  });
  a3.addEventListener('click', (ev) => {
    if (f1==true)return;
    a3.style.backgroundColor = "#ff6347";f1=true;
  });
  a4.addEventListener('click', (ev) => {
    if (f1==true)return;
    a4.style.backgroundColor = "#ff6347";f1=true;
  });
});
q2.addEventListener('click', (ev) => {
  q2.style.backgroundColor = "aqua";
  a1.addEventListener('click', (ev) => {
    if (f2==true)return;
    a1.style.backgroundColor = "aqua";f2=true;
  });
  a2.addEventListener('click', (ev) => {
    if (f2==true)return;
    a2.style.backgroundColor = "aqua";f2=true;
    scoreCount++;
  });
  a3.addEventListener('click', (ev) => {
    if (f2==true)return;
    a3.style.backgroundColor = "aqua";f2=true;
  });
  a4.addEventListener('click', (ev) => {
    if (f2==true)return;
    a4.style.backgroundColor = "aqua";f2=true;
  });
});
q3.addEventListener('click', (ev) => {
  q3.style.backgroundColor = "lightgreen";
  a1.addEventListener('click', (ev) => {
    if (f3==true)return;
    a1.style.backgroundColor = "lightgreen";f3=true;
  });
  a2.addEventListener('click', (ev) => {
    if (f3==true)return;
    a2.style.backgroundColor = "lightgreen";f3=true;
  });
  a3.addEventListener('click', (ev) => {
    if (f3==true)return;
    a3.style.backgroundColor = "lightgreen";f3=true;
    scoreCount++;
  });
  a4.addEventListener('click', (ev) => {
    if (f3==true)return;
    a4.style.backgroundColor = "lightgreen";f3=true;
  });
});
q4.addEventListener('click', (ev) => {
  q4.style.backgroundColor = "DodgerBlue";
  a1.addEventListener('click', (ev) => {
    if (f4==true)return;
    a1.style.backgroundColor = "DodgerBlue";f4=true;
  });
  a2.addEventListener('click', (ev) => {
    if (f4==true)return;
    a2.style.backgroundColor = "DodgerBlue";f4=true;
  });
  a3.addEventListener('click', (ev) => {
    if (f4==true)return;
    a3.style.backgroundColor = "DodgerBlue";f4=true;
  });
  a4.addEventListener('click', (ev) => {
    if (f4==true)return;
    a4.style.backgroundColor = "DodgerBlue";f4=true;
    scoreCount++;
  });
});

document.getElementById("Next").addEventListener("click", (ev) => { 
  localStorage.setItem("score2",  scoreCount );
  window.location.href = "Fill-Questions.html"; })

document.getElementById("Previous").addEventListener("click", (ev) => { 
window.location.href = "MCQ.html"; })