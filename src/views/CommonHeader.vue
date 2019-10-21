<template>
    <header>
        <div class="l-content">
            <el-button type="primary" size="mini">收缩菜单栏</el-button>
            <!--            面包屑导航-->
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item  to="current.path" v-if="current" >
<!--                    不存在current为null-->
                       {{current.label}}
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="r-content">
            <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        <img :src="userImg" alt="" class="user">
      </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </header>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        computed: {
          ...mapState({
              current:state=>state.tab.curentMenu
          })
        },
        data() {
            return {
                userImg: require('../assets/logo.png')
            }
        },
    }
</script>

<style lang="scss" scoped>
    header {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: space-between;
    }
.l-content{
    display: flex;
    align-items: center;
    .el-button{
        margin-right: 20px;
    }
}
    .user {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background: #f5f5f5;
    }
</style>