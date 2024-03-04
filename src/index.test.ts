import adsense from '.';

describe('adsense()', () => {
  it('plugin name', () => {
    expect(adsense().name).toBe('vite:plugin-adsense');
  });
});
