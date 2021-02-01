let year = [1999, 2000, 2001, 2002, 2003, 2004, 2005];
let deals_closed = [3000, 3200, 4100, 1500, 1000, 2000, 7000];
let deals_rej = [1500, 1000, 500, 1200, 1500, 500, 2000];

const options = {
  chart: {
    type: "line",
    height: "100%",
  },
  series: [
    {
      name: "Deals closed",
      data: deals_closed,
    },
    {
      name: "Deals rejected",
      data: deals_rej,
    },
  ],
  xaxis: {
    categories: year,
  },
};

const chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
