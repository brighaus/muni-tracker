import {mapRenderMx} from './mapRender.js';

describe('mapRenderMx', () => {
  it('should exist', () => {
    expect(mapRenderMx).toBeDefined();
  });
  it('should have a render function', () => {
    spyOn(mapRenderMx, 'render');
    mapRenderMx.render();
    expect(mapRenderMx.render).toHaveBeenCalled();
  });
});
