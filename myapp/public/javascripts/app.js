
new Vue({
  el: '#app',
  data: {
    name: '',
    description: ''
  },

  methods: {
    onSubmit() {
      console.log('data', this.$data);
      axios.post('/projects',this.$data);
    }
    // make an ajax request to server and render res

  }
});
