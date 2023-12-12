function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function PrimeSum() {
  let input = document.getElementById("numberInput").value;
  let sum = 0;

  for (let i = 0; i < input.length; i++) {
    let currentChar = input.charAt(i);
    let currentNumber = parseInt(currentChar);

    if (!isNaN(currentNumber) && isPrime(currentNumber)) {
      sum += currentNumber;
    }
  }

  let resultElement = document.getElementById("result");
  resultElement.textContent = "Tổng các số nguyên tố trong chuỗi là: " + sum;
}
