import { CapitalizeEach, ClearSpaces } from '../index';

test('Capitalize each word', () => {
  expect(CapitalizeEach('hello world')).toBe('Hello World');
});

test('Clear weird spaces', () => {
  expect(ClearSpaces('hello    world   ')).toBe('hello world');
});
