<template>
  <div class>
    <h1>{{ msg }}</h1>
    <input
      type="text"
      class="github_search-page-alignment"
      v-model="username"
      v-on:keydown.13="search"
    >
    <div class="github_search-page-alignment">Searching GitHub for "{{ username }}"...</div>
    <div>
      <div class="left">{{ username }}'s Projects</div>
      <div class="right">Project's ReadME</div>
      <div class="left">
        <div
          v-for="result in results"
          v-bind:key="result.id"
          v-on:click="search_Project_ReadME($event)"
          v-bind:id="result.name"
        >
          <div class="github_search-page-alignment">Project Title: {{ result.name }}</div>
        </div>
      </div>
      <div class="right">{{readMeContent}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchInput",
  data: function() {
    return {
      username: "User",
      results: "",
      readMeContent: ""
    };
  },
  props: {
    msg: String
  },
  methods: {
    search: function() {
      const GitHub_Base_Url_User = "https://api.github.com/users";
      const GitHub_User_Repo = "repos?per_page=100";

      fetch(`${GitHub_Base_Url_User}/${this.username}/${GitHub_User_Repo}`)
        .then(response => {
          if (!response.ok) {
            console.log(response);
            throw Error(response.statusText);
          }
          return response;
        })
        .then(response => response.text())
        .then(responseText => {
          let githubSearchResultText = JSON.parse(responseText);
          this.results = githubSearchResultText;
        })
        .catch(error => {
          console.error(error);
        });
    },

    search_Project_ReadME: function(event) {
      let targetId = event.currentTarget.id;
      const GitHub_Base_Url_SearchProject = "https://api.github.com/repos";
      const GitHub_Base_Url_ContentReadMe = "contents/README.md";

      fetch(
        `${GitHub_Base_Url_SearchProject}/${
          this.username
        }/${targetId}/${GitHub_Base_Url_ContentReadMe}`
      )
        .then(response => {
          if (!response.ok) {
            console.log(response);
            let errorMessage = "There was an error loading contents :/";
            this.readMeContent = errorMessage;
            throw Error(response.statusText);
          }
          return response;
        })
        .then(response => response.text())
        .then(responseText => {
          let githubSearchResultText_ReadME = JSON.parse(responseText);
          let encodedString = githubSearchResultText_ReadME.content;
          let decodedString = atob(encodedString);
          this.readMeContent = decodedString;
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
.github_search-page-alignment {
  margin: 10px;
}

.left {
  width: 50%;
  float: left;
}

.right {
  width: 50%;
  float: right;
}
</style>
