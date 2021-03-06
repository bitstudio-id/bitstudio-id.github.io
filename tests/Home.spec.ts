import { mount } from '@vue/test-utils'
import Home from '../src/modules/home/views/Home.vue'

test('Home.vue', async () => {
  const wrapper = mount(Home)
  expect(wrapper.html()).toContain('Home.vue')
  expect(wrapper.html()).toContain('Text 0')
  await wrapper.find('button').trigger('click')
  expect(wrapper.html()).toContain('Text 1')
})
