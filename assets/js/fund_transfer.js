send_button[1].addEventListener("submit", (p) => {

    p.preventDefault()

    phone_transaction();

});

let ph_number;
let primary_ac;

function phone_transaction() {

    from_account = document.getElementById("from_num").value.trim();

    ph_number = document.getElementById("to_num").value.trim();

    send_amount = document.getElementById("to_amount").value.trim();

    remarks = textAreaExample6[1].value.trim();


    balance_page.forEach(e => {

        if (e["ac_no"] == from_account) {

            sender_balances = e["ac_balance"];

        }

    })

    signup_array.forEach(e => {

        if (e["phone"] == ph_number && e["email"] != email_compare) {

            primary_ac = e["primary"];

            result = 1;

        }

    });

    if (result == 1) {

        if (sender_balances >= send_amount) {

            push_local(from_account, ph_number, send_amount, email_compare, current_date, primary_ac, remarks)
        }

        else {
            alert("Sorry!! You don't have money to send");
        }

    }

    else {

        alert("Sorry!! Reciver is not there or recheck your benificary phone number")
    }

}

let phone_phone;

function push_local(from_account, ph_number, send_amount, email_compare, current_date, primary_ac, remarks) {

    phone_phone = {

        "from_account": from_account,
        "to_phone": ph_number,
        "send_amount": send_amount,
        "email_compare": email_compare,
        "remarks": remarks,
    }

    history = {
        "sender_account": from_account,
        "to_phone": ph_number,
        "send_amount": send_amount,
        "sender_email": email_compare,
        "date": current_date,
        "reciver_account": primary_ac,
        "remarks": remarks,
        "sender_type": "",
        "sender_balance": "",
        "sender_name": "",
        "reciver_balance": "",
        "reciver_type": "",
        "reciver_name": "",
        "reciver_email": "",

    }

    send_account.push(phone_phone);

    history_table.push(history);

    localStorage.setItem("send_account", JSON.stringify(send_account));

    localStorage.setItem("history_table", JSON.stringify(history_table));

    balance_change(from_account, send_amount, primary_ac);

    window.location.href = ("./history.html");

    alert("Thanks for send money");

}

function balance_change(from_account, send_amount, primary_ac) {
    balance_page.forEach(element => {

        if (element["email_compare"] == email_compare && element["ac_no"] == from_account) {

            old_balance = element["ac_balance"];

            sender_name = element["accounter_name"];

            old_balance = Number(old_balance) - Number(send_amount);

            element["ac_balance"] = old_balance;

            sender_type = "Money sent"

            for (let di = 0; di < history_table.length; di++) {

                if (from_account == history_table[di]["sender_account"] && history_table[di]["sender_type"] == "" && history_table[di]["sender_balance"] == "" && history_table[di]["sender_name"] == "") {

                    history_table[di]["sender_type"] = sender_type;

                    history_table[di]["sender_balance"] = old_balance;

                    history_table[di]["sender_name"] = sender_name

                    localStorage.setItem("history_table", JSON.stringify(history_table));

                }
            }

            localStorage.setItem("bal_enquire", JSON.stringify(balance_page));

            reciver(primary_ac, send_amount)

        }

    })

}

function reciver(primary_ac, send_amount) {

    balance_page.forEach(element => {

        if (element["ac_no"] == primary_ac) {

            recived_money = element["ac_balance"];

            reciver_name = element["accounter_name"];
            console.log(reciver_name);

            receiver_email = element["email_compare"];

            reciver_type = "Money received";

            recived_money = Number(recived_money) + Number(send_amount);

            element["ac_balance"] = recived_money;

            localStorage.setItem("bal_enquire", JSON.stringify(balance_page));

            for (let d = 0; d < history_table.length; d++) {

                if (primary_ac == history_table[d]["reciver_account"] && history_table[d]["reciver_balance"] == "" && history_table[d]["reciver_type"] == "" && history_table[d]["reciver_name"] == "" && history_table[d]["reciver_email"] == "") {

                    history_table[d]["reciver_balance"] = recived_money;

                    history_table[d]["reciver_type"] = reciver_type;

                    history_table[d]["reciver_name"] = reciver_name;

                    history_table[d]["reciver_email"] = receiver_email;

                    localStorage.setItem("history_table", JSON.stringify(history_table));

                }
            }

        }

    })

}

