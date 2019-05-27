import Constants from './constants';

/**
 * @param {number} number
 * @returns {string|number}
 */
export const convert = (number) => {
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
