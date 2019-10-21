<template>
    <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
        <!--        单级菜单-->
        <el-menu-item :index="item.path"
                      v-for="item in noChildren"
                      :key="item.path"
                      @click="clickMenu(item)"
        >
            <i :class="'el-icon-' + item.icon"></i>
            <span slot="title">{{item.label}}</span>
        </el-menu-item>

        <!--        多级菜单-->
        <el-submenu index="index" v-for="(item,index) in hasChildren"
                    :key="index">
            <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{item.label}}</span>
            </template>
            <el-menu-item-group>
                <el-menu-item :index="subItem.path"
                              @click="clickMenu(subItem)"
                              v-for="(subItem,subIndex) in item.children"
                              :key="subIndex">
                    {{subItem.label}}
                </el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<script>

    export default {
        computed: {
            noChildren() {
                return this.asideMenu.filter(item =>
                    !item.children
                )
            },
            hasChildren() {
                return this.asideMenu.filter(item =>
                    item.children
                )
            }
        },
        data() {
            return {
                asideMenu: [
                    {
                        path: '/',
                        label: '首页',
                        name:'home',
                        icon: 'home', //图标选取的是element图表，然后拼接
                    },
                    {
                        path: "/video",
                        name:'video',
                        label: '视频管理',
                        icon: 'video-play'
                    },
                    {
                        path: "/user",
                        name:'user',
                        label: '用户管理',
                        icon: 'user'
                    },
                    //二级菜单
                    {
                        label: '多级菜单',
                        icon: 'user',
                        children: [
                            {
                                path: "/page1",
                                label: '页面1',
                                name:'page1',
                                icon: 'setting'
                            },
                            {
                                path: "/page2",
                                name:'page2',
                                label: '页面1',
                                icon: 'user'
                            },
                        ]
                    },
                ]
            }
        },
        methods: {
            clickMenu(item) {
                this.$router.push({name:item.name})
                this.$store.commit('selectMenu', item)
            }
        },
    }
</script>

<style lang="scss">
    .el-menu {
        height: 100%;
    }
</style>