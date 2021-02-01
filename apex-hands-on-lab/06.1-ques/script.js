// create an empty chart 
const option = {
    'chart': {
        'type': 'line',
        'height': '100%'
    },
    series: [

    ],
    noData: {
        'text': "Loading.."
    }
}

const chart = new ApexCharts(document.querySelector("#chart"), option);
chart.render();



window.addEventListener('DOMContentLoaded', async () => {
    let series1 = await loadData();
    let series2 = await loadData();
    console.log(series1, series2)
    })