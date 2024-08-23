<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <router-view v-slot="{ Component }">
    <component :is="Component"></component>
  </router-view>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: 0.5s ease all;
}

// .fade-leave-active {
// }

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
