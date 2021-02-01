const options = {
    'chart': {
        type:'line',
        height: '100%'
    },
    series: [
    ],
    // the noData property allows us to define what to show 
    // if there is no data loaded
    noData: {
        'text': "loading"
    }
}

const chart = new ApexCharts(document.querySelector("#chart"), options)
chart.render();


// this listener only fires when all the other elements are ready 
window.addEventListener('DOMContentLoaded', async function(){
    let series = await loadData();
    // console.log(series)
    chart.updateSeries([{
        'name':'Sales',
        'data': series.yearly
    }])

})
