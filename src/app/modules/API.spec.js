import API from './API.js';

describe('API', () => {
  it('should be an API', () => {
    expect(API.name).toBe('API');
  });
  it('should have a fetchData method', () => {
    spyOn(API, 'fetchData');
    API.fetchData();
    expect(API.fetchData).toHaveBeenCalled();
  });
});
