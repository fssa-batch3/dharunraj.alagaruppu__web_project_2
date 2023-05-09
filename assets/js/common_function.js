
function primary_check() {

    for (let kd = 0; kd < show.length; kd++) {

        if (show[kd]["primary"] == account_num) {

            show[kd]["primary"] = "";

            localStorage.setItem("array", JSON.stringify(show));

            location.reload();

        }

    }

}

function clear_balance() {

    for (let b = 0; b < balance_enquire.length; b++) {

        if (balance_enquire[b]["ac_no"] == account_num && email_compare == balance_enquire[b]["email_compare"]) {

            balance_enquire.splice(b, 1);

            localStorage.setItem("bal_enquire", JSON.stringify(balance_enquire));

        }

    }

}


function option() {

    let account_check = JSON.parse(localStorage.getItem("account_details"));
    let email_compare = localStorage.getItem("email");


    let current_ac = document.getElementById("from");

    let phone_numbers = document.getElementById("from_num");

    let select_account = document.querySelector("#select_account");

    for (let ac = 0; ac < account_check.length; ac++) {

        if (account_check[ac]["email_compare"] == email_compare) {

            let account_match = account_check[ac]["account"];

            let option = document.createElement("option");
            option.setAttribute("value", account_match);
            option.innerHTML = (account_match);
            if (current_ac) {
                current_ac.append(option);
            }

            let phone_option = document.createElement("option");
            phone_option.setAttribute("value", account_match);
            phone_option.innerHTML = (account_match);
            if (phone_numbers) {
                phone_numbers.append(phone_option);

            }


            let picchart = document.createElement("option");
            picchart.setAttribute("value", account_match);
            picchart.innerHTML = (account_match);
            if (picchart_select) {
                picchart_select.append(picchart);
            }




        }

    }

}