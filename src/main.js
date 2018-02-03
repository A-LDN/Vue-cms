import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import axios from 'axios'
Vue.prototype.$http=axios



import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUi)

import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'


import App from './components/App.vue'

import router from './router.js'
const vm = new Vue({
    el:'#app',
    render:c =>c(App),
    router
})