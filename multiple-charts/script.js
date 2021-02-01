let meteors = [50,60,55,25,35,45]
let ufo = [100,150,200,230,300,50]
let months = ['Jan', 'Feb', 'Mar', 'Apr','May', 'June']

let meteorOptions = {
    'chart': {
        type: 'line',
        height: '100%'
    }, 
    series: [{
        name: "meteor-chart",
        data: meteors
    }], 
    xaxis: {
        categories: months
    }
}

let meteorChart = new ApexChart(document.querySelector("#meteor-chart"), meteorOptions)
meteorChart.render();