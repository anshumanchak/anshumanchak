var scrolll = document.createElement('div');
scrolll.className = 'chart_scroll';

var chart_scroll_inner1 = document.createElement('div');
chart_scroll_inner1.className = 'chart_scroll_inner';

var sidebar_head1 = document.createElement('div');
sidebar_head1.className = 'sidebar_head1 heading_style';
sidebar_head1.innerHTML = 'Tools'

var canvas_dim1 = document.createElement('div');
canvas_dim1.className = 'canvas_dim';

var chart_scroll_inner2 = document.createElement('div');
chart_scroll_inner2.className = 'chart_scroll_inner';

var sidebar_head2 = document.createElement('div');
sidebar_head2.className = 'sidebar_head2 heading_style';
sidebar_head2.innerHTML = 'Concepts'

var canvas_dim2 = document.createElement('div');
canvas_dim2.className = 'canvas_dim';

var chart1 = document.createElement('canvas');
var chart2 = document.createElement('canvas');
var chart_text = document.createElement('div');
chart_text.className = 'text_align_justify padding_top padding_left padding_right margin_top';

// Finally append the whole thing to sidebar
// By checking what element is clicked
scrolll.appendChild(chart_scroll_inner1);
chart_scroll_inner1.appendChild(sidebar_head1);
chart_scroll_inner1.appendChild(canvas_dim1);
scrolll.appendChild(chart_scroll_inner2);
chart_scroll_inner2.appendChild(sidebar_head2);
chart_scroll_inner2.appendChild(canvas_dim2);

function openNav(element) {
    width = document.documentElement.clientWidth;
    if (width < 751) {
        element.style.width = "75vw";
        chart_text.style.fontSize = "0.9rem";
    } else {
        element.style.width = "43vw";
        chart_text.style.fontSize = "0.95rem";
    }
}

function closeNav(element) {
    element.style.width = "0";
}

