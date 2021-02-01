async function loadData() {
  let response = await axios.get(
    "https://raw.githubusercontent.com/apexcharts/apexcharts.js/master/db.json"
  );
  let series = response.data;
  console.log(series);
  return series;
}
