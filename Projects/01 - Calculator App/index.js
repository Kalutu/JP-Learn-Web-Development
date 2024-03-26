document.addEventListener("DOMContentLoaded", function () {
  const expressionInput = document.getElementById("expression");
  const answerDisplay = document.getElementById("answer");

  let expression = "";
  let answer = 0;

  const display = (symbol) => {
    expression += symbol;
    expressionInput.value = expression;
  };

  const calculate = () => {
    answer = eval(expression);
    answerDisplay.textContent = answer;
    expression = expression + "=";
    expressionInput.value = expression;
    expression = "";
  };

  const allClear = () => {
    expression = "";
    answer = 0;
    expressionInput.value = expression;
    answerDisplay.textContent = answer;
  };

  const clear = () => {
    expression = expression.slice(0, -1);
    expressionInput.value = expression;
    answer = 0;
    answerDisplay.textContent = answer;
  };

  const buttons = document.querySelectorAll(".padButton");

  buttons.forEach((button) =>
    button.addEventListener("click", function () {
      const symbol = this.textContent;
      if (symbol === "=") {
        calculate();
      } else if (symbol === "AC") {
        allClear();
      } else if (symbol === "C") {
        clear();
      } else {
        display(symbol);
      }
    })
  );
});
