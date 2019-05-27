import Constants from './constants';

/**
 * @param {number} number
 * @throws {TypeError} number must be an integer
 * @returns {string|number}
 */
export const convert = (number) => {
  if (!Number.isInteger(number)) {
    throw new TypeError('Unable to convert non-integer');
  }

  switch (true) {
    case (number % 15 === 0):
      return Constants.LEESASLEEP;
    case (number % 3 === 0):
      return Constants.LEESA;
    case (number % 5 === 0):
      return Constants.SLEEP;
    default:
      return number;
  }
}

/**
 * Generate an array up to the given number
 *
 * @param {number} iterations
 * @returns {array}
 */
export const toArray = (iterations) => {
  const arr = [...new Array(iterations)];
  return arr.map((_, index) => convert(index + 1));
}

export default (iterations, separator = '\n') => toArray(iterations).join(separator);
