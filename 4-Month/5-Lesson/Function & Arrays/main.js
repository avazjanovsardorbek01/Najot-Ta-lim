// function letterCount(str) {
//   let i = 0;
//   let vowel_letter = 0;
//   while (i < str.length) {
//     if (
//       str[i] === "a" ||
//       str[i] === "u" ||
//       str[i] === "i" ||
//       str[i] === "e" ||
//       str[i] === "o'" ||
//       str[i] === "o"
//     ) {
//       vowel_letter++;
//     }
//     i++;
//   }
//   console.log(vowel_letter);
//   console.log(str.length - vowel_letter);
// }
// letterCount("sardor");

// 5 yaqin sondi topish
// const fn = (a, b) => {
//   let space_one = Math.abs(5 - a);
//   let space_two = Math.abs(5 - b);
//   if (space_two < space_one) {
//     console.log(b);
//   } else if (space_two > space_one) {
//     console.log(a);
//   } else {
//     console.log("bir xil yaqin");
//   }
// };
// fn(1, 2);

// Arrays
// let arr = [1, 2, 3, 4, true, "string", undefined, null];
// console.log(arr.length);

// Arrays methods push, pop, shift, unshift
// unshift => boshiga element qoshib beradi
// shift => boshidan element olip tashladydi
//push => oxriga element qoshib beradi
// pop => pop oxridan element olib tashlaydi

// arr.push(false);
// arr.pop();
// arr.unshift(0);
// arr.shift();
// console.log(arr);
// let arr = [1, 2, 3, 4, 5];
// let total = 0;
// let total2 = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     total += arr[i];
//   } else {
//     total2 += arr[i];
//   }
// }
// console.log(total);
// console.log(total2);

// let arr = ["salom", 23, false, null, "text"];
// let str = [];
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === "string") {
//     str.push(arr[i]);
//   }
// }
// console.log(str);

// function fn(...params) {
//   let total = 0;
//   for (let i = 0; i < params.length; i++) {
//     total += params[i];
//   }
//   return total > 0 ? total : "argument mavjud emas yoki 0 g teng";
// }
// fn(1, 2, 3, 4, 5);
