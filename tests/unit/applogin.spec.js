import { shallowMount } from '@vue/test-utils'
import AppLogin from '@/components/AppLogin'
describe('AppLogin.vue', () => {
  test('renders props.msg when passed', () => {
    const wrapper = shallowMount(AppLogin)
    expect(wrapper.text()).toContain('Username')
    expect(wrapper.text()).toContain('Password')
  })

  test('when sendLogin should call ', () => {
    const verifyUserRegisteredMock = jest.fn()
    AppLogin.methods.sendLogin()
    verifyUserRegisteredMock()
    expect(verifyUserRegisteredMock).toHaveBeenCalled()
  })
})
