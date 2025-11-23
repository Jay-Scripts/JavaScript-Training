// binding the ui to grab its inner text
let num1 = document.getElementById(`num1`);
let num2 = document.getElementById(`num2`);
let result = document.getElementById(`result`);

// caculate function
function calculate() {
  // converting the inner text to int to make and calculation
  let n1 = parseInt(num1.innerText);
  let n2 = parseInt(num2.innerText);
  // passing the string concat will results per calculaions
  result.innerHTML = `
    Sum         : ${n1 + n2}    <br>
    Difference  : ${n1 - n2}    <br>
    Product  : ${n1 * n2}    <br>
    Quotient  : ${n1 / n2}    <br>
    `;
}
