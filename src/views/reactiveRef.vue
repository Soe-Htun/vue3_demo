<template>
  <p>
    The ref is “Reactive Reference” which wraps primitive data to allow us to track change. Don’t forget that we use data() to wrap the primitive inside object in Vue 2.
  </p>
  <img src="../../src/assets/ref.png" />

  <p>Result: </p>
  <p>Name: {{ name }}</p>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const name = ref('Aung Aung');
    return { name }
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