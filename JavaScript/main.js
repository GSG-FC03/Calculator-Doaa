// // calculator
var val = [];
var input = 0;
function calculateVal(value) {
  if (input !== 0) {
    input = parseFloat(input);

    addToVal(input);
  }
  var answer = value[0];
  var dividedByZero = 0;
  for (var i = 2; i < value.length; i = i + 2) {
    switch (val[i - 1]) {
      case "+":
        answer += value[i];
        break;
      case "-":
        answer -= value[i];
        break;
      case "/":
        if (value[i] === 0) dividedByZero = 1;
        else answer = answer / value[i];

        break;
      case "*":
        answer = answer * value[i];
        break;
    }
  }

  answer = answer.toFixed(10);
  answer = parseFloat(answer);
  if (dividedByZero === 1) {
    clearAll();
    document.getElementById("screen").value = "Error!Can't divided by zero";
  } else {
    document.getElementById("screen").value = answer;
    input = answer;
    val = [];
  }
}
function addToVal(input) {
  val.push(input);
}
function clearAll() {
  val = [];
  input = 0;
  document.getElementById("screen").value = "0";
  document.getElementById("image").src = "";
}
function numericButton(digit) {
  if (
    document.getElementById("screen").value === "Error!Can't divided by zero" ||
    (document.getElementById("screen").value == "0" && digit != ".")
  ) {
    document.getElementById("screen").value = "";
  }

  if (!(digit === ".") || !input.match(/[.]/)) {
    input += digit;
    document.getElementById("screen").value += digit;
    document.getElementById("image").src = "";
  }
}
function operatorButton(operat) {
  if (input !== 0 && input !== "-") {
    input = parseFloat(input);
    addToVal(input);
    addToVal(operat);
    document.getElementById("screen").value += operat;
    input = 0;
    document.getElementById("image").src = "";
  }
  if (operat == "-" && isNaN(val[0]) && input !== "-") {
    input = "-";

    document.getElementById("screen").value = "-";
  }
}
//Back Button
const backBtn = document.getElementById("back");
backBtn.addEventListener("click", () => {
  const screen = document.getElementById("screen");
  let screenVal = screen.value;
  let len = screenVal.length;
  if (len > 0) {
    screenVal = screenVal.slice(0, len - 1);
  }
  screen.value = screenVal;
  document.getElementById("image").src = "";
});

//Currency Converter
const USBtn = document.getElementById("US");
const ILSBtn = document.getElementById("ILS");
const EuroBtn = document.getElementById("Euro");
const EuroILSBtn = document.getElementById("EuroILS");
const screen = document.getElementById("screen");
const toggleImg = document.getElementById("image");

USBtn.onclick = () => {
  let US = (screen.value /= "3.1");
  screen.value = US.toFixed(5);
  screen.value = parseFloat(screen.value);
  toggleImg.src = "../assets/images/USD.svg";
  input = screen.value;
};

ILSBtn.onclick = () => {
  let ILS = (screen.value *= "3.1");
  screen.value = ILS.toFixed(5);
  screen.value = parseFloat(screen.value);
  toggleImg.src = "../assets/images/ILS.svg";
  input = screen.value;
};

EuroBtn.onclick = () => {
  let Euro = (screen.value /= "2.6");
  screen.value = Euro.toFixed(5);
  screen.value = parseFloat(screen.value);
  toggleImg.src = "../assets/images/eur.svg";
  input = screen.value;
};
EuroILSBtn.onclick = () => {
  let EuroILS = (screen.value *= "2.6");
  screen.value = EuroILS.toFixed(5);
  screen.value = parseFloat(screen.value);
  toggleImg.src = "../assets/images/ILS.svg";
  input = screen.value;
};

// ShowCurrency
let showCurr = document.getElementById("showCurrency");
let curr = document.querySelectorAll(".currency");
window.onclick = function (event) {
  if (event.target == showCurr) {
    showCurr.style.display = "none";
    curr.forEach((curr) => {
      curr.style.display = "block";
    });
  } else {
    showCurr.style.display = "block";
    curr.forEach((curr) => {
      curr.style.display = "none";
    });
  }
};