<template>
  <form @submit="onTaskSubmit">
    <input type="text" placeholder="What do you need to forget?" v-model="text" required>
  </form>
</template>

<script>
export default {
  name: "todoInput",
  data() {
    return {
      text: ""
    }
  },
  methods: {
    onTaskSubmit(e) {
      e.preventDefault();
      const task = this.text;

      this.$emit("eventAddNewTasks", task);
      this.text = '';
    }
  }
}
</script>
