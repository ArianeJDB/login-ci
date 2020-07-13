/* eslint-disable no-new */
import registeredUsers from './registeredUsers.json'
import { token } from './token'

export function verifyUserRegistered (username, password) {
  const userLogged = registeredUsers.filter(user => user.username === username && user.password === password)
  if (userLogged.length === 0) {
    return loginError()
  } else {
    return loginSuccess()
  }
}

export function loginSuccess () {
  return new Promise((resolve) => {
    console.log(token)
    setTimeout(() => resolve(token), 1000)
  }).then(result => {
    if (localStorage) {
      localStorage.setItem('token', result)
    }
    return result
  })
}

export function loginError () {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      reject(new Error('Unauthorized'))
    }, 1000)
  }).catch(function (err) {
    console.error(err)
  })
}
