const longestPalindrome = require('./index');

describe('longest palindrome', () => {

    test('longestPalindrome is a function', () => {
        expect(typeof (longestPalindrome)).toEqual('function');
    })

    test('cbbd has bb longest palindrome', () => {
        expect(longestPalindrome('cbbd')).toEqual('bb');
    })

    test('abba has abba longest palindrome', () => {
        expect(longestPalindrome('abba')).toEqual('abba');
    })

    test('a has a longest palindrome', () => {
        expect(longestPalindrome('a')).toEqual('a');
    })

    test('abcdcacd has dcacd longest palindrome', () => {
        expect(longestPalindrome('abcdcacd')).toEqual('dcacd');
    })

    test('ac has a longest palindrome', () => {
        expect(longestPalindrome('ac')).toEqual('a');
    })

    test(' empty string has  no longest palindrome', () => {
        expect(longestPalindrome('')).toEqual('');
    })

    test(' babadada string has  no longest palindrome', () => {
        expect(longestPalindrome('babadada')).toEqual('adada');
    })


});