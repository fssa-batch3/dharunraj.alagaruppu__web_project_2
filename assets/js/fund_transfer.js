const send_account = JSON.parse(localStorage.getItem("send_account")) ?? [];

const history_table = JSON.parse(localStorage.getItem("history_table")) ?? [];

// const account_check = JSON.parse(localStorage.getItem("account_details"));

const balance_page = JSON.parse(localStorage.getItem("bal_enquire"));

const signup_array = JSON.parse(localStorage.getItem("array"));

const email_compare = localStorage.getItem("email");

const current_date = new Date().toJSON().slice(0, 10);

const textAreaExample6 = document.querySelectorAll(".textAreaExample6");

// option_phone()
// function option_phone() {
//   // const current_ac = document.getElementById("from");

//   const phone_numbers = document.getElementById("from_num");

//   for (let ac = 0; ac < account_check.length; ac++) {
//     if (account_check[ac].email_compare === email_compare) {
//       const account_match = account_check[ac].account;

//       // const option = document.createElement("option");
//       // option.setAttribute("value", account_match);
//       // option.innerHTML = account_match;
//       // current_ac.append(option);

//       const phone_option = document.createElement("option");
//       phone_option.setAttribute("value", account_match);
//       phone_option.innerHTML = account_match;
//       phone_numbers.append(phone_option);
//     }
//   }
// }

const send_button = document.querySelectorAll("form");

send_button[0].addEventListener("submit", (j) => {
  j.preventDefault();

  account_to_account();
});

let result;

let from_account;
let to_account;
let to_ifsc;
let send_amount;
let sender_balances;
let remarks;

function account_to_account() {
  from_account = document.getElementById("from").value.trim();
  to_account = document.getElementById("to").value.trim();
  to_ifsc = document.getElementById("ifsc").value.trim();
  send_amount = document.getElementById("amount").value.trim();
  remarks = textAreaExample6[0].value.trim();

  balance_page.forEach((e) => {
    if (
      Number(e.ac_no) === Number(from_account) &&
      Number(from_account) !== Number(to_account) &&
      e.email_compare !== email_compare
    ) {
      sender_balances = e.ac_balance;
      result = 1;
    }
  });

  if (result === 1) {
    if (sender_balances >= send_amount) {
      local_push(
        from_account,
        to_account,
        to_ifsc,
        send_amount,
        email_compare,
        current_date,
        remarks
      );
    } else {
      alert("Sorry!! You don't have money to send");
    }
  } else {
    alert(
      "Sorry!! Reciver is not there or recheck your benificary account number"
    );
  }
}

let account_account;
let history;
// let backuphistory;

function local_push() {
  account_account = {
    from_account,
    to_account,
    to_ifsc,
    send_amount,
    email_compare,
    remarks,
  };

  history = {
    sender_account: from_account,
    reciver_account: to_account,
    send_amount,
    sender_email: email_compare,
    date: current_date,
    remarks,
    sender_type: "",
    sender_balance: "",
    sender_name: "",
    reciver_balance: "",
    reciver_type: "",
    reciver_name: "",
    reciver_email: "",
  };

  send_account.push(account_account);

  history_table.push(history);

  localStorage.setItem("send_account", JSON.stringify(send_account));

  localStorage.setItem("history_table", JSON.stringify(history_table));

  balance_change(from_account, send_amount, to_account);

  window.location.href = "./history.html";

  // alert("Thanks for send money");
}

let old_balance;
let sender_type;
let sender_name;

function balance_change() {
  balance_page.forEach((element) => {
    if (
      element.email_compare === email_compare &&
      Number(element.ac_no) === Number(from_account)
    ) {
      old_balance = element.ac_balance;

      sender_name = element.accounter_name;

      old_balance = Number(old_balance) - Number(send_amount);

      element.ac_balance = old_balance;

      sender_type = "Money sent";

      for (let di = 0; di < history_table.length; di++) {
        if (
          Number(from_account) === Number(history_table[di].sender_account) &&
          history_table[di].sender_type === "" &&
          history_table[di].sender_balance === "" &&
          history_table[di].sender_name === ""
        ) {
          history_table[di].sender_type = sender_type;

          history_table[di].sender_balance = old_balance;

          history_table[di].sender_name = sender_name;

          localStorage.setItem("history_table", JSON.stringify(history_table));
        }
      }

      localStorage.setItem("bal_enquire", JSON.stringify(balance_page));

      reciver(to_account, send_amount);
    }
  });
}

let recived_money;
let reciver_type;
let reciver_name;
let receiver_email;

