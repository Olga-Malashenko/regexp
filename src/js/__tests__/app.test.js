import Validator from '../app';

test('should be valid', () => {
  const person = new Validator('Mary_77A');
  const result = person.validateUsername();
  expect(result).toBeTruthy();
});

test.each([
  ['cyrillic', 'Мария'],
  ['firstNamber', '85Mary'],
  ['numbersMoreThanTree', 'Ma77777ry'],
  ['lastNumber', 'Mary555'],
  ['underscoreFirst', '_Mary'],
  ['underscoreLast', 'Mary_'],
  ['invalidSimbol', 'Mary#am'],
  ['invalidSimbolFirst', '@Mary'],
  ['invalidSimbolLast', 'Mary$']
])('should be fail with %s', (_, name) => {
  const person = new Validator(name);
  const result = person.validateUsername();
  expect(result).toBeFalsy();
});
