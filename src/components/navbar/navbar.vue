<style>

.navbar {
    height: 100vh;
    background-color: #2a2935;
}

.nav-title {
    height: 6vh;
    line-height: 6vh;
    text-align: center;
    background-color: #1e1d26;
    color: #32D3C3;
    font-size: 18px;
}

.nav-title > span {
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
    border-right: 4px solid #32D3C3;
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

.nav-footer {
    height: 8vh;
    line-height: 8vh;
    text-align: center;
    color: #666;
    font-size: 13px;
}

</style>

<template>

<div class="navbar">
    <div class="nav-title">
        <span>Shaw的日常</span>
        <div>
            <i class="el-icon-menu"></i>
        </div>
    </div>
    <div class="pc-nav" v-show="isShowMobileNav">
        <ul>
            <li @click="$goRoute('/')" v-bind:class="{borderRightActive: $route.path=='/'}">最新文章</li>
            <li @click="$goRoute('/articles')" v-bind:class="{borderRightActive: $route.path=='/articles'}">文章归档</li>
            <li @click="$goRoute('/about')" v-bind:class="{borderRightActive: $route.path=='/about'}">关于我的</li>
        </ul>
    </div>
    <div class="nav-footer">
        <span>粤ICP备17022497号</span>
    </div>
</div>

</template>

<script>

export default {
    name: 'navbar',
    data() {
        return {
            isShowMobileNav: true
        };
    },
    directives: {

    },
    methods: {

    }
};

</script>
