import count from './count.js';

function create(data) {
    const stats = count(data);
    const allYears = Object.keys(stats).map(year => +year);
    const minYear = Math.min(...allYears);
    const maxYear = Math.max(...allYears);

    const chart = document.createElement('div');
    chart.className = 'chart bar-chart';

    for (let y = minYear; y <= maxYear; y++) {
        const count = stats[y];

        const yearEl = Object.assign(document.createElement('div'), {className: 'item'});

        const barEl = document.createElement('div');
        barEl.className = 'bar';
        barEl.style.height = `${count}px`;
        yearEl.append(barEl);

        const labelEl = document.createElement('div');
        labelEl.className = 'label';
        yearEl.append(labelEl);

        if (y % 5 === 0) {
            labelEl.innerText = `${y}`;
        }

        chart.append(yearEl);
    }

    return chart;
}

export default create;
