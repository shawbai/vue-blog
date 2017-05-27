<style>



</style>

<template>

<div id="archives">
    <el-row :gutter="0">
        <el-col :xs="22" :sm="22" :md="20" :lg="20" :push="1">
            <div class="tabs-wrap">
                <el-tabs>
                    <!--暂时写死,到时这里要根据年份来遍历生成tabItem-->
                    <el-tab-pane label="2017">
                        <el-row :gutter="15">
                            <el-col :xs="24" :sm="12" :md="12" :lg="12" v-for="item in articleList" :key="item.articleId">
                                <el-card class="box-card articles-box">
                                    <div class="post-title" @click="articlesDetailsFn(item.articleId)">
                                        {{item.articleName}}
                                    </div>
                                    <div class="post-time">
                                        {{item.createTime}}
                                        <span class="post-label">{{item.articleKeyword}}</span>
                                    </div>
                                    <div class="post-abstract" v-html="item.articleContent">
                                      
                                    </div>
                                </el-card>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </el-col>
    </el-row>
</div>

</template>

<script>

import {formatDate} from '@/common/js/date';
export default {
    name: 'latestArticles',
    data() {
        return {
            articleList: []
        };
    },
    mounted() {
        this.$http.jsonp('http://localhost:8081/article/findAllOrder', {
          jsonp: 'callback'
        }).then(function(res) {
            console.log('success:' + JSON.stringify(res));
            this.articleList = res.body.Articlelist;
        }, function(res) {
            console.log('error:' + JSON.stringify(res));
        });
    },
    methods: {

    },
    filters: {
        formatDate(time) {
            let date = new Date(time);
            return formatDate(date, 'yyyy-MM-dd');
        }
    },
    directives: {

    }
};

</script>
