const form_click = document.querySelector("form");

const attach = JSON.parse(localStorage.getItem("array"));

let fullname;
let email;
let password;

let check;

form_click.addEventListener("submit", (e) => {
  e.preventDefault();
  login();
});

function login() {
  fullname = document.getElementById("fullname").value.trim();
  email = document.getElementById("email").value.trim();
  password = document.getElementById("password").value.trim();

  if (
    String(email) === "netbliz2023@gmail.com" &&
    String(fullname) === "Admin" &&
    String(password) === "1234567890Aa"
  ) {
    alert("Admin Logged");
    window.location.href = "./admin.html";
  } else {
    attach.forEach((element) => {
      if (
        element.fname === fullname &&
        element.email === email &&
        element.confirm === password
      ) {
        check = 1;
      }
    });

    if (check === 1) {
      localStorage.setItem("email", email); // login user email details

      alert(" Successfully login");

      window.location.href = "home.html";
    } else {
      alert("Some thing went increate .Please recheck your details !!");
    }
  }
}
