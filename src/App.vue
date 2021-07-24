<template>
  <ul>
    <li><router-link to="/">Home</router-link></li>
    <li><router-link to="/login">Login</router-link></li>
    <li><router-link to="/blank">Blank</router-link></li>
  </ul>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>
