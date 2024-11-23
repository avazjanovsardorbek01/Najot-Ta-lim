// function cutString(str) {
//   let arr = str.split(" ").filter((item) => item !== "");
//   let count = 0;
//   arr.forEach((item) => {
//     if (item.includes("a")) {
//       count++;
//     }
//   });
//   console.log(count);
// }
// cutString("   Salom dunyo   ");

// Constructor function & Class

// function ConstructorFn(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const user1 = new ConstructorFn("Ravshan", 2003);
// const user2 = new ConstructorFn("Abbos", 2004);
// console.log(user1, user2);

// Class
class Myuser {
  //   name = "User";
  constructor(name, age) {
    this.lesson = name;
    this.age = age;
  }
}
const user = new Myuser("English", 20);
console.log(user);
