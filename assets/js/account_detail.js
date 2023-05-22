// now_day();

const show = JSON.parse(localStorage.getItem("array"));

const email_compare = localStorage.getItem("email");

// let click_button = document.querySelector(".click_button");
// console.log(click_button);

let current_user;
show.find((e) => {
  if (String(e.email) === String(email_compare)) {
    return (current_user = e);
  }
});
document.querySelectorAll("#fi_name")[0].innerText = current_user.fname; // [0]

document.getElementById("dob").removeAttribute("required");
document.getElementById("district").removeAttribute("required");
document.getElementById("state").removeAttribute("required");

document.getElementById("fname").value = current_user.fname; // show[0]["fname"] //dharun
document.getElementById("phone").value = current_user.phone;
document.getElementById("email").value = current_user.email;
document.getElementById("dob").value = current_user.dob;
document.getElementById("district").value = current_user.district;
document.getElementById("state").value = current_user.state;

const form_click = document.querySelector("form");

const change_value = document.querySelector("#edit_profiles");

change_value.addEventListener("click", (e) => {
  document.getElementById("dob").removeAttribute("disabled");
  document.getElementById("district").removeAttribute("disabled");
  document.getElementById("state").removeAttribute("disabled");

  const edit_button = document.createElement("button");
  edit_button.setAttribute("class", "back_button1");
  edit_button.innerText = "Save";
  click_button.append(edit_button);

  change_value.style.display = "none";
});

form_click.addEventListener("submit", () => {
  let correction;

  for (let i = 0; i < show.length; i++) {
    if (
      String(document.getElementById("email").value) === String(show[i].email)
    ) {
      if (
        String(document.getElementById("fname").value) ===
          String(current_user.fname) &&
        String(document.getElementById("email").value) ===
          String(current_user.email) &&
        String(document.getElementById("phone").value) ===
          String(current_user.phone)
      ) {
        show[i].dob = document.getElementById("dob").value.trim();
        show[i].district = document.getElementById("district").value.trim();
        show[i].state = document.getElementById("state").value.trim();
        correction = 1;
        break;
      }
    }
  }

  if (correction === 1) {
    localStorage.setItem("array", JSON.stringify(show));
    alert("Successfully your profile updated");
  } else {
    alert("Name , phone number , email_id you are  can't change the data");
  }
});

// let account_num;

const delete_button_value = document.querySelector(".delete_button");
delete_button_value.addEventListener("click", () => {
  for (let i = 0; i < show.length; i++) {
    if (
      String(document.getElementById("email").value) === String(show[i].email)
    ) {
      show.splice(i, 1);

      localStorage.setItem("array", JSON.stringify(show));

      window.location.href = "../index.html";
    }
  }
});

const input_img = document.querySelector("#simple_upload");

const image = document.querySelector("#simple_image");

input_img.addEventListener("change", function () {
  const change_photo = this.files[0];

  if (change_photo) {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      image.setAttribute("src", reader.result);
      const us1 = JSON.parse(localStorage.getItem("array"));

      // us1.forEach(element => {

      // });

      us1[0].image = image.getAttribute("src");
      localStorage.setItem("array", JSON.stringify(us1));
    });

    reader.readAsDataURL(change_photo);
  }
});

const us1 = JSON.parse(localStorage.getItem("array"));
const new_src = us1[0].image;
image.setAttribute("src", new_src);
