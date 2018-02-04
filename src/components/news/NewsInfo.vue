<template>
    <div>
        <h3 class="title">{{ newsinfo.title }}</h3>
        <p class="info">
            <span></span>
        </p>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                newsinfo:{}
            }
        },
        created(){
            this.getNewsInfo()
        },
        methods:{
            async getNewsInfo(){
                const{ data } = await this.$http.get('/api/getnew/'+this.id);
                if(data.status === 0){
                    this.newsinfo = data.message[0];
                }
            }
        },
        props:['id']
    }
</script>


<style lang="scss" scoped>

</style>
