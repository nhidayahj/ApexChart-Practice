const options = {
  chart: {
    type: "line",
    height: "100%",
  },
  series: [],
  noData: {
    text: "Loading..",
  },
};

const chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

window.addEventListener("DOMContentLoaded", async () => {
  let series = await loadData();
  // when the data is loaded from axios, THEN we will call the updateSeries on the chart
  // with the new data
  chart.updateSeries([
    {
      name: "Sales",
      data: series.yearly,
    },
  ]);
});
