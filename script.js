// Get the display
const display = document.getElementById("display");

// Add value to display
function appendValue(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculate() {
    try {
        if (display.value === "") {
            display.value = "";
            return;
        }

        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// Keyboard Support
document.addEventListener("keydown", function (event) {

    const key = event.key;

    // Numbers
    if (!isNaN(key)) {
        appendValue(key);
    }

    // Operators
    else if (["+", "-", "*", "/", "."].includes(key)) {
        appendValue(key);
    }

    // Enter key
    else if (key === "Enter") {
        event.preventDefault();
        calculate();
    }

    // Backspace
    else if (key === "Backspace") {
        deleteLast();
    }

    // Escape
    else if (key === "Escape") {
        clearDisplay();
    }
});