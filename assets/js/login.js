const form_click = document.querySelector("form");

form_click.addEventListener("submit", (e) => {
  e.preventDefault();
  login();
});

function login() {
  const attach = JSON.parse(localStorage.getItem("array"));

  const fullname = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  let check;
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
