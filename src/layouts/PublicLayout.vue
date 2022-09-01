<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>
<template>
  <div class="layout">
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
    <router-view />
  </div>
</template>
