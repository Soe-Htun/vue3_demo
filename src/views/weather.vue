<template>
  <div>
    <div> {{ dateBuilder }}</div>
    <input v-model="city" @keypress="fetchWeather"/>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
export default {
  setup() {
    const city= ref("");
    const weather = ref({})
    const api_key = ref("bc57f017d5066faee7ad7791bae2e85b")
    const url_base = ref("https://api.openweathermap.org/data/2.5")
    const dateBuilder = computed(() => {
      // return name.value.toUpperCase()
      let d=new Date();
      let months=["January", "February", "March",  "April", "May", "June", "July", "August", 
      "September", "October", "November", "December"];
      let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]
      let day=days[d.getDay()];
      let date=d.getDate();
      let month=months[d.getMonth()];
      let year=d.getFullYear();
      let hours = d.getHours();
      hours = hours < 10 ? hours : `0${hours}`;
      let minutes = d.getMinutes();
      minutes = minutes < 10 ? `0${ minutes }` : minutes 
      let seconds = d.getSeconds();
      seconds = seconds < 10? `0${seconds}` : seconds
      let dateFormat=day +" "+ date+" "+ month+ " " + year + " " + hours + ":" + minutes + ":" + seconds;
      return dateFormat;
    })
    function fetchWeather() {
      console.log(city.value)
      fetch(`${this.url_base}weather?q=${this.city}&units=metric&APPID=${this.api_key}`).then(res => {
        return res.json();
      }).then(this.setResults)
      console.log(this.weather)
    }
    function setResults(results) {
      this.weather = results
      console.log(this.weather)
    }
  onMounted(() => {
    fetchWeather()
  })
    return {
      city, fetchWeather, url_base, api_key, dateBuilder, weather, setResults
    }
  }
}
</script>

<style>
  input{
    padding : 5px 0px;
    border-radius: 5px;
    outline : none;
    border: 1px solid grey;
    text-indent: 10px
  }
</style>