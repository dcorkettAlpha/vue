<template>
  <div>
    <h2>The Count: {{ count }}</h2>
<!--  HOT REOADING = YOU CAN RELOAD WITHOUT LOOSING DATA-->
    <p>
      <button type="button" @click="count += 1">Increment</button>
    </p>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        count: 1
      };
    }
  }
</script>
