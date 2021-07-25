<template>
  <div>Login.vue</div>
  <p>Click to login</p>
  <button @click="login">Login</button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()
    const login = () => {
      router.replace({
        path: '/'
      })
    }

    return {
      login
    }
  }
})
</script>
