<template>
    <div>
        <el-tag
                :key="tag.name"
                v-for="tag in tags"
                closable
                :disable-transitions="false"
                :closeable="tag.name !== 'home'"
                @click='changeMenu(tag)'
                @close="handleClose(tag)">
            {{tag.label}}
        </el-tag>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'

    export default {
        computed: {
            ...mapState({
                tags: state => state.tab.tabList
            })
        },
        data() {
            return {
                dynamicTags: ['标签一', '标签二', '标签三'],
                inputVisible: false,
                inputValue: ''
            };

        },
        methods: {
            ...mapMutations({
                close: 'closeTab'
            }),
            handleClose(tag) {
                this.close(tag)
            },
            changeMenu(item) {
                this.$router.push({name: item.name})
                //    调用VUEX的方法
                this.$store.commit('selectMenu', item)
            }
        }
    }
</script>


<
style
lang = "scss"
scoped >

< /style>