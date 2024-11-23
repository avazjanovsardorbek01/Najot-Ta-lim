// arraydi ikkta metodlarga bolinadi mutable va imutable
//mutable metodlae => biror bir arraydi ustida qanaqadir amal bajaradi va osha arrayni ozgartrip yuboradi
//immutable metodlae => biror bir arraydi ustida qanaqadir amal bajaradi lekin arraydi xech qanaqasiga ozgartirmaydi
//array methods reduce() sort() callback qabul qiladi
// function fn2(callback) {
//   let arr = [1, 2, 3];
//   callback(arr);
// }
// fn2((arrays) => {
//   console.log(arrays);
// });

// reduce ikkta parametr qabul qiladi  a va b
// a=> accumilator
// b => current value
// let arr = [];
// let total = arr.reduce((a, b) => a + b, 0);
// console.log(total);

// sort  sortirovka qiladi
// let arr = [1, 2, 3, 4];
// arr.sort((a, b) => a - b);
// console.log(arr);

// splice ixtiyorit elementni olip tashlaydi indexi orqali
// let arr = [1, 2, 3, 4];
// arr.splice(2, 1);
// console.log(arr);

// icludes return boolean true, false
// let arr = [1, 2, 3, 4];
// let result = arr.includes(4);
// console.log(result);

// function fn(num) {
//   let arr = [1, 2, 3, 4];
//   if (arr.includes(num)) {
//     return "bor";
//   } else {
//     return "yoq";
//   }
// }
// fn(1);

// IndexOf
//lastIndexOf
// let arr = [1, 2, 3, 4, 1];
// let index = arr.indexOf(4);
// let index = arr.lastIndexOf(1);
// console.log(index);
