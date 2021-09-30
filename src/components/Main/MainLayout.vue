<template>
   <div class="header">
      <h3>Vue_3</h3>
   </div>

   <div class="container">
      <div class="left">
         <ul>
            <li @click="active(1)"
               :style="{ backgroundColor: id === 1 ? '#409eff' : '' }"
            >
               Computed
            </li>
            <li @click="active(2)"
               :style="{ backgroundColor: id === 2 ? '#409eff' : '' }"
            >
               Reactive Reference
            </li>
            <li @click="active(3)"
               :style="{ backgroundColor: id === 3 ? '#409eff' : '' }"
            >
               Watch
            </li>
            <li @click="active(4)"
               :style="{ backgroundColor: id === 4 ? '#409eff' : '' }"
            >
               Methods
            </li>
            <li @click="active(5)"
               :style="{ backgroundColor: id === 5 ? '#409eff' : '' }"
            >
               Remove Filter
            </li>
            <li @click="active(6)"
               :style="{ backgroundColor: id === 6 ? '#409eff' : '' }"
            >
               Vuex Demo
            </li>
         </ul>
      </div>
      <div class="right">
         <router-view/>
      </div>
   </div>
</template>

<script>
// import Home from '../views/Home.vue'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
export default {
  setup() {
     const id = ref(1);
     const router = useRouter();
      onMounted(() => {
         console.log('Component is mounted!')
         router.push('/computed');
      })
   
     function active(id){
        if(id === 1) {
         router.push('/computed');
        } else if( id ===2 ) {
           router.push('/reactiveRef');
        } else if( id ===3 ) {
           router.push('/watch');
        } else if( id ===4 ) {
           router.push('/methods');
        } else if( id ===5 ) {
           router.push('/removeFilter');
        } else if( id ===6 ) {
           router.push('/vuex');
        }
        this.id = id;
     }
     
     return {
        id, active, router
     }
  }
}
</script>

<style>
   *{
      padding: 0px;
      margin: 0px;
   }
   .header {
      padding : 10px 20px;
      border-bottom: 1px solid #f5f6f7
   }
   .left {
      width: 200px;
      position: fixed; 
      height: 100%;
      background: #ebedf0
   }
   ul {
     text-align: center
   }
   li {
      list-style-type: none;
      padding: 15px 0px;
      cursor : pointer
   }
   .right {
      position: fixed;
      left: 200px;
      padding: 10px;
      width: calc(100% - 200px);
      height: 100%;
      background: #E5E2E2
   }
</style>