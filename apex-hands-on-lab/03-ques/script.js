let subjects = ["English", "Maths", "Science", "Geography", "History"];
let total = [21, 23, 22, 27, 45];

const options = {
  chart: {
    type: "pie",
    height: "100%",
  },
  //for Pie chart, only can have 1 set of series
  series: total,
  //labels is to identify the categories
  labels: subjects,
};

const chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
