<script>

import {useStore} from "vuex";
import {computed, onMounted} from "vue";

export default {
  methods: {
    baseUrl() {
      return baseUrl
    }
  },
  setup()
  {
    const store = useStore()

    const userName = computed(()=>{
      return store.getters["getUserName"]
    })
    onMounted(()=>{

    })
    return{
      userName,
    }
  }
}
</script>

<template>
  Welcome {{ userName }}
</template>

<style scoped>

</style>