var open_sidebar_omdena = document.getElementById("open_sidebar_omdena");
var open_sidebar_bidgely = document.getElementById("open_sidebar_bidgely");
var open_sidebar_slb = document.getElementById("open_sidebar_slb");
var open_sidebar_iiser = document.getElementById("open_sidebar_iiser");
var open_sidebar_reddash = document.getElementById("open_sidebar_reddash");
var open_sidebar_adlas = document.getElementById("open_sidebar_adlas");
var chart_bar = ''
var my_doughnut1 = ''
var my_doughnut2 = ''
var side_is_open = 0;
$("html").click(function (event) {
    var a = event.target;
    if (side_is_open == 0) {
        if (a == open_sidebar_omdena) {
            chart_bar = document.getElementById("chart_bar");
            chart_text.innerHTML = "One of the most positive things I have done in these difficult times of the Covid-19 pandemic \
                                    is this AI for Good initiative with Omdena and Reddot Foundation. <br />\
                                    The goal of the challenge was to collect and analyze data from different social media platforms and\
                                    news sources so as to create a well formed, reliable data source and gain insights on the rise in\
                                    DV incidents during the nationwide lockdown. Links to some awesome articles written by my fellow \
                                    collaborators are mentioned below :\
                                    <br />‣ <a href = 'https://omdena.com/blogs/domestic-violence/'>Twitter Data Analysis</a><br />\
                                    ‣ <a href='https://medium.com/omdena/analyzing-domestic-violence-during-covid-19-through-natural-language-processing-fe1905de744e'>News Data Analysis</a>";
            // Append everything together
            canvas_dim1.appendChild(chart1);
            canvas_dim2.appendChild(chart2);
            chart_bar.appendChild(scrolll);
            chart_bar.appendChild(chart_text);
            // Make Charts
            var ctx1 = chart1.getContext('2d');
            my_doughnut1 = new Chart(ctx1, {
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
            var ctx2 = chart2.getContext('2d');
            my_doughnut2 = new Chart(ctx2, {
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
            openNav(chart_bar);
            side_is_open = 1;
        }
        else if (a == open_sidebar_bidgely) {
            chart_bar = document.getElementById("chart_bar");
            chart_text.innerHTML = "This was my first time working in a startup environment and I\
                                    thoroughly enjoyed it. Bidgely provides AI based solutions to Utilities \
                                    to create value for both the end consumers and the service providers.<br />\
                                    I had the opportunity to work on the backend of one of their many promising projects, Similar Home \
                                    Comparison(SHC), which helps Bidgely categorize houses in different localities on \
                                    the basis of some predetermined parameters to provide better insights regarding \
                                    the power consumption habits.";
            // Append everything together
            canvas_dim1.appendChild(chart1);
            canvas_dim2.appendChild(chart2);
            chart_bar.appendChild(scrolll);
            chart_bar.appendChild(chart_text);
            // Make Charts
            var ctx1 = chart1.getContext('2d');
            my_doughnut1 = new Chart(ctx1, {
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
            var ctx2 = chart2.getContext('2d');
            my_doughnut2 = new Chart(ctx2, {
                type: 'doughnut',
                data: {
                    labels: ['Scripting', 'Text Parsing', 'Relational Databases', 'Columnar Databases', 'Computer Networks','Design Patterns'],
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
            openNav(chart_bar);
            side_is_open = 1;
        }
        else if (a == open_sidebar_slb) {
            chart_bar = document.getElementById("chart_bar");
            chart_text.innerHTML = "This project was at its core a text classification problem with\
                                    huge number of classes and a highly imbalanced dataset. The main challenge was\
                                    to build a robust ML pipeline to deal with this imbalance. <br />So, apart from building \
                                    a classifier I applied outlier detection techniques like One Class SVM algorithm to separate out newly or rarely \
                                    purchased parts from those which are bought on a daily basis, to reduce the class imbalance.\
                                    Next, I implemented Louvain Community Detection algorithm to cluster the detected outliers \
                                    from the previous step and assign part numbers according to their descriptions.";
            // Append everything together
            canvas_dim1.appendChild(chart1);
            canvas_dim2.appendChild(chart2);
            chart_bar.appendChild(scrolll);
            chart_bar.appendChild(chart_text);
            // Make Charts
            var ctx1 = chart1.getContext('2d');
            my_doughnut1 = new Chart(ctx1, {
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
            var ctx2 = chart2.getContext('2d');
            my_doughnut2 = new Chart(ctx2, {
                type: 'doughnut',
                data: {
                    labels: ['Bag of Words', 'TF - IDF', 'LSA', 'Skipgram', 'Word2vec', 'Random Forest', 'Bagging', 'Boosting', 'One Class SVM', 'Isolation Forest', 'Louvain Community Detection'],
                    datasets: [{
                        data: [5,10,5,5,15,15,5,10,15,5,10],
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
            openNav(chart_bar);
            side_is_open = 1;
        }
        else if (a == open_sidebar_iiser) {
            chart_bar = document.getElementById("chart_bar");
            chart_text.innerHTML = "This can be regarded as my first ever internship experience and also the first time I was being exposed\
                                    to a research environment. This project focused more on theory and helped me\
                                    learn many of the basic concepts of statistics and introduced me to the math behind regression.\
                                    <br />I learned how to make inferences using sample data and classified the same into \
                                    Pearson's curves based on the calculation of a defined kappa criterion. \
                                    Eventually, I calculated parameters of the specific curve type which would be a reasonably \
                                    good fit for the above mentioned sample dataset.";
            // Append everything together
            canvas_dim1.appendChild(chart1);
            canvas_dim2.appendChild(chart2);
            chart_bar.appendChild(scrolll);
            chart_bar.appendChild(chart_text);
            // Make Charts
            var ctx1 = chart1.getContext('2d');
            my_doughnut1 = new Chart(ctx1, {
                type: 'doughnut',
                data: {
                    labels: ['Numpy', 'Scipy', 'Pandas', 'Statsmodels'],
                    datasets: [{
                        data: [35,30,25,10],
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
            var ctx2 = chart2.getContext('2d');
            my_doughnut2 = new Chart(ctx2, {
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
            openNav(chart_bar);
            side_is_open = 1;
        }
        else if (a == open_sidebar_reddash) {
            chart_bar = document.getElementById("chart_bar");
            chart_text.innerHTML = "This was part of our submission for Microsoft Code Fun Do ++, 2018-19, wherein we managed \
                                    to bag the Campus Runners Up Prize. <br />For the admin side dashboard, we used the Azure Custom \
                                    Vision API to predict whether an uploaded image depicted a natural disaster, \
                                    trained on flood images as of now. \
                                    For the Zone map, we scraped geocode data from NRT Global Flood Mapping of areas under \
                                    danger and represented it on a map on the dashboard using plotly. Lastly, we \
                                    built an SMS app to facilitate communication between victim and rescuer \
                                    using Twilio API, and linked it with the main dashboard.";
            // Append everything together
            canvas_dim1.appendChild(chart1);
            canvas_dim2.appendChild(chart2);
            chart_bar.appendChild(scrolll);
            chart_bar.appendChild(chart_text);
            // Make Charts
            var ctx1 = chart1.getContext('2d');
            my_doughnut1 = new Chart(ctx1, {
                type: 'doughnut',
                data: {
                    labels: ['HTML', 'CSS', 'Javascript', 'Flask', 'Azure Custom Vision API', 'Beautiful Soup', 'Plotly', 'Twilio API'],
                    datasets: [{
                        data: [5,10,10,20,15,5,20,15],
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
            var ctx2 = chart2.getContext('2d');
            my_doughnut2 = new Chart(ctx2, {
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
            openNav(chart_bar);
            side_is_open = 1;
        }
        else if (a == open_sidebar_adlas) {
            chart_bar = document.getElementById("chart_bar");
            chart_text.innerHTML = "This project was part of my Soft Computing course in the fourth semester of college, for which we \
                                    were selected as the Best Project by points tally. <br />\
                                    Our aim was to build a bot which would help smoothen the desktop apps experience. \
                                    We monitored user behaviour and recorded timestamps of when one launches and runs applications, \
                                    to discover intent of a user. For example watching a movie on VLC would be an intent, programming \
                                    using Sublime Text would be another. \
                                    As none of us had proper industry exposure then, we used Self Organizing Feature Maps from MATLAB \
                                    toolbox for clustering the applications. Finally, we were able to automate the process of \
                                    launching applications which belonged to the same cluster, once the intent of the user was detected, \
                                    using python and shell for scripting.";
            // Append everything together
            canvas_dim1.appendChild(chart1);
            canvas_dim2.appendChild(chart2);
            chart_bar.appendChild(scrolll);
            chart_bar.appendChild(chart_text);
            // Make Charts
            var ctx1 = chart1.getContext('2d');
            my_doughnut1 = new Chart(ctx1, {
                type: 'doughnut',
                data: {
                    labels: ['Powershell', 'MATLAB', 'Python', 'Tkinter' ],
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
            var ctx2 = chart2.getContext('2d');
            my_doughnut2 = new Chart(ctx2, {
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
            openNav(chart_bar);
            side_is_open = 1;
        }
    }else if (side_is_open == 1) {
        if (!chart_bar.contains(a)) {
            side_is_open = 0;
            closeNav(chart_bar);
            chart_bar.textContent = '';
            my_doughnut1.destroy();
            my_doughnut2.destroy();
        }
    }
});