const options = {
    'chart': {
        type:'line',
        height: '100%'
    },
    series: [
    ],
    noData: {
        'text': "loading"
    }
}

const chart = new ApexChart(document.querySelector("#chart"), options)
chart.render();


// this listener only fires when all the other elements are ready 
window.addEventListener('DOMContentLoaded', function(){

})
