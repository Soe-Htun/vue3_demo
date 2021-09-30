import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import Main from '../components/Main/MainLayout'

const routes = [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // },
    {
        path: '/',
        name: 'Main',
        component: Main,
        children: [{
                path: '/computed',
                name: 'computed',
                component: () =>
                    import ('../views/computed')
            },
            {
                path: '/reactiveRef',
                name: 'reactiveRef',
                component: () =>
                    import ('../views/reactiveRef')
            },
            {
                path: '/watch',
                name: 'watch',
                component: () =>
                    import ('../views/watch')
            },
            {
                path: '/methods',
                name: 'methods',
                component: () =>
                    import ('../views/methods')
            },
            {
                path: '/removeFilter',
                name: 'removeFilter',
                component: () =>
                    import ('../views/removeFilter')
            },
            {
                path: '/vuex',
                name: 'vuex',
                component: () =>
                    import ('../views/vuexDemo')
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router