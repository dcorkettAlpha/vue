let goatName = {
    firstName: 'Fred'
};

new Vue({
  el: '#app',
  data: {
    shared: goatName,
    lastName: 'McGoatFace'

  }
});

new Vue({
  el: '#app2',
  data: {
    shared: goatName,
    lastName: 'Beardy'
  }
});
