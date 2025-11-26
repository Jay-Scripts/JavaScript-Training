var VAR = document.getElementById(`varText`).innerHTML;
let LET = document.getElementById(`letText`).innerHTML;
const CONST = document.getElementById(`constText`).innerHTML;

document.getElementById(`VAR`).onclick = function () {
  VAR = "VAR = Success since this can be re-assign and it is a global scope!";
  LET =
    "LET = Success since this can be re-assign and it is a block scope!, but when i recall it outside it will return to its initial value declared in the outside ";
  try {
    CONST = "CONST = Fail!";
  } catch (error) {
    document.getElementById(`constText`).innerHTML = "CONST = Fail!";
  }
  document.getElementById(`varText`).innerHTML = VAR;
  document.getElementById(`letText`).innerHTML = LET;
};

document.getElementById(
  `letTextOutsideFnc`
).innerHTML = `let outside the function ${LET} it was not changed`;
