<template>
    <div class="newtraffic" id="newtraffic">
        <tab></tab>
        <div class="env-banner"><img :src="bsrc" alt=""/></div>
        <div class="env-txt">
                <div class="inenv">
                    <h2>{{ ingetjtb.title }}</h2>
                    <p>{{ ingetjtb.content}}</p>
                </div>
        </div>
        <div class="env-main">
            <div class="inenv clearfix">
                <div class="iner-sh" v-for="itemj in ingetjt">
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
            bsrc: require('../assets/images/traffic_02.png'),
            ingetjt:[],	
            ingetjtb:[],	
		}
	},
	created(){
         this.getjt();  
         this.getjt1()                    
    },
    methods: {
            getjt() {
                let that = this;
                axios({
                    url: 'http://wansui.tunnel.echomod.cn/img/index?type=1&parentid=4',  
                    method: 'get',
                    dataType: 'json',
                }).then((res) => {
                    if (res.status == 200) {
                        that.ingetjt = res.data.data
                        console.log(this.ingetjt)
                    }
                })
            },
            getjt1() {
                let that = this;
                axios({  
                    url: 'http://wansui.tunnel.echomod.cn/article/index?type=7',  
                    method: 'get',
                    dataType: 'json',
                }).then((res) => {
                    if (res.status == 200) {
                        that.ingetjtb = res.data.data
                        console.log(this.ingetjtb)
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
