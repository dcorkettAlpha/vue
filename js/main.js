/* global Vue*/

Vue.component('task-list', {
//slot as template for li
  template: `<div>
              <task v-for="(task, key) in tasks" :key="key"> {{ task.description }}</task>
            </div>`,

  data() {
    return {
      tasks: [
        { description: 'Go to the store', completed: true},
        { description: 'Finish Tutorial', completed: false},
        { description: 'Eat', completed: false},
        { description: 'Sleep', completed: false},
        { description: 'Be Merry', completed: false},
        { description: 'Drink lots of water', completed: true}
      ]
    };
  }
});

Vue.component('task', {
//slot as template for li
  template: '<li><slot></slot></li>'
});

new Vue({
  el: '#root'
});
