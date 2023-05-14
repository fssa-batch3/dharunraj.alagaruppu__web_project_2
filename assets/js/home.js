const button_link = document.getElementById("button_link");

const back_link = document.querySelector(".back_link");

button_link.addEventListener("click", () => {
  back_link.style.display = "flex";

  button_link.style.display = "none";
});

const show = JSON.parse(localStorage.getItem("array"));

const account_detail =
  JSON.parse(localStorage.getItem("account_details")) ?? [];

const balance_enquire = JSON.parse(localStorage.getItem("bal_enquire")) ?? [];

let email_compare = localStorage.getItem("email");

let accounter_name;

const btn_submit = document.querySelector("form");

btn_submit.addEventListener("submit", (e) => {
  e.preventDefault();
  link_bank();
});

show.forEach((element) => {
  // [{0},{1},......]

  if (element.email === email_compare) {
    // e=arr[0]

    document.querySelectorAll(".fname")[0].innerText = `${element.fname},`; // [0,1]
    document.querySelectorAll(".fname")[1].innerText = element.fname;

    accounter_name = element.fname;

    localStorage.setItem("array", JSON.stringify(show));
  }
});

let account;
let ifsc;
let phone;
let minium;
let balance;
let personal;
let business;
let zero;
let account_type;

let branch;
let bank_name;

let account_store;
let table_obj;

function link_bank() {
  account = document.getElementById("account").value.trim();
  ifsc = document.getElementById("ifsc").value.trim();
  phone = document.getElementById("phone").value.trim();
  minium = document.getElementById("inputGroupSelect03").value.trim();
  email_compare = localStorage.getItem("email");
  balance = Math.floor(Math.random() * 10000);
  personal = document.getElementById("personal");
  business = document.getElementById("business");
  zero = document.getElementById("zero");

  if (personal.checked) {
    account_type = "Savings account";
  } else if (business.checked) {
    account_type = "Current account";
  } else if (zero.checked) {
    account_type = "Zero balance account";
  }

  let succuess;

  show.find((element) => {
    if (element.email === email_compare) {
      if (Number(element.phone) === Number(phone)) {
        succuess = 1;
      }
    }
    // return true;
  });

  if (succuess === 1) {
    api();
  } else {
    alert("Mobile number is not match with your regsistered data");
  }
}
function api() {
  const ifsc_compare = new XMLHttpRequest();
  ifsc_compare.onload = function () {
    const result_ifsc = JSON.parse(ifsc_compare.response);

    console.log(result_ifsc);

    if (result_ifsc.BRANCH === undefined && result_ifsc.BANK === undefined) {
      alert("Enter the correct IFSC code or recheck ");
      alert_ifsc();
    } else {
      branch = result_ifsc.BRANCH;
      bank_name = result_ifsc.BANK;
      add_local();
    }
  };

  ifsc_compare.open("get", `https://api.sandbox.co.in/bank/${ifsc}`, true);
  ifsc_compare.send();
}

function add_local() {
  account_store = {
    account,
    ifsc,
    phone,
    email_compare,
    balance,
    ac_type: account_type,
    branch,
    accounter_name,
    bank_name,
  };

  table_obj = {
    ac_no: account,
    ac_type: account_type,
    ac_balance: balance,
    email_compare,
    accounter_name,
    minium,
    ac_ifsc: ifsc,
  };

  let res;

  for (let i = 0; i < account_detail.length; i++) {
    if (account_detail[i].account === account) {
      res = 1;
      break;
    }
  }

  if (res === 1) {
    alert(" This account number is already exited");
  } else {
    account_detail.push(account_store);

    balance_enquire.push(table_obj);

    localStorage.setItem("account_details", JSON.stringify(account_detail));

    localStorage.setItem("bal_enquire", JSON.stringify(balance_enquire));

    open_primary();

    alert("Thanks for add account");

    // smoothScroll({ yPos: "end", duration: 1000 });

    location.reload();
  }
}

// In this function is used to when user is link new bank account that account number is set the primary account

function open_primary() {
  for (let op = 0; op < show.length; op++) {
    if (show[op].email === email_compare) {
      // let start = show[op].primary;

      show[op].primary = account;

      localStorage.setItem("array", JSON.stringify(show));

      open_average();
    }
  }
}

function open_average() {
  for (let j = 0; j < balance_enquire.length; j++) {
    if (Number(balance_enquire[j].ac_no) === Number(account)) {
      // console.log(account);

      balance = balance_enquire[j].ac_balance;

      const month = balance_enquire[j].monthly_balance ?? [];

      const rotine = {
        day_balance: balance,
      };

      month.push(rotine);

      balance_enquire[j].monthly_balance = month;

      localStorage.setItem("bal_enquire", JSON.stringify(balance_enquire));

      let average_value = 0;

      for (let r = 0; r < balance_enquire[j].monthly_balance.length; r++) {
        average_value += balance_enquire[j].monthly_balance[r].day_balance;
      }

      const average_balance = (
        average_value / balance_enquire[j].monthly_balance.length
      ).toFixed(2);

      balance_enquire[j].average_value = average_balance;
    }
  }

  localStorage.setItem("bal_enquire", JSON.stringify(balance_enquire));
}

let k = 0;

let selectvalue;

