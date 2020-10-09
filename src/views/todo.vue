<template>

    <div >
      <todoInput/>

      <ul>
        <listItem/>
      </ul>
    </div>

</template>

<script>

import todoInput from "../components/todoInput.vue"
import listItem from "../components/listItem.vue"

export default {
  name: "todo",
  components: {
    todoInput,
    listItem
  },
  data() {
    return {
      itemList: []
    }
  },
  methods: {}
}
</script>
