function openNav(layout,chart_bar, direction) {
    width = document.documentElement.clientWidth;
    if (width < 751) {
        if (direction == 'from left') {
            chart_bar.style.removeProperty('right');
            chart_bar.style.left = '0';
        } else if (direction == 'from right') {
            chart_bar.style.removeProperty('left');
            chart_bar.style.right = '0';
        }
        chart_bar.style.width = "75vw";
        layout.chart_text.style.fontSize = "0.9rem";
    } else {
        if (direction == 'from left') {
            chart_bar.style.removeProperty('right');
            chart_bar.style.left = '0';
        } else if (direction == 'from right') {
            chart_bar.style.removeProperty('left');
            chart_bar.style.right = '0';
        }
        chart_bar.style.width = "43vw";
        layout.chart_text.style.fontSize = "0.95rem";
    }
    console.log('Sidebar opened!');
}

function closeNav(chart_bar) {
    chart_bar.style.width = "0";
    chart_bar.textContent = '';
    console.log('Sidebar closed!');
}
