function populate_slb(layout){
    layout.sidebar_head1.innerHTML = "Tools";
    layout.sidebar_head2.innerHTML = "Concepts";
    layout.chart_text.innerHTML = "This project was at its core a text classification problem with\
                                    huge number of classes and a highly imbalanced dataset. The main challenge was\
                                    to build a robust ML pipeline to deal with this imbalance. <br />So, apart from building \
                                    a classifier I applied outlier detection techniques like One Class SVM algorithm to separate out newly or rarely \
                                    purchased parts from those which are bought on a daily basis, to reduce the class imbalance.\
                                    Next, I implemented Louvain Community Detection algorithm to cluster the detected outliers \
                                    from the previous step and assign part numbers according to their descriptions.";
    // Make Charts
    var ctx1 = layout.chart1.getContext('2d');
    var my_doughnut1 = new Chart(ctx1, {
        type: 'doughnut',
        data: {
            labels: ['Pandas', 'NLTK', 'Gensim', 'Scikit - learn', 'Networkx'],
            datasets: [{
                data: [35, 15, 5, 35, 10],
                backgroundColor: [
                    '#FFAAAA',
                    '#FFCF8E',
                    '#E6F198',
                    '#ABFA92',
                    '#A2EDDE'
                ],
                borderColor: [
                    '#FFAAAA',
                    '#FFCF8E',
                    '#E6F198',
                    '#ABFA92',
                    '#A2EDDE'
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
            labels: ['Bag of Words', 'TF - IDF', 'LSA', 'Skipgram', 'Word2vec', 'Random Forest', 'Bagging', 'Boosting', 'One Class SVM', 'Isolation Forest', 'Louvain Community Detection'],
            datasets: [{
                data: [5, 10, 5, 5, 15, 15, 5, 10, 15, 5, 10],
                backgroundColor: [
                    '#EF4C4C',
                    '#F08D57',
                    '#F3BB59',
                    '#F7E75D',
                    '#DCF55E',
                    '#9FF15F',
                    '#5FF1A6',
                    '#62F3DB',
                    '#62DDF3',
                    '#6AB9F7',
                    '#D374F9'
                ],
                borderColor: [
                    '#EF4C4C',
                    '#F08D57',
                    '#F3BB59',
                    '#F7E75D',
                    '#DCF55E',
                    '#9FF15F',
                    '#5FF1A6',
                    '#62F3DB',
                    '#62DDF3',
                    '#6AB9F7',
                    '#D374F9'
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