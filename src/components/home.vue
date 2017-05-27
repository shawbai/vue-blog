<template>
  <div id="home">
    <!-- 头部 -->
    <el-row :gutter="0">
      <el-col :xs="24" :sm="4" :md="4" :lg="4">
        <v-header></v-header>
        <v-footer></v-footer>
      </el-col>
      <el-col :xs="24" :sm="20" :md="20" :lg="20">
      <div class="v-body">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </el-col>
    </el-row>
  </div>
</template>

<script>
import header from '@/components/header/header';
import footer from '@/components/footer/footer';
export default {
  name: 'home',
  data () {
    return {
      title: '这里是第一个页面'
    };
  },
  components: {
    'v-header': header,
    'v-footer': footer
  }
};
</script>

<style>
*{
    margin:0;
    padding: 0;
}
h1, h2 {
    font-weight: normal;
}
ul li {
    list-style-type: none;
    padding: 0;
}
ol {
    list-style-type: none;
}
#home {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.v-body{
  height: 81vh;
}
</style>
