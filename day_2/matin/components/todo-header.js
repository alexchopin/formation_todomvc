Vue.component('todo-header', {
  props: ['title'],
  template: `
    <header class="header">
      <h1>{{ title }}</h1>
      <input class="new-todo" v-model.trim="newTodo" @keyup.enter="save" autofocus autocomplete="off" placeholder="What needs to be done?">
    </header>
  `,
  data: function () {
    return {
      newTodo: ''
    }
  },
  methods: {
    save: function () {
      if (this.newTodo.length) {
        this.$emit('add-todo', {
          id: Date.now(),
          name: this.newTodo,
          completed: false
        })
        this.newTodo = ''
      }
    }
  }
})