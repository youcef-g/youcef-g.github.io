//---------
//Color Generator
//---------
const containerColor = document.querySelector(".color");

containerColor.addEventListener("click", () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const colors = `rgb(${r},${g},${b})`;

  containerColor.innerHTML = `<p> ${colors} </p>`;

  containerColor.style.background = colors;

  console.log(containerColor);
});
//---------
//Todo list
//---------
const form = document.querySelector("form");

function storeList() {
  window.localStorage.todoList = list.innerHTML;
}
function getTodo() {
  if (window.localStorage.todoList) {
    list.innerHTML = window.localStorage.todoList;
  } else {
    list.innerHTML = `<li>Cliquez sur un to do pour le supprimer</li>`;
  }
}

getTodo();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  list.innerHTML += `<li>${item.value}</li>`;
  item.value = "";
  storeList();
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.remove();
  } else {
    e.target.classList.add("checked");
  }
  storeList();
});

//--------
//Countdown
//---------

let totalSeconds;
let interval;

function count() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  let sec = seconds < 10 ? "0" + seconds : seconds;

  countdownDisplay.textContent = `${minutes} : ${sec}`;
  if (totalSeconds > 0) {
    totalSeconds--;
  } else {
    countdownDisplay.textContent = "Terminé !!";
    clearInterval(interval);
  }
}

countdown.addEventListener("submit", (e) => {
  e.preventDefault();

  if (isNaN(choice.value)) {
    alert("Entrer un chiffre !!!!!");
  } else {
    totalSeconds = choice.value * 60;
    choice.value = "";
    clearInterval(interval);
    interval = setInterval(count, 1000);
  }
});
