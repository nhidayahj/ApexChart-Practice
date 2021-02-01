// create the ApexChart

// create sample data
let sightings = [10, 13, 15, 22, 34, 23];
let temperature = [33, 21, 22, 24, 25, 26];
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

//1. Define chart options
const options = {
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

//2. display the chart
const chart = new ApexCharts(document.querySelector("#chart"), options);
// to display chart, call .render()
chart.render();
