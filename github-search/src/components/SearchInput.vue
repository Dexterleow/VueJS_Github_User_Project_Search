<template>
  <div class>
    <h1>{{ msg }}</h1>
    <input type="text" v-model="username" v-on:keydown.13="search">
    <div class="loading">Searching GitHub for "{{ username }}"...</div>
  </div>
</template>

<script>
export default {
  name: "SearchInput",
  data: function() {
    // declare username with an empty value
    return {
      username: ""
    };
  },
  props: {
    msg: String
  },
  methods: {
    search: function() {
      // ...
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
