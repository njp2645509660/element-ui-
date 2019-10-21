export default {
    state: {
        // 菜单
        menu: [],
        //当前点击的菜单
        curentMenu: null,
        //存放tab
        tabList: [
            //初始页面
            {
                path: '/',
                label: '首页',
                name: 'home',
                icon: 'home',

            }
        ],
    },
    mutations: {
        //每次点击的时候，把菜单传入
        //value: 每次点击，传入的值
        selectMenu(state, value) {
            if (value.name !== 'home') {
                state.curentMenu = value
                //默认有一个首页不被删除的，
                //【如果不是首页的情况下】点击其他页面添加进来。
                //如果点击多次，会放进来多次。所以需要一个去重
                let result = state.tabList.findIndex(item => item.name === value.name)
                result === -1 ? state.tabList.push(value) : ""
            } else {
                state.curentMenu = null;
            }

        },
        // //    处理Tabs
        closeTab(state, value) {
            //    value:点击传入过来的菜单
            let result = state.tabList.findIndex(item => item.name === value.name)
            state.tabList.splice(result, 1)

        },
    }
}