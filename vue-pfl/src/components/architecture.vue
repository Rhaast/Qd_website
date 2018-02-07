<template>
    <div class="architecture" id="architecture">
            <tab></tab>
            <div class="env-banner"><img :src="bsrc" alt=""/></div>
            <div class="env-txt">
                <div class="inenv">
                    <h2>{{ ingetjztxt.title }}</h2>
                    <p>{{ ingetjztxt.content}}</p>
                </div>
            </div>
            <div class="env-main">
                <div class="inenv clearfix">
                    <div class="iner-sh" v-for="itemj in ingetjz">
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
                bsrc: require('../assets/images/arch_02.png'),
                ingetjz:[],	
                ingetjztxt:[],
            }
        },
        created(){
         this.getjz();  
         this.getjztxt()                    
        },
        methods: {
            getjz() {
                let that = this;
                axios({
                    url: 'http://wansui.tunnel.echomod.cn/img/index?type=1&parentid=8',  
                    method: 'get',
                    dataType: 'json',
                }).then((res) => {
                    if (res.status == 200) {
                        that.ingetjz = res.data.data
                        console.log(this.ingetjz)
                    }
                })
            },
            getjztxt() {
                let that = this;
                axios({  
                    url: 'http://wansui.tunnel.echomod.cn/article/index?type=8',  
                    method: 'get',
                    dataType: 'json',
                }).then((res) => {
                    if (res.status == 200) {
                        that.ingetjztxt = res.data.data
                        console.log(this.ingetjztxt)
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
    
    

