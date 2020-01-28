const uniq = arr => arr.reduce(
    (acc, value) => (acc.includes(value) ? acc : acc.concat(value)),
    []
);

module.exports = uniq;