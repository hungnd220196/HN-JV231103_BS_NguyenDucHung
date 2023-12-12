function deleteNumber(str) {
  // Chuyển chuỗi thành mảng ký tự
  const characters = str.split("");

  // Lọc ra các ký tự không phải số
  const filter = characters.filter((char) => isNaN(char) || char === " ");

  // Tạo chuỗi mới từ mảng ký tự đã lọc
  const resultString = filter.join("");

  return resultString;
}

// Sử dụng hàm với một chuỗi đầu vào
const inputString = prompt(" mời bạn nhập chuỗi");
const outputString = deleteNumber(inputString);
console.log(outputString);
