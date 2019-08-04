const longestSubStrLen = (s) => {

    let subStr = '';
    let startIndex = 0;
    let longestString = subStr;

    //loop through string 
    s.split('').forEach((element) => {
        const indexInStr = subStr.indexOf(element);
        subStr += element;

        if (indexInStr < 0) {
            if (longestString.length < subStr.length) {
                longestString = subStr;
            }
        } else {
            startIndex = indexInStr + 1;
            subStr = subStr.substring(startIndex);
        }

    });

    return longestString.length;

}

// implement by charMap (key=letter, value=lastIndex)
// get maxLength by the max of last max length or from start to current char

function longestStr(s) {

    let charMap = {};
    let startIndex = 0;
    let maxLength = 0;

    s.split('').forEach((element, index) => {

        if (charMap[element] >= startIndex) {
            startIndex = charMap[element] + 1;
        }

        charMap[element] = index;
        maxLength = Math.max(maxLength, index - startIndex + 1);
    })

    return maxLength;
}

const longestSubStr = (str) => {

    let subStr = '';
    let startIndex = 0;
    let maxSize = 0;

    let longestString = subStr;

    //loop through string 
    str.split('').forEach((element) => {
        const indexInStr = subStr.indexOf(element);
        subStr += element;

        if (indexInStr < 0) {
            maxSize++;
            if (longestString.length < subStr.length) {
                longestString = subStr;
            }
        } else {
            startIndex = indexInStr + 1;
            subStr = subStr.substring(startIndex);
        }

    });

    return longestString;

}


// using char map
function longestString(s) {

    let charMap = {};
    let startIndex = 0;
    let longestStr = '';

    s.split('').forEach((element, index) => {

        if (charMap[element] >= startIndex) {
            startIndex = charMap[element] + 1;
        }

        charMap[element] = index;

        if (longestStr.length < index - startIndex + 1) {
            longestStr = s.substring(startIndex, index + 1);
        }
    })

    return longestStr;
}

longestString('abcab');

module.exports = {
    longestSubStrLen,
    longestSubStr,
    longestStr,
    longestString
};