function reciver() {
  balance_page.forEach((element) => {
    if (Number(element.ac_no) === Number(to_account)) {
      recived_money = element.ac_balance;

      reciver_name = element.accounter_name;

      receiver_email = element.email_compare;

      recived_money = Number(recived_money) + Number(send_amount);

      element.ac_balance = recived_money;

      localStorage.setItem("bal_enquire", JSON.stringify(balance_page));

      reciver_type = "Money received";

      for (let d = 0; d < history_table.length; d++) {
        if (
          Number(to_account) === Number(history_table[d].reciver_account) &&
          history_table[d].reciver_balance === "" &&
          history_table[d].reciver_type === "" &&
          history_table[d].reciver_name === "" &&
          history_table[d].reciver_email === ""
        ) {
          history_table[d].reciver_balance = recived_money;

          history_table[d].reciver_type = reciver_type;

          history_table[d].reciver_name = reciver_name;

          history_table[d].reciver_email = receiver_email;

          localStorage.setItem("history_table", JSON.stringify(history_table));
        }
      }
    }
  });
}

send_button[1].addEventListener("submit", (p) => {
  p.preventDefault();

  phone_transaction();
});

let ph_number;
let primary_ac;
let reciver_ac_number;

function phone_transaction() {
  from_account = document.getElementById("from_num").value.trim();

  ph_number = document.getElementById("to_num").value.trim();

  send_amount = document.getElementById("to_amount").value.trim();

  remarks = textAreaExample6[1].value.trim();

  balance_page.forEach((e) => {
    if (Number(e.ac_no) === Number(from_account)) {
      sender_balances = e.ac_balance;
    }
  });

  signup_array.forEach((e) => {
    if (Number(e.phone) === Number(ph_number) && e.email !== email_compare) {
      primary_ac = e.primary;
      // reciver_ac_number =

      result = 1;
    }
  });

  if (result === 1) {
    if (sender_balances >= send_amount) {
      push_local(
        from_account,
        ph_number,
        send_amount,
        email_compare,
        current_date,
        primary_ac,
        remarks
      );
    } else {
      alert("Sorry!! You don't have money to send");
    }
  } else {
    alert(
      "Sorry!! Reciver is not there or recheck your benificary phone number"
    );
  }
}

let phone_phone;

function push_local() {
  phone_phone = {
    from_account,
    to_phone: ph_number,
    send_amount,
    email_compare,
    remarks,
  };

  history = {
    sender_account: from_account,
    to_phone: ph_number,
    send_amount,
    sender_email: email_compare,
    date: current_date,
    reciver_account: primary_ac,
    remarks,
    sender_type: "",
    sender_balance: "",
    sender_name: "",
    reciver_balance: "",
    reciver_type: "",
    reciver_name: "",
    reciver_email: "",
  };

  send_account.push(phone_phone);

  history_table.push(history);

  localStorage.setItem("send_account", JSON.stringify(send_account));

  localStorage.setItem("history_table", JSON.stringify(history_table));

  balance_change_sender(from_account, send_amount, primary_ac);

  window.location.href = "./history.html";

  alert("Thanks for send money");
}

function balance_change_sender() {
  balance_page.forEach((element) => {
    if (
      element.email_compare === email_compare &&
      Number(element.ac_no) === Number(from_account)
    ) {
      old_balance = element.ac_balance;

      sender_name = element.accounter_name;

      old_balance = Number(old_balance) - Number(send_amount);

      element.ac_balance = old_balance;

      sender_type = "Money sent";

      for (let di = 0; di < history_table.length; di++) {
        if (
          Number(from_account) === Number(history_table[di].sender_account) &&
          history_table[di].sender_type === "" &&
          history_table[di].sender_balance === "" &&
          history_table[di].sender_name === ""
        ) {
          history_table[di].sender_type = sender_type;

          history_table[di].sender_balance = old_balance;

          console.log(sender_name);
          history_table[di].sender_name = sender_name;

          localStorage.setItem("history_table", JSON.stringify(history_table));
        }
      }

      console.log("crt");
      localStorage.setItem("bal_enquire", JSON.stringify(balance_page));

      reciver_amount();
      console.log("okk");
    }
  });
}

function reciver_amount() {
  balance_page.forEach((element) => {
    console.log("ioii");
    // console.log(element.ac_no);
    console.log(primary_ac);
    if (Number(element.ac_no) === Number(primary_ac)) {
      recived_money = element.ac_balance;

      console.log(recived_money);
      reciver_name = element.accounter_name;
      console.log(reciver_name);

      receiver_email = element.email_compare;

      console.log(receiver_email);

      reciver_type = "Money received";

      recived_money = Number(recived_money) + Number(send_amount);

      element.ac_balance = recived_money;
      console.log(element.ac_balance);

      localStorage.setItem("bal_enquire", JSON.stringify(balance_page));

      for (let d = 0; d < history_table.length; d++) {
        if (
          Number(primary_ac) === Number(history_table[d].reciver_account) &&
          history_table[d].reciver_balance === "" &&
          history_table[d].reciver_type === "" &&
          history_table[d].reciver_name === "" &&
          history_table[d].reciver_email === ""
        ) {
          history_table[d].reciver_balance = recived_money;

          history_table[d].reciver_type = reciver_type;

          history_table[d].reciver_name = reciver_name;

          history_table[d].reciver_email = receiver_email;

          localStorage.setItem("history_table", JSON.stringify(history_table));
        }
      }
    }
  });
}
