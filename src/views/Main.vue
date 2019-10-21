<template>
    <el-container style="height: 100%">
        <el-aside width="200px"><common-aside></common-aside></el-aside>
        <el-container>
            <el-header><common-header></common-header></el-header>
            <common-tab></common-tab>
            <el-main><router-view></router-view></el-main>
        </el-container>
    </el-container>
</template>

<script>
    import CommonAside from "./CommonAside";
    import CommonHeader from "./CommonHeader";
    import CommonTab from './CommonTab';
    export default {
        name: 'Main',
        components: {
            CommonAside,
            CommonHeader,
            CommonTab
        },
    }
</script>
<style scoped>
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
</style>