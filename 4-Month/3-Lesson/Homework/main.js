// 1-Misol
// let num = parseInt(Math.random() * 15);
// let total_even = 0;
// let total_odd = 0;
// console.log(num, "is your number");
// for (let i = 0; i <= num; i++) {
//   if (i % 2 == 0) {
//     total_even = total_even + i;
//   } else {
//     total_odd = total_odd + i;
//   }
// }
// let result = Math.abs(total_even - total_odd);
// console.log(`juft va toq sonlarning ygindisi farqi ${result}`);

// let num1 = +prompt("Enter your number1...");
// let num2 = +prompt("Enter your number2...");
// let count = 0;
// for (let i = 0; i <= num1; i++) {
//   if (num1 > i) {
//     count++;
//   } else if (num2 <= i) {
//     count++;
//   }
// }
// console.log(count);

// 3-Misol
// let num = +prompt("Enter your number...");
// for (let i = 1; i <= num; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   // console.log(i);
// }

// 4-Misol
// let text = prompt("Enter your text...");
// for (let i = 1; i <= text.length; i++) {
//   console.log(i);
// }

// 5-Misol/////////
// let num = +prompt("Enter your number...");
// let count = 0;
// for (let i = 1; i <= num; i++) {
//   if (num % i === 0) {
//     count++;
//   }
// }
// if (count == 2) {
//   console.log(`${num} kiritilgan son tub`);
// } else {
//   console.log(`${num} kiritilgan son tub emas`);
// }

// 6-Misol
let text = prompt("Enter your text...");
let count = 0;
for (let i = 1; i < text.length; i++) {
  let l = text[i];
  if (
    text[i] == "a" ||
    text[i] == "e" ||
    text[i] == "i" ||
    text[i] == "o" ||
    text[i] == "u" ||
    text[i] == "o'"
  ) {
    count++;
  }
}
console.log(i);
// let text = prompt("Enter your text...");
// let count = 0;
// for (let i = 1; i < text.length; i++) {
//   let l = text[i];
//   if (
//     text[i] == "a" ||
//     text[i] == "e" ||
//     text[i] == "i" ||
//     text[i] == "o" ||
//     text[i] == "u" ||
//     text[i] == "o'"
//   ) {
//     count++;
//   }
// }

// console.log(text.length - count);
// let num = +prompt("Enter your number...");
// let total = 0;
// for (let i = 0; i < num; i++) {
//   if (num % i === 0) {
//     total += i;
//   }
// }
// if (total === num) {
//   console.log(`${num} kiritilgan son mukamal`);
// } else {
//   console.log(`${num} kiritilgan son mukamal emas`);
// }
