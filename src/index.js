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
