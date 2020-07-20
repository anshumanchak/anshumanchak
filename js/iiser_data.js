function populate_iiser(layout){
    layout.sidebar_head1.innerHTML = "Tools";
    layout.sidebar_head2.innerHTML = "Concepts";
    layout.chart_text.innerHTML = "This can be regarded as my first ever internship experience and also the first time I was being exposed\
                                    to a research environment. This project focused more on theory and helped me\
                                    learn many of the basic concepts of statistics and introduced me to the math behind regression.\
                                    <br />I learned how to make inferences using sample data and classified the same into \
                                    Pearson's curves based on the calculation of a defined kappa criterion. \
                                    Eventually, I calculated parameters of the specific curve type which would be a reasonably \
                                    good fit for the above mentioned sample dataset.";
    // Make Charts
    var ctx1 = layout.chart1.getContext('2d');
    var my_doughnut1 = new Chart(ctx1, {
        type: 'doughnut',
        data: {
            labels: ['Numpy', 'Scipy', 'Pandas', 'Statsmodels'],
            datasets: [{
                data: [35, 30, 25, 10],
                backgroundColor: [
                    '#FFAAAA',
                    '#FFCF8E',
                    '#E6F198',
                    '#ABFA92'
                ],
                borderColor: [
                    '#FFAAAA',
                    '#FFCF8E',
                    '#E6F198',
                    '#ABFA92'
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
            labels: ['Skewness', 'Kurtosis', 'Method of Moments', 'Solution of ODEs'],
            datasets: [{
                data: [10, 20, 50, 20],
                backgroundColor: [
                    '#FFAAAA',
                    '#FFCF8E',
                    '#E6F198',
                    '#ABFA92'
                ],
                borderColor: [
                    '#FFAAAA',
                    '#FFCF8E',
                    '#E6F198',
                    '#ABFA92'
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