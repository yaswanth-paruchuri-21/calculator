
    const display = document.getElementById("display");
    let lastInput = "";

    function append(value) {
      const operators = "+-*/.";
      const lastChar = display.value.slice(-1);

      // Prevent invalid input like ++ or ..
      if (operators.includes(value) && (display.value === "" || operators.includes(lastChar))) return;

      display.value += value;
      lastInput = value;
    }

    function clearDisplay() {
      display.value = "";
    }

    function deleteLast() {
      display.value = display.value.slice(0, -1);
    }

    function calculate() {
      try {
        const result = Function('"use strict";return (' + display.value + ')')();
        display.value = result;
      } catch {
        display.value = "Error";
      }
    }

    function toggleTheme() {
      document.body.classList.toggle("dark-mode");
    }

    // Keyboard support
    document.addEventListener("keydown", function (e) {
      const key = e.key;
      if (!isNaN(key) || "+-*/.".includes(key)) {
        append(key);
      } else if (key === "Enter") {
        e.preventDefault();
        calculate();
      } else if (key === "Backspace") {
        deleteLast();
      } else if (key.toLowerCase() === "c") {
        clearDisplay();
      }
    });
  