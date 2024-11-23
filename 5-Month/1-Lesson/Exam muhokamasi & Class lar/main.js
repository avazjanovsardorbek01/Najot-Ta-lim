// property flags
// let age = Symbol("age");
// console.log(age.description);

// let user = { name: "Sardor", [age]: 32 };
// console.log(user[age]);

// writable => Ozgartirish ba Ozgartirmaslik uchun 'object value',
// enumurable => Loopta korinish yoki korinmaslik uchun
// configurable => Ochirish yoki ochirmaslik uchun
let age = Symbol("age");
let user = { name: "Sardor", [age]: 32 };
// Object.defineProperty(user, age, { enumerable: false });
// Object.defineProperties(user, {
//   name: {
//     writable: false,
//     enumerable: false,
//   },
//   age:{
//     writable: false
//   }
// });
console.log(user);
