Vue.component('todo', {
  props: ['todo'],
  template: `
    <li class="todo" :class="{completed: todo.completed, editing: copiedTodo && copiedTodo.id === todo.id}">
      <div class="view">
        <input class="toggle" v-model="todo.completed" type="checkbox">
        <label @dblclick="copiedTodo = Object.assign({}, todo)">{{ todo.name }}</label>
        <button class="destroy" @click="$emit('delete', todo.id)"></button>
      </div>
      <input class="edit" v-focus v-model.trim="todo.name" @keyup.enter="edit(todo)" @blur="edit(todo)" @keyup.esc="escape(todo)" type="text"/>
    </li>
  `,
  data: function () {
    return {
      copiedTodo: null
    }
  },
  methods: {
    edit: function (todo) {
      if (todo.name.length === 0) {
        this.$emit('delete', todo.id)
      }
      this.copiedTodo = null
    },
    escape: function (todo) {
      todo.name = this.copiedTodo.name
      this.copiedTodo = null
    }
  },
  directives: {
    focus: {
      update: function (el) {
        el.focus()
      }
    }
  }
})