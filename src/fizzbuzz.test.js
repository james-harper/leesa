import expect from 'expect';

import Constants from './constants';
import fizzbuzz, { convert, toArray } from './fizzbuzz';

describe('Test number conversions', () => {
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

  it('throws an error when trying to convert a non-integer', () => {
    expect(() => {
      convert(3.14);
    }).toThrow('Unable to convert non-integer');
  });
});

describe('Test sequence generation', () => {
  it('generates an array with the appropriate numbers substituted out', () => {
    const array = toArray(15);
    expect(array.length).toBe(15);
    expect(array).toStrictEqual([
      1,
      2,
      Constants.LEESA,
      4,
      Constants.SLEEP,
      Constants.LEESA,
      7,
      8,
      Constants.LEESA,
      Constants.SLEEP,
      11,
      Constants.LEESA,
      13,
      14,
      Constants.LEESASLEEP,
    ]);
  });

  it('generates a string with the appropriate numbers substituted out', () => {
    const commaSeparated = fizzbuzz(5, ', ');
    expect(commaSeparated).toEqual(`1, 2, ${Constants.LEESA}, 4, ${Constants.SLEEP}`);
  });
})