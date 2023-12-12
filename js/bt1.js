//bt1

function findMaxUniqueNumber(inputStr) {
  // Chuyển chuỗi thành mảng các chữ số
  const digits = inputStr.split("").map(Number);

  // Sắp xếp mảng giảm dần
  digits.sort((a, b) => b - a);

  // Tìm số lớn nhất và duy nhất
  let maxUniqueNumber = null;
  for (const digit of digits) {
    if (digits.filter((d) => d === digit).length === 1) {
      maxUniqueNumber = digit;
      break;
    }
  }

  return maxUniqueNumber;
}


// Nhập chuỗi 5 chữ số nguyên
const inputStr = prompt("Nhập vào một chuỗi 5 chữ số nguyên:");

// Kiểm tra độ dài của chuỗi
if (inputStr.length !== 5) {
  console.log("Chuỗi không hợp lệ. Vui lòng nhập lại.");
} else {
  const result = findMaxUniqueNumber(inputStr);
  if (result !== null) {
    console.log(`Output: ${result}`);
  } else {
    console.log("Không có số lớn nhất và duy nhất trong chuỗi.");
  }
}
console.log(`input: ${inputStr}`);


