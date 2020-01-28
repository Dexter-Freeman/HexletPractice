const uniq = require('./uniq');

const arr = [1,2,2,3,4,4];
const result = [1,2,3,4]

test('uniq(arr) is equal result', () => {
    expect(uniq(arr)).toEqual(result);
  });