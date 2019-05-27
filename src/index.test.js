import expect from 'expect';

import { convert } from '.';
import Constants from './constants';

describe('fizz buzz tests', () => {
  it('outputs the number as is, if it is not a multiple of 3 or 5', () => {
    expect(convert(1)).toBe(1);
    expect(convert(2)).toBe(2);
    expect(convert(17)).toBe(17);
  });

  it('outputs "Leesa" if the number is a multiple of 3', () => {
    expect(convert(3)).toBe(Constants.LEESA);
    expect(convert(9)).toBe(Constants.LEESA);
  });

  it('outputs "Sleep" if the number is a multiple of 5', () => {
    expect(convert(5)).toBe(Constants.SLEEP);
    expect(convert(50)).toBe(Constants.SLEEP);
  });

  it('outputs "LeesaSleep" if the number is a multiple of both 3 and 5', () => {
    expect(convert(15)).toBe(Constants.LEESASLEEP);
    expect(convert(90)).toBe(Constants.LEESASLEEP);
  });
});
