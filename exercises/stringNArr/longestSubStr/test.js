const L = require('./index');

const longestSubStrLen = L.longestSubStrLen;
const longestStrByMap = L.longestStr;
const longestSubStr = L.longestSubStr;
const longestStringByMap = L.longestString;

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

describe('Length of longest sub string by Char Map', () => {

    test('longestStr function is defined', () => {
        expect(typeof longestStrByMap).toEqual('function');
    })

    test('abcabcbb -> longest sub string length is 3', () => {
        expect(longestStrByMap('abcabcbb')).toEqual(3);
    })

    test('pwwkew -> longest sub string length is 3', () => {
        expect(longestStrByMap('pwwkew')).toEqual(3);
    })

    test('bbbbb -> longest sub string length is 1', () => {
        expect(longestStrByMap('bbbbb')).toEqual(1);
    })


    test('pwwkewabcdefgha -> longest sub string length is 9 ', () => {
        expect(longestStrByMap('pwwkewabcdefgha')).toEqual(9);
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

describe('longest sub string solution by charMap', () => {

    test('longestSubStr function is defined', () => {
        expect(typeof longestStringByMap).toEqual('function');
    })

    test('abcabcbb -> longest sub string length is abc', () => {
        expect(longestStringByMap('abcabcbb')).toEqual('abc');
    })

    test('pwwkew -> longest sub string length is wke', () => {
        expect(longestStringByMap('pwwkew')).toEqual('wke');
    })

    test('bbbbb -> longest sub string length is b', () => {
        expect(longestStringByMap('bbbbb')).toEqual('b');
    })

    test('pwwkewabcdefgha -> longest sub string length is wabcdefgh ', () => {
        expect(longestStringByMap('pwwkewabcdefgha')).toEqual('wabcdefgh');
    })

});