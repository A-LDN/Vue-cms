import VueRouter from 'vue-router'

import HomeContainer from './components/tabbars/HomeContainer.vue'
import MemberContainer from './components/tabbars/MemberContainer.vue'
import CartContainer from './components/tabbars/CartContainer.vue'
import SearchContainer from './components/tabbars/SearchContainer.vue'
const router = new VueRouter({
    routes: [
        { path:'/',redirect:'/home' },
        { path:'/home',component: HomeContainer},
        { path:'/member',component: MemberContainer},
        { path:'/cart',component: CartContainer},
        { path:'/search',component: SearchContainer}
    ],
    linkActiveClass:'mui-active'
})


export default router