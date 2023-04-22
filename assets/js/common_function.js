
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
