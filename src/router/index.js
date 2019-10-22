import Vue from 'vue'
import VueRouter from 'vue-router'
import ArticleEdit from '../views/article/edit.vue'
import ArticleList from '../views/article/list.vue'
import MetaList from '../views/meta/list.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/article/edit',
        name: '编辑',
        component: ArticleEdit

    },
    {
        path: '/article/list',
        name: '文章列表',
        component: ArticleList

    },
    {
        path: '/meta/list',
        name: '分类标签管理',
        component: MetaList

    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;