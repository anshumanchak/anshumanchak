function populate_reddash(layout){
    layout.sidebar_head1.innerHTML = "Tools";
    layout.sidebar_head2.innerHTML = "Concepts";
    layout.chart_text.innerHTML = "This was part of our submission for Microsoft Code Fun Do ++, 2018-19, wherein we managed \
                                    to bag the Campus Runners Up Prize. <br />For the admin side dashboard, we used the Azure Custom \
                                    Vision API to predict whether an uploaded image depicted a natural disaster, \
                                    trained on flood images as of now. \
                                    For the Zone map, we scraped geocode data from NRT Global Flood Mapping of areas under \
                                    danger and represented it on a map on the dashboard using plotly. Lastly, we \
                                    built an SMS app to facilitate communication between victim and rescuer \
                                    using Twilio API, and linked it with the main dashboard.";

    // Make Charts
    var ctx1 = layout.chart1.getContext('2d');
    var my_doughnut1 = new Chart(ctx1, {
        type: 'doughnut',
        data: {
            labels: ['HTML', 'CSS', 'Javascript', 'Flask', 'Azure Custom Vision API', 'Beautiful Soup', 'Plotly', 'Twilio API'],
            datasets: [{
                data: [5, 10, 10, 20, 15, 5, 20, 15],
                backgroundColor: [
                    '#EF4C4C',
                    '#F08D57',
                    '#F3BB59',
                    '#F7E75D',
                    '#DCF55E',
                    '#9FF15F',
                    '#5FF1A6',
                    '#62F3DB'
                ],
                borderColor: [
                    '#EF4C4C',
                    '#F08D57',
                    '#F3BB59',
                    '#F7E75D',
                    '#DCF55E',
                    '#9FF15F',
                    '#5FF1A6',
                    '#62F3DB'
                ],
                borderWidth: 1
            }]
        },
        options: {
            cutoutPercentage: 40,
            maintainAspectRatio: false,
            responsive: true,
            legend: {
                display: false
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        return data['labels'][tooltipItem['index']] + ': ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
                    }
                }
            }
        }
    });
    var ctx2 = layout.chart2.getContext('2d');
    var my_doughnut2 = new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: ['UI / UX', 'Image Recognition', 'Web Scraping', 'Data Visualization', 'Backend Dev'],
            datasets: [{
                data: [10, 20, 30, 20, 20],
                backgroundColor: [
                    '#EF4C4C',
                    '#F08D57',
                    '#F3BB59',
                    '#F7E75D',
                    '#DCF55E'
                ],
                borderColor: [
                    '#EF4C4C',
                    '#F08D57',
                    '#F3BB59',
                    '#F7E75D',
                    '#DCF55E'
                ],
                borderWidth: 1
            }]
        },
        options: {
            cutoutPercentage: 40,
            maintainAspectRatio: false,
            responsive: true,
            legend: {
                display: false
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        return data['labels'][tooltipItem['index']] + ': ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
                    }
                }
            }
        }
    });
}