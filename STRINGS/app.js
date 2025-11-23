document.getElementById(`submit`).onclick = function Submit() {
  // getting the name input in first input
  let name = document.getElementById(`name`).value;
  // getting the age value in the 2nd input field
  let age = document.getElementById(`age`).value;
  // passing the string the message as string interpolation once the button is clicked
  document.getElementById(
    "output"
  ).innerText = `Hello ${name} You Are ${age} years old!`;
};
