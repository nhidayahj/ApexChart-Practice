// this JS scipt contains the function to create the chart
// This is the generic function to create the chart
// Define the chart option functions

function createChart(chartType, chartName, chartData, categories, element) {
  const option = {
    chart: {
      type: chartType,
      height: "100%",
    },
    series: [
      // first set of data
      {
        name: chartName,
        //data below is the y-axis
        data: chartData,
      },
    ],
    xaxis: {
      categories: categories,
    },
  };
  // display of chart
  const chart = new ApexCharts(document.querySelector(element), option);
  chart.render();
}
