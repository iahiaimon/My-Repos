// let string = "";
// let buttons = document.querySelector(".btn");
// Array.from(buttons).forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//         if (e.target.innerHTML == '=') {
//             string = eval(string);
//             document.querySelector("input").value = string;
//         }
//         else {
//             console.log(e.target);
//             string = string + e.target.innerHTML;
//             document.querySelector("input").value = string;

//         }

//     })
// })



let displayValue = '';

function addToDisplay(value) {
    displayValue += value;
    document.getElementById('numbers').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('numbers').value = '';
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('numbers').value = displayValue;
    } catch (error) {
        document.getElementById('numbers').value = 'Error';
    }
}