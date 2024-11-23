//arrayni oxrigi elementini topish
// let arr = [1, 2, 3];
// let last_item = arr[arr.length - 1];
// let last_item = arr.at(-1);
// console.log(last_item);

// let arr = [1, 2, 3];

// function findMaxNumber(arr) {
//   let find = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (find < arr[i]) {
//       find = arr[i];
//     }
//   }
//   return find;
// }
// console.log(findMaxNumber([1, 2, 3, 21, 9, 4]));

// Math.max(), Math.min()
// spread operation => Arraydi yoyip beradi
// let arr = [1, 2, 3, 21, 9, 4];
// let maxNumber = Math.max(...arr);
// let minNumber = Math.min(...arr);
// console.log(minNumber);

// Bir nechta arraylarni birlashtirish  concat=> old version   ...=>new version use spred operation
// let counters = [1, 2, 3];
// let users = [4, 5, 6];
// let result = counters.concat(users);
// let result = [...counters, ...users];
// console.log(result);

// function findArgumentNum(num) {
//   let arr = [1, 2, 3, 4, 5];
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let g = 0; g < i; g++) {
//       if (arr[i] + arr[g] == num) {
//         console.log(arr[g], arr[i]);
//       }
//     }
//   }
// }
// findArgumentNum(7);

// let arrs = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// let result = [];
// for (let i = 0; i < arrs.length; i++) {
//   result.push(...arrs[i]);
// }
// console.log(result);

// spread opeation with object
// let user = { name: "Sardor" };
// let admin = { age: 18 };
// let object = { ...user, ...admin };
// console.log(object);

// Object Methods()
// let user = { name: "user", addres: "Toshkent" };
// Object.seal(user);
// Object.freeze(user   )
// user.name = "admin";
// delete user.addres;
// console.log(user);
