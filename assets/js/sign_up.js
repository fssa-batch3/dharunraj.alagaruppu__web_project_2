const form_check = document.querySelector("form");

const store = JSON.parse(localStorage.getItem("array")) ?? []; // store = []

form_check.addEventListener("submit", (e) => {
  e.preventDefault();
  signup();
});

let first_name;
let last_name;
let email;
let phone;
let new_pass;
let confirm_pass;

function signup() {
  first_name = document.getElementById("fname").value.trim();
  last_name = document.getElementById("lname").value.trim();
  email = document.getElementById("email").value.trim();
  phone = document.getElementById("phone").value.trim();
  new_pass = document.getElementById("new_pass").value.trim();
  confirm_pass = document.getElementById("confirm").value.trim();

  let res;

  for (let i = 0; i < store.length; i++) {
    if (store[i].email == email || store[i].phone == phone) {
      res = 1;
      break;
    }
  }

  if (res === 1) {
    alert("email or phone number already regsister");
  } else if (new_pass !== confirm_pass) {
    alert("Oops !! password and confirm password doesn't match.");
  } else {
    emailcheck();
  }
}

function emailcheck() {
  const email_verification = new XMLHttpRequest();

  email_verification.onload = function () {
    const result = JSON.parse(email_verification.response);
    console.log(result);

    if (result.can_connect_smtp === true) {
      phone_check();
    } else {
      alert("User email id is not valid");
    }
  };

  email_verification.open(
    "get",
    `https://api.apilayer.com/email_verification/${email}?apikey=OiccdedKQZOIKrx0BNzCPwMyeG7KlK8K`,
    true
  );
  email_verification.send();
}

function phone_check() {
  const number_check = new XMLHttpRequest();
  number_check.onload = function () {
    const got_number = JSON.parse(number_check.response);

    console.log(got_number);

    if (got_number.carrier !== "" && phone !== "") {
      console.log("valid");
      add_local();
    } else {
      alert("Recheck your phone number");
    }
  };
  number_check.open(
    "get",
    `https://api.apilayer.com/number_verification/validate?apikey=OiccdedKQZOIKrx0BNzCPwMyeG7KlK8K&number=${phone}`,
    true
  );
  number_check.send();
}

function add_local() {
  // let res;

  // for (let i = 0; i < store.length; i++) {
  //   if (store[i].email == email || store[i].phone == phone) {
  //     res = 1;
  //     break;
  //   }
  // }

  // if (res === 1) {
  //   alert("email or phone number already regsister");
  // } else {
  //   const obj = {};

  //   obj.fname = first_name;
  //   obj.lname = last_name;
  //   obj.email = email;
  //   obj.phone = Number(phone);
  //   obj.confirm = confirm_pass;
  //   obj.dob = "";
  //   obj.state = "";
  //   obj.district = "";
  //   obj.pincode = "";
  //   obj.image = "";
  //   obj.primary = "";
  // }

  const obj = {};

  obj.fname = first_name;
  obj.lname = last_name;
  obj.email = email;
  obj.phone = phone;
  obj.confirm = confirm_pass;
  obj.dob = "";
  obj.state = "";
  obj.district = "";
  obj.pincode = "";
  obj.image = "";
  obj.primary = "";

  store.push(obj); // [{name, email, pass}]

  localStorage.setItem("array", JSON.stringify(store)); // array :  [{name, email, pass}]

  alert("successfully signup");

  window.location.href = "./login_page.html";
}
// }
