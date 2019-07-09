import createBarChart from './bar-chart.js';
import createPyramid from './pyramid.js';
import parseData from './parser.js';

(async () => {
    let data;

    try {
        data = await parseData();
    } catch (e) {
        console.log('Error parsing data');
        console.log(e);
    }

    const mainEl = document.getElementById('main');

    mainEl.append(createBarChart(data));
    mainEl.append(createPyramid(data));

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            Array.from(document.getElementsByClassName('chart')).forEach(chart => chart.style.display = 'none');
            document.getElementsByClassName(link.dataset.chart)[0].style.display = 'block';
        });
    });

})();


