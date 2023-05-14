now_day();

const show = JSON.parse(localStorage.getItem("array"));

// const account_name = localStorage.getItem("first_name");

const email_compare = localStorage.getItem("email");

// const balance_enquire = JSON.parse(localStorage.getItem("bal_enquire")) ?? [];

let current_user;
show.find((e) => {
  // parameterized e-->show[0],[1]

  if (e.email === email_compare) {
    return (current_user = e);
  }
});
document.querySelectorAll("#fi_name")[0].innerText = current_user.fname; // [0]

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
  // console.log(current_user["fname"])
  let correction;

  for (let i = 0; i < show.length; i++) {
    if (document.getElementById("email").value === show[i].email) {
      if (
        document.getElementById("fname").value === current_user.fname &&
        document.getElementById("email").value === current_user.email &&
        Number(document.getElementById("phone").value) ===
          Number(current_user.phone)
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

const delete_button = document.querySelector(".delete_button");
delete_button.addEventListener("click", () => {
  for (let i = 0; i < show.length; i++) {
    if (document.getElementById("email").value === show[i].email) {
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
