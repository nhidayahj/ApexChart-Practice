// standalone to read data
const axios = require('axios')
async function loadData() {
    let response = axios.get("https://raw.githubusercontent.com/kunxin-chor/sales-data/main/data/sales.json")
    let data = response.data;
    console.log(data)
}