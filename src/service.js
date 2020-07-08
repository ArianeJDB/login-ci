/* eslint-disable no-new */
import registeredUsers from './registeredUsers.json'

const token = 'hjgfdskadfhb293u284u238u423'

export function verifyUserRegistered (username, password) {
  const userLogged = registeredUsers.filter(user => user.username === username && user.password === password)
  if (userLogged.length === 0) {
    loginError()
  } else {
    loginSuccess()
  }
}

function loginError () {
  new Promise((resolve, reject) => {
    setTimeout(function () {
      reject(new Error('Unauthorized'))
    }, 1000)
  }).catch(function (err) {
    console.error(err)
  })
}

function loginSuccess () {
  new Promise((resolve) => {
    setTimeout(function () {
      resolve(token)
    }, 1000)
  }).then(function (result) {
    localStorage.setItem('token', result)
  })
}
