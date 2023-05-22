const picchart_select = document.getElementById("from");

const email = localStorage.getItem("email");

const balance_enquire = JSON.parse(localStorage.getItem("bal_enquire"));

const charts_div = document.querySelector(".charts");

let chart = "";

const arr = [];

let total_date = date.innerHTML;

total_date = total_date.slice(0, 2);

for (let i = 0; i < balance_enquire.length; i++) {
  if (String(email) === String(balance_enquire[i].email_compare)) {

    arr.push(balance_enquire[i]);

    chart = `<div class="full_chart" id="scroll">

<h1 id="pie">Pie chart :</h1>

<div>

<div class="total_table">

<table>

    <tr>
        <td id="table_label">Account number</td>
        <td class="user_account">${balance_enquire[i].ac_no}</td>

        <td class="range">
            <div class="name">
                ${balance_enquire[i].accounter_name}
        </td>
</div>
</tr>

<tr>
<td class="first_td" id="table_label">Your balance</td>
<td class="sec_td">${`₹ ${balance_enquire[i].ac_balance}`}</td>

</tr>

<tr>
<td class="first_td" id="table_label">Minimum balance</td>

<td class="sec_td">${`₹ ${balance_enquire[i].minium}`}</td>

</tr>

<tr>
<td class="first_td" id="table_label"> Monthly average balance</td>

<td class="sec_td mon">${`₹ ${balance_enquire[i].minium * 30}`}</td>

<td class="range">
    <div class="min">
    <div id="static_min">
    <span>Total average balance : 100 %</span>
        </div>

    </div>
</td>
</tr>

<tr>
<td class="first_td" id="table_label"> Current average balance</td>
<td class="sec_td">${`₹ ${balance_enquire[i].minium * total_date}`}</td>
<td class="range">
    <div class="min">
        <div class="daily_maintain">
        <span class="daliy_details"></span>
        </div>

    </div>
</div>
</td>

</tr>

<tr>
<td class="first_td" id="table_label">Average balance</td>
<td class="sec_td avg">${`₹ ${balance_enquire[i].average_value}`}</td>
<td class="range">
<div class="min ">

    <div class="value_avg">
    <span class="average_details">100 %</span>
    </div>
</div>
</td>

</tr>

</table>
</div>

<div class="chart_details">

<div class="pie_chart_div">

<canvas id=piechart${i}></canvas>

</div>

<div class="details">

<div>
<div class="remaining">
    <h4>Remaining</h4>
    <h1 class="remain_per">26.7%</h1>
</div>
</div>

<div class="cover">

<div class="remaining_value">

</div>
</div>

</div>

</div>
</div>
`;

    charts_div.innerHTML += chart;
  }
}

const daily_min = document.querySelectorAll(".daily_maintain");

const ave_value = document.querySelectorAll(".value_avg");

const red_alert = document.querySelectorAll(".remaining_value");

daily_min.forEach((e, i) => {
  const maintenance = arr[i].minium * total_date;

  const avg_month = arr[i].minium * 30;

  const until = ((100 * maintenance) / avg_month).toFixed(2);

  e.style.width = `${until}%`;
  e.children[0].innerHTML = `Maintained:${until}%`;
});

ave_value.forEach((e, i) => {
  const average_num = arr[i].average_value;

  const avg_month = arr[i].minium * 30;

  let range_value = ((100 * average_num) / avg_month).toFixed(2);


  if (range_value >= 100) {
    range_value = 100;
    
  }


  e.style.width = `${range_value}%`;

  e.children[0].innerHTML = `Maintained:${range_value}%`;
});

red_alert.forEach((e, i) => {
  const avg_month = arr[i].minium * 30; // 30000

  const average_num = arr[i].average_value;

  const red_per = (100 * average_num) / avg_month;

  let remaining = (100 - red_per).toFixed(2);

  if (remaining <= 0) {
    remaining = 0;
  }
  e.style.width = `${remaining}%`;
  e.parentElement.parentElement.children[0].children[0].children[1].innerText = `${remaining}%`;
});

for (let i = 0; i < balance_enquire.length; i++) {
  if (String(email) === String(balance_enquire[i].email_compare)) {
    const xValues = [" Average balance", "Mininum balance", "Account balance"];

    const yValues = [
      balance_enquire[i].average_value,
      balance_enquire[i].minium,
      balance_enquire[i].ac_balance,
    ];
    const barColors = ["#007CC3", "#FF0000", "#FDBB2F"];

    new Chart(`piechart${i}`, {
      type: "doughnut",

      data: {
        labels: xValues,
        datasets: [
          {
            maxBarThickness: 79,
            backgroundColor: barColors,
            data: yValues,
          },
        ],
      },
      options: {
        legend: { display: true },
      },
    });
  }
}

let user_number;

const account_div = document.querySelectorAll(".full_chart");

const result = document.querySelector("#result_button");

result.addEventListener("click", () => {
  user_number = picchart_select.value;

  if (String(user_number) === "") {
    alert("recheck your value");
  } else {
    block_account();
    
  }
});

const footer = document.querySelector("footer");

const content_item =  document.querySelector("#only_back")

function block_account() {

  account_div.forEach((e, index) => {

    const value_ac = e.querySelector(".user_account");

    if (String(value_ac.innerHTML) === String(user_number)) {

      e.style.display = "block";

      footer.style.display = "none";

      content_item.style.display = "none"

      smoothScroll({ yPos: "end", duration: 400 });
    } 

    else{
      e.style.display = "none";
    }
  });
}
