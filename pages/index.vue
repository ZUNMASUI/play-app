<template>
  <div class="container"></div>
</template>
 
<script lang="ts">
import Vue from 'vue'
 
export default Vue.extend({
  created() {
    this.$router.push('/shop/')
  },
})
</script>
 
<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>