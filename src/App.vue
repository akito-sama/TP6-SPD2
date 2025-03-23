<script setup>
import NavBarVue from "./components/NavBar.vue";
import PostListVue from './components/PostList.vue'
</script>

<template>
  <div class="center">
    <NavBarVue />
  </div>
  <router-view />
</template>

<style>
.center {
  display: flex;
  justify-content: center;
}
</style>
