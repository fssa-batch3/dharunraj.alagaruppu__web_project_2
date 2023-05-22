const email = localStorage.getItem("email");

const signup_array = JSON.parse(localStorage.getItem("array"));

const account_details = JSON.parse(localStorage.getItem("account_details"));

// const balance_enquire = JSON.parse(localStorage.getItem("bal_enquire"));

const history = JSON.parse(localStorage.getItem("history_table")) ?? [];

let sender_value;
let reciver_value;

let sender_email;
let reciver_email;

let account_value;

let sender_name;
let reciver_name;

let function_image;
let type;
let function_amount;
let icon;
let id;
let function_date;
let function_current_balance;
let account_number;

let remark;

active_user();
function active_user() {
  for (let i = 0; i < signup_array.length; i++) {
    if (String(signup_array[i].email) === String(email)) {
      main();
    }
  }
}

function main() {
  for (let j = 0; j < history.length; j++) {
    sender_value = history[j].sender_account;
    reciver_value = history[j].reciver_account;

    sender_email = history[j].sender_email;
    reciver_email = history[j].reciver_email;

    account_search(j);
  }
}

function account_search(j) {
  for (let k = 0; k < account_details.length; k++) {
    account_value = account_details[k].account;

    if (
      String(sender_value) === String(account_value) &&
      String(sender_email) === String(email)
    ) {
      sender_name = history[j].sender_name;

      reciver_name = history[j].reciver_name;

      function_image = "../assets/img/hdfc_icon.png";
      type = history[j].sender_type;
      function_amount = history[j].send_amount;
      icon = "../assets/img/minus_icon.png";
      id = "minus";
      function_date = history[j].date;
      function_current_balance = history[j].sender_balance;
      account_number = history[j].sender_account;
      remark = history[j].remarks;

      create_div();
    } else if (
      String(reciver_value) === String(account_value) &&
      String(reciver_email) === String(email)
    ) {
      sender_name = history[j].sender_name;

      reciver_name = history[j].reciver_name;

      function_image = "../assets/img/hdfc_icon.png";
      type = history[j].reciver_type;
      function_amount = history[j].send_amount;
      icon = "../assets/img/plus_icon.png";
      id = "plus";
      function_date = history[j].date;
      function_current_balance = history[j].reciver_balance;
      account_number = history[j].reciver_account;
      remark = history[j].remarks;

      create_div();
    }
  }
}

function create_div() {
  const main_div = document.querySelector("main");

  const new_container = document.createElement("div");
  new_container.setAttribute("class", "history");
  main_div.append(new_container);

  const send = document.createElement("div");
  send.setAttribute("class", "send_data");
  new_container.append(send);

  const type_fund = document.createElement("div");
  type_fund.setAttribute("class", "type_fund");
  send.append(type_fund);

  const image = document.createElement("img");
  image.setAttribute("id", "bank_icon");
  image.setAttribute("src", function_image);
  image.setAttribute("alt", "bank_icon");
  type_fund.append(image);

  const transfer_type = document.createElement("div");
  transfer_type.setAttribute("class", "transfer_type");
  type_fund.append(transfer_type);

  const increase = document.createElement("h2");
  increase.setAttribute("class", "increase");
  increase.setAttribute("id", "increase");
  increase.innerText = type;
  transfer_type.append(increase);

  const sender_name_value = document.createElement("h5");
  sender_name_value.setAttribute("class", "reciver_name");
  sender_name_value.innerText = `${sender_name} to ${reciver_name}`;
  transfer_type.append(sender_name_value);

  const sender_num = document.createElement("h5");
  sender_num.setAttribute("class", "reciver_num");
  sender_num.innerHTML = sender_value;
  transfer_type.append(sender_num);

  const reciver_num = document.createElement("span");
  reciver_num.setAttribute("class", "send_account");
  reciver_num.innerHTML = reciver_value;
  transfer_type.append(reciver_num);

  const amount = document.createElement("div");
  amount.setAttribute("class", "amount");
  send.append(amount);

  const minus = document.createElement("h4");
  minus.setAttribute("class", "minus");
  minus.setAttribute("id", id);
  minus.innerText = `₹${function_amount}`;
  amount.append(minus);

  const type_model = document.createElement("img");
  type_model.setAttribute("src", icon);
  type_model.setAttribute("alt", "bank_icon");
  amount.append(type_model);

  const balance_data = document.createElement("div");
  balance_data.setAttribute("class", "balance_data");
  new_container.append(balance_data);

  const date = document.createElement("h3");
  date.setAttribute("class", "date");
  date.setAttribute("id", "date");
  date.innerHTML = function_date;
  balance_data.append(date);

  const balance_span = document.createElement("span");
  balance_span.setAttribute("class", "balance_span");
  balance_span.innerText = "Balance :";
  balance_data.append(balance_span);

  const balance = document.createElement("h3");
  balance.setAttribute("class", "balance_span");
  balance.innerText = `₹ ${function_current_balance}`;
  balance_span.append(balance);

  const remark_sms = document.createElement("h3");
  remark_sms.setAttribute("class", "remark");
  remark_sms.innerHTML = `Remarks : ${remark}`;
  new_container.append(remark_sms);
}

