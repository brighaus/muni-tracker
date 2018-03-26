import {dataCacheMx} from './dataCache.js';

describe('dataCacheMx', () => {
  it('should exist', () => {
    expect(dataCacheMx).toBeDefined();
  });
  it('should give access to a cache', () => {
    spyOn(dataCacheMx, 'getCache');
    dataCacheMx.getCache();
    expect(dataCacheMx.getCache).toHaveBeenCalled();
  });
  it('should have a refreshCache function', () => {
    expect(dataCacheMx.refreshCache).toBeTruthy();
  });
});
