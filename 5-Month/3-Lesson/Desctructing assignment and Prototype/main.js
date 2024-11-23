// Prototype => Objectdagi yashirin xossalar va metodlar toplami
// let user = { name: "user" };
// let admin = { name: "admin" };
// Object.prototype.freezeName = function () {
//   let result = Object.defineProperty(this, "name", { writable: false });
//   return result;
// };
// user.freezeName();
// admin.freezeName();
// user.name = "ASDAFS";
// admin.name = "ASDAFS";
// console.log(user);
// console.log(admin);

// This => Globalniy kontextka yonalish
// let obj = {
//   name: "Sardor",
//   age: 20,
//   sayName: function () {
//     return this.name;
//   },
// };
// console.log(obj);

// Destructing assignment => Bu array va object lar ichidagi bazi qiymatlarni "chiqarip olish"
// (unpacking) qilish uchun ishlatiladi

// let obj = { name: "Alisher", age: 20 };
// const { age } = obj;
// console.log(age);

// let obj = { name: "Alisher", age: 20 };
// const { age, ...others } = obj;
// console.log(age);
// console.log(others);

// Destructing assignment with string
// let str = "Sardor";
// let [a, ...others] = str;
// console.log(a);
// console.log(others);

// Destructing assignment with array
// let arr = [1, false, 32, "string"];
// const [a, b] = arr;
// console.log(a, b);

// Java Script is sync
// Event loop => Js ni async qilip beradi
