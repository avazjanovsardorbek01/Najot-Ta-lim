// BigInt, Symbol, isNan, iterables
// array methods => filter(), forEach, map(), reduce()
// let a = isFinite(num)

// let id1 = Symbol(123423);
// let id2 = Symbol("id");
// console.log(id1.description);

// let age = Symbol(23);
// let user = { name: "Sardor", [age]: "23" };
// console.log(user);

// For of bilan loop qisa boladigan objectlar
// iterables => Array, string,

// Symboly key sifatida property qoshish
// let age = Symbol(23);
// let id = Symbol(1);
// let user = { name: "Sardor", [age]: 23 };
// user[id] = 42;
// console.log(user);

// let id1 = Symbol.for("id");
// let id2 = Symbol.for("id");
// console.log(id1 == id2);

// let num = BigInt(4);
// console.log(num);

// ForEach
// let arr = [1, 2, 3, 4];
// arr.forEach((item, index) => {
//   console.log(item);
// });

// Filter
// let arr = [1, 2, 3, 4];
// let filetered_arr = arr.filter((item, index) => item % 2 == 0);
// console.log(filetered_arr);

// Map
// let arr = [1, 2, 3, 4];
// let new_arr = arr.map((item, index) => item * 2);
// console.log(new_arr);

// let num = 123;
// let arr = num
//   .toString()
//   .split("")
//   .map((item) => Number(item));
// console.log(arr);

// Filter
// let users = [
//   { name: "User1", id: "1", age: 11 },
//   { name: "User2", id: "2", age: 12 },
//   { name: "User3", id: "3", age: 13 },
// ];

// let filetered_arr = users.filter((item) => item.id == "1");
// console.log(filetered_arr);
