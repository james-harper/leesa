import Constants from './constants';

export const convert = (number) => {
  if (number % 5 === 0) {
    return Constants.SLEEP;
  }

  if (number % 3 === 0) {
    return Constants.LEESA;
  }

  return number;
}
