function calculateNumber(type, a, b) {
    const num1 = Math.round(a);
    const num2 = Math.round(b);
    let sum = 0;
    switch (type) {
    case 'SUM':
	sum = num1 + num2;
	break;
    case 'SUBTRACT':
	sum = num1 - num2;
	break;
    case 'DIVIDE':
      if (num2 === 0) {
            sum = "Error";
      } else {
            sum = num1 / num2;
      }
      break;
    }
    return sum;
}

module.exports = calculateNumber;
