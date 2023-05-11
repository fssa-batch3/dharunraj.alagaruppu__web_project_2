


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

function account_add() {


    let account_check = JSON.parse(localStorage.getItem("account_details"));
    let email_compare = localStorage.getItem("email");

    let current_ac = document.getElementById("from");

    for (let o = 0; o < account_check.length; o++) {

        if (account_check[o]["email_compare"] == email_compare) {

            let account_number = account_check[o]["account"];

            let option = document.createElement("option");
            option.setAttribute("value", account_number);
            option.innerHTML = (account_number);
            if (current_ac) {
                current_ac.append(option);
            }
        }

    }
}

function restart() {


    let restart = document.getElementById("restart");

    restart.addEventListener("click", () => {

        location.reload();

    })


}

