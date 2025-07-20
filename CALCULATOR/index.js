const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "C") {
      currentInput = "";
    } else if (value === "DEL") {
      currentInput = currentInput.slice(0, -1);
    } else if (value === "=") {
      try {
        currentInput = eval(currentInput).toString();
      } catch {
        currentInput = "Error";
      }
    } else {
      currentInput += value;
    }

    display.value = currentInput;
  });
});
