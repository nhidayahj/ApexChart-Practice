async function loadData() {
    let response = await axios.get("https://raw.githubusercontent.com/kunxin-chor/dwad-apexcharts/master/09-hands-axios-and-synchronized/meteors.json")
    let response2 = await axios.get("https://raw.githubusercontent.com/kunxin-chor/dwad-apexcharts/master/09-hands-axios-and-synchronized/sightings.json")
    let series1 = response.data
    let series2 = response2.data
    // console.log(response.data);
    // console.log(response2.data);
    return series1, series2;
}