account_detail.forEach((e) => {
  if (e.email_compare === email_compare) {
    document.getElementById("bank_account").style.display = "flex";

    const bank_div = document.querySelector("#bank_account");

    const bank = document.createElement("div");
    bank.setAttribute("class", "bank");
    bank_div.append(bank);

    const image = document.createElement("img");
    image.setAttribute("src", "../assets/img/account.png");
    image.setAttribute("alt", "hello");
    image.setAttribute("class", "bank_detail_image");
    bank.append(image);

    const data = [
      {
        label: "Account no",
        for: "account_give",

        type: "text",
        id: "account_give",
        class: "account_give form-control input_size",
        name: "account_give",
        place_holder: "Account no",
        disable: "disable",
      },

      {
        label: "IFSC Code",
        for: "ifsc_give",

        type: "text",
        id: "ifsc_give",
        class: "ifsc_give form-control input_size",
        name: "ifsc_give",
        place_holder: "IFSC Code",
        disable: "disable",
      },

      {
        label: "Branch Name",
        for: "branch",

        type: "text",
        id: "branch",
        class: "branch form-control input_size",
        name: "branch",
        place_holder: "Branch Name",
        disable: "disable",
      },
    ];

    for (let i = 0; i < data.length; i++) {
      const contant = document.createElement("div");
      contant.setAttribute("class", "form-floating mb-3");
      bank.append(contant);

      const input = document.createElement("input");
      input.setAttribute("type", data[i].type);
      input.setAttribute("id", data[i].id);
      input.setAttribute("class", data[i].class);
      input.setAttribute("name", data[i].name);
      input.setAttribute("placeholder", data[i].place_holder);
      input.setAttribute("disable", data[i].disable);
      contant.append(input);

      const label = document.createElement("label");
      label.innerText = data[i].label;
      label.setAttribute("for", data[i].for);
      contant.append(label);
    }

    const set_primary = document.createElement("div");
    set_primary.setAttribute("class", "set_primary");
    bank.append(set_primary);

    const primary = document.createElement("input");
    primary.setAttribute("type", "radio");
    primary.setAttribute("id", e.account);
    primary.setAttribute("class", "input-radio");
    primary.setAttribute("value", e.account);
    primary.setAttribute("name", "primary");
    set_primary.append(primary);

    const primary_label = document.createElement("label");
    primary_label.setAttribute("for", e.account);
    primary_label.innerHTML = "Set primary account";
    set_primary.append(primary_label);

    const btn = document.createElement("button");
    btn.setAttribute("id", "remove_bk");
    btn.setAttribute("class", "btn btn-primary remove_bk");
    btn.innerText = "Remove bank account !!";
    bank.append(btn);

    const symbal = document.createElement("div");
    symbal.setAttribute("class", "tick_append");
    bank.append(symbal);

    document.getElementsByClassName("account_give")[k].value = e.account;
    document.getElementsByClassName("ifsc_give")[k].value = e.ifsc;
    document.getElementsByClassName("branch")[k].value = e.branch;

    k++;

    primary.addEventListener("click", () => {
      selectvalue = primary.value;

      for (let ko = 0; ko < show.length; ko++) {
        if (show[ko].email === email_compare) {
          show[ko].primary = selectvalue;

          localStorage.setItem("array", JSON.stringify(show));

          window.location.href = "./balance_enquire.html";
        }
      }
    });
  }
});

// Bank account detail div append the tick symbal and the information message function   ****

const account_numbers = document.querySelectorAll(".account_give");

show.forEach((e) => {
  account_numbers.forEach((el, ind) => {
    if (Number(el.value) === Number(e.primary) && e.email === email_compare) {
      const primary = document.querySelectorAll(".tick_append");

      const unique_div = document.createElement("div");
      unique_div.setAttribute("class", "unique_div");

      const primary_tick_image = document.createElement("img");
      primary_tick_image.setAttribute("src", "../assets/img/tick_balance.png");
      primary_tick_image.setAttribute("alt", "tick");
      primary_tick_image.setAttribute("id", "primary_tick");
      unique_div.append(primary_tick_image);

      const news = document.createElement("span");
      news.setAttribute("id", "default");
      news.innerText = "Default bank account";
      unique_div.append(news);

      primary[ind].append(unique_div);
    }
  });
});

// In this function used to remove bank account what account is linked in my website ( remove button )

const btn1 = document.querySelectorAll(".remove_bk");

let account_num;

for (let ic = 0; ic < btn1.length; ic++) {
  btn1[ic].addEventListener("click", () => {
    account_num = document.getElementsByClassName("account_give")[ic].value;

    for (let a = 0; a < account_detail.length; a++) {
      if (
        Number(account_detail[a].account) === Number(account_num) &&
        email_compare === account_detail[a].email_compare
      ) {
        account_detail.splice(a, 1);

        localStorage.setItem("account_details", JSON.stringify(account_detail));

        primary_check();
        clear_balance();

        location.reload();
      }
    }
  });
}

function primary_check() {
  // console.log(account_num);

  for (let kd = 0; kd < show.length; kd++) {
    if (Number(show[kd].primary) === Number(account_num)) {
      show[kd].primary = "";

      localStorage.setItem("array", JSON.stringify(show));

      location.reload();
    }
  }
}

function clear_balance() {
  for (let b = 0; b < balance_enquire.length; b++) {
    if (
      Number(balance_enquire[b].ac_no) === Number(account_num) &&
      email_compare === balance_enquire[b].email_compare
    ) {
      balance_enquire.splice(b, 1);

      localStorage.setItem("bal_enquire", JSON.stringify(balance_enquire));
    }
  }
}

let alert_str = "";

const alert_value = document.getElementById("alert_icon");

function alert_ifsc() {
  alert_str = `<img id="error_home"
src="../assets/img/images__2_-removebg-preview.png" alt="error"></img>`;
  alert_value.innerHTML = alert_str;
}
