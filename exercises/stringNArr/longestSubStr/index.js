const longestSubStrLen = (s) => {

    let subStr = '';
    let startIndex = 0;
    let maxSize = 0;
    let longestString = subStr;

    //loop through string 
    s.split('').forEach((element) => {
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

    return longestString.length;

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



module.exports = {
    longestSubStrLen,
    longestSubStr
};