const balance_enquire = JSON.parse(localStorage.getItem("bal_enquire"));

const signup = JSON.parse(localStorage.getItem("array"));

const daily = document.getElementById("daily_check");

let balance;

daily.addEventListener("click", (e) => {

  delete_chart();

  for (let j = 0; j < balance_enquire.length; j++) {

    balance = balance_enquire[j].ac_balance;

    const month = balance_enquire[j].monthly_balance ?? [];

    const rotine = {
      day_balance: balance,
    };

    month.push(rotine);

    balance_enquire[j].monthly_balance = month;

    localStorage.setItem("bal_enquire", JSON.stringify(balance_enquire));

    average();
  }
});

function average() {
  for (let h = 0; h < balance_enquire.length; h++) {
    let average_value = 0;

    if (balance_enquire[h].monthly_balance) {
      for (let r = 0; r < balance_enquire[h].monthly_balance.length; r++) {
        average_value += balance_enquire[h].monthly_balance[r].day_balance;
      }

      const average_balance_length = (
        average_value / balance_enquire[h].monthly_balance.length
      ).toFixed(2);

      balance_enquire[h].average_value = average_balance_length;
    }
  }

  localStorage.setItem("bal_enquire", JSON.stringify(balance_enquire));

}

function delete_chart() {

  for (let dc = 0; dc < balance_enquire.length; dc++) {

    if (balance_enquire[dc].monthly_balance.length == 29) {

      delete balance_enquire[dc].monthly_balance;

      delete balance_enquire[dc].average_value;

      localStorage.setItem("bal_enquire", JSON.stringify(balance_enquire));

    }
  }

}

const month = document.getElementById("monthly_check");

month.addEventListener("click", () => {
  monthly_once();
});

let account;

let ac_ifsc;

let accounter_name;

let account_minimum_balance;

let average_balance;

let accounter_email;

let subject;

let body;

let current_balance;

let date_value = new Date().getDate();

function monthly_once() {

  for (let b = 0; b < balance_enquire.length; b++) {

    account = balance_enquire[b].ac_no;

    ac_ifsc = balance_enquire[b].ac_ifsc;

    current_balance = balance_enquire[b].ac_balance;

    accounter_name = balance_enquire[b].accounter_name;

    account_minimum_balance = balance_enquire[b].minium;

    average_balance = balance_enquire[b].average_value;

    accounter_email = balance_enquire[b].email_compare;

    if (balance_enquire[b].minium <= balance_enquire[b].average_value) {
      console.log("crt");
      subject =
        " Congratulations!! This month you are maintained well your bank account  . ";

      body = `Good morning ${accounter_name} <br><br>
                This month you are escaping from the minimum balance penalty .<br> <br> <b> Your account details </b> <br><br> Your account number = ${account}. <br> Your IFSC code = ${ac_ifsc} <br> Your mininum balance = ${account_minimum_balance}. <br> Your monthly average balance = ${average_balance} <br> Your current balance = ${current_balance} <br> These are the tracker is happend last week. Keep it up the awareness banking services . Congratulations!!
                <br><br>
                Regards <br>
                NETBLIZ <br>`;

      goodEmail();
    } else if (balance_enquire[b].minium >= balance_enquire[b].average_value) {

      console.log("err");
      subject = " Alert !! You are not maintaining your bank account well ";

      body = `Good morning ${accounter_name} <br><br>
                This is the time to wake up !! I think you can't maintain your bank account this month. We have solution for this problem .<br> <br> <b> Your account details </b> <br><br> Your account number = ${account}. <br> Your IFSC code = ${ac_ifsc} <br> Your mininum balance = ${account_minimum_balance}. <br> Your monthly average balance = ${average_balance} <br> Your current balance = ${current_balance} <br> Your minimum balance is too low . The solutions are available there .Escape from the mininum balance penalty. 
                <br><br>
                Regards <br>
                NETBLIZ <br>`;

      goodEmail();
    }
  }
}

function goodEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "manidharun2204@gmail.com",
    Password: "4D6FC23DC9C154060201E850106AFDAC2CBD",
    To: accounter_email,
    From: "netbliz2023@gmail.com",
    Subject: subject,
    Body: body,

    // Attachments: [
    //     {
    //         name: "File_Name_with_Extension",
    //         path: "https://drive.google.com/file/d/1RhOnDY9rkq-tjYnhhjUEUV-WEjjKL_Wh/view?usp=sharing"
    //     }]
  });

  // .then((message) => {
  //   // try{} catch{}

  //   alert("super");
  // })
  // .catch((error) => {
  //   alert("error");
  // });

}

// if (crt == 1) {

//     alert("Mail has been sent successfully");

// }

// now_date(important, current_day)

// function now_date(important, current_day) {

//     let split = current_day.split("")
//     let splice = split.splice(0, 1);

//     current_day = split[0]

//     let only_day = no_of_days[current_day];

//     day.innerHTML = only_day

// }

// // smart function**********************

// balance_enquire.forEach(element => {
//     delete element["monthly_balance"]
// });
// localStorage.setItem("bal_enquire", JSON.stringify(balance_enquire));

// balance_enquire.forEach(element => {

//     delete element["average_value"]
// });

// localStorage.setItem("bal_enquire", JSON.stringify(balance_enquire));
