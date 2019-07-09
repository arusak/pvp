import count from './count.js';

function create(data) {
    const div = document.createElement('div');
    Object.entries(count(data)).forEach(([year, count]) => {
        const item = document.createElement('div');
        item.className = 'item';
        item.innerText = `${year}: ${count}`;
        item.style.width = `${count}px`;
        div.append(item);
    });
    return div;
}

export default create;
