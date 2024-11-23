// function fn(num) {
//   let obj1 = { a: 1, b: 5 };
//   let obj2 = { c: 3, d: 7 };
//   let obj = Object.assign(obj1, obj2);
//   let value = Object.values(obj);
//   let max = Math.max(...value);
//   let min = Math.min(...value);
//   let diff_max = Math.abs(num - max);
//   let diff_min = Math.abs(num - min);
//   console.log(diff_max, diff_min);
// }
// fn(3);

// 2-Misol
// function fn() {
//   let arr = [1, 2, 3, 1, 2, 3]; //[1,2,3]
//   let newarr = [1, 2, 3];
//   for (let i = 0; i < arr.length; i++) {
//     if (!newarr.includes(arr[i])) {
//       newarr.push(arr[i]);
//     }
//   }
//   let min = Math.min(...newarr);
//   let max = Math.max(...newarr);
//   let min_index = newarr.indexOf(min);
//   let max_index = newarr.indexOf(max);
//   newarr[max_index] = min;
//   newarr[min_index] = max;
//   console.log(newarr);
// }
// fn();

// Reference => Object Call Stackda value sifatida-adress saqlaydi, Heapta esa object address saqlaydi
// Reference-Typelar => Array, Object, Function
// Call Stack => 'Xotira'  Xotirada primitive data typelar saqlaydi
// Heap => 'Xotira' Object saqlaydi

// Object copies
// 3 xil usuli bor 1-shallow copy
// let obj = { name: "Sardor" };
// let newobj = { obj };
// obj.name = "Abdulla";
// console.log(newobj);
// console.log(obj);

// 2-Deep copy
// let obj = { name: "Sardor" };
// let deep_copy = { ...obj };
// obj.name = "Bobur";
// console.log(obj);
// console.log(deep_copy);

// 3-Json copy
// let obj = { name: "Sardor", ls: { lesson: "English" } };
// let json_copy = JSON.parse(JSON.stringify(obj));
// obj.ls.lesson = "Russian";
// console.log(obj);
// console.log(json_copy);

// false-qiymatlar=> 0, false, null, undefined, NAN, "",

// && - Birinchi falsy qiymatni qabul qiladi Masalan: true && false && null result=> false chunki birinchi false qiymat kelyapti.
