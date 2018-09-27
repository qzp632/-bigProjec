<template>
    <div class="navTab">
        <router-link v-for="item in navTab" :key="item.id" :to="{name:item.path,params: {name: item.name}}">
            <span class="icon">
                <img :src="require(`../images/tab${item.id}.png`)" alt="">
            </span>
            <span class="title">{{item.name}}</span>
        </router-link>
    </div>
</template>

<script>
import { getNavTab } from './navConfig/navConfig'
export default {
  data () {
    return {
        navTab:getNavTab()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navTab {
    display: flex;
    border-bottom: 1px solid #ccc;
}
.navTab a {
    text-decoration: none;
    color: #000;
    flex: 1;
    text-align: center;
}
.navTab a .icon {
    display: inline-block;
    width: 8.53vw;
    height: 8.53vw;
}
.navTab a .icon img {
    display: block;
    width: 100%;
    height: 100%;
}

.navTab a .title{
    display: block;
}

.router-link-active {
    background: #ccc;
}

</style>
