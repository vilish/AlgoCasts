const compress = (str) => {
    let result = '';


    let start = 0;
    while (start < str.length - 1) {
        let count = 0;

        let next = start + 1;
        while (next < str.length && str[start] === str[next]) {
            count++;
            next++;
        }

        if (count === 0) {
            result += str[start];
        } else {
            result += str[start] + count;
        }

        start = next;
    }

    return result;

}

module.exports = compress;