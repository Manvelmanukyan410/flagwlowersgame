
let seconds = 30;
let correctAnswer = 0;
let incorrectAnswer = 0;

function getElement(id) {
  return document.getElementById(id);
}

function timer() {
  setTimeout(finish, seconds * 1000);
  getElement("time").innerHTML = seconds;
  let countdown = setInterval(function () {
    seconds--;
    getElement("time").textContent = seconds;
    if (seconds <= 0) {
      clearInterval(countdown);
    }
    if (seconds === 10) {
      getElement("time").style.color = "#ff0000";
    }
  }, 1000);
}
function check() {
  let input;
  try {
    input = document.querySelector('input[name = "option"]:checked').value;
  } catch {
    return;
  }
  if (input == "վարդ") {
    correctAnswer++;
    getElement("score").innerHTML = correctAnswer;
  } else {
    incorrectAnswer++;
  }
  clearInterval(checkInterval);
}
function finish() {
  clearInterval(checkInterval);
  let percentage = (correctAnswer / (correctAnswer + incorrectAnswer)) * 100;
  getElement("alertaccuracy").innerHTML = ` քո ճիշտ պատասխաններն են ${percentage}`;
}
let checkInterval = setInterval(check, 50);
timer()