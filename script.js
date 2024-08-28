let firstNum = 0, secondNum = 0, operator = "";
let opernum = 0;
let result = 0;
let text = "";
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operation");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const signe = document.querySelector(".signe");
function add(firstNum, secondNum) { return firstNum + secondNum; }
function sub(firstNum, secondNum) { return firstNum - secondNum; }
function mul(firstNum, secondNum) { return firstNum * secondNum; }
function div(firstNum, secondNum) { return firstNum / secondNum; }
function per(firstNum, secondNum) { return (firstNum / secondNum)*100; }

function operate(firstNum, secondNum, operator) {



    switch (operator) {
        case "+":
            return(add(firstNum, secondNum));
            break;
        case "-":


            return(sub(firstNum, secondNum));
            break;
        case "*":
            return(mul(firstNum, secondNum));
            break;
        case "/":
            return(div(firstNum, secondNum));
            break;
        case "%":
            return(per(firstNum, secondNum));
            break;
    }
}

numbers.forEach(function (button) {
    button.addEventListener("click", function () {
        text += `${button.textContent}`;


    });
});

operators.forEach(function (button) {
    button.addEventListener("click", function () {

        operator = button.textContent;

        console.log(operator);

        opernum++;

        if (opernum === 1) {

            firstNum = parseFloat(text);

            console.log(`${firstNum}`);

            text = "";

        }

    });
});

equals.addEventListener("click", function () {

    opernum++;

    if ((opernum === 2||opernum===0||opernum===1) && text === "") {

        console.log("Error");
        opernum = 0;

    } else if (opernum === 1) {

        console.log(text);
        opernum = 0;
        text = "";

    } else if (opernum === 2) {

        secondNum = parseFloat(text);

        console.log(`${secondNum}`);



        result = operate(firstNum, secondNum, operator)

        console.log(` ${result}`);

        text = "";
        opernum = 0;

    }



})

clear.addEventListener("click",function(){
    text ="";
    opernum=0;

})

signe.addEventListener("click",function(){

    text += "-";

})