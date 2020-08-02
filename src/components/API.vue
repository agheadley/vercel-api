<template>
  <v-row justify="center">
    <v-card flat outlined width="80%">
      <!--<v-card-title>Monitor v1</v-card-title>-->
      <v-card-text>
        <p>Testing API</p>
        <v-btn @click="test">API \test</v-btn>
        <v-btn @click="users">API \users</v-btn>
        <p>{{message}}</p>
      </v-card-text>
    </v-card>
  </v-row>
</template>

<script>
export default {
  name: "API",
  data() {
    return {
      message: ""
    };
  },
  methods: {
    test() {
      fetch('/api/test?name="worldy"')
        .then(function(response) {
          return response.text();
        })
        .then(function(text) {
          console.log("Request successful", text);
          //this.message = text;
        })
        .catch(function(error) {
          console.log("Request failed", error);
        });
    },
    users() {
      fetch("/api/users")
        .then(function(response) {
          return response.text();
        })
        .then(function(text) {
          console.log("Request successful", text);
          //this.message = text;
        })
        .catch(function(error) {
          console.log("Request failed", error);
        });
    }
  },
  watch: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
