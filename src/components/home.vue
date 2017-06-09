<template>
  <div id="home">
    <!-- 头部 -->
    <el-row :gutter="0">
      <el-col :xs="24" :sm="4" :md="4" :lg="4">
        <v-navbar></v-navbar>
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

<script scoped>
import navbar from '@/components/navbar/navbar';
export default {
  name: 'navbar',
  data () {
    return {};
  },
  components: {
    'v-navbar': navbar
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
    font-family: 'Hiragino Sans GB', "Microsoft Yahei", "微软雅黑", sans-serif;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #f4f4f4;
}
.v-body{
  height: 100vh;
  overflow-y: scroll;
}

</style>
