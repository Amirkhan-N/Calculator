//inputs
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");

//output
const outPut = document.getElementById("pOutput");

//buttons
const addButton = document.getElementById("add");
const subButton = document.getElementById("sub");
const multButton = document.getElementById("mult");
const diviButton = document.getElementById("divi");

addButton.addEventListener("click", add)
subButton.addEventListener("click", sub)
multButton.addEventListener("click", mult)
diviButton.addEventListener("click", divi)

//functions
function add() {
    if (isNaN(Number(number1.value)) || isNaN(Number(number2.value)) || number1.value == "" || number2.value == "") {
        outPut.innerHTML = "= enter a number"
    } else {
        console.log("add")
        let result = Number(number1.value) + Number(number2.value);
        outPut.innerHTML = "= " + result;
    }
}

function sub() {
    if (isNaN(Number(number1.value)) || isNaN(Number(number2.value)) || number1.value == "" || number2.value == "") {
        outPut.innerHTML = "= enter a number"
    } else {
        console.log("sub")
        let result = Number(number1.value) - Number(number2.value);
        outPut.innerHTML = "= " + result;
    }
}

function mult() {
    if (isNaN(Number(number1.value)) || isNaN(Number(number2.value)) || number1.value == "" || number2.value == "") {
        outPut.innerHTML = "= enter a number"
    } else {
        console.log("mult")
        let result = Number(number1.value) * Number(number2.value);
        outPut.innerHTML = "= " + result;
    }
}

function divi() {
    if (isNaN(Number(number1.value)) || isNaN(Number(number2.value)) || number1.value == "" || number2.value == "") {
        outPut.innerHTML = "= enter a number"
    } else if (Number(number2.value) == 0) {
        outPut.innerHTML = "= cant divide through 0"
    } else {
        console.log("divi")
        let result = Number(number1.value) / Number(number2.value);
        outPut.innerHTML = "= " + result;
    }
}