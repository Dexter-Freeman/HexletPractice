const compose = require('./compose');

const f = compose(Math.sqrt, Math.abs);

test('compose(Math.sqrt, Math.abs)(-4) is equal 2', () => {
    expect(f(-4)).toBe(2);
  });

test('compose(v => v, v => v * v)(10) is equal 100', () => {
    expect(compose(v => v, v => v * v)(10)).toBe(100);
  });