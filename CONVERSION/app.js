document.getElementById(`string`).onclick = function () {
  let input = document.getElementById("input").value;
  input = String(input);
  document.getElementById(`result`).innerHTML =
    input + ` the type of data is now ` + typeof input;
};

document.getElementById(`number`).onclick = function () {
  input = document.getElementById("input").value;
  input = Number(input);
  document.getElementById(`result`).innerHTML =
    input + ` the type of data is now ` + typeof input;
};
document.getElementById(`bool`).onclick = function () {
  input = document.getElementById("input").value;
  input = Boolean(input);
  document.getElementById(`result`).innerHTML =
    input + ` the type of data is now ` + typeof input;
};
document.getElementById(`float`).onclick = function () {
  input = document.getElementById("input").value;
  input = parseFloat(input);
  document.getElementById(`result`).innerHTML =
    input + ` the type of data is now ` + typeof input;
};
