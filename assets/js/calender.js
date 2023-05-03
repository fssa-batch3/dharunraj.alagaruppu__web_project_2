let day = document.querySelector(".day");
let date = document.querySelector(".date");
let time = document.querySelector(".time");
let important = new Date();


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

    if (current_day < 10) {

        current_day = "0" + current_day;
    }

    if (current_month < 10) {

        current_month = "0" + current_month;
    }

    date.innerHTML = current_day + "/" + current_month + "/" + current_year;
}

// now_date(important, current_day)

// function now_date(important, current_day) {

//     let split = current_day.split("")
//     let splice = split.splice(0, 1);

//     current_day = split[0]

//     let only_day = no_of_days[current_day];

//     day.innerHTML = only_day

// }

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
let account_number;
let balance;


let balance_enquire = JSON.parse(localStorage.getItem("bal_enquire"));

let signup = JSON.parse(localStorage.getItem("array"));


test()
function test() {

    let value = time.innerHTML;

    if (value == "06:52:58 PM") { //  date chancer *******

        for (let i = 0; i < signup.length; i++) {

            for (let j = 0; j < balance_enquire.length; j++) {

                if (signup[i]["email"] == balance_enquire[j]["email_compare"]) {

                    account_number = balance_enquire[j]["ac_no"];

                    balance = balance_enquire[j]["ac_balance"];

                    console.log(account_number);
                    console.log(balance);

                    let month = balance_enquire[j]["monthly_balance"] ?? [];

                    let rotine = {

                        "day_balance": balance,
                    }

                    month.push(rotine);

                    balance_enquire[j]["monthly_balance"] = month

                    localStorage.setItem("bal_enquire", JSON.stringify(balance_enquire));

                    average()

                }
            }

        }

    }


    // setTimeout(test, 1000);
}

function average() {

    for (let h = 0; h < balance_enquire.length; h++) {

        let average_value = 0;

        for (let r = 0; r < balance_enquire[h]["monthly_balance"].length; r++) {

            average_value += balance_enquire[h]["monthly_balance"][r]["day_balance"]
        }

        balance_enquire[h]["average_value"] = (average_value / balance_enquire[h]["monthly_balance"].length)
    }

    localStorage.setItem("bal_enquire", JSON.stringify(balance_enquire));

}

let account;

let ac_ifsc;

let accounter_name;

let account_minimum_balance;

let average_balance;

let accounter_email;

let subject;

let body;

let current_balance;

monthly_once()

function monthly_once() {

    let index_one = date.innerHTML[0]
    // console.log(index_one);
    let index_two = date.innerHTML[1]
    // console.log(index_two);

    let twenty_five = index_one + index_two
    // console.log(twenty_five);

    let time_one = time.innerHTML
    // console.log(time_one)

    if (twenty_five == "03" && time_one == "07:38:00 PM") {

        for (let b = 0; b < balance_enquire.length; b++) {

            console.log(balance_enquire[b]);

            account = balance_enquire[b]["ac_no"];

            ac_ifsc = balance_enquire[b]["ac_ifsc"];

            current_balance = balance_enquire[b]["ac_balance"]

            accounter_name = balance_enquire[b]["accounter_name"];

            account_minimum_balance = balance_enquire[b]["minium"];

            average_balance = balance_enquire[b]["average_value"];

            accounter_email = balance_enquire[b]["email_compare"];


            if (balance_enquire[b]["minium"] <= balance_enquire[b]["average_value"]) {

                console.log("good");

                subject = " Congratulations!! This month you are maintained well your bank account  . "

                body = `Good morning ${accounter_name} <br><br>
                This month you are escaping from the minimum balance penalty .<br> <br> <b> Your account details </b> <br><br> Your account number = ${account}. <br> Your IFSC code = ${ac_ifsc} <br> Your mininum balance = ${account_minimum_balance}. <br> Your monthly average balance = ${average_balance} <br> Your current balance = ${current_balance} <br> These are the tracker is happend last week. Keep it up the awareness banking services . Congratulations!!
                <br><br>
                Regards <br>
                NETBLIZ <br>`


                goodEmail(accounter_email, subject, body);
            }

            else if (balance_enquire[b]["minium"] >= balance_enquire[b]["average_value"]) {

                console.log("bad");

                subject = " Alert !! You are not maintaining your bank account well "

                body = `Good morning ${accounter_name} <br><br>
                This is the time to wake up !! I think you can't maintain your bank account this month. We have solution for this problem .<br> <br> <b> Your account details </b> <br><br> Your account number = ${account}. <br> Your IFSC code = ${ac_ifsc} <br> Your mininum balance = ${account_minimum_balance}. <br> Your monthly average balance = ${average_balance} <br> Your current balance = ${current_balance} <br>  Immediately go to our website .There are the solutions are available.Get out from the mininum balance penalty. 
                <br><br>
                Regards <br>
                NETBLIZ <br>`

                goodEmail(accounter_email, subject, body);


            }

        }

    }

    setTimeout(monthly_once, 1000);

}

function goodEmail(accounter_email, subject, body) {

    Email.send({

        Host: "smtp.elasticemail.com",
        Username: "manidharun2204@gmail.com",
        Password: "4D6FC23DC9C154060201E850106AFDAC2CBD",
        To: accounter_email,
        From: "manidharun2204@gmail.com",
        Subject: subject,
        Body: body,

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

let calender = ""

for (let d = 1; d < 32; d++) {

    calender += `    <div class="days">

    <div class="full_click">

        <span class="date">${d}</span>
        <div class="sms">

            <div class="sent">
                <span class="type_s">sent</span>
                <span class="sent_value">5</span>
            </div>

            <div class="recive">
                <span class="type_r">recived</span>
                <span class="receive_value">10</span>
            </div>
        </div>


    </div>


</div>`

}

let total_calender = document.querySelector(".total_back")
total_calender.innerHTML = calender

// smart function**********************

// balance_enquire.forEach(element => {
//     delete element["monthly_balance"]
// });
// localStorage.setItem("bal_enquire", JSON.stringify(balance_enquire));


