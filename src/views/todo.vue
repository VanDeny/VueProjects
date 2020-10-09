<template>
  <div class="todo-wrapper">
    <div class="todo-input">
      <todoInput @eventAddNewTasks="onAddNewTask"/>
    </div>

    <div class="todo-list">
      <ul>
        <listItem v-for="item in itemList" :key="item.id" :text="item.text" :id="item.id" :isDone="item.isDone"
                  @eventTaskStatusChange="onTaskStatusChange" eventTaskDelete="onTaskDelete"/>
      </ul>
    </div>
  </div>
</template>

<script>

import todoInput from "../components/todoApp/todoInput.vue"
import listItem from "../components/todoApp/listItem.vue"

export default {
  title: 'Todo App',
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
  methods: {
    onAddNewTask(taskName) {
      const task = {
        id: (new Date()).getTime(),
        text: taskName,
        isDone: false
      }

      this.itemList.push(task)
    },

    onTaskStatusChange(id, checked) {
      console.log(id, checked)

      let item = this.itemList.find(i => i.id == id)
      if (item) {
        item.isDone = checked
      }

      console.log(this.itemList)
    },

    onTaskDelete(id) {
      console.log(id)

      let index = this.itemList.findIndex(i => i.id == id)
      if (index > -1) {
        this.itemList.splice(index, 1)
      }

      console.log(this.itemList)
    },


    loadItemList() {
      this.itemList = JSON.parse(localStorage.getItem("VuejsTodo")) || []

      console.log("this.itemList =", this.itemList)
    },


    updateItemList() {
      localStorage.setItem("VuejsTodo", JSON.stringify(this.itemList))
    }
  },

  mounted() {
    this.loadItemList()
  },

  watch: {
    itemList: {

      handler() {
        console.log("item changed")

        this.updateItemList()
      },
      deep: true
    }
  }
}
</script>
