<template>
        <div class="finance" id="finance">
            <tab></tab>
            <div class="env-banner"><img :src="bsrc" alt=""/></div>
            <div class="env-txt">
                <div class="inenv">
                    <h2>{{ habit.title }}</h2>
                    <p>{{ habit.content}}</p>
                </div>
            </div>
            <div class="env-main">
                <div class="inenv clearfix">                  
                    <div class="iner-sh" v-for="itemj in ingetjr">
                        <div class="shimg"><img :src="itemj.imgurl" alt=""/></div>
                        <div class="shtxt">{{ itemj.title }}</div>
                    </div>
                </div>
            </div>
        <navfooter></navfooter>
    </div>
</template>
    <script type="text/javascript">
    import navfooter from './../components/base/navfooter'
    import tab from './../components/base/tab'
    import axios from 'axios'		
    export default{
        data(){
            return{
                bsrc: require('../assets/images/fia_02.png'),
                ingetjr:[],
                habit:[],      
            }
        },
        created(){
            this.getjr();  
            this.getjrtxt()                    
       },
       methods: {
            getjr() {
                let that = this;
                axios({
                    url: 'http://wansui.tunnel.echomod.cn/img/index?type=1&parentid=10',  
                    method: 'get',
                    dataType: 'json',
                }).then((res) => {
                    if (res.status == 200) {
                        that.ingetjr = res.data.data
                        console.log(this.ingetjr)
                    }
                })
            },
            getjrtxt(){
                let that=this;
                axios({
                    url: 'http://wansui.tunnel.echomod.cn/article/index?type=11',
                    method:'get',
                    dataType:'json', 
                }).then((response)=>{
                    if(response.status==200){
                        that.habit=response.data.data
                        console.log(this.habit)
                    }
                })
            }
        },
        components:{
            navfooter,
            tab,
       },
    };
</script>   
<style lang="scss" scoped="" type="text/css">
        
     @import "../assets/css/base.css"
        
</style>
    
