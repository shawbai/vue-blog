<style scoped>

@import './style/articles.css';

</style>

<template>

<div id="archives">
    <el-row :gutter="0">
        <el-col :xs="22" :sm="22" :md="20" :lg="20" :push="1">
            <div class="tabs-wrap">
                <el-tabs>
                    <!--暂时写死,到时这里要根据年份来遍历生成tabItem-->
                    <el-tab-pane label="我的文章">
                        <el-row style="margin-left: 0px;margin-right: 0px;" :gutter="15">
                            <el-col :xs="24" :sm="12" :md="12" :lg="12" v-for="item in articleList" :key="item.id">
                                <el-card class="box-card articles-box" @click.native="articlesDetailsFn(item.id)">
                                    <div class="box-title">
                                        {{item.articleName}}
                                    </div>
                                    <div class="box-time">
                                        {{item.createTime | formatDate}}
                                        <span class="box-label">{{item.articleType}}</span>
                                    </div>
                                    <div class="box-abstract">
                                        {{item.articleKeyword}}。
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
import {formatDate} from '@/common/js/date.js';
export default {
    name: 'latestArticles',
    data() {
        return {
            articleList: []
        };
    },
    mounted() {
        var _this = this;
        this.$http({
                method: 'get',
                url: '/myblog/v1/articles/page',
                params: {
                    'page': 1,
                    'rows': 4
                }
            })
            .then(function(response) {
                console.log('!!!!:' + JSON.stringify(response.data));
                if (response.data.status === '200') {
                    _this.articleList = response.data.data.pageInfo.list;
                } else {
                    console.log('!!!!:' + JSON.stringify(response.data));
                }
            })
            .catch(function(response) {
                console.log('wrong:' + response);
            });
    },
    methods: {
        articlesDetailsFn: function(id) {
            this.$goRoute('/articleDetails' + id);
        }
    },
    filters: {
        formatDate(time) {
            var date = new Date(time);
            return formatDate(date, 'yyyy-MM-dd hh:mm');
        }
    },
    directives: {

    }
};

</script>
