const T = require('./index');

const maxChar = T.maxChar;
const unique = T.unique;

describe('max char in a string', () => {

  test('maxChar function exists', () => {
    expect(typeof maxChar).toEqual('function');
  });

  test('Finds the most frequently used char', () => {
    expect(maxChar('a')).toEqual('a');
    expect(maxChar('abcdefghijklmnaaaaa')).toEqual('a');
  });

  test('Works with numbers in the string', () => {
    expect(maxChar('ab1c1d1e1f1g1')).toEqual('1');
  });
})

describe('unique string', () => {

  test('maxChar function exists', () => {
    expect(typeof unique).toEqual('function');
  });

  
  test('unique String' , () => {
    expect(unique('abcd')).toBeTruthy();
  });

  
  test('Not a unique str', () => {
    expect(unique('abcdff')).toBeFalsy();
  });

});