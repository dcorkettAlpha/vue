/* global Vue*/

Vue.component('coupon', {
  template: `
    <input placeholer="enter coupon code" @blur="onCouponApplied"/>
    `,
  methods: {
    onCouponApplied() {
      this.$emit('applied');
    }
  }
});


new Vue({
  el: '#root',
  data: {
    couponApplied: false
  },
  methods: {
    onCouponApplied() {
      this.couponApplied = true;
    }
  }
});
