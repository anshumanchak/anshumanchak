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
chart_text.className = 'text_align_justify default_font padding_top padding_left padding_right';

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
    } else {
        element.style.width = "43vw";
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
            chart_bar = document.getElementById("chart_bar_omdena");
            chart_text.innerHTML = "Data substantiating Domestic Violence from government resources are only available in summary form. \
                                    Incidents are largely reported via calls, hence making data collection and subsequent mapping difficult."
                                    + "<br / >" + 
                                    "The goal of the challenge was to collect and analyze data from different social media platforms and\
                                    news sources so as to create a well - formed, reliable data source and gain insights on the rise in\
                                    DV incidents during the nation - wide lockdown. Links to some awesome articles written by my fellow \
                                    collaborators are mentioned below :" + 
                                    "<br />• <a href = 'https://omdena.com/blogs/domestic-violence/'>Twitter Data Analysis</a><br />" +
                                    "• <a href='https://medium.com/omdena/analyzing-domestic-violence-during-covid-19-through-natural-language-processing-fe1905de744e'>News Data Analysis</a>";
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
            chart_bar = document.getElementById("chart_bar_bidgely");
            chart_text.innerHTML = "This was my first time working in a startup environment and I\
                                    thoroughly enjoyed it. Bidgely provides AI based solutions to Utilities \
                                    to create value for both the end consumers and the service providers.<br />\
                                    I had the opportunity to work on one of their many promising projects - Similar Home \
                                    Comparison(SHC), which helps Bidgely categories houses in different localities on \
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
                    labels: ['Scripting', 'Text Parsing', 'Relational Databases', 'Columnar Databases', 'Computer Networks'],
                    datasets: [{
                        data: [35, 30, 15, 10, 10],
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