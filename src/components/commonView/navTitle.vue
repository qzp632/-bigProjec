<template>
    <div class="navTitle">
        {{navTitle}}
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {

    }
  },
  computed: {

    ...mapGetters([
      'navTitle'
    ])
  },
  created() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navTitle {
    padding: 2vw 0;
    text-align: center;
    border-bottom: 1px solid #ccc;
    /* background: #eee; */
}
</style>
