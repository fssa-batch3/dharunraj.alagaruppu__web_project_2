
// let calender = ""

// for (let d = 1; d < 32; d++) {

//     calender += `    <div class="days">

//     <div class="full_click">

//         <span class="date">${d}</span>
//         <div class="sms">

//             <div class="sent">
//                 <span class="type_s">sent</span>
//                 <span class="sent_value">5</span>
//             </div>

//             <div class="recive">
//                 <span class="type_r">recived</span>
//                 <span class="receive_value">10</span>
//             </div>
//         </div>


//     </div>


// </div>`

// }

// let total_calender = document.querySelector(".total_back")
// total_calender.innerHTML = calender


// let mininum;

// let balance;

// let average;

// options: {

//     title: {

//         display: true,
//         text: "World Wide Wine Production 2018"

//     }
// }



// console.log(email)


// let tag_mininum = document.querySelector("#min");

// let tag_average = document.querySelector("#average");

// let tag_balance = document.querySelector("#current");

// let chart = document.querySelector("#myChart");
// console.log(chart);

// for (let i = 0; i < balance_enquire.length; i++) {

//     if (email == balance_enquire[i]["email_compare"]) {

//         tag_mininum.innerHTML = balance_enquire[i]["minium"];

//         tag_average.innerHTML = balance_enquire[i]["average_value"];

//         tag_balance.innerHTML = balance_enquire[i]["ac_balance"];

//         var xValues = ["Mininum balance", "Average balance", "Current balance"];
//         var yValues = [tag_mininum, tag_average, tag_balance,];
//         var barColors = [

//             "#b91d47",
//             "#00aba9",
//             "#2b5797",

//         ];

//     }
// }

let data = ""

let main_div = document.querySelectorAll(".div_flex")

console.log(main_div);

for (let w = 0; w < balance_enquire.length; w++) {

    if (email == balance_enquire[w]["email_compare"]) {



        var xValues = ["Account balance", "Average Value", "Minimum Balance"];
        var yValues = [balance_enquire[w]["ac_balance"], balance_enquire[w]["average_value"], balance_enquire[w]["minium"]];
        var barColors = [

            "#b91d47",
            "#00aba9",
            "#2b5797",

        ];

        new Chart(`piechart${w}`, {

            type: "bar",

            data: {

                labels: xValues,
                datasets: [{

                    backgroundColor: barColors,
                    data: yValues

                }]
            },

        });

        

        data += `<div class="total_pie">
        <div class="details">

        <div class="mininum">
          <span>Mininum balance :</span>
          <h2 id="min">${balance_enquire[w]["minium"]}</h2>
         </div>
  
        <div class="current">
          <span>Current balance :</span>
          <h2 id="current">${balance_enquire[w]["ac_balance"]}</h2>
  
        </div>
  
         <div class="average">
          <span>Average balance :</span>
          <h2 id="average">${balance_enquire[w]["average_value"]}</h2>
  
         </div>
  
        </div></div>`
        //   let details = document.querySelector(".details")
        // console.log(details)
        main_div[w].innerHTML += data 
        

        
    }


}


