import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import('../views/Main.vue'),
        children: [
            {
                path: '/',
                name: 'home',
                component: () => import('../views/Home')
            },
            {
                path: '/video',
                name: 'video',
                component: () => import('../views/VedioManage')
            },
            {
                path: '/user',
                name: 'user',
                component: () => import('../views/UserManage')
            },
            {
                path: '/page1',
                name: 'page1',
                component: () => import('../views/PageOne')
            },
            {
                path: '/page2',
                name: 'page2',
                component: () => import('../views/PageTwo')
            },
        ]
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
