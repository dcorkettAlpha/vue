new Vue({
  el: '#app',

  data: {
    skills: []
  },

  mounted() {
    // make an ajax request to server and render res

    axios.get('/skills').then(res =>{
      console.log(res.data);
      this.skills = res.data.skills;
    }
    );
  }
});
