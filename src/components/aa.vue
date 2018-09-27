<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>aaaaaaaaaaaaaa</h2>
    <h2>aaaaaaaaaaaaaa</h2>
 
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      msg: 'aaaaaaaaaaaaaa'
    }
  },
  created() {
    this.SETTITLE(this.$route.params.name)
  },
  methods: {
    ...mapMutations([
      'SETTITLE'
    ]),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
