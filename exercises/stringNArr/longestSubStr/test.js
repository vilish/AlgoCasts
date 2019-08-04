const L = require('./index');

const longestSubStrLen = L.longestSubStrLen;
const longestSubStr = L.longestSubStr;

describe('Length of longest sub string', () => {

    test('longestSubStr function is defined', () => {
        expect(typeof longestSubStrLen).toEqual('function');
    })

    test('abcabcbb -> longest sub string length is 3', () => {
        expect(longestSubStrLen('abcabcbb')).toEqual(3);
    })

    test('pwwkew -> longest sub string length is 3', () => {
        expect(longestSubStrLen('pwwkew')).toEqual(3);
    })

    test('bbbbb -> longest sub string length is 1', () => {
        expect(longestSubStrLen('bbbbb')).toEqual(1);
    })


    test('pwwkewabcdefgha -> longest sub string length is 9 ', () => {
        expect(longestSubStrLen('pwwkewabcdefgha')).toEqual(9);
    })

});

describe('longest sub string', () => {

    test('longestSubStr function is defined', () => {
        expect(typeof longestSubStr).toEqual('function');
    })

    test('abcabcbb -> longest sub string length is abc', () => {
        expect(longestSubStr('abcabcbb')).toEqual('abc');
    })

    test('pwwkew -> longest sub string length is wke', () => {
        expect(longestSubStr('pwwkew')).toEqual('wke');
    })

    test('bbbbb -> longest sub string length is b', () => {
        expect(longestSubStr('bbbbb')).toEqual('b');
    })

    test('pwwkewabcdefgha -> longest sub string length is wabcdefgh ', () => {
        expect(longestSubStr('pwwkewabcdefgha')).toEqual('wabcdefgh');
    })

});