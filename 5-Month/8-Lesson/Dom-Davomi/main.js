// const handleSubmit = (e) => {
//   e.preventDefault();
//   let title = e.target[0].value;
//   let result = title.split(" ").filter((item) => item !== "");
//   console.log(result);
// };

const handleSubmit = (e) => {
  e.preventDefault();
  let result = document.getElementById("result");
  let number_1 = e.target[0].value;
  let number_2 = e.target[1].value;
  let amal = e.target[2].value;
  if (amal === "*") {
    result.innerText = number_1 * number_2;
  }
};
