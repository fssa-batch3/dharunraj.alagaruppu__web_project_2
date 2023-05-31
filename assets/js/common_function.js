const current_ac = document.getElementById("from");

const phone_numbers = document.getElementById("from_num");

account_add();
function account_add() {
  const account_check = JSON.parse(localStorage.getItem("account_details"));

  const email_compare = localStorage.getItem("email");

  for (let o = 0; o < account_check.length; o++) {
    if (String(account_check[o].email_compare) === String(email_compare)) {
      const account_match = account_check[o].account;

      const option = document.createElement("option");
      option.setAttribute("value", account_match);
      option.innerHTML = account_match;
      // console.log(account_match.length,"ppp");
      if (current_ac) {
        current_ac.append(option);
      }

      const phone_option = document.createElement("option");
      phone_option.setAttribute("value", account_match);
      phone_option.innerHTML = account_match;
      if (phone_numbers) {
        phone_numbers.append(phone_option);
      }
    }
  }
}

restart_tab();
function restart_tab() {
  const restart = document.getElementById("restart");
  if (restart)
    restart.addEventListener("click", () => {
      location.reload();
    });
}
