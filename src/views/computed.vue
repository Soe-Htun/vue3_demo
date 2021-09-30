<template>
  <div class="home">
  <p>Vue 2 has a separate section for computed but you can define a function in the setup()method. Let me show you how to implement computed in the setup() method.</p>
    <img src="../../src/assets/computed.png" />

    <p>Result:</p>
    <p> Upper: <b> {{ upperName }} </b> out of {{ name }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import {ref , computed } from 'vue';
export default {
  name: 'Home',
  setup() {
    const name= ref("Aung Aung");
    const upperName = computed(() => {
      return name.value.toUpperCase()
    })
    return {
      name, upperName
    }
  }
}
</script>


<style>
  img {
    margin: 20px;
    background-size : 100%
  }
  p {
    margin-left: 20px;
    text-align: left;
  }
</style>