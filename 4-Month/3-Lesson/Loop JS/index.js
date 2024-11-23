// Takrorlanuvchi algorthm loop
// for
// let random = parseInt(Math.random() * 25);
// let total = 0;
// console.log(random, "random number");
// for (let i = 0; i <= random; i++) {
//   if (i % 2 === 0) {
//     total = total + i;
//   }
// }
// console.log(total);

//with random number

// let number = parseInt(Math.random() * 15);
// let total_even = 0;
// let total_odd = 0;
// console.log(number, "random_number");
// for (let i = 0; i < number; i++) {
//   if (i % 2 == 0) {
//     total_even = total_even + i;
//   } else {
//     total_odd = total_odd + i;
//   }
// }
// let result = Math.abs(total_even - total_odd);
// console.log(`Juft va Toq sonlarning yg'indisi farqi: ${result}`);

//work with 2 numbers
// let number1 = prompt("number1");
// let number2 = prompt("number2");

// if (number1 < number2) {
//   for (let i = number1; i < number2; i++) {
//     console.log(i);
//   }
// } else {
//   for (let i = number2; i <= number1; i++) {
//     console.log(i);
//   }
// }

//work with string
// let str = prompt("Enter you text...");
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//   //   console.log(str[i]);
//   count++;
// }
// console.log(count);

//find perfect number
// let iSperfect = +prompt("Enter your number...");
// let total = 0;
// for (let i = 1; i < iSperfect; i++) {
//   if (iSperfect % i == 0) {
//     total += i;
//   }
// }
// if (iSperfect === total) {
//   console.log(`${iSperfect} mukamal son`);
// } else {
//   console.log(`${iSperfect} mukamal emas`);
// }
