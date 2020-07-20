class layout_projects {
    scrolll = document.createElement('div');
    chart_scroll_inner1 = document.createElement('div');
    sidebar_head1 = document.createElement('div');
    canvas_dim1 = document.createElement('div');
    chart_scroll_inner2 = document.createElement('div');
    sidebar_head2 = document.createElement('div');
    canvas_dim2 = document.createElement('div');
    chart1 = document.createElement('canvas');
    chart2 = document.createElement('canvas');
    chart_text = document.createElement('div');

    add_class(){
        this.scrolll.className = 'chart_scroll'
        this.chart_scroll_inner1.className = 'chart_scroll_inner';
        this.sidebar_head1.className = 'sidebar_head1 heading_style';
        this.canvas_dim1.className = 'canvas_dim';
        this.chart_scroll_inner2.className = 'chart_scroll_inner';
        this.sidebar_head2.className = 'sidebar_head2 heading_style';
        this.canvas_dim2.className = 'canvas_dim';
        this.chart_text.className = 'text_align_justify padding_top padding_left padding_right margin_top';
        console.log('classNames added');
    }

    append_all(chart_bar) {
        // Finally append the whole thing to sidebar
        this.scrolll.appendChild(this.chart_scroll_inner1);
        this.chart_scroll_inner1.appendChild(this.sidebar_head1);
        this.chart_scroll_inner1.appendChild(this.canvas_dim1);
        this.scrolll.appendChild(this.chart_scroll_inner2);
        this.chart_scroll_inner2.appendChild(this.sidebar_head2);
        this.chart_scroll_inner2.appendChild(this.canvas_dim2);
        //
        this.canvas_dim1.appendChild(this.chart1);
        this.canvas_dim2.appendChild(this.chart2);
        chart_bar.appendChild(this.scrolll);
        chart_bar.appendChild(this.chart_text);
        console.log('Layout added!');
    }
}

