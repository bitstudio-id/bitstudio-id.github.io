import { mount } from '@vue/test-utils'
import Home from '../src/modules/home/views/home.vue'

test('Home.vue', async () => {
  const wrapper = mount(Home)
  expect(wrapper.html()).toContain('Lorem ipsum dolor sit amet')
  expect(wrapper.html()).toContain('Home.vue')
  expect(wrapper.html()).toContain('Text 0')
  await wrapper.find('button').trigger('click')
  expect(wrapper.html()).toContain('Text 1')
})
