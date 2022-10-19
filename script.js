// DOM

const content1Elem = document.getElementById("content1");
const content2Elem = document.getElementById("content2");

const button1Elem = document.getElementById("setstate1");
const button2Elem = document.getElementById("setstate2");
const button3Elem = document.getElementById("setstate3");
const button4Elem = document.getElementById("setstate4");
const button5Elem = document.getElementById("setstate5");

const rateElem = document.getElementById("rate");

const submitElem = document.getElementById("submitData");

// Queries

submitElem.addEventListener("click", () => {
  content1Elem.classList.toggle("hidden");
  content2Elem.classList.toggle("hidden");

  if (button1Elem.classList.contains("stateData")) {
    rateElem.innerHTML = button1Elem.value;
  }
  if (button2Elem.classList.contains("stateData")) {
    rateElem.innerHTML = button2Elem.value;
  }
  if (button3Elem.classList.contains("stateData")) {
    rateElem.innerHTML = button3Elem.value;
  }
  if (button4Elem.classList.contains("stateData")) {
    rateElem.innerHTML = button4Elem.value;
  }
  if (button5Elem.classList.contains("stateData")) {
    rateElem.innerHTML = button5Elem.value;
  }
});

button1Elem.addEventListener("click", () => {
  button1Elem.classList.add("stateData");
  button2Elem.classList.remove("stateData");
  button3Elem.classList.remove("stateData");
  button4Elem.classList.remove("stateData");
  button5Elem.classList.remove("stateData");
});
button2Elem.addEventListener("click", () => {
  button2Elem.classList.add("stateData");
  button1Elem.classList.remove("stateData");
  button3Elem.classList.remove("stateData");
  button4Elem.classList.remove("stateData");
  button5Elem.classList.remove("stateData");
});
button3Elem.addEventListener("click", () => {
  button3Elem.classList.add("stateData");
  button1Elem.classList.remove("stateData");
  button2Elem.classList.remove("stateData");
  button4Elem.classList.remove("stateData");
  button5Elem.classList.remove("stateData");
});
button4Elem.addEventListener("click", () => {
  button4Elem.classList.add("stateData");
  button1Elem.classList.remove("stateData");
  button2Elem.classList.remove("stateData");
  button3Elem.classList.remove("stateData");
  button5Elem.classList.remove("stateData");
});
button5Elem.addEventListener("click", () => {
  button5Elem.classList.add("stateData");
  button1Elem.classList.remove("stateData");
  button2Elem.classList.remove("stateData");
  button3Elem.classList.remove("stateData");
  button4Elem.classList.remove("stateData");
});
