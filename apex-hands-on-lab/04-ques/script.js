// create the ApexChart

// create sample data
let sightings = [10, 13, 15, 22, 34, 23];
let temperature = [33, 21, 22, 24, 25, 26];
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

//1. Define line chart options
const lineChartOptions = {
  chart: {
    type: "line",
    height: "100%",
  },
  // each series repre 1 set of data
  series: [
    // first set of data
    {
      name: "sightings",
      //data below is the y-axis
      data: sightings,
    },
    //second set of data
    {
      name: "temperature",
      data: temperature,
    },
  ],
  xaxis: {
    categories: months,
  },
  // personalised colors of the graphs
  //colors should have more then the no. of charts to display
  //must be in HEX
  colors: ["#82BE11", "#8BAEEF", "#BE415C"],
};

//2. display the lie chart
const lineChart = new ApexCharts(
  document.querySelector("#line-chart"),
  lineChartOptions
);
// to display chart, call .render()
lineChart.render();

//1.1 Define bar chart options
const barChartOptions = {
  chart: {
    type: "bar",
    height: "100%",
  },
  // each series repre 1 set of data
  series: [
    // first set of data
    {
      name: "sightings",
      //data below is the y-axis
      data: sightings,
    },
    //second set of data
    {
      name: "temperature",
      data: temperature,
    },
  ],
  xaxis: {
    categories: months,
  },
  // personalised colors of the graphs
  //colors should have more then the no. of charts to display
  //must be in HEX
  colors: ["#82BE11", "#8BAEEF", "#BE415C"],
};

//3. display the bar chart
const barChart = new ApexCharts(
  document.querySelector("#bar-chart"),
  barChartOptions
);
barChart.render();
