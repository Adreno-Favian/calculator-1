const display = document.getElementById("display");

function appendToDisplay(value){
  if (display.value === '0' && !['+', '-', '*', '/'].includes(value)) {
        display.value = value;
    } else {
        display.value += value;
    }
}

function calculate() {
    try {
        if (display.value !== '') {
            const result = Function('"use strict"; return (' + display.value + ')')();
            display.value = Number.isInteger(result) ? result : result.toFixed(4);
        }
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
  display.value = "";
}