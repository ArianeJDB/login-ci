/* eslint-disable no-new */
import registeredUsers from './registeredUsers.json'

const token = 'hjgfdskadfhb293u284u238u423'

export function verifyUserRegistered (username, password) {
  const userLogged = registeredUsers.filter(user => user.username === username && user.password === password)
  if (userLogged.length === 0) {
    new Promise((resolve, reject) => {
      setTimeout(function () {
        reject(new Error('Unauthorized'))
      }, 1000)
    }).catch(function (err) {
      console.error(err)
    })
  } else {
    new Promise((resolve) => {
      setTimeout(function () {
        resolve(token)
      }, 1000)
    }).then(function (result) {
      console.log('?????????', result)
    })
  }
}

// export function verifyUserRegistered (username, password) {
//   const userLogged = registeredUsers.filter(user => user.username === username && user.password === password)
//   if (userLogged.length === 0) {
//     return loginError
//   } else {
//     return loginSuccess
//   }
// }

// const loginSuccess = new Promise((resolve) => {
//   setTimeout(function () {
//     resolve(token)
//   }, 1000)
// })

// const loginError = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     reject(new Error('Unauthorized'))
//   }, 1000)
// })

// loginSuccess.then(function (result) {
//   console.log('token', result)
// })

// loginError.catch(function (err) {
//   console.log(err)
// })
