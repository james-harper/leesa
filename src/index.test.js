import expect from 'expect';

import { convert } from '.';

describe('fizz buzz test', () => {
  it('outputs the number as is, if it is not a multiple of 3 or 5', () => {
    expect(convert(1)).toBe(1);
    expect(convert(2)).toBe(2);
    expect(convert(17)).toBe(17);
  });
});
