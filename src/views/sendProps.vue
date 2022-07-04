<template>
  <h2>Hello {{ name }} a.k.a {{ heroName }}</h2>
</template> 

<script>

export default {
  props: {
    name: {
      type: String,
      required : true
    },
    heroName: {
      type: String,
      required: true
    }
  }
}
</script>