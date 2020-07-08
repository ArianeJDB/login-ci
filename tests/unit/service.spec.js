import registeredUsers from '../../src/registeredUsers.json'
import { verifyUserRegistered } from '../../src/service'
describe('service', () => {
  test('verifyUserRegistered should verify is user is registered by username and password', () => {
    const username = 'pepa'
    const password = 'pig'
    const credentials = [{ password, username }]
    const userLogged = registeredUsers.filter(user => user.username === username && user.password === password)
    verifyUserRegistered()
    expect(userLogged).toStrictEqual(credentials)
  })
})