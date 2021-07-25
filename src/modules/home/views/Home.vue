<template>
  <h3>Lorem ipsum dolor sit home</h3>
  <div>Home.vue</div>
  <p>Text {{ sample }}</p>
  <button @click="increment">Inc</button>
  <button @click="decrement">Dec</button>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const sample = ref<number>(0)
    const increment = () => {
      sample.value += 1
    }
    const decrement = () => {
      sample.value -= 1
    }

    return {
      sample,
      increment,
      decrement
    }
  }
})
</script>
