// DOM => Document Object Model

// function submit() {
//   let username = document.getElementById("username").value;
//   let password = Number(document.getElementById("password").value);
//   if (username === "admin") {
//     if (password === 123) {
//       alert("Success");
//     } else {
//       alert("Password xato");
//     }
//   } else if (password === 123) {
//     alert("username xato");
//   } else {
//     alert("Kiritilgan username va password xato");
//   }
// }

// const create = (e) => {
//   e.preventDefault();
//   let result = document.getElementById("result");
//   let width = e.target[0].value;
//   let height = e.target[1].value;
//   let bg_color = e.target[2].value;
//   let border_radius = e.target[3].value;
//   console.log(width, height, bg_color, border_radius);
//   result.style.width = `${width}px`;
//   result.style.height = `${height}px`;
//   result.style.backgroundColor = bg_color;
//   result.style.borderRadius = `${border_radius}px`;
// };

const isShow = () => {
  let password = document.getElementById("password");
  console.log(password.type);
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
};
