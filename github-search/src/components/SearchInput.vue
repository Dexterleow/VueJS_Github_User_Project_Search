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
      this.searching = true;

      const GitHub_Base_Url = "https://api.github.com/users";
      const GitHub_User_Repo = "repos?per_page=100"

      fetch(`${GitHub_Base_Url}/${this.username}/${GitHub_User_Repo}`)
        .then(response => response.text())
        .then(responseText => {
          this.searching = false;
          // console.log(responseText);

          const githubSearchResultText = JSON.parse(responseText);

          console.log("githubSearchResultText", githubSearchResultText);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
