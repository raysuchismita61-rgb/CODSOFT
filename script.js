const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

// Loop through all buttons
for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function () {

        let value = this.innerText;

        // Clear display
        if (value === "C") {
            display.value = "";
        }

        // Delete last character
        else if (value === "DEL") {
            display.value = display.value.slice(0, -1);
        }

        // Calculate result
        else if (value === "=") {

            try {
                display.value = eval(display.value);
            }

            catch {
                display.value = "Error";
            }

        }

        // Percentage
        else if (value === "%") {

            try {
                display.value = eval(display.value) / 100;
            }

            catch {
                display.value = "Error";
            }

        }

        // Append value
        else {
            display.value += value;
        }

    });

}