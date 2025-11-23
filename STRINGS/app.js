// assigning the variable
let firstName = "Cornelio";
let lastName = "Gatbonton";
let hobby = "Coding";
// applied on click in the external js file for cleaner look insteand of ui
let submit = (document.getElementById("submit").onclick = function Submit() {
  document.getElementById("output").innerHTML =
    // this is the String concatenation
    `Hello ` +
    firstName +
    " " +
    lastName +
    " ! " +
    // this is the template litteral
    `<br> I Love ${hobby} !`;
});
