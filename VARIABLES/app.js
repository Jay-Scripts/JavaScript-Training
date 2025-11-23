// initialized variables
let name = "Cornelio";
let age = 25;
const country = "Philipines";

// make a function to get element by ID then pass the variable data in the inner HTML if formatted way
function displayMessage() {
  let message = document.getElementById(`message`);
  message.innerHTML = `Hello ${name}! You are ${age} years old from the ${country}`;
  message.style.color = "red";
}
