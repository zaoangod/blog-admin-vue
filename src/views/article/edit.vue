<template>
    <v-card :tile="true" class="ma-5">
        <v-subheader>基本信息</v-subheader>
        <v-divider></v-divider>
        <v-container fluid>
            <v-row>
                <v-col cols="6" class="py-0">
                    <v-text-field v-model="title" :rules="titleRules" :counter="50" label="文章标题" required></v-text-field>
                </v-col>
                <v-col cols="6" class="py-0">
                    <v-text-field v-model="slug" :rules="slugRules" :counter="50" label="自定义访问路径, 如my-article, 默认为ID"></v-text-field>
                </v-col>
                <v-col cols="6" class="py-0">
                    <v-text-field v-model="title" :rules="titleRules" :counter="50" label="文章标题" required></v-text-field>
                </v-col>
                <v-col cols="6" class="py-0">
                    <v-text-field v-model="slug" :rules="slugRules" :counter="50" label="自定义访问路径, 如my-article, 默认为ID"></v-text-field>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>
<script>
    import mditor from '/lib/mditor/mditor.min.js';

    require('/lib/mditor/mditor.min.js');

    export default {
        data: () => ({
            title: '',
            titleRules: [
                v => !!v || '请输入文章标题',
                v => v.length <= 10 || '文章标题不能大于50个字',
            ],
            slug: '',
            slugRules: [
                v => !!v || '请输入文章标题',
                v => v.length <= 10 || '文章标题不能大于50个字',
            ]
        }),
        methods: {
            getStatus(status) {
                if (status === 'publish') {
                    return 'green'
                } else if (status === 'draft') {
                    return 'orange'
                }
            },
        }
    };
</script>

<style scoped>
    @import '/lib/mditor/mditor.min.js';
    @import '/lib/mditor/mditor.min.css';
</style>