import { shallowMount } from '@vue/test-utils'
import AppLogin from '@/components/AppLogin'

describe('AppLogin.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(AppLogin)
    expect(wrapper.text()).toContain('Username')
    expect(wrapper.text()).toContain('Password')
    expect(wrapper.text()).toContain('Enviar')

  })
})
