function doOperation(args) {
    let firstNumber = Number(args[0]);
    let secondNumber = Number(args[1]);
    if(secondNumber >= firstNumber)
        console.log(firstNumber * secondNumber);
    else
        console.log( firstNumber / secondNumber);
}

doOperation(['5', '2'])