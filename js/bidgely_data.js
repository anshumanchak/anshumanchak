function populate_bidgely(layout) {
    layout.sidebar_head1.innerHTML = "Tools";
    layout.sidebar_head2.innerHTML = "Concepts";
    layout.chart_text.innerHTML = "This was my first time working in a startup environment and I\
                                    thoroughly enjoyed it. Bidgely provides AI based solutions to Utilities \
                                    to create value for both the end consumers and the service providers.<br />\
                                    I had the opportunity to work on the backend of one of their many promising projects, Similar Home \
                                    Comparison(SHC), which helps Bidgely categorize houses in different localities on \
                                    the basis of some predetermined parameters to provide better insights regarding \
                                    the power consumption habits.";

    var ctx1 = layout.chart1.getContext('2d');
    var my_doughnut1 = new Chart(ctx1, {
        type: 'doughnut',
        data: {
            labels: ['Bash', 'Python Regex', 'Daemons', 'PostgreSQL', 'Log4j', 'Java', 'AWS Redshift'],
            datasets: [{
                data: [35, 10, 3, 25, 10, 7, 10],
                backgroundColor: [
                    '#FFAAAA',
                    '#FFCF8E',
                    '#E6F198',
                    '#ABFA92',
                    '#A2EDDE',
                    '#A6CBFE',
                    '#BAA6FE'
                ],
                borderColor: [
                    '#FFAAAA',
                    '#FFCF8E',
                    '#E6F198',
                    '#ABFA92',
                    '#A2EDDE',
                    '#A6CBFE',
                    '#BAA6FE'
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
            labels: ['Scripting', 'Text Parsing', 'Relational Databases', 'Columnar Databases', 'Computer Networks', 'Design Patterns'],
            datasets: [{
                data: [30, 30, 15, 10, 10, 5],
                backgroundColor: [
                    '#FFAAAA',
                    '#FFCF8E',
                    '#E6F198',
                    '#ABFA92',
                    '#A2EDDE',
                    '#A6CBFE'
                ],
                borderColor: [
                    '#FFAAAA',
                    '#FFCF8E',
                    '#E6F198',
                    '#ABFA92',
                    '#A2EDDE',
                    '#A6CBFE'
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
