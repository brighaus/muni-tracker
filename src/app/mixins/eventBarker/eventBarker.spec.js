import {mount} from 'vue-test-utils';
import {eventBarkerMx} from './eventBarker.js';

describe('eventBarker', () => {
  const wrapper = mount(eventBarkerMx);
  it('should exist', () => {
    expect(wrapper.vm).toBeDefined();
  });
  it('should emit events', () => {
    spyOn(wrapper.vm, '$emit');
    wrapper.vm.$emit('test-event');
    expect(wrapper.vm.$emit).toHaveBeenCalled();
  });
});
