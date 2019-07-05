const reverse = require('./index');

describe("reverse string test", () => {

  test('Reverse function exists', () => {
    expect(reverse).toBeDefined();
  });

  test('Reverse reverses a string', () => {
    expect(reverse('abcd')).toEqual('dcba');
  });

  test('Reverse reverses a string', () => {
    expect(reverse('  abcd')).toEqual('dcba  ');
  });
  
    test('Reverse reverses a single char string', () => {
    expect(reverse('a')).toEqual('a');
  });

});
