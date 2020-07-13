<template>
  <div>
      <button @click="logout">logout</button>
      Welcome to the app!
     <router-view/>

  </div>
</template>

<script>

export default {

  name: 'AppHome',
  data () {
    return {
    }
  },
  mounted () {
    const tokenStored = localStorage.getItem('token')
    if (!tokenStored) {
      window.location.href = '/'
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('token')
      window.location.href = '/'
    }
  }
}
</script>

<style>
</style>
