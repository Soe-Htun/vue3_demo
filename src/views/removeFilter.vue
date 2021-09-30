<template>
  <div id="app">
    <p>Filter which is deprecated in Vue 3, can be used to apply common text formatting.</p>
    <img src="../../src/assets/removeFilter.png" />

    <p>Result:</p>
    <p>Today date is: {{formatUnix(new Date())}}</p>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "App",
  components: {
  },
  setup() {
    function formatUnix(value) {
      if (value) {
        return moment(value).format("DD/MM/YYYY")
      }
    }
    return {
      formatUnix 
    };
  },
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
</style>