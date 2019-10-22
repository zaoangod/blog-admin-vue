<template>
    <v-app id="sandbox">
        <v-navigation-drawer v-model="primaryDrawer.model" :clipped="true" :floating="false" :mini-variant="false" :permanent="primaryDrawer.type === 'permanent'" :temporary="primaryDrawer.type === 'temporary'" app overflow>
            <!--菜单开始-->
            <v-list dense>
                <template v-for="item in items">
                    <v-layout v-if="item.heading" :key="item.heading" row align-center>
                        <v-flex xs6>
                            <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
                        </v-flex>
                        <v-flex xs6 class="text-xs-center">
                            <a href="#!" class="body-2 black--text">EDIT</a>
                        </v-flex>
                    </v-layout>
                    <v-list-group v-else-if="item.children" :key="item.text" v-model="item.model" :prepend-icon="item.model ? item.icon : item['icon-alt']" append-icon="">
                        <template v-slot:activator>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>
                                        <router-link v-if="item.to" :to="item.to">{{ item.text }}</router-link>
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </template>
                        <!--<v-list-item v-for="(child, i) in item.children" :key="i" @click="">-->
                        <v-list-item v-for="(child, i) in item.children" :key="i">
                            <v-list-item-action v-if="child.icon">
                                <v-icon>{{ child.icon }}</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title>
                                    <router-link to='/home'>{{ child.text }}</router-link>
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-group>
                    <!--<v-list-item v-else :key="item.text" @click="">-->
                    <v-list-item v-else :key="item.text">
                        <v-list-item-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>
                                <router-link v-if="item.to" :to="item.to">{{ item.text }}</router-link>
                                <router-link v-else to="/">{{ item.text }}</router-link>
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </v-list>
            <!--菜单结束-->
        </v-navigation-drawer>
        <v-app-bar :clipped-left="true" app>
            <v-app-bar-nav-icon v-if="primaryDrawer.type !== 'permanent'" @click.stop="primaryDrawer.model = !primaryDrawer.model"></v-app-bar-nav-icon>
            <v-toolbar-title>后台管理</v-toolbar-title>
        </v-app-bar>
        <v-content>
            <!--内容-->
            <router-view></router-view>
            <!--内容-->
        </v-content>
        <v-footer :inset="false" app>
            <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
    </v-app>
</template>
<script>
    export default {
        data: () => ({
            //左侧Drawer
            primaryDrawer: {model: null, type: ""},
            //菜单
            items: [
                {icon: 'mdi-xbox-controller', text: '仪表盘', to: '/'},
                {icon: 'mdi-xbox-controller', text: '发布文章', to: '/article/edit'},
                {icon: 'history', text: '文章管理', to: '/article/list'},
                {icon: 'history', text: '页面管理', to: '/article/list'},
                {icon: 'history', text: '评论管理', to: '/article/list'},
                {icon: 'history', text: '分类/标签', to: '/meta/list'},
                {icon: 'history', text: '文件管理', to: '/article/list'},
                {icon: 'history', text: '系统设置', to: '/article/list'},
                {icon: 'content_copy', text: 'Duplicates', to: '/'},
                {
                    icon: 'keyboard_arrow_up',
                    'icon-alt': 'keyboard_arrow_down',
                    text: 'Labels',
                    model: true,
                    children: [
                        {icon: 'add', text: 'Create label', to: '/'},
                    ],
                },
                {
                    icon: 'keyboard_arrow_up', 'icon-alt': 'keyboard_arrow_down',
                    text: 'More',
                    model: false,
                    children: [
                        {text: 'Import', to: '/'},
                        {text: 'Export', to: '/'},
                    ],
                }
            ]
        })
    };
</script>