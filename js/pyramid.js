import count from './count.js';

function create(data) {
    const males = count(data.filter(person => person[1] === 'M'));
    const females = count(data.filter(person => person[1] === 'F'));

    const pyramidEl = document.createElement('div');
    Object.keys(count(data)).forEach(year => {
        const yearEl = document.createElement('div');

        const labelEl = document.createElement('div');
        labelEl.className = `label`;
        labelEl.innerText = `${year}`;

        const maleEl = document.createElement('div');
        maleEl.className = 'male';
        maleEl.style.width = `${males[year] || 0}px`;

        const femaleEl = document.createElement('div');
        femaleEl.className = 'female';
        femaleEl.style.width = `${females[year] || 0}px`;
        femaleEl.style.marginLeft = `${300 - (females[year] || 0)}px`;

        yearEl.append(femaleEl);
        yearEl.append(labelEl);
        yearEl.append(maleEl);

        pyramidEl.append(yearEl);
    });
    return pyramidEl;
}

export default create;
