import {mount} from 'vue-test-utils';
import DataCache from './DataCache.vue';

describe('DataCache', () => {
  const wrapper = mount(DataCache);
  it('should be a dataCache', () => {
    expect(DataCache.name).toEqual('dataCache');
  });
  it('should have a getCache function', () => {
    spyOn(wrapper.vm, 'getCache');
    wrapper.vm.getCache();
    expect(wrapper.vm.getCache).toHaveBeenCalled();
  });
  it('should have a refreshCache function', () => {
    spyOn(wrapper.vm, 'refreshCache');
    wrapper.vm.refreshCache();
    expect(wrapper.vm.refreshCache).toHaveBeenCalled();
  });
  it('should emit a cache updated event', () => {
    wrapper.vm.refreshCache();
    expect(wrapper.emitted().cacherefreshed).toBeTruthy();
  });
});
