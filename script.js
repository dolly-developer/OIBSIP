/*clear function */

function clearDis() {
  document.getElementById("output").value = "";
}

function getValue(value) {
  document.getElementById("output").value += value;
}
function calculate() {
  var expression = document.getElementById("output").value;
  var final_result = eval(expression);
  document.getElementById("output").value = final_result;
}
