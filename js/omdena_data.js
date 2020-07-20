function populate_omdena(layout){
    layout.sidebar_head1.innerHTML = "Tools";
    layout.sidebar_head2.innerHTML = "Concepts";
    layout.chart_text.innerHTML = "One of the most positive things I have done in these difficult times of the Covid-19 pandemic \
                                    is this AI for Good initiative with Omdena and Reddot Foundation. <br />\
                                    The goal of the challenge was to collect and analyze data from different social media platforms and\
                                    news sources so as to create a well formed, reliable data source and gain insights on the rise in\
                                    DV incidents during the nationwide lockdown. Links to some awesome articles written by my fellow \
                                    collaborators are mentioned below :\
                                    <br />‣ <a href = 'https://omdena.com/blogs/domestic-violence/'>Twitter Data Analysis</a><br />\
                                    ‣ <a href='https://medium.com/omdena/analyzing-domestic-violence-during-covid-19-through-natural-language-processing-fe1905de744e'>News Data Analysis</a>";
    
    var ctx1 = layout.chart1.getContext('2d');
    var my_doughnut1 = new Chart(ctx1, {
        type: 'doughnut',
        data: {
            labels: ['Scrapy', 'Twitterscraper', 'Doccano', 'NLTK', 'Spacy', 'Scikit-learn', 'Tableau'],
            datasets: [{
                data: [5, 20, 35, 20, 5, 10, 5],
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
            labels: ['Data Preprocessing', 'LDA', 'Multilingual Embeddings', 'Text Augmentation', 'SMOTE', 'Stacking', 'NER using CRF'],
            datasets: [{
                data: [35, 5, 10, 10, 10, 10, 20],
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
    console.log('Data populated');
}