const search = document.querySelector("#search");

const histroy_search = document.querySelectorAll(".history");

search.addEventListener("keyup", (key) => {
  const values = key.target.value.toLowerCase();

  for (let i = 0; i < histroy_search.length; i++) {
    const fund_type = histroy_search[i]
      .querySelector(".increase")
      .innerHTML.toLowerCase();

    const date = histroy_search[i]
      .querySelector(".date")
      .innerHTML.toLowerCase();

    const reciver_name_search = histroy_search[i]
      .querySelector(".reciver_name")
      .innerHTML.toLowerCase();

    const balance = histroy_search[i]
      .querySelector(".balance_span")
      .innerHTML.toLowerCase();

    const send_money = histroy_search[i]
      .querySelector(".minus")
      .innerHTML.toLowerCase();

    const send_account = histroy_search[i]
      .querySelector(".send_account")
      .innerHTML.toLowerCase();

    const account_number_search = histroy_search[i]
      .querySelector(".reciver_num")
      .innerHTML.toLowerCase();

    const remarks = histroy_search[i]
      .querySelector(".remark")
      .innerHTML.toLowerCase();

    if (
      fund_type.includes(values) ||
      date.includes(values) ||
      reciver_name_search.includes(values) ||
      balance.includes(values) ||
      send_money.includes(values) ||
      account_number_search.includes(values) ||
      remarks.includes(values) ||
      account_number.includes(values) ||
      send_account.includes(values)
    ) {
      histroy_search[i].style.display = "block";
    } else {
      histroy_search[i].style.display = "none";
    }
  }
});

let select_account;

const filter_div = document.querySelector(".filter");

filter_div.addEventListener("click", () => {
  const filter = document.querySelector(".filter");

  filter.style.display = "none";

  document.querySelector(".select_div").style.display = "block";
});

const result_button = document.querySelector("button");

result_button.addEventListener("click", () => {
  select_account = document.getElementById("from").value.trim();

  if (select_account !== "") {
    search_account(histroy_search, select_account);
  } else {
    alert("click dropdown account number");
  }
});

function search_account() {
  for (let sa = 0; sa < histroy_search.length; sa++) {
    const sender_only =
      histroy_search[sa].querySelector(".reciver_num").innerHTML;

    const recive_only =
      histroy_search[sa].querySelector(".send_account").innerHTML;

    if (
      String(select_account) === String(sender_only) ||
      String(select_account) === String(recive_only)
    ) {
      histroy_search[sa].style.display = "block";
    } else {
      histroy_search[sa].style.display = "none";
    }
  }
}
