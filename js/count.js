function count(data) {
    return data.reduce((res, cur) => {
        let year = cur[0];
        if (!res[year]) {
            res[year] = 1;
        } else {
            res[year]++;
        }
        return res;
    }, {});
}

export default count;
