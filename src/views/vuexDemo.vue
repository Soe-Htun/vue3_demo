<template>
  <h3>{{ $store.state.title }}</h3>
  <input type="text" v-model="title" @keypress.enter="save" />
  <ul>
    <li v-for="(note, index) in notes" :key="index">{{ note }}</li>
  </ul>
  
  <p>Total Notes: {{ totalNotes }}</p>

 
</template>

<script>
import { computed, ref, onMounted } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore();
    const notes = computed(()=> store.state.notes)
    const totalNotes = computed(() => store.getters.totalNotes)

    const title = ref("");
    onMounted(() => {
         console.log('Component is mounted!')
          //  const mp3 = new Audio(require("../../src/assets/mp3/daoshi.mp3"))
          //   mp3.play();
      })
    function save() {
      // notes.value.push(title.value);
      store.dispatch('saveNote', title.value)
      title.value = "";

      const mp3 = new Audio(require("../../src/assets/mp3/daoshi.mp3"))
      mp3.play();
    }
    return {
      store,
      notes,
      totalNotes,
      title,
      save,
    }
  }
}
</script>

<style scoped>
input {
  padding: 3px 0px;
  outline: none;
  margin-top: 20px;
}
p {
  margin-left: 0px
}
li {
  text-align: left;
}
</style>