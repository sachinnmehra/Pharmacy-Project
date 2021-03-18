let userName = document.querySelector("#userName");
let password = document.querySelector("#password");
let loginBtn = document.querySelector("#loginBtn");
let link = document.querySelector("#anchol");
if (window.localStorage) {
  console.log("heloooo");
  localStorage.setItem("user", "edyoda");
  localStorage.setItem("pass", "edyoda");

  let user = localStorage.getItem("user", "edyoda");
  let pass = localStorage.getItem("pass", "edyoda");
  loginBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (user == userName.value && pass == password.value) {
      alert("Login SuccessFull");
      window.location.replace("../index.html");
      console.log(window.location);
    } else {
      alert("wrong credentials");
    }
  });
}
