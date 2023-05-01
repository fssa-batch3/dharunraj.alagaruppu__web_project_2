let day = document.querySelector(".day");
let date = document.querySelector(".date");
let time = document.querySelector(".time");
let important = new Date();
// console.log(important)

// console.log(day);
// console.log(date);
// console.log(time);
let current_day;
let no_of_days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thuresday", "Friday", "Saturday"];

now_day(important)

function now_day(important) {

    current_day = important.getDay();
    // console.log(day)
    let current_month = important.getMonth() + 1;
    // console.log(current_month);
    let current_year = important.getFullYear();
    // console.log(current_year);

    date.innerHTML = current_day + "/" + current_month + "/" + current_year
}

now_date(important, current_day)

function now_date(important, current_day) {

    let only_day = no_of_days[current_day];
    // console.log(day);

    day.innerHTML = only_day

}

now_time()
function now_time() {

    let current_date = new Date();

    let hour = current_date.getHours();
    // console.log(hour)
    let min = current_date.getMinutes();
    let second = current_date.getSeconds();
    let period = "AM";

    if (hour == 0) {
        hour = 12;
    }

    if (hour > 12) {
        hour = hour - 12;
        period = "PM";

    }

    if (hour < 10) {
        hour = "0" + hour;

    }

    if (min < 10) {
        min = "0" + min;

    }

    if (second < 10) {
        second = "0" + second;

    }

    let correct_time = hour + ":" + min + ":" + second + " " + period;
    time.innerHTML = correct_time;

    setTimeout(now_time, 1000);

}
test()
function test() {

    let value = time.innerHTML;
    // console.log(value);

    let balance_enquire = JSON.parse(localStorage.getItem("bal_enquire"));
    // console.log(balance_enquire);
    let signup = JSON.parse(localStorage.getItem("array"));


    if (value == "12:08:00 PM") {

        for (let i = 0; i < signup.length; i++) {

            for (let j = 0; j < balance_enquire.length; j++) {

                if (signup[i]["email"] == balance_enquire[j]["email_compare"]) {

                    let account_number = balance_enquire[j]["ac_no"];

                    let balance = balance_enquire[j]["ac_balance"];

                    console.log(account_number);
                    console.log(balance);

                    sendEmail()
                }
            }

        }

    }

    setTimeout(test, 1000);
}

function sendEmail() {

    Email.send({

        Host: "smtp.elasticemail.com",
        Username: "manidharun2204@gmail.com",
        Password: "4D6FC23DC9C154060201E850106AFDAC2CBD",
        To: 'nareshfreshworks@gmail.com',
        From: "manidharun2204@gmail.com",
        Subject: "Sending Email using javascript",
        Body: "Well that was easy!!",

        // Attachments: [
        //     {
        //         name: "File_Name_with_Extension",
        //         path: "https://drive.google.com/file/d/1RhOnDY9rkq-tjYnhhjUEUV-WEjjKL_Wh/view?usp=sharing"
        //     }]
    })

        .then(function (message) { //try{} catch{}
            alert("Mail has been sent successfully")

        })
        .catch((error) => {
            alert("error")

        })

}


