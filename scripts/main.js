// Import functions
import themeChange from "./theme.js";
import openModal from "./modal.js";

// Get elements from HTML
const form = document.querySelector("form");                    // Form
const from = document.querySelector("[data-select-from]");      // From
const inFrom = document.querySelector("[data-inFrom]");
const to = document.querySelector("[data-select-to]");          // To
const output = document.querySelector("[data-output]");         // Output
const theme = document.querySelector("[data-theme-btn]");       // Theme button
const modal = document.querySelector("[data-modal]");           // Modal (pop-up)
const closeModal = document.querySelector("[data-modal-close"); // Close modal button

themeChange(theme);                 // Call the change theme function+
openModal(modal, closeModal);       // Open and close the modal

form.addEventListener("submit", (e) => {

    e.preventDefault();     // Prevent automatic submission of the form

    const selectFrom = from.value;      // Get selects values from form
    const selectTo = to.value;
    const valueFrom = inFrom.value;     // Get inputs values from form

    let rate;               // Declare a rate to calculate the converted value
    let convertedValue;     // Declare a consto to get the converted value
    
    if (selectFrom == "Dollar" && selectTo == "Euro") {     // Money conversion logic

        rate =  1.053;
        convertedValue = valueFrom / rate;
        output.innerHTML = `&euro; ${convertedValue.toFixed(2)}`;

    } else if (selectFrom == "Dollar" && selectTo == "Real") {

        rate = 5;
        convertedValue = valueFrom * rate;
        output.innerHTML = `R$ ${convertedValue.toFixed(2)}`;

    } else if (selectFrom == "Euro" && selectTo == "Dollar") {

        rate = 1.053;
        convertedValue = valueFrom * rate;
        output.innerHTML = `US$ ${convertedValue.toFixed(2)}`;

    } else if (selectFrom == "Euro" && selectTo == "Real") {

        rate = 5.33;
        convertedValue = valueFrom * rate;
        output.innerHTML = `R$ ${convertedValue.toFixed(2)}`;

    } else if (selectFrom == "Real" && selectTo == "Dollar") {

        rate = 5
        convertedValue = valueFrom / 5;
        output.innerHTML = `US$ ${convertedValue.toFixed(2)}`;

    } else if (selectFrom == "Real" && selectTo == "Euro") {

        rate = 5.33;
        convertedValue = valueFrom / rate;
        output.innerHTML = `&euro; ${convertedValue.toFixed(2)}`;

    } else {        // If the currencies be equal...

        output.innerHTML = "Choose different currencies to continue, please!";

    }

});