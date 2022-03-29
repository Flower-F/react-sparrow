import createLog from '../main/log';

const scale = createLog({
  domain: [10, 100],
  range: [10, 200],
  base: 2,
});

describe('Log 比例尺', () => {
  it('Log 比例尺应该每次乘以 2', () => {
    expect(scale.ticks(3)).toEqual([16, 32, 64]); // [16, 32, 64]  = [2 ^ 4, 2 ^5, 2 ^6]
  });
});
