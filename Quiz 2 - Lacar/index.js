function calculate(){
    let operator = document.getElementById("operator").value;
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;

    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    let answer = document.getElementById("answer")

    switch(operator){
        case "+":
            answer.innerHTML = firstNumber + secondNumber;
            break;
        case "-":
            answer.innerHTML = firstNumber - secondNumber;
            break;
        case "*":
            answer.innerHTML = firstNumber * secondNumber;
            break;
        case "/":
            answer.innerHTML = firstNumber / secondNumber;
            break;

        default:
            answer.innerHTML = "Invalid Input!"
    }
}