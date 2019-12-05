Vue.component('todo-count', {
  props: ['nb'],
  template: `
    <span class="todo-count">
      <strong>{{ nb }} item{{ nb > 1 ? 's' : ''}}</strong> left
    </span>
  `
})