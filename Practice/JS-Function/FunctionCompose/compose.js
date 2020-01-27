const compose = (firstFunc, secondFunc) => param => firstFunc(secondFunc(param));

module.exports = compose;