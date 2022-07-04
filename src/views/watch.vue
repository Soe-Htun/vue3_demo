
<template>
  <div>
  <p>The new version provides a new thing for reactive observing the change of data called watchEffect(). It will re-run when their dependencies change.</p>
    <img src="../../src/assets/watch.png" />

    <p>Result: </p>
    <input type="text" v-model="name" />
    <!-- <p> The result of watch: {{ test }} </p> -->
     <p> The result of watch: {{ name }} </p>
  </div>
  <div class="weather-wrap" v-if="typeof weather.main != 'undefined'">
        <div class="location-box">
          <div class="location">{{weather.name}} , {{weather.sys.country}}</div>
          <div class="date">{{ dateBuilder }}</div>
        </div>
        <div class="weather-box">
          <div class="temp">{{Math.round(weather.main.temp)}}°C</div>
          <div class="weather">{{weather.weather[0].main}}</div>
        </div>
      </div>
</template>

<script>
import { ref, watchEffect } from "vue";
export default {
  setup() {
    const name = ref('');
    // const test = watchEffect(() => {
    //   console.log(name.value);
    //   return name
      
    // })
      watchEffect(() => {
      console.log(name.value);
      // return name
      
    })
    // return { name, test };
      return { name };
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
   input {
    margin-left: 20px;
    padding: 3px 0px;
    outline: none;
  }
</style>