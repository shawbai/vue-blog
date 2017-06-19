<style scoped>

@meida screen and (max-width: 768px) {
    #articlesDetails > div {
        width: 90%;
    }
}

#articleDetails {
    height: 100vh;
    overflow: scroll;
    text-align: center;
    padding: 0 1rem;
    background-color: #fff;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
}

.detail-header {
    height: 4rem;
    padding: 1.5rem 0;
    border-bottom: 1px dashed #999999;
}

.detail-header .time {
    margin-top: 0.5rem;
    color: #999999;
    font-size: 0.9rem;
    height: 1.4rem;
    line-height: 1.4rem;
}

.detail-header .time .tag {
    border-radius: 1.15rem;
    border: 1px solid #32D3C3;
    padding: 0.1rem 0.4rem;
    color: #32D3C3;
    font-size: 0.4rem;
}

.detail-body {
    padding: 1rem 0;
    text-align: left;
    border-bottom: 1px dashed #999999;
}

</style>

<template>

<div id="articleDetails">
    <div class="detail-header">
        <h2 style="font-weight: bold">{{article.articleName}}</h2>
        <div class="time">
            {{article.createTime | formatDate}}
            <span class="tag">{{article.articleType}}</span>
        </div>
    </div>
    <div class="detail-body" v-html="compiledMarkdown"></div>
</div>

</template>

<script>

import {
    formatDate
}
from '@/common/js/date.js';
import marked from 'marked';
import highlight from 'highlight.js';
export default {
    name: 'articleDetails',
    data() {
        return {
            article: {}
        };
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            let articleId = this.$route.params.id;
            console.log('文章ID' + articleId);
            var _this = this;
            this.$http({
                    method: 'get',
                    url: '/v1/articles/' + articleId
                })
                .then(function(response) {
                    // console.log('!!!!:' + JSON.stringify(response.data));
                    if (response.data.status === '200') {
                        _this.article = response.data.data;
                    } else {
                        console.log('!!!!:' + JSON.stringify(response.data));
                    }
                })
                .catch(function(response) {
                    console.log('wrong:' + response);
                });
        }
    },
    computed: {
        compiledMarkdown: function() {
            if (this.article.articleContent === undefined) {
                return '';
            }
            marked.setOptions({
                renderer: new marked.Renderer(),
                gfm: true,
                tables: true,
                breaks: false,
                pedantic: false,
                sanitize: false,
                smartLists: true,
                smartypants: false,
                highlight: function(code) {
                    return highlight.highlightAuto(code).value;
                }
            });
            return marked(this.article.articleContent);
        }
    },
    components: {

    },
    filters: {
        formatDate(time) {
            var date = new Date(time);
            return formatDate(date, 'yyyy-MM-dd hh:mm');
        }
    },
    directives: {
        comment: {

        }
    }
};

</script>
