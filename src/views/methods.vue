<template>
  <div>
    <p>Vue 2 has a separate section for methods but in Vue 3, you can define methods in setup()method. This is an example of creating methods using the setup() method.</p>
    <img src="../../src/assets/methods.png" />

    <p>Result: </p>
    <p>Amount: {{ amount }}</p>
    <button @click="increaseAmount()">Increase Capacity</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const amount = ref(3);
    function increaseAmount() {
      amount.value+=1
    }
    return { amount, increaseAmount };
  }
};
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
  button {
    margin-left: 20px;
    padding: 5px;
    border-radius: 8px;
    border: 1px solid black;        
  }
</style>