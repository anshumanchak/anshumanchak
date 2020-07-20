var open_sidebar_name = document.getElementById("open_sidebar_name");
var open_sidebar_omdena = document.getElementById("open_sidebar_omdena");
var open_sidebar_bidgely = document.getElementById("open_sidebar_bidgely");
var open_sidebar_slb = document.getElementById("open_sidebar_slb");
var open_sidebar_iiser = document.getElementById("open_sidebar_iiser");
var open_sidebar_reddash = document.getElementById("open_sidebar_reddash");
var open_sidebar_adlas = document.getElementById("open_sidebar_adlas");
var chart_bar = '';
var direction = '';
var side_is_open = 0;
$("html").click(function (event) {
    var a = event.target;
    if (side_is_open == 0) {
        if (a == open_sidebar_omdena) {
            chart_bar = document.getElementById("chart_bar");
            layout = new layout_projects();
            layout.add_class();
            layout.append_all(chart_bar);
            direction = 'from left'
            // Get data in layout
            populate_omdena(layout);
            openNav(layout,chart_bar,direction);
            side_is_open = 1;
        }
        else if (a == open_sidebar_bidgely) {
            chart_bar = document.getElementById("chart_bar");
            layout = new layout_projects();
            layout.add_class();
            layout.append_all(chart_bar);
            direction = 'from left'
            populate_bidgely(layout);
            openNav(layout, chart_bar, direction);
            side_is_open = 1;
        }
        else if (a == open_sidebar_slb) {
            chart_bar = document.getElementById("chart_bar");
            layout = new layout_projects();
            layout.add_class();
            layout.append_all(chart_bar);
            direction = 'from left'
            populate_slb(layout);
            openNav(layout, chart_bar, direction);
            side_is_open = 1;
        }
        else if (a == open_sidebar_iiser) {
            chart_bar = document.getElementById("chart_bar");
            layout = new layout_projects();
            layout.add_class();
            layout.append_all(chart_bar);
            direction = 'from left'
            populate_iiser(layout);
            openNav(layout, chart_bar, direction);
            side_is_open = 1;
        }
        else if (a == open_sidebar_reddash) {
            chart_bar = document.getElementById("chart_bar");
            layout = new layout_projects();
            layout.add_class();
            layout.append_all(chart_bar);
            direction = 'from left'
            populate_reddash(layout);
            openNav(layout, chart_bar, direction);
            side_is_open = 1;
        }
        else if (a == open_sidebar_adlas) {
            chart_bar = document.getElementById("chart_bar");
            layout = new layout_projects();
            layout.add_class();
            layout.append_all(chart_bar);
            direction = 'from left'
            populate_adlas(layout);
            openNav(layout, chart_bar, direction);
            side_is_open = 1;
        }
        else if (a == open_sidebar_name) {
            chart_bar = document.getElementById("chart_bar");
            layout = new layout_name();
            layout.add_class();
            layout.append_all(chart_bar);
            direction = 'from right'
            populate_name(layout);
            openNav(layout, chart_bar, direction);
            side_is_open = 1;
        }
    }else if (side_is_open == 1) {
        if (!chart_bar.contains(a)) {
            side_is_open = 0;
            closeNav(chart_bar);
        }
    }
});