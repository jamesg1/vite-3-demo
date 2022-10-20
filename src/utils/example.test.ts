import { assert, expect, test } from 'vitest';

test('Math.sqrt()', () => {
  expect(Math.sqrt(16)).toBe(4);
});

test('JSON', () => {
  const input = {
    foo: 'hi',
    bar: 'vite',
  };

  const output = JSON.stringify(input);

  expect(output).eq('{"foo":"hi","bar":"vite"}');
  assert.deepEqual(JSON.parse(output), input, 'matches original');
});
