import { reflect, scale, translate, transpose } from '../main/transform';

describe('Transform Test', () => {
  it('Translate', () => {
    const map = translate(10, 10);
    expect(map([0, 0])).toEqual([10, 10]); // [10, 10]
    expect(map([2, 3])).toEqual([12, 13]); // [12, 13]
    // @ts-ignore
    expect(map.type()).toEqual('translate'); // 'translate'
  });

  it('Scale', () => {
    const map = scale(10, 10);
    expect(map([0, 0])).toEqual([0, 0]); // [0, 0]
    expect(map([2, 3])).toEqual([20, 30]); // [20, 30]
    // @ts-ignore
    expect(map.type()).toBe('scale'); // 'scale'
  });

  it('Reflect', () => {
    const map = reflect();
    expect(map([1, 2])).toEqual([-1, -2]); // [-1, -2]
    expect(map([-2, 3])).toEqual([2, -3]); // [2, -3]
    // @ts-ignore
    expect(map.type()).toBe('reflect'); // 'reflect'
  });

  it('Transpose', () => {
    const map = transpose();
    expect(map([1, 2])).toEqual([2, 1]); // [2, 1]
    expect(map([-2, 3])).toEqual([3, -2]); // [3, -2]
    // @ts-ignore
    expect(map.type()).toBe('transpose'); // 'transpose'
  });
});
