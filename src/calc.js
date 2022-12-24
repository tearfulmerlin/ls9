function calc(num1, num2, operation) {
    let result = 0;

    switch(operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '**':
            result = num1**num2;
            break;
        case 'sqrt':
            result = Math.sqrt(num1);
            break;
    }

    return result;
}