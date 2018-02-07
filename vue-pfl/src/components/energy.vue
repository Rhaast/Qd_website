
<!-- 智慧能源  -->

<template>
    <div class="energy" id="energy">
            <tab></tab>
            <div class="env-banner"><img src="../assets/images/engr_02.png"/></div>
            <div class="env-txt">
                <div class="inenv">
                    <h2>{{ ingetnytxt.title }}</h2>
                    <p>{{ ingetnytxt.content}}</p>
                </div>
            </div>
            <div class="env-main">
                <div class="inenv clearfix">
                    <div class="iner-sh" v-for="itemj in ingetny">
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
                ingetny:[],	
                ingetnytxt:[],	
            }
        },
        created(){
            this.getny();  
            this.getnytxt()                    
       },
       methods: {
               getny() {
                   let that = this;
                   axios({
                       url: 'http://wansui.tunnel.echomod.cn/img/index?type=1&parentid=6',  
                       method: 'get',
                       dataType: 'json',
                   }).then((res) => {
                       if (res.status == 200) {
                           that.ingetny = res.data.data
                           console.log(this.ingetny)
                       }
                   })
               },
               getnytxt(){
                   let that=this;
                   axios({
                    url: 'http://wansui.tunnel.echomod.cn/article/index?type=13',
                    method:'get',
                    dataType:'json',  
                   }).then((reponse)=>{
                        if(reponse.status==200){
                            that.ingetnytxt=reponse.data.data
                            console.log(this.ingetnytxt)
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
    
    