// this JS file is the main file that calls the chart
// and contains all data sets

// create sample data
let sightings = [10, 13, 15, 22, 34, 23];
let temperature = [33, 21, 22, 24, 25, 26];
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

//call the createChart function

createChart("line", "Sightings", sightings, months, "#line-chart");
createChart("bar", "Temperature", temperature, months, "#bar-chart");
