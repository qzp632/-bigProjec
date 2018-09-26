<template>
    <div class="navTab">
        <router-link to="/aa">
            <span class="icon">
                <img src="../images/tab1.png" alt="">
            </span>
            <span class="title">全球版图</span>
        </router-link></li>
        <router-link to="/bb">
            <span class="icon">
                <img src="../images/tab2.png" alt="">
            </span>
            <span class="title">战略标签</span>
        </router-link>
        <router-link to="/cc">
            <span class="icon">
                <img src="../images/tab3.png" alt="">
            </span>
            <span class="title">行业布局</span>
        </router-link>
        <router-link to="/dd">
            <span class="icon">
                <img src="../images/tab4.png" alt="">
            </span>
            <span class="title">红黄绿灯</span>
        </router-link>
        <router-link to="/ee">
            <span class="icon">
                <img src="../images/tab5.png" alt="">
            </span>
            <span class="title">团队业绩</span>
        </router-link>
    </div>
</template>

<script>
export default {
  data () {
    return {

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

</style>
