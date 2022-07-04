<template>
  <div>
    <h2>Language Search</h2>
    <div class="form-gp">
      <input type="text"
        v-model="input"
        
        placeholder="Enter Language"
      />
    </div>

    <ul>
      <li v-for="(item) in Search" :key="item">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import {ref, computed, onMounted} from 'vue'
export default {
  setup() {
    const input = ref("")
    const languages = ref([
      'Javascript',
      'Ruby',
      'Java',
      'Python',
      'Kotlin',
      'Android'
    ])
    onMounted(() => {
      console.log(this.languages)
    })
    const Search = computed(()=> {
      return this.languages.filter((item) => {
        return item.toLowerCase().includes(this.input.toLowerCase())
      })
    })
    // function handleSearch() {
    //   this.languages.filter(item => item.toLowerCase().includes(this.input.toLowerCase()))
    // }

    return {
      input, languages, Search
    }
  }
}
</script>

<style scoped>
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
  li {
    margin: 0px 20px;
    text-align: left;
  }
</style>