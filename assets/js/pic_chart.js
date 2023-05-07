let min;

let ave;

let show;


for (let i = 0; i < balance_enquire.length; i++) {

    if (email == balance_enquire[i]["email_compare"]) {

        var xValues = [" Average balance", "Mininum balance","Account balance"];

        var yValues = [balance_enquire[i]["average_value"], balance_enquire[i]["minium"], balance_enquire[i]["ac_balance"]];
        var barColors = [

            "#007CC3",
            "#FF0000",
            "#FDBB2F",
         

        ];

        new Chart(`piechart${i}`, {

            type: "doughnut",

            data: {

                labels: xValues,
                datasets: [{
                    maxBarThickness: 79,
                    backgroundColor: barColors,
                    data: yValues

                }]
            },
            options: {
                legend: { display: true }
            }

        });

    }

}



