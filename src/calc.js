function calc(num1, num2, operation) {
  let result = 0;

  switch (operation) {
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
      result = num1 ** num2;
      break;
    case 'sqroot':
      result = Math.sqrt(num1);
      break;
    default:
      break;
  }

  return result;
}

calc(2, 2, '+');

const number = 5;

console.log(number);
