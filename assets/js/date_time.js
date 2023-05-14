const date = document.querySelector(".date");
const time = document.querySelector(".time");
const important = new Date();

now_day();
function now_day() {
  let current_day = important.getDate();

  let current_month = important.getMonth() + 1;

  const current_year = important.getFullYear();

  if (current_day < 10) {
    current_day = `0${current_day}`;
  }

  if (current_month < 10) {
    current_month = `0${current_month}`;
  }
  if (date) date.innerHTML = `${current_day}/${current_month}/${current_year}`;
}

now_time();
function now_time() {
  const current_date = new Date();

  let hour = current_date.getHours();
  // console.log(hour)
  let min = current_date.getMinutes();
  let second = current_date.getSeconds();
  let period = "AM";
  const railway_am = "00";

  if (Number(hour) === Number(railway_am)) {
    hour = 12;
  }

  if (hour > 12) {
    hour -= 12;
    period = "PM";
  }

  if (hour < 10) {
    hour = `0${hour}`;
  }

  if (min < 10) {
    min = `0${min}`;
  }

  if (second < 10) {
    second = `0${second}`;
  }

  const correct_time = `${hour}:${min}:${second} ${period}`;
  if (time) time.innerHTML = correct_time;

  setTimeout(now_time, 1000);
}
