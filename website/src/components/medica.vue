<template>
    <div class="medica" id="medica">
        <tab></tab>
        <div class="env-banner"><img :src="bsrc" alt=""/></div>
        <div class="env-txt">
            <div class="inenv">
                <h2>{{ ingetyltxt.title }}</h2>
                <p>{{ ingetyltxt.content}}</p>
            </div>
        </div>
        <div class="env-main">
            <div class="inenv clearfix">
                <div class="iner-sh" v-for="itemj in ingetyl">
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
                bsrc: require('../assets/images/engr_02.png'),
                ingetyl:[],
                ingetyltxt:[],
            }
        },
        created(){
            this.getyl();  
            this.getyltxt()                    
       },
       methods: {
               getyl() {
                   let that = this;
                   axios({
                       url: 'http://wansui.tunnel.echomod.cn/img/index?type=1&parentid=5',  
                       method: 'get',
                       dataType: 'json',
                   }).then((res) => {
                       if (res.status == 200) {
                           that.ingetyl = res.data.data
                           console.log(this.ingetyl)
                       }
                   })
               },
               getyltxt(){
                   let that=this;
                   axios({
                    url: 'http://wansui.tunnel.echomod.cn/article/index?type=14', 
                    method:'get',
                    dataType:'json',
                   }).then((res)=>{
                       if(res.status==200){
                           that.ingetyltxt=res.data.data
                           console.log(this.ingetyltxt)
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
    
    
