<template>
    <div class="tourism" id="tourism">
        <tab></tab>
        <div class="env-banner"><img :src="bsrc" alt=""/></div>
        <div class="env-txt">
            <div class="inenv">
                <div class="inenv">
                    <h2>{{ ingetlytxt.title }}</h2>
                    <p>{{ ingetlytxt.content}}</p>
                </div>
            </div>
        </div>
        <div class="env-main">
            <div class="inenv clearfix">
                <div class="iner-sh" v-for="itemj in ingetlv">
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
            bsrc: require('../assets/images/trff_02.png'),
            ingetlv:[],
            ingetlytxt:[],
        }
    },
    created(){
         this.getly();  
         this.getlytxt()                    
    },
    methods: {
            getly() {
                let that = this;
                axios({
                    url: 'http://wansui.tunnel.echomod.cn/img/index?type=1&parentid=3',  
                    method: 'get',
                    dataType: 'json',
                }).then((res) => {
                    if (res.status == 200) {
                        that.ingetlv = res.data.data
                        console.log(this.ingetlv)
                    }
                })
            },
            getlytxt(){
                let that=this;
                axios({
                    url: 'http://wansui.tunnel.echomod.cn/article/index?type=12', 
                    method:'get',
                    dataType:'json', 
                }).then((response)=>{
                    if(response.status==200){
                       that.ingetlytxt= response.data.data
                       console.log(this.ingetlytxt) 
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

