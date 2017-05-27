<template>
  <div class="header">
    <div class="title">
      <span>Shaw的日常</span>
      <div>
        <i class="el-icon-menu"></i>
      </div>
    </div>
    <div class="pc-nav">
        <ul>
        <li @click="latestArticles" v-bind:class="{borderRightActive: $route.path=='/'}">最新文章</li>
        <li @click="archives" v-bind:class="{borderRightActive: $route.path=='/home/article'}">文章归档</li>
        <li @click="tag" v-bind:class="{borderRightActive: $route.path=='/tag'}">文章标签</li>
        <li @click="about" v-bind:class="{borderRightActive: $route.path=='/about'}">关于我的</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      isShowMobileNav: false,
      item: {
        text: '文章',
        route: '/home/article'
      }
    };
  },
  directives: {

  },
  methods: {
    latestArticles: function() {
      this.$router.push('/');
    },
    archives: function() {
      this.$router.push('/home/article');
    },
    tag: function() {
      this.$router.push('tag');
    },
    about: function() {
      this.$router.push('about');
    }
  }
};
</script>

<style>
.head{
  height: 100vh;
  background-color: #2a2935;
}
.title {
    height: 6vh;
    line-height: 6vh;
    text-align: center;
    background-color: #1e1d26;
    color: #32D3C3;
    font-size: 18px;
}

.title > span {
    width: 85%;
    float: left;
}

.pc-nav {
    height: 81vh;
}
.pc-nav > ul {
    margin-top: 5vh;
}
.pc-nav > ul > li {
    height: 8vh;
    line-height: 8vh;
    text-align: center;
    color: #666;
    font-size: 18px;
    padding-right: 20px;
}
.pc-nav .borderRightActive {
    border-right:4px solid #32D3C3;
    color: #32D3C3;
    background-color: #26252f;
}
.pc-nav > ul > li:hover {
    height: 8vh;
    line-height: 8vh;
    text-align: center;
    color: #32D3C3;
    cursor: pointer;
    background-color: #26252f;
}
</style>
