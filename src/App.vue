<template>
  <div id="app">
    <v-app>
      <v-app-bar app>Monitor v1</v-app-bar>
      <v-main>
        <v-container fluid>
          <Monitor></Monitor>
          <API></API>
        </v-container>
      </v-main>
      <v-footer app>AGH</v-footer>
    </v-app>
  </div>
</template>

<script>
import Monitor from "./components/Monitor";
import API from "./components/API";

export default {
  name: "App",
  components: {
    Monitor,
    API
  }
};
</script>