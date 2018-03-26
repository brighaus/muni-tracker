import {apiMx} from './api.js';

describe('apiMx', () => {
  it('should exist', () => {
    expect(apiMx).toBeTruthy();
  });
  it('should fetch route data', () => {
    expect(apiMx.getRouteData).toBeTruthy();
  });
  it('should fetch bus data', () => {
    expect(apiMx.getBusData).toBeTruthy();
  });
});
