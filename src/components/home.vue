<template>
  <div class="hello">
    <navTitle></navTitle>
    <navTab></navTab>
    <router-view></router-view>
  </div>
</template>

<script>
import navTab from './commonView/navTab'
import navTitle from './commonView/navTitle'
export default {
  components: {
    navTab,
    navTitle
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
