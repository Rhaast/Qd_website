<template>
        <div class="education" id="education">
            <tab></tab>
            <div class="env-banner"><img :src="bsrc" alt=""/></div>
            <div class="env-txt">
                <div class="inenv">
                        <h2>{{ weets.title }}</h2>
                        <p>{{ weets.content}}</p>
                </div>
            </div>
            <div class="env-main">
                <div class="inenv clearfix">
                    <div class="iner-sh" v-for="itemj in ingetjy">
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
                bsrc: require('../assets/images/edu_02.png'),
                ingetjy:[],
                weets:[],      
            }
        },
        created(){
            this.getjy();  
            this.getjyon()                    
         },
         methods: {
            getjy() {
                let that = this;
                axios({
                    url: 'http://wansui.tunnel.echomod.cn/img/index?type=1&parentid=9',  
                    method: 'get',
                    dataType: 'json',
                }).then((res) => {
                    if (res.status == 200) {
                        that.ingetjy = res.data.data
                        console.log(this.ingetjy)
                    }
                })
            },
            getjyon(){
                let that=this;
                axios({
                    url: 'http://wansui.tunnel.echomod.cn/article/index?type=10',  
                    method:'get',
                    dataType:'json',
                }).then((response)=>{
                    if(response.status==200){
                        that.weets=response.data.data
                        console.log(this.weets)
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
    
