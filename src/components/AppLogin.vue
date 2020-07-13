<template>
 <div class="login_container">
    <img src="../assets/karumi+copy.png" alt="Logo de Karumi" />
    <form action>
      <div class="username_container">
        <label for="username" class="hidden">Username</label>
        <input type="text" v-model="username" placeholder="username"/>
      </div>
      <div class="password_container">
        <label for="password" class="hidden">Password</label>
        <input type="password" v-model="password" placeholder="password"/>
      </div>
      <button type="button" @click="sendLogin">Login</button>
    </form>
  </div>
</template>

<script>
import { verifyUserRegistered } from '../service'
export default {
  name: 'AppLogin',
  data () {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    sendLogin () {
      verifyUserRegistered(this.username, this.password)
    }
  }
}
</script>

<style>
.login_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  border: solid 1px rgb(233, 232, 232);
  border-radius: 5px;
  padding: 100px 0px 70px;
}
.hidden {
  display: none;
}
img {
  width: 100px;
  margin-bottom: 60px
}
input {
  font-size: 16px;
  height: 25px;
  width: 100%;
  margin-bottom: 20px;
  border: solid 1px rgb(233, 232, 232);
  border-radius: 5px;
  padding: 5px;

}
form {
  width: 200px;
}
button {
  font-size: 18px;
  background-color: rgb(0, 124, 218);
  color: white;
  height: 40px;
  width: 100px;
  border: none;
  border-radius: 5px;
  margin-top: 20px
}
</style>
