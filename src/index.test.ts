import { hello } from '.';

describe('hello()', () => {
  it('say hello', () => {
    expect(hello()).toBe('Hello, world!');
    expect(hello('Bob')).toBe('Hello, Bob!');
  });
});
