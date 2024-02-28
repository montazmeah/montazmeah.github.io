function getQuestion() {
  let url = new URL(location.href);
  if (url.searchParams.get("question")) {
    return questions[+url.searchParams.get("question") - 1];
  }
  console.log(questions[Math.floor(Math.random() * questions.length)]);
  return questions[Math.floor(Math.random() * questions.length)];
}

function displayQuestion(questionObject) {
  console.log({ questionObject });
  document.querySelector("h3").innerText = "Question: " + questionObject.number;
  document.querySelector("main").innerHTML = questionObject.question;

  document.querySelector("#notes p").innerHTML = questionObject.notes;

  shuffle(questionObject.answers).forEach((answer) => {
    document.querySelector("section ul").innerHTML += `<li ${
      answer.correct && "class='correct'"
    }>${answer.text}</li>`;
  });

  document.querySelector("#next").style.display = "none";
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
displayQuestion(getQuestion());

document.querySelector("section").addEventListener("click", function (e) {
  if (e.target.localName == "li") {
    e.target.classList.toggle("selected");
    if (![...e.target.classList].includes("correct")) {
      e.target.classList.toggle("incorrect");
    }
  }
});

let total = 0;
let totalCorrect = 0;
document.querySelector("#check").addEventListener("click", function (e) {
  e.target.style.display = "none";
  if (
    document.querySelectorAll(".incorrect").length &&
    document.querySelectorAll(".selected").length
  ) {
    document.querySelectorAll(".incorrect").forEach((x) => {
      x.style.backgroundColor = "#dc3545";
      x.style.color = "white";
    });
    document.querySelectorAll(".correct").forEach((c) => {
      c.style.backgroundColor = "#007bff";
      c.style.color = "white";
    });
  }
  if (
    document.querySelectorAll(".incorrect").length == 0 &&
    document.querySelectorAll(".selected").length ==
      document.querySelectorAll(".correct").length
  ) {
    document.querySelector("h3").style.backgroundColor = "#28a745";
    document.querySelector("h1").innerText = "CORRECT!";

    totalCorrect++;
  } else {
    document.querySelector("h3").style.backgroundColor = "#dc3545";
    document.querySelector("h1").innerText = "INCORRECT!";
  }
  total++;
  document.querySelector("h2 span").innerText = totalCorrect + "/" + total;

  document.querySelector("section").classList.add("answered");

  document.querySelector("#next").style.display = "block";

  document.querySelector("#notes").style.display = "block";
});

document.querySelector("#next").addEventListener("click", function () {
  document.querySelector("h3").style.backgroundColor = "white";
  document.querySelector("section ul").innerHTML = "";
  document.querySelector("h1").innerText = "";
  document.querySelector("section").classList.remove("answered");
  document.querySelector("#check").style.display = "block";
  document.querySelector("#notes").style.display = "none";
  displayQuestion(getQuestion());
});
