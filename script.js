const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

/* ===========================
   KEYBOARD SUPPORT
=========================== */
document.addEventListener("keydown", function (event) {
    const key = event.key;

    // Numbers
    if (!isNaN(key)) {
        appendValue(key);
    }

    // Operators
    else if (["+", "-", "*", "/", "%", "."].includes(key)) {
        appendValue(key);
    }

    // Enter or =
    else if (key === "Enter" || key === "=") {
        event.preventDefault();
        calculate();
    }

    // Backspace
    else if (key === "Backspace") {
        deleteLast();
    }

    // Delete or Escape
    else if (key === "Delete" || key === "Escape") {
        clearDisplay();
    }
});

/* ===========================
   RIPPLE EFFECT FOR BUTTONS
=========================== */
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", function (e) {
        const ripple = document.createElement("span");
        ripple.classList.add("ripple");
        this.appendChild(ripple);

        const rect = this.getBoundingClientRect();
        ripple.style.left = `${e.clientX - rect.left}px`;
        ripple.style.top = `${e.clientY - rect.top}px`;

        ripple.addEventListener("animationend", () => ripple.remove());
    });
});