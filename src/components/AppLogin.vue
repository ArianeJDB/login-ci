<template>
  <div>
      <form action="">
           <label for="username">Username</label>
           <input type="text" v-model="username">
           <label for="password">Password</label>
           <input type="password" v-model="password">
           <button type="button"  @click="sendLogin">Enviar</button>
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
</style>
