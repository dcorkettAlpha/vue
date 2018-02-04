Vue.component('coupon', {
  props: ['code'],
  template: `
    <input type="text" :value="code" @input="updateCode($event.target.value)" ref="input"/>
  `,
  data() {
    return {
      invalids: ['allfree', 'something else', 'coupon']
    }
  },
  methods: {
    updateCode(code) {
      //validation - if code is ALLFREE then alert user
      // update value and code to empty string
      // $emit event for v-model
      if (this.invalids.includes( code.toLowerCase() ) ) {
        alert(`Coupon code ${code} has expired`)

        this.$refs.input.value = code = '';

      }
      this.$emit('input', code);

    }
  }
});

new Vue({
  el: '#app',
  data: {
    coupon: 'Freebie'
  }
});
