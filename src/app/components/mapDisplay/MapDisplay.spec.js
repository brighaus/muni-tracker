import {mount} from 'vue-test-utils';
import MapDisplay from './MapDisplay.vue';

describe('MapDisplay', () => {
  const mapWrapper = mount(MapDisplay);
  it('should be a map', () => {
    expect(MapDisplay.name).toEqual('mapDisplay');
  });
  it('should have map data', () => {
    expect(mapWrapper.vm.mapData).toBeTruthy();
  });
});
