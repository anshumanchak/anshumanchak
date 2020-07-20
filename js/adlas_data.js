function populate_adlas(layout) {
    layout.sidebar_head1.innerHTML = "Tools";
    layout.sidebar_head2.innerHTML = "Concepts";
    layout.chart_text.innerHTML = "This project was part of my Soft Computing course in the fourth semester of college, for which we \
                                    were selected as the Best Project by points tally. <br />\
                                    Our aim was to build a bot which would help smoothen the desktop apps experience. \
                                    We monitored user behaviour and recorded timestamps of when one launches and runs applications, \
                                    to discover intent of a user. For example watching a movie on VLC would be an intent, programming \
                                    using Sublime Text would be another. \
                                    As none of us had proper industry exposure then, we used Self Organizing Feature Maps from MATLAB \
                                    toolbox for clustering the applications. Finally, we were able to automate the process of \
                                    launching applications which belonged to the same cluster, once the intent of the user was detected, \
                                    using python and shell for scripting.";

    var ctx1 = layout.chart1.getContext('2d');
    var my_doughnut1 = new Chart(ctx1, {
        type: 'doughnut',
        data: {
            labels: ['Powershell', 'MATLAB', 'Python', 'Tkinter'],
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
            labels: ['Clustering', 'Self Organizing Feature Maps', 'Shell Scripting', 'Desktop apps UI'],
            datasets: [{
                data: [10, 40, 40, 10],
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