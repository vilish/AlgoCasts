const compress = require('./index');

describe('compress a string', () => {

    test('compress is a function', () => {
        expect(typeof (compress)).toEqual('function');
    });

    test('compress aaabbbbcdee to a2b3cde1', () => {
        expect(compress('aaabbbbcdee')).toEqual('a2b3cde1');
    });


});