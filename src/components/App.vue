<template>


    <div class="app-container">
        <mt-header fixed title="黑马程序员Vue项目">
         <span  slot="left" @click="goBack"  v-if="flag">
        <mt-button icon="back">返回</mt-button>
        </span>
        </mt-header>
        <transition>
            <router-view></router-view>
        </transition>


        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to='/home'>
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/cart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
</template>


<script>
import { Indicator } from 'mint-ui';
export default {
    data(){
        return{
            flag:false
        };
    },
    created(){
        this.initInterceptors();
    },
    methods: {
        initInterceptors() {
            this.$http.interceptors.request.use(config=> {
          // Do something before request is sent
          Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
            });
          return config;
        });
            this.$http.interceptors.response.use(response=> {
          // Do something with response data
          Indicator.close();
          return response;
        });
        },
        goBack(){
        this.$router.go(-1)
        }
    },
    watch:{

        "$route.path":{
            handler:function(newVal){
            // if(newVal==='/home'){
            //     this.flag = false;
            // }else{
            //     this.flag=true;
            // }
            this.flag = !(newVal==='/home');
        },
        immediate:true
        }
    }
};
</script>

<style lang="scss" scoped>
.app-container {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
}

.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.4s ease;
}
</style>
