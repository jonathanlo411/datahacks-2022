function LoadChart(labels, label, data, canvas, title) {
    var chartData = {
        labels: labels,
        datasets: [{
            label: label,
            data: data,
            borderColor: 'red',
        }]
    };
    var chartOptions = {
        plugins: {
            title: {
                display: true, // defaults to false
                text: title,
                fontSize: 60,
                color: 'black',
            },
            legend: {
                fullSize: false,
            },
        },
        scales: {
            x: {
                title: {
                    text: 'Week Number',
                    display: true,
                    color: 'black',
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    text: label,
                    display: true,
                    color: 'black',
                }
            }
        },
        responsive: false,
        maintainAspectRatio: false,
    };
    var ctx = document.getElementById(canvas).getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: chartOptions
    });
    myChart.update();
}

LoadChart("Label 1", "Label 2", [1, 2, 3], "chart1", "Title")