import Constants from './constants';

export const convert = (number) => {
  if (number % 3 === 0) {
    return Constants.LEESA;
  }

  return number;
}
