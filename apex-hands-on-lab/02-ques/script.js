let year = [1999, 2000, 2001, 2002, 2003];
let male_res = [175000, 188000, 190000, 185000, 190760];
let female_res = [180000, 190000, 210000, 200000, 210000];

const options = {
  chart: {
    type: "bar",
    height: "100%",
  },
  series: [
    {
      name: "Deals closed",
      data: male_res,
    },
    {
      name: "Deals rejected",
      data: female_res,
    },
  ],
  xaxis: {
    categories: year,
  },
};

const chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
