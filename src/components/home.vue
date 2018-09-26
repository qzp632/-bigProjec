<template>
  <div class="hello">
    <navTab></navTab>
    <router-view></router-view>
 
  </div>
</template>

<script>
import navTab from './commonView/navTab'
export default {
  components: {
    navTab
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
