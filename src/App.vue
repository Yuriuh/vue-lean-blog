<template>
  <div id="app">
    <blog-header></blog-header>
    <router-view/>
  </div>
</template>

<script>
import BlogHeader from './components/BlogHeader'
export default {
  components: {
    BlogHeader
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
