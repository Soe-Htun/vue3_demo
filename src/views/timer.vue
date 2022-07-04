<template>
  <div>
  <!--{{ countDownTimer }}--> 
   {{ timeFormat }}
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
export default {
  setup() {
    const timeFormat = ref(10)
    const timePassed = ref(0);
    const timeLeft = ref(0)
    const timerInterval = ref("null");
    onMounted(() => {
      startTimer();
    })
    const countDownTimer = computed(() => {
      this.timeLeft = this.timeFormat - this.timePassed
      // return this.timeLeft
      let hours = Math.floor(this.timeLeft / 3600);
      hours = hours <=0? "" : hours + ":"
      let minutes = Math.floor((this.timeLeft % 3600)/ 60);
      if(minutes < 10) {
        minutes = `0${minutes}`
      }
      let seconds = this.timeLeft % 60;
      if(seconds < 10) {
        seconds = `0${seconds}`
      }
      return `${hours} ${minutes} ${seconds}`
    })
    function startTimer() {
      // if(this.timerInterval) {
      //   clearInterval(timerInterval)
      // }
      // this.timerInterval = setInterval(() => {
      //   // this.timePassed += 1;
      //   this.timeFormat--
      // }, 1000);
      // console.log(this.timerInterval);

      // if(this.timeFormat === 0 ) {
      //   clearInterval(timerInterval)
      // }
      // this.timerInterval = setInterval(() => {
      //   this.timeFormat--
      // }, 1000);
      // console.log(this.timeFormat);

      if(this.timeFormat > 0) {
        setInterval(() => {
          this.timeFormat--
          this.startTimer();
        }, 1000);
      }
    }
    return {  timeFormat, timePassed, timeLeft, timerInterval, startTimer, countDownTimer }
  }
}
</script>