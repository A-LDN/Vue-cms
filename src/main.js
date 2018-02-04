import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import moment from 'moment'
Vue.filter('dateFormat',function(val){
    return moment(val).format("YYYY-MM-DD HH:mm:ss")
})

import axios from 'axios'
axios.defaults.baseURL = 'http://39.106.32.91:3000';
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