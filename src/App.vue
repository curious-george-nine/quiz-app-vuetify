<template>
  <v-layout>
    <NavigationBar />
    <main :class="$style.main">
      <router-view />
    </main>
  </v-layout>
</template>

<script setup>
import NavigationBar from './components/NavigationBar.vue';
</script>

<style module>
  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    flex-direction: column;
    width: max(480px, 80%);
    margin-inline: auto;
  }
</style>

<style>
  .contents {
    display: contents;
  }
</style>