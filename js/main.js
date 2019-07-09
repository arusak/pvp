import createBarChart from './bar-chart.js';
import createPyramid from './pyramid.js';
import parseData from './parser.js';

(async () => {
    try {
        const data = await parseData();

        console.log(data);

        const mainEl = document.getElementById('main');

        mainEl.append(createBarChart(data));
        mainEl.append(createPyramid(data));
    } catch (e) {
        console.log('Shit happened');
        console.log(e);
    }
})();


