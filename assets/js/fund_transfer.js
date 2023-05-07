
let send_button1 = document.getElementsByTagName("form")[1];

send_button[1].addEventListener("submit", (p) => {
    p.preventDefault()

    phone_transaction();

});

let ph_number;
let transfer_amount;
let from_ac_number;


let primary_ac;
function phone_transaction() {

    ph_number = document.getElementById("to_num").value.trim();
    // console.log(account_number);
    send_amount = document.getElementById("to_amount").value.trim();
    // console.log(send_amount);
    from_ac_number = document.getElementById("from_num").value.trim();
    // console.log(from_ac_number);

    current_date = new Date().toJSON().slice(0, 10);
    email_compare = localStorage.getItem("email");
    result;
    reciver_type;
    sender_type;

    signup_array.forEach(e => {

        if (e["phone"] == ph_number && e["email"] != email_compare) {

            primary_ac = e["primary"];

            result = 1;

        }

    });

    balance_page.forEach((e) => {

        if (e["ac_no"] == from_ac_number) {

            sender_balances = e["ac_balance"]

        }

    })

    if (result == 1) {

        if (sender_balances >= send_amount) {

            push_local()
        }

        else {
            alert("Sorry!! You don't have money to send")
        }

    }

    else {

        alert("Sorry!! Reciver is not there or recheck your benificary phone number")
    }

}

let phone_phone;

function push_local() {

    phone_phone = {

        "from_account": from_ac_number,
        "to_phone": ph_number,
        "send_amount": send_amount,
        "email_compare": email_compare,
    }

    history = {
        "send_amount": send_amount,
        "date": current_date,
        "sender_balance": "",
        "reciver_balance": "",
        "sender_email": email_compare,
        "reciver_account": primary_ac,
        "sender_account": from_ac_number,
        "to_phone": ph_number,
        "sender_type": "",
        "reciver_type": "",
        "reciver_name": "",
        "sender_name": "",
        "reciver_name": "",
        "reciver_email": ""

    }

    send_account.push(phone_phone);

    history_table.push(history);

    localStorage.setItem("send_account", JSON.stringify(send_account));

    localStorage.setItem("history_table", JSON.stringify(history_table));

    balance_change();

    window.location.href = ("./history.html");

    alert("Thanks for send money");

}

function balance_change() {

    let current_send_money = document.getElementById("to_amount").value;

    let sender_ac = document.getElementById("from_num").value;
    console.log(sender_ac);

    balance_page.forEach(element => {


        if (element["email_compare"] == email && element["ac_no"] == sender_ac) {

            let accounter = document.getElementById("from_num").value;
            console.log(accounter);

            let old_balance = element["ac_balance"];

            sender_name = element["accounter_name"];

            old_balance = Number(old_balance) - Number(current_send_money);

            element["ac_balance"] = old_balance;

            current_balance = old_balance;

            sender_type = "Money sent"

            let sender_history = JSON.parse(localStorage.getItem("history_table"));

            for (let di = 0; di < sender_history.length; di++) {

                if (accounter == sender_history[di]["sender_account"] && sender_history[di]["sender_type"] == "" && sender_history[di]["sender_balance"] == "") {

                    sender_history[di]["sender_type"] = sender_type;

                    sender_history[di]["sender_balance"] = current_balance;

                    sender_history[di]["sender_name"] = sender_name

                    localStorage.setItem("history_table", JSON.stringify(sender_history));

                }

            }

            localStorage.setItem("bal_enquire", JSON.stringify(balance_page));

            reciver()

        }

    })

}

function reciver() {

    let accounter = primary_ac;

    let current_recive_money = document.getElementById("to_amount").value;

    let recived_money;

    balance_page.forEach(element => {

        if (element["ac_no"] == accounter) {

            let old_balances = element["ac_balance"];

            reciver_name = element["accounter_name"];

            receiver_email = element["email_compare"]


            recived_money = Number(old_balances) + Number(current_recive_money);

            element["ac_balance"] = recived_money;

            // console.log(recived_money);

            reciver_balances = recived_money;

            localStorage.setItem("bal_enquire", JSON.stringify(balance_page));

            reciver_type = "Money received";

            let change_history = JSON.parse(localStorage.getItem("history_table"));

            for (let d = 0; d < change_history.length; d++) {

                if (accounter == change_history[d]["reciver_account"] && change_history[d]["reciver_balance"] == "" && change_history[d]["reciver_type"] == "") {

                    change_history[d]["reciver_balance"] = reciver_balances;

                    change_history[d]["reciver_type"] = reciver_type;

                    change_history[d]["reciver_name"] = reciver_name;

                    change_history[d]["reciver_email"] = receiver_email;

                    localStorage.setItem("history_table", JSON.stringify(change_history));

                }
            }

        }

    })

}


