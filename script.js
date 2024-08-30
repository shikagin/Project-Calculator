let firstNum = 0, secondNum = 0, operator = "";
let opernum = 0;
let result = 0;
let text = "";
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operation");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const signe = document.querySelector(".signe");

const scree = document.querySelector(".screen");

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
        if(text===""){result=0; scree.innerHTML="";}
        text += `${button.textContent}`;
        const display = document.createElement("h1");
        display.classList.add("display");
        display.textContent = button.textContent;
        scree.appendChild(display);
        



    });
});

operators.forEach(function (button) {
    button.addEventListener("click", function () {
        scree.innerHTML="";

        opernum++;

        if (opernum === 1&& result===0) {

            firstNum = parseFloat(text);
            
            console.log(`${firstNum}`);

            text = "";

        }else if (opernum===1 && result!=0){

            firstNum= result;
        }
         else if(opernum>1)

        {
            secondNum=parseFloat(text);

            firstNum = operate(firstNum,secondNum,operator);
            const display=displaY();

            display.textContent=`${firstNum}`;
            scree.appendChild(display);

            text = "";
        }

        operator = button.textContent;

        console.log(operator);

        

    });
});

equals.addEventListener("click", function () {

    opernum++;
    
    const display = displaY();
    
    if ((opernum === 2||opernum===0||opernum===1) && text === "" ) {

        console.log("Error");
        display.textContent = "ERROR";
        text = "";
        opernum = 0;
        

    } else if (opernum === 1) {

        console.log(text);
        display.textContent = text;
        text = "";
        opernum = 0;
        

    } else if (opernum >= 2) {

        secondNum = parseFloat(text);

        console.log(`${secondNum}`);

        result = operate(firstNum, secondNum, operator)

        console.log(` ${result}`);

        display.textContent = `${result}`;

        text = "";
        opernum = 0;
        
    }
    

    scree.appendChild(display);

})

clear.addEventListener("click",function(){
    text ="";
    opernum=0;
    scree.innerHTML="";

});

signe.addEventListener("click",function(){

    text += "-";

    if(text===""){scree.innerHTML="";}
        const display = document.createElement("h1");
       display.classList.add("display");
       display.textContent = "-";
        scree.appendChild(display);

});

function displaY(){
    scree.innerHTML="";
    const display = document.createElement("h1");
    display.classList.add("display");
    return display;
}