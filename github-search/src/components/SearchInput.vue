<template>
  <div class>
    <h1>{{ msg }}</h1>
    <input type="text" v-model="username" v-on:keydown.13="search">
    <div class="loading">Searching GitHub for "{{ username }}"...</div>
    <div v-for="result in results" v-bind:key="result.id">
      <div class="github_search_result_name">Project Title: {{ result.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchInput",
  data: function() {
    // declare username with an empty value
    return {
      username: "",
      results: ""
    };
  },
  props: {
    msg: String
  },
  methods: {
    search: function() {
      this.searching = true;

      const GitHub_Base_Url = "https://api.github.com/users";
      const GitHub_User_Repo = "repos?per_page=100";

      fetch(`${GitHub_Base_Url}/${this.username}/${GitHub_User_Repo}`)
        .then(response => response.text())
        .then(responseText => {
          this.searching = false;

          const githubSearchResultText = JSON.parse(responseText);
          console.log("githubSearchResultText", githubSearchResultText);

          this.results = githubSearchResultText;
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
.github_search_result_name {
  margin: 10px;
}
</style>
