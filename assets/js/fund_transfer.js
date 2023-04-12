
let email = localStorage.getItem("email");

let account_check = JSON.parse(localStorage.getItem("account_details"));

let balance_page = JSON.parse(localStorage.getItem("bal_enquire"));

let account_number;
let phone_number;
let balance;

account_check.forEach(element => {

    if (element["email_compare"] == email) {

        account_number = element["account"]
        document.getElementById("from").value = account_number
    }
});


let send_button = document.getElementsByTagName("form");

send_button[0].addEventListener("submit", (e) => {
    e.preventDefault()
    account_to_account();

});

function balance_change() {

    // let current_send_money = document.getElementById("amount").value;

    // // let history = JSON.parse(localStorage.getItem("history_table"));

    // balance_page.forEach(element => {


    //     if (element["email_compare"] == email) {

    //         let old_balance = element["ac_balance"];
    //         let done = 0;

    //         if (old_balance > current_send_money) {
    //             done = 1;
    //         }
    //         else {
    //             done = 0;
    //         }

    // if (done == 1) {

    //     old_balance = Number(old_balance) - Number(current_send_money);

    //     element["ac_balance"] = old_balance;

    //     localStorage.setItem("bal_enquire", JSON.stringify(balance_page));

    //     reciver()

    //     alert("Thanks for send money");

    //     window.location.href = "./history.html"

    // }

    // else {
    //     alert("Sorry!! You don't have enough money to send");
    // }

    // }

    //     })

}

function reciver() {

    let accounter = document.getElementById("to").value;

    let current_recive_money = document.getElementById("amount").value;

    balance_page.forEach(element => {

        if (element["ac_no"] == accounter) {

            let old_balances = element["ac_balance"];

            // let reciver = element["email_compare"]

            let recived_money = Number(old_balances) + Number(current_recive_money);

            element["ac_balance"] = recived_money;

            localStorage.setItem("bal_enquire", JSON.stringify(balance_page));

        }
    })

}

// function account_to_account() {

//     let from_account = document.getElementById("from").value.trim();
//     let to_account = document.getElementById("to").value.trim();
//     let to_ifsc = document.getElementById("ifsc").value.trim();
//     let send_amount = document.getElementById("amount").value.trim();
//     let email_compare = localStorage.getItem("email");
//     let current_money = localStorage.getItem("ac_balance");


//     if (from_account != "" && to_account != "" && to_ifsc != "" && send_amount != "") {

//         let current_send_money = document.getElementById("amount").value;

//         balance_page.forEach(element => {

//             if (element["email_compare"] == email) {

//                 let old_balance = element["ac_balance"];
//                 let done;

//                 if (old_balance > current_send_money) {
//                     return done = 1;
//                 }
//                 else {
//                     return done = 0;
//                 }

//             }

//         })

//         if (done == 1) {


//             let send_account = JSON.parse(localStorage.getItem("send_account")) ?? [];

//             let history_table = JSON.parse(localStorage.getItem("history_table")) ?? [];

//             let result;


//             balance_page.find(e => {

//                 if (e["ac_no"] == to_account && e["ac_no"] != from_account) {
//                     return result = 1;
//                 }

//             })


//             if (result == 1) {

//                 let account_account = {
//                     "from_account": from_account,
//                     "to_account": to_account,
//                     "to_ifsc": to_ifsc,
//                     "send_amount": send_amount,
//                     "email_compare": email_compare,
//                     "reciver_id": ""
//                 }

//                 let history = {
//                     "send_amount": send_amount,
//                     "date": "",
//                     "type": "",
//                     "current_money": current_money,
//                     "email_compare": email_compare,
//                     "to_account": to_account,
//                     "reciver_id": ""
//                 }


//                 send_account.push(account_account);

//                 history_table.push(history);

//                 localStorage.setItem("send_account", JSON.stringify(send_account));

//                 localStorage.setItem("history_table", JSON.stringify(history_table));

//                 balance_page.forEach(element => {


//                     if (element["email_compare"] == email) {

//                         if (done == 1) {

//                             old_balance = Number(old_balance) - Number(current_send_money);

//                             element["ac_balance"] = old_balance;

//                             localStorage.setItem("bal_enquire", JSON.stringify(balance_page));

//                             reciver()

//                             alert("Thanks for send money");

//                             window.location.href = "./history.html"

//                         }
//                     }

//                 })

//                 // else {
//                 //         alert("Sorry!! You don't have enough money to send");
//                 //     }

//                 balance_change();

//                 // reciver()

//                 // alert("Thanks for send money");

//                 // window.location.href = "./history.html"

//             }
//         }

//         if (result != 1) {
//             alert("Sorry!! Reciver is not there")
//         }
//     }

//     else {

//         alert("Sorry can't get a value")
//     }

// }



function account_to_account() {
    let from_account = document.getElementById("from").value.trim();
    let to_account = document.getElementById("to").value.trim();
    let to_ifsc = document.getElementById("ifsc").value.trim();
    let send_amount = document.getElementById("amount").value.trim();
    let email_compare = localStorage.getItem("email");
    let current_money = localStorage.getItem("ac_balance");


    if (from_account != "" && to_account != "" && to_ifsc != "" && send_amount != "") {

        balance_page.find(e => {

            if (e["ac_no"] == to_account && e["ac_no"] != from_account) {
                return result = 1;
            }
        })

        let current_send_money = document.getElementById("amount").value;

        balance_page.forEach(element => {

            if (element["email_compare"] == email) {

                let old_balance = element["ac_balance"];
                let done;

                if (old_balance > current_send_money) {
                    return done = 1;
                }
                else {
                    return done = 0;
                }

            }

        })


        if (result != 1) {
            alert("Sorry!! Reciver is not there")
        }
    }

    else {
        alert("Sorry can't get a value")
    }




}


