// Type conversion

// Number to String
// let num = 6; // '6'
// let str = num.toString();// 1-usuli
// let str = String(num); 2-usuli
// let str = `${num}`; 3-usuli
// let str = num + ""; 4-usuli
// console.log(str);

// String to Number
// let str = "3.3";
// let num = +str; 1-Usuli
// let num = Number(str); 2-Usuli
// let num = parseFloat(str); 3-Usuli
// let num = Math.ceil(2.5); 4-Usuli
// let num = Math.floor(str); 4-Usuli
// console.log(num);

//
// let arr = [1, 2, 3];
// let number = Number(arr.join(""));
// console.log(number);

// let num = 543;
// let arr = num.toString().split("");
// let arr = Array.from(String(num), Number).reverse();
// let newarr = Number(arr.join(""));
// console.log(newarr);
// console.log(arr);

// function isPalindrome(num) {
//   let arr = Array.from(num.toString(), Number).reverse();
//   newnum = Number(arr.join(""));
//   if (num == newnum) {
//     return "palindrome";
//   } else {
//     return "palindrome emas";
//   }
// }
// console.log(isPalindrome(11));
