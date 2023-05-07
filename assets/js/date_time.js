let day = document.querySelector(".day");
let date = document.querySelector(".date");
let time = document.querySelector(".time");
let important = new Date();

let no_of_days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thuresday", "Friday", "Saturday"];

now_day(important)

function now_day(important) {

    let current_day = important.getDate();
    // console.log(current_day);
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


