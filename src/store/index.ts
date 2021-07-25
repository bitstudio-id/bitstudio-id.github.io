import { readonly, reactive } from 'vue'

const state = reactive({
  user: null,
  online: false,
  hash: null
})

export default {
  state: readonly(state)
}
