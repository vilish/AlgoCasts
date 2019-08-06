const isValid = function (s) {

    let stack = [];

    let pairHashMap = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let i = 0; i < s.length; i++) {
        element = s[i];
        if (pairHashMap[element]) {
            stack.push(element);
        } else if (pairHashMap[stack.pop()] !== element) {
            return false;
        }
    }
    return stack.length === 0;
}

console.log(isValid('(]'))