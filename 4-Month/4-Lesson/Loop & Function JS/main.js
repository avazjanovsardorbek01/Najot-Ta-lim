// for while do while
//biror bir ishti n martagacha qaytarilishi yani limiy boladi

// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// with string use while
// let i = 0;
// let str = "hello";
// while (i < str.length) {
//   console.log(str[i]);
//   i++;
// }

// do while
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 4);

// js functions
//Function decloration, Function epression, Arrow function

//Function decloration
// function countNumber(paramter) {
//   console.log("salom");
// }
// countNumber(argument);

// function countNumber(number1, number2) {
//   let total = number1 + number2;
//   console.log(total);
//   return total;
// }
// countNumber(12, 13);

//Function expression
// const Sayhello = function (title) {
//   console.log(title);
//   return title;
// };
// Sayhello("say hello");

// Arrow function
// const arrowFunction = (passive, active) => {
//   console.log(passive);
//   console.log(active);
//   return passive;
// };
// arrowFunction(false, true);

// Ternar operation
// let a = 6;
// a % 2 === 0 ? console.log("juft") : console.log("toq");

// o'rta arifmetika
// function middleNumber(a, b) {
//   let result = (a + b) / 2;
//   return result ? result : "xatolik mavjud";
// }
// console.log(middleNumber(8, 2));

// tub son topish
// const findPrimeNumber = (number) => {
//   let count = 0;
//   let is_prime = null;
//   if (number) {
//     for (let i = 1; i <= number; i++) {
//       if (number % i == 0) {
//         count++;
//       }
//     }
//   } else {
//     return "son kiritilmadi";
//   }
//   if (count === 2) {
//     is_prime = "kiritilgan son tub";
//   } else {
//     is_prime = "kiritilgan son tub emas";
//   }
//   return is_prime;
// };
// findPrimeNumber(2);

// //mukamal son topish
// const findPerfectNumber = function (number) {
//   if (number) {
//     let total = 0;
//     for (let i = 0; i < number; i++) {
//       if (number % i == 0) {
//         total += i;
//       }
//     }
//     if (number === total) {
//       return "mukamal son";
//     } else if (number !== total) {
//       return "mukamal emas";
//     }
//   } else {
//     return "son kiritilmadi";
//   }
// };
// findPerfectNumber(6);
