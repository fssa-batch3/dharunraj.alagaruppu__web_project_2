

// left page is start

let welcome = document.createElement("div");
welcome.setAttribute("class", "welcome");
document.querySelector(".main").append(welcome);    //main 1st child is start


let image = document.createElement("img");
image.setAttribute("src", "../assets/img/image_processing20201202-31245-1hyedqz.gif");
image.setAttribute("alt", "Net Bliz");
document.querySelector(".welcome").append(image);

let heading = document.createElement("h1");
heading.innerText = "welcome!!";
welcome.append(heading);

let pickup = document.createElement("h3");
pickup.innerText = "You are 30 seconds away to experiencing your new Banking World ";
welcome.append(pickup);

let a = document.createElement("a");
a.setAttribute("href", "./login_page.html");
welcome.append(a);

let button = document.createElement("button");
button.setAttribute("class", "welcome_button");
button.innerText = "Login";
a.append(button);

// left half page is end



//container for button , form , button

let content_of_singnup = document.createElement("div");
content_of_singnup.setAttribute("class", "sing_up");
document.querySelector(".main").append(content_of_singnup);     //main 2st child is start


// Nice buttons start


// let for_button = document.createElement("div");
// for_button.setAttribute("class", "for_button");
// content_of_singnup.append(for_button);

// let back_blue = document.createElement("div");
// back_blue.setAttribute("class", "back_blue");
// for_button.append(back_blue);

// let Personal_a = document.createElement("a");
// a.setAttribute("href", "#");
// back_blue.append(Personal_a);

// let Address_a = document.createElement("a");
// a.setAttribute("href", "./login_page.html");
// back_blue.append(Address_a);

// let input_button = document.createElement("button");
// input_button.setAttribute("class", "top_button");
// input_button.setAttribute("id", "hover");
// input_button.innerText = ("Personal");
// Personal_a.append(input_button);

// let input_button2 = document.createElement("button");
// input_button2.setAttribute("class", "top_button");
// input_button2.innerText = ("Address");
// Address_a.append(input_button2);




const obj = [

    {

        "for": "fname",
        "text": "",

        "type": "text",
        "name": "fname",
        "id": "fname",
        "placeholder": "First Name *",
        "required": "required",

        "pattern": "[A-Za-z]{2,29}",
        "tittle": "Your pattern minium length of 2 characters",
        "aria": "First name"

    },

    {

        "for": "lname",
        "text": "",

        "type": "text",
        "name": "lname",
        "id": "lname",
        "placeholder": "Last Name *",

        "pattern": "[a-zA-Z]{1,29}",
        "tittle": "Your pattern is minium 1 to 20 character",
        "aria": "Last Name"

    },

    {

        "for": "email",
        "text": "",

        "type": "email",
        "name": "email",
        "id": "email",
        "placeholder": "Email.Id *",
        "tittle": "Your pattern un accectable",
        "aria": "Email.Id "



    },

    {

        "for": "phone",
        "text": "",

        "type": "number",
        "name": "phone",
        "id": "phone",
        "placeholder": "Phone No *",

        "pattern": "[0-9]{10,12}",
        "tittle": "Your number should be 10 numbers",
        "aria": "Phone No"
    },

    {

        "for": "new_pass",
        "text": "",

        "type": "password",
        "name": "new_pass",
        "id": "new_pass",
        "placeholder": "Create password *",

        "pattern": "[0-9a-zA-Z]{8,20}",
        "tittle": " 8 letter or 8 number is required",
        "aria": "Create password "
    },

    {

        "for": "confirm",
        "text": "",

        "type": "password",
        "name": "confirm",
        "id": "confirm",
        "placeholder": "Confirm password *",

        "pattern": "[0-9A-Za-z]{8,20}",
        "tittle": " 8 letter or 8 number is required",
        "aria": "Confirm password"
    }

]


// Form is started this point

let page_name = document.createElement("h1");
page_name.innerText = ("Regsister here !!");
content_of_singnup.append(page_name);

// let quote = document.createElement("h3");
// quote.innerText=("Banking in your pocket");
// content_of_singnup.append(quote);



let form = document.createElement("form");
content_of_singnup.append(form);

for (let i = 0; i < obj.length; i++) {

    let label_text = document.createElement("label");
    label_text.setAttribute("for", obj[i]["for"]);
    label_text.innerText = obj[i]["text"];
    form.append(label_text);

    let input_box = document.createElement("input");
    input_box.setAttribute("type", obj[i]["type"]);
    input_box.setAttribute("name", obj[i]["name"]);
    input_box.setAttribute("id", obj[i]["id"]);
    input_box.setAttribute("placeholder", obj[i]["placeholder"]);
    input_box.setAttribute("title", obj[i]["tittle"]);

    // input_box.setAttribute("min-length", obj[i]["min"]);
    // input_box.setAttribute("max-length", obj[i]["max"]);
    if (i < 2) {
        input_box.setAttribute("pattern", obj[i]["pattern"]);
    }
    else if (i == 2) {
        // console.log("none");
    }
    else {
        input_box.setAttribute("pattern", obj[i]["pattern"]);
    }
    input_box.setAttribute("required", "");
    // input_box.setAttribute("pattern", obj[i]["pattern"]);

    form.append(input_box);

}

//gender radio over....

let bottom_button = document.createElement("div");
bottom_button.setAttribute("class", "btm_btn");
form.append(bottom_button);

let next = document.createElement("button");
next.setAttribute("class", "bottom_button");
next.innerText = ("Register");
bottom_button.append(next);



let form_check = document.querySelector("form");

form_check.addEventListener("submit", e => {
    e.preventDefault()
    signup()

})

function signup() {

    let first_name = document.getElementById("fname").value.trim()
    let last_name = document.getElementById("lname").value.trim()
    let email = document.getElementById("email").value.trim()
    let phone = document.getElementById("phone").value.trim()
    let new_pass = document.getElementById("new_pass").value.trim()
    let confirm = document.getElementById("confirm").value.trim()


    if (first_name != "" && last_name != "" && email !== "" && new_pass != "" && confirm != "" && phone != "") {

        if (new_pass != confirm) {
            alert("Oops !! password and confirm password doesn't match.")
        }

        else {

            let store = JSON.parse(localStorage.getItem("array")) ?? []; //store = []

            let res;

            for (let i = 0; i < store.length; i++) {

                if (store[i]["email"] === email) {
                    res = 1;
                    break;
                }
            }

            if (res == 1) {
                alert("email already registered")

            }

            else {
                let obj = {};

                obj["fname"] = first_name
                obj["lname"] = last_name
                obj["email"] = email
                obj["phone"] = phone
                obj["new_pass"] = new_pass
                obj["confirm"] = confirm
                obj["dob"] = ""
                obj["state"] = ""
                obj["district"] = ""
                obj["pincode"] = ""
                obj["image"] = ""


                store.push(obj);//[{name, email, pass}]

                localStorage.setItem("array", JSON.stringify(store)); // array :  [{name, email, pass}]

                alert("successfully signup");

                window.location.href = "./login_page.html"

            }
        }

    }

    else {
        alert("Can't get a data.Please give a value")
    }
}



