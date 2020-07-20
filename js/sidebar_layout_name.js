class layout_name {
    canvas_dim = document.createElement('div');
    image = document.createElement('img');
    chart_text = document.createElement('div');

    add_class() {
        this.canvas_dim.className = 'canvas_dim';
        this.chart_text.className = 'text_align_justify padding_top padding_left padding_right margin_top';
        console.log('classNames added');
    }

    append_all(chart_bar) {
        //
        this.canvas_dim.appendChild(this.image);
        chart_bar.appendChild(this.canvas_dim);
        chart_bar.appendChild(this.chart_text);
        console.log('Layout added!');
    }
}
