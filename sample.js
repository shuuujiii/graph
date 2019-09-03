<div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.3.0/Chart.bundle.js"></script>
<canvas id="ChartDemo"></canvas>
<script>
var ctx = document.getElementById("ChartDemo").getContext('2d');
var ChartDemo = new Chart(ctx, {
   type: 'line',
   data: {
      labels: ["Item1", "Item2", "Item3", "Item4", "Item5", "Item6", "Item7"],
      datasets: [
      {
         label: "Chart-1",
         borderColor: 'rgb(255, 0, 0)',
         data: [20, 26, 12, 43, 33, 21, 29],
      },
      ]
   },
   options: {
      responsive: true,
   }
});
</script>
</div>
