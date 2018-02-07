<template>
    <div class="environment" id="environment">
	    <tab></tab>
        <div class="env-banner"><img :src="bsrc" alt=""/></div>
        <div class="env-txt">
            <div class="inenv">
                    <h2>{{ relief.title }}</h2>
                    <p>{{ relief.content}}</p>
            </div>
        </div>
        <div class="env-main">
            <div class="inenv clearfix">
                <div class="iner-sh" v-for="item in dowon">
                        <div class="shimg"><img :src="item.imgurl" alt=""/></div>
                        <div class="shtxt">{{ item.title }}</div>
                </div>
            </div>
        </div>
        <!--   页面底部组件 -->
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
                bsrc: require('../assets/images/env_02.png'),
                dowon:[],
                relief:[],
        }
	},
	created(){
        this.getdow();
        this.getdowb();            
    },
    methods: {
            getdow() {
                let that = this;
                axios({
                    url: 'http://wansui.tunnel.echomod.cn/img/index?type=1&parentid=7',                 
                    method: 'get',
                    dataType: 'json',
                }).then((res) => {
                    if (res.status == 200) {
                        that.dowon = res.data.data
                        console.log(this.dowon)
                    }
                })
            },
            getdowb(){
                let that=this;
                axios({
                    url:'http://wansui.tunnel.echomod.cn/article/index?type=9',
                    method:'get',
                    dataType:'json',
                }).then((res)=>{
                    if(res.status==200){
                        that.relief=res.data.data
                        console.log(this.relief)
                    }
                })
            },  
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