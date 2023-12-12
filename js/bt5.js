// let chuoi = prompt("Nhập chuỗi cần đảo ngược:");

// let chuoiDaoNguoc = "";

// for (let i = chuoi.length - 1; i >= 0; i--) {
//   chuoiDaoNguoc += chuoi[i];
// }

// console.log("Chuỗi đảo ngược là: " + chuoiDaoNguoc);

function reverse(str) {
  // Chia chuỗi thành các từ bằng khoảng trắng
  const words = str.split();

  // Đảo ngược mỗi từ trong mảng
  const reversedWords = words.map((word) => [...word].reverse().join(""));

  // Tạo chuỗi mới bằng cách kết hợp các từ đã đảo ngược với khoảng trắng
  const reversedString = reversedWords.join(" ");

  return reversedString;
}

// Sử dụng hàm với một chuỗi đầu vào
const inputString = prompt("Chuỗi ký tự cần đảo ngược");
const outputString = reverse(inputString);
console.log(outputString);
