<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.$router.push({name:'aa',params: {name: '全球版图'}})
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
