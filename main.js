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
    main();
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
  let percentage = Math.round((correctAnswer / (correctAnswer + incorrectAnswer)) * 100);
  if (isNaN(percentage)) {
    resultForAnswers = 100;
  } else {
    if (percentage >= 75 && percentage < 95) {
      resultForAnswers = "65@ "
    } else if (percentage >= 95) {
      resultForAnswers = "100@ "
    }

  }
  getElement("alertaccuracy").innerHTML = ` քո ճիշտ պատասխաններն են ${percentage}`;
}
let checkInterval = setInterval(check, 50);
timer()





function getRandomFlower() {
  return flowers[Math.floor(Math.random(flowers.length - 1) * 10)]
}

function main() {
  flow = getRandomFlower();
  getElement("flower").src = flow.flower;
}

function main() {
  let options = [];
  const maxOptions = 3;
  while (maxOptions.length < maxOptions) {
    let coun = getRandomFlower();
    if (options.indexOf(coun) === -1) {
      options.push(coun);
    }
  }
  for (let i = 0; i < options.length; i++) {
    getElement(`option${i + 1}label`).innerHTML = options[i].name;
    getElement(`option${i + 1}input`).value = options[i].name;
    getElement(`option${i + 1}input`).checked = false;
  }
  correct = options[Math.round(Math.random() * (options.length - 1))];
  getElement("flower").src = correct.flower
}
main()
timer()