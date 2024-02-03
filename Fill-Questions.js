let score = 0;
function goback(){
  window.location.href="Matching.html";
}
function checkAnswers() {
  var answer1 = parseInt(document.getElementById("answer1").value);
  var answer2 = parseInt(document.getElementById("answer2").value);
  var answer3 = parseInt(document.getElementById("answer3").value);
  var answer4 = parseInt(document.getElementById("answer4").value);
  if (answer1 === 36 )score++;
  if (answer2 === 39 )score++;
  if (answer3 === 88 )score++;
  if (answer4 === 47 )score++;
  localStorage.setItem("score3", score );
  window.location.href="Dashboard.html";
}