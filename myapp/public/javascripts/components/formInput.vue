<template>
  <div class="field">
  <label class="label">{{name}}</label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input">
  </div>
</div>
</template>

<script>
export default {
  name: 'formInput',
  props: ['name'];
  data() {
    return {

    }
  }
}
</script>
