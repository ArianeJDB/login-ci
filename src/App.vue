<template>
  <div id="app">
     <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      mounted () {
        window.location.href = '/'
      }
    }
  }
}
</script>

<style>
#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
