import makeTextFileLineIterator from './iterator.js';

const urlOfFile = 'data/sample.csv';

async function parse() {
    let result = [];
    for await (let line of makeTextFileLineIterator(urlOfFile)) {
        let year = +line.substr(0, 4);
        let gender = line.split(',')[1];
        result.push([year, gender]);
        result.sort((one, two) => one[0] - two[0])
    }
    return result;
}

export default parse;
