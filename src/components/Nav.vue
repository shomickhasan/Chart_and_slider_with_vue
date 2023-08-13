<script setup>
import { RouterLink, RouterView } from 'vue-router'
defineProps({
  navitems : Object,
})
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">{{navitems.title}}</a>
    <div class=" navbar-collapse">
      <ul class="navbar-nav" v-for="(item, key) in navitems.items" :key="key">
        <li class="nav-item active">
          <RouterLink class="nav-link" :to="{ name: item.name }">{{item.navitem}} </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
  <RouterView />
</template>

<style scoped>

</style>