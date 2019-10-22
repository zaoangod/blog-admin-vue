<template>
    <v-card :tile="true" class="ma-5">
        <v-form ref="form">
            <v-container fluid>
                <v-row>
                    <v-col cols="12" md="3" sm="6" class="py-0">
                        <v-text-field v-model="search.name" label="分类/标签名称"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="3" sm="6" class="py-0">
                        <v-select v-model="search.type" :items="typeList" no-data-text="没有数据" label="类型" clearable></v-select>
                    </v-col>
                    <v-col cols="12" md="6" sm="6" class="py-0">
                        <v-btn class="ma-2" tile dark color="indigo">
                            <v-icon left>search</v-icon>
                            查询
                        </v-btn>
                        <v-btn class="ma-2" tile @click="clear()">
                            <v-icon left>mdi-cached</v-icon>
                            重置
                        </v-btn>
                        <v-btn class="ma-2" tile @click.stop="editDialog = true">
                            <v-icon left>add</v-icon>
                            添加
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>

        <v-divider></v-divider>
        <v-data-table show-select hide-default-footer :single-select="false" item-key="name" :headers="dataList.headers" :items="dataList.items">
            <!--操作按钮-->
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

        <!--编辑对话框-->
        <template>
            <v-dialog v-model="editDialog" max-width="600px">
                <v-card :tile="true">
                    <v-card-title>
                        <span class="headline">编辑</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="12" md="6">
                                    <v-text-field v-model="edit.name" label="标签/分类名称"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="6">
                                    <v-text-field v-model="edit.slug" label="一般为单个标签页面的标识，最好为英文"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="6">
                                    <v-select v-model="edit.type" :items="typeList" no-data-text="没有数据" label="类型" clearable></v-select>
                                </v-col>
                                <v-col cols="12" sm="12" md="12">
                                    <v-textarea v-model="edit.description" :autoGrow="true" rows="1" label="标签/分类描述"></v-textarea>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text>取消</v-btn>
                        <v-btn color="blue darken-1" text>确认</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </template>

    </v-card>
</template>
<script>
    export default {
        data: () => ({
            editDialog: false,
            typeList: [
                {text: '分类', value: 'category'},
                {text: '标签', value: 'tag'}
            ],
            search: {name: '', type: ''},
            dataList: {
                headers: [
                    {text: '名称', value: 'name', align: 'left', sortable: false},
                    {text: '别名', value: 'slug'},
                    {text: '类型', value: 'type'},
                    {text: '描述', value: 'description'},
                    {text: '排序', value: 'sort'},
                    {text: '操作', value: 'action'},
                ],
                items: [{
                    name: '开发',
                    slug: 'dev',
                    type: 'category',
                    description: '测试描述',
                    sort: 0
                }, {
                    name: 'java',
                    slug: 'java',
                    type: 'category',
                    description: '测试描述',
                    sort: 1
                }, {
                    name: 'python',
                    slug: 'python',
                    type: 'tag',
                    description: '测试描述',
                    sort: 2
                }, {
                    name: '日常',
                    slug: 'common',
                    type: 'tag',
                    description: '测试描述',
                    sort: 3
                }]
            },
            dataPage: {
                page: 1,
                total: 7
            },
            edit: {
                name: '',
                slug: '',
                type: '',
                description: '',
                sort: 0
            }
        }),
        methods: {
            clear() {
                this.$refs.form.reset();
                this.search.name = '';
                this.search.type = null;
            }
        }
    };
</script>