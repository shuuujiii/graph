// 2) CSVから２次元配列に変換
function csv2Array(str) {
  var csvData = [];
  var lines = str.split("\n");
  for (var i = 0; i < lines.length; ++i) {
    var cells = lines[i].split(",");
    csvData.push(cells);
  }
  return csvData;
}

function drawBarChart(data) {
  // 3)chart.jsのdataset用の配列を用意
  var tmpLabels = [], tmpData1 = [], tmpData2 = [];
  for (var row in data) {
    tmpLabels.push(data[row][0])
    tmpData1.push(data[row][1])
};  // 4)chart.jsで描画
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
	   type: 'line',
	   data: {
	      labels: tmpLabels, 
	      datasets: [
	      {
		 label: "Chart-1",
		 borderColor: 'rgb(255, 0, 0)',
		 data: tmpData1, 
		 pointHoverRadius: 10,
		 pointRadius: 10,
	      },
	      ]
	   },
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
	     tooltips: {
	       callbacks: {
		 title: function(tooltipItem, data) {
		   return "aaa"; 
		 },
		 afterTitle: function(tooltipItem, data) {
		   return "afterTitle";
		 },
		 label: function(tooltipItem, data) {
		   return "labeldesu";
		 }
	       },
	       titleFontSize: 100,
	       bodyFontSize: 100
	     }
	  }
	});
	canvas.addEventListener('click', function(event) {
	let item = myChart.getElementAtEvent(event);
	if (item.length == 0) {
		console.log('no element found.')
		    return;
	}
	item = item[0];
	let data = item._chart.config.data.datasets[item._datasetIndex].data[item._index];
	alert(`Clicked at `);
	window.location.href = './index.html'; // 通常の遷移
    });

}
