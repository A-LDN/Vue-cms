<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbolist" :key="item.url">
                <img :src="item.img" alt="">
            </mt-swipe-item>
            
        </mt-swipe>

        <h3>home</h3>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                lunbolist:[]
            };
        },
        created(){
            this.getLunbo()
        },
        methods:{
            async getLunbo(){
                const{ data }=await this.$http.get('http://39.106.32.91:3000/api/getlunbo');
                // console.log(data)
                if(data.status === 0){
                    this.lunbolist = data.message;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .mint-swipe {
        height: 180px;

        .mint-swipe-item {
            img {
                width:100%;
                height:100%;
            }
        }
    }
</style>