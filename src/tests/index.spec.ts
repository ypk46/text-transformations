import { CapitalizeEach, ClearSpaces, ReplaceAll } from '../index';

test('Capitalize each word', () => {
  expect(CapitalizeEach('hello world')).toBe('Hello World');
});

test('Clear weird spaces', () => {
  expect(ClearSpaces('hello    world   ')).toBe('hello world');
});

test('Replace all occurrences', () => {
  expect(ReplaceAll('hello cow cow', 'world', ['cow'])).toBe('hello world world');
  expect(ReplaceAll('(809) 849-586', '', ['-', '(', ')', ' '])).toBe('809849586');
});
