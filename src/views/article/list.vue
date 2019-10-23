<template>
    <v-card :tile="true" class="ma-5">
        <v-container fluid>
            <v-row>
                <v-col cols="12" md="3" sm="6" class="py-0">
                    <v-text-field v-model="search.title" :rules="search.titleRules" label="文章标题"></v-text-field>
                </v-col>
                <v-col cols="12" md="3" sm="6" class="py-0">
                    <v-select v-model="search.status" :items="search.statusList" no-data-text="没有数据" label="文章状态" clearable></v-select>
                </v-col>
                <v-col cols="12" md="3" sm="6" class="py-0">
                    <v-select v-model="search.category" :items="search.categoryList" no-data-text="没有数据" label="文章分类" clearable></v-select>
                </v-col>
                <v-col cols="12" md="3" sm="6" class="py-0">
                    <v-btn class="ma-2" tile dark color="indigo">
                        <v-icon left>mdi-pencil</v-icon>
                        查询
                    </v-btn>
                    <v-btn class="ma-2" tile>
                        <v-icon left>mdi-pencil</v-icon>
                        重置
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
        <v-divider></v-divider>
        <v-data-table show-select hide-default-footer :single-select="false" item-key="name" :headers="dataList.headers" :items="dataList.items">
            <template v-slot:item.status="{ item }">
                <v-chip dark>{{ item.status }}</v-chip>
            </template>
            <template v-slot:item.action="{ item }">
                <v-icon small class="mr-2">edit</v-icon>
                <v-icon small>delete</v-icon>
            </template>
        </v-data-table>
        <v-divider></v-divider>
        <v-pagination class="my-4" v-model="dataPage.page" :circle="true" :length="dataPage.total" :page="dataPage.page" :total-visible="7"></v-pagination>
    </v-card>
</template>
<script>
    export default {
        data: () => ({
            search: {
                title: '',
                titleRules: [v => v.length <= 10 || '文章标题不能大于50个字',],
                status: '',
                statusList: [{
                    text: '已发布',
                    value: 'publish'
                }, {
                    text: '草稿',
                    value: 'draft'
                }],
                category: '',
                categoryList: [{text: '开发', value: '1'}, {text: '日常', value: '2'}],
            },
            dataList: {
                headers: [
                    {text: '文章标题', align: 'left', sortable: false, value: 'name'},
                    {text: '发布时间', value: 'calories'},
                    {text: '浏览量', value: 'fat'},
                    {text: '所属分类', value: 'carbs'},
                    {text: '状态', value: 'status'},
                    {text: '操作', value: 'action'},
                ],
                items: [{
                    name: 'Frozen Yogurt',
                    calories: 159,
                    fat: 6.0,
                    carbs: 24,
                    status: 'publish'
                }, {
                    name: 'Ice cream sandwich',
                    calories: 237,
                    fat: 9.0,
                    carbs: 37,
                    status: 'publish'
                }, {
                    name: 'Eclair',
                    calories: 262,
                    fat: 16.0,
                    carbs: 23,
                    status: 'draft'
                }, {
                    name: 'Cupcake',
                    calories: 305,
                    fat: 3.7,
                    carbs: 67,
                    status: 'draft'
                }, {
                    name: 'Gingerbread',
                    calories: 356,
                    fat: 16.0,
                    carbs: 49,
                    status: 'draft'
                }]
            },
            dataPage: {
                page: 1,
                total: 7
            }
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