function sum(a, b) {
  if (a === undefined && b === undefined) {
    return 0;
  } else if (b === undefined) {
    return a + 0;
  } else {
    return a + b;
  }
}

function subtract(a, b) {
  if (a === undefined && b === undefined) {
    return 0;
  } else if (b === undefined) {
    return a;
  } else {
    return a - b;
  }
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Error');
  } else {
    return a / b;
  }
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
