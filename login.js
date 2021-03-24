let userName = document.querySelector("#userName");
let password = document.querySelector("#password");
let loginBtn = document.querySelector("#loginBtn");
let link = document.querySelector("#anchol");
if (window.localStorage) {
  console.log("heloooo");

  localStorage.setItem("user", userName.value);
  localStorage.setItem("pass", password.value);

  let user = localStorage.getItem("user", userName.value);
  let pass = localStorage.getItem("pass", password.value);
  loginBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (user == pass) {
      alert("Login SuccessFull");
      window.location.replace("../order.html");
      console.log(window.location);
    } else {
      alert("wrong credentials");
    }
  });
}
