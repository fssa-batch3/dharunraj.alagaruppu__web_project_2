const email = localStorage.getItem("email");

const balance_enquire = JSON.parse(localStorage.getItem("bal_enquire"));

const account_detail = JSON.parse(localStorage.getItem("account_details"));

for (let ac = 0; ac < account_detail.length; ac++) {
  if (email === account_detail[ac].email_compare) {
    const welcome = document.createElement("div");
    welcome.setAttribute("class", "bank_no");
    document.querySelector(".bank_list").append(welcome);

    const image = document.createElement("img");
    image.setAttribute("src", "../assets/img/account.png");
    image.setAttribute("alt", "Net Bliz");
    welcome.append(image);

    const bank_no = document.createElement("h4");
    bank_no.setAttribute("class", "account_num");
    bank_no.setAttribute("id", "account");
    bank_no.innerText = account_detail[ac].account;
    welcome.append(bank_no);

    const bank_name = document.createElement("h3");
    bank_name.setAttribute("class", "bank_name");
    bank_name.setAttribute("id", "bank_name");
    bank_name.innerText = account_detail[ac].bank_name;
    welcome.append(bank_name);
  }
}

const user_acc = document.querySelectorAll(".bank_no"); // no of div
const account_num = document.querySelectorAll(".account_num");

let ref_num;

for (let p = 0; p < user_acc.length; p++) {
  user_acc[p].addEventListener("click", () => {
    document.querySelector(".container1").style.display = "block";

    document.querySelector("#balance_name").style.display = "none";

    document.querySelector(".bank_list").style.display = "none";

    ref_num = account_num[p].innerHTML;

    check_balance();
  });
}

let customer_balance;
let customer_number;
let customer_type;

function check_balance() {
  for (let t = 0; t < balance_enquire.length; t++) {
    if (
      balance_enquire[t].email_compare === email &&
      Number(ref_num) === Number(balance_enquire[t].ac_no)
    ) {
      customer_balance = balance_enquire[t].ac_balance;

      customer_number = balance_enquire[t].ac_no;

      customer_type = balance_enquire[t].ac_type;

      document.getElementById("balance").innerText = customer_balance;
      document.getElementById("customer_ac").innerHTML = customer_number;
      document.getElementById("ac_type").innerText = customer_type;

      localStorage.setItem("bal_enquire", JSON.stringify(balance_enquire));
    }
  }
}
