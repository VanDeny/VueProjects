<template>
 <div>
   <p>Todo Input</p>
 </div>
</template>

<script>
export default {
  name: "todoInput",
  props: {
    id: {
      type: Number,
      default: 0
    },
    text: {
      type: String,
      default: ''
    },
    isDone: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

</style>
