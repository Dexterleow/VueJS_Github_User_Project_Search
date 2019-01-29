<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <SearchInput msg="Welcome to VueJS Github User Search"/>
  </div>
</template>

<script>
import SearchInput from './components/SearchInput.vue'

export default {
  name: 'app',
  components: {
    SearchInput
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
