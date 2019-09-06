// 2) CSVから２次元配列に変換
var labels = [];
var values = [];
var titles = [];
var urls = [];
var csvColIndex = {label : 0, value : 1, title : 2, url : 3};
function csv2Array(str) {
    var csvData = [];
    var lines = str.split("\n");
    for (var i = 0; i < lines.length; ++i) {
        var cells = lines[i].split(",");
        csvData.push(cells);
    }
    return csvData;
}

function setData(csvData){
    clearData();
    for (var row in csvData) {
        labels.push(csvData[row][csvColIndex.label]);
        values.push(csvData[row][csvColIndex.value]);
        titles.push(csvData[row][csvColIndex.title]);
        urls.push(csvData[row][csvColIndex.url]);
    };
}

function clearData(){
    labels = [];
    values = [];
    titles = [];
    urls = [];
}
function chartData(){
    return  {
        labels: labels,
        datasets: [
            {
                label: "Chart-1",
                borderColor: 'rgb(255, 0, 0)',
                data: values, 
                pointHoverRadius: 10,
                pointRadius: 10,
            },
        ]
    };
}

function chartOptionTooltip(){
    return {
        callbacks: {
            title: function(tooltipItem, data) {
                return titles[tooltipItem[0].index];
                //return data[tooltipItem[0].index]; 
                //return getTooltipTitle(1);
            },
            label: function(tooltipItem, data) {
                return "";
            }
        },
        titleFontSize: 30,
        bodyFontSize: 30
    }
}

function createChart(data, canvas, ctx)
{
    return new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            hover: {
                mode: 'point'
            },
            onClick: function(event, elements) {
                console.log(`Found ${elements.length} elements`);
                elements.forEach(function(element) {
                    let point = myChart.data.datasets[element._datasetIndex].data[element._index];
                    console.log(point);
                })
            },
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
        }
    });
}
function setCanvasClick(myChart, canvas){
    canvas.addEventListener('click', function(event) {
        let item = myChart.getElementAtEvent(event);
        if (item.length == 0) {
            console.log('no element found.')
            return;
        }
        item = item[0];
        let data = item._chart.config.data.datasets[item._datasetIndex].data[item._index];
        window.location.href = urls[item._index]; // 通常の遷移
    });
}
