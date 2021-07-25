<template>
  <component :is="layout" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DefaultApp from '@/components/layouts/DefaultApp.vue'
import BackendApp from '@/components/layouts/BackendApp.vue'
import store from '@/store'

interface App {
  layout: string
}

export default defineComponent({
  components: {
    'default-app': DefaultApp,
    'backend-app': BackendApp
  },
  data() {
    return {
      layout: 'default-app'
    } as App
  },
  provide: {
    store
  },
  watch: {
    $route(to) {
      if (to.meta.layout !== undefined) {
        this.layout = to.meta.layout
      } else {
        this.layout = 'backend-app'
      }

      // if (to.name != config.route.login) {
      //   this.checkAuthState()
      // }
    }
  }
})
</script>
