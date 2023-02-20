// Event Listeners
// on HTML <button onclick="alert('I Love JavaScript')"></button>

// element.addEventListener("click", function);

const buttonTwo = document.querySelector(".btn-2");

function alertBtn() {
  alert("I also love JavaScript");
}

buttonTwo.addEventListener("click", alertBtn);

// Mouseover
const newBackgroundColor = document.querySelector(".box-3");

function changeBgColor() {
  newBackgroundColor.style.backgroundColor = "grey";
}

newBackgroundColor.addEventListener("mouseover", changeBgColor);
