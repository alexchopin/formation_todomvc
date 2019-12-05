Vue.component('todo-filters', {
  props: ['filter', 'list'],
  template: `
    <ul class="filters">
      <li v-for="etat in list">
        <a :href="'#/'+ 'etat'" @click.prevent="$emit('update:filter', etat)" v-bind:class="{selected: filter === etat}">
          {{ etat }}
        </a>
      </li>
    </ul>
  `
})