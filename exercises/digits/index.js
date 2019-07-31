const digitsOnly = (str) => {
    let digitRegex = /[1234567890]/g;

    let found = str.match(digitRegex);

    return found.join('') === str;

    // str.

}

const charsOnly = (str) => {
    let digitRegex = /[a-zA-Z]/g;

    let found = str.match(digitRegex);
    console.log('found  ' + found.join(''));
    return found.join('') === str;

    // str.

}

console.log(charsOnly("VilishL"))
console.log(charsOnly("IndiALondoa@123"))

module.exports = {
    digitsOnly,
    charsOnly
}