// create the ApexChart

// create sample data
let sales = [30, 40, 65, 50, 49, 60];
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

//1. Define chart options
const options = {
  chart: {
    type: "line",
    height: "100%",
  },
  // each series repre 1 set of data
  series: [
    {
      name: "sales",
      //data below is the y-axis
      data: sales,
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
