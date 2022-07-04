<template>
  <div>
    <sendProps name="Aung" heroName="Alpha"/>
    <sendProps name="Myo" heroName="Phoveous"/>
    <sendProps :name="username" :heroName="hName" />
  </div>
</template>

<script>
import sendProps from '../views/sendProps.vue'
import { ref } from 'vue'
export default {
  components: {
    sendProps
  },
  setup() {
    const username= ref("Soe");
    const hName = ref("Beatrix")
    return {
      username, hName
    }
  }
}
</script>