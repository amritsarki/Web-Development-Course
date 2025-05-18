const display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    // Replace % with /100 for percentage calculation
    let expression = display.value.replace(/%/g, '/100');
    display.value = eval(expression);
  } catch {
    display.value = 'Error';
  }
}

// Allow keyboard input
document.addEventListener('keydown', function(event) {
  if ((event.key >= '0' && event.key <= '9') || "+-*/.%".includes(event.key)) {
    appendToDisplay(event.key);
  } else if (event.key === 'Enter' || event.key === '=') {
    calculate();
  } else if (event.key === 'Backspace') {
    deleteChar();
  } else if (event.key === 'Escape') {
    clearDisplay();
  }
});