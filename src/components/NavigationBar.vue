<template>
  <v-app-bar :elevation="3" color="primary">
    <template v-slot:prepend>
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-app-bar-nav-icon v-bind="props"></v-app-bar-nav-icon>
        </template>
        <v-list>
          <v-list-item to="/">Home</v-list-item>
          <v-list-item to="/quiz">Quiz</v-list-item>
        </v-list>
      </v-menu>
    </template>
    <v-app-bar-title :class="$style.navbarTitle">
      Quiz app
    </v-app-bar-title>
  </v-app-bar>
</template>

<script setup>

</script>

<style module>
  .navbarTitle {
    user-select: none;
  }
</style>