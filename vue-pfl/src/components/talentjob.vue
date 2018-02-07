<template>
    <div class="talentjob" id="talentjob">
        <div>
            <tab></tab>
        </div>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <div class="publicbanner"><img :src="imgUrl" alt=""/>
            <div class="publictxt">
                <p v-html="hanzi"></p>
                <span v-html="english"></span>
            </div>
        </div>
        <div class="main">
            <div class="inner">
                <div class="innertop">
                    <ul class="prompt">
                        <li>职位名称</li>
                        <li>招聘人数</li>
                        <li>工作地点</li>
                        <li>职位描述</li>
                    </ul>
                </div>                                    
                <ul class="specific" v-for="detail in articleslist">
                    <li><a href="javascript:;">{{detail.position}}</a></li>
                    <li><a href="javascript:;">{{detail.people}}</a></li>
                    <li><a href="javascript:;">{{detail.address}}</a></li>
                    <li><a href="#" @click="godetail(detail)">点击查看</a></li>
                </ul>                   
            </div>
        </div>
	    <navfooter></navfooter>
    </div>
</template>
<script type="text/javascript">
    import axios from 'axios'
    import navfooter from './../components/base/navfooter'
    import tab from './../components/base/tab'	
    export default{
        data(){
            return{
				imgUrl: require('../assets/images/rczp_03.png'),
				hanzi:'关于我们',
                english:'About us',
                articleslist:[]   
            }
        },
        created(){
            this.getaticlelist();               
        },
        methods:{ 
            godetail(detail) {
                this.$router.push({ path: '/detailsjob', query: { id: detail.id }})
            },
            getaticlelist(){
                let that =this
                axios({                   
                    url:'http://wansui.tunnel.echomod.cn/recruit/index',
                    method:'get',
                    dataType:'json'
                }).then((res)=>{
                    that.articleslist = res.data.data;
                    console.log(this.articleslist); 
                }).catch(function (error) {
                    console.log(error);
                });
            }            
        },
        components:{
            navfooter,
            tab,
       },
    };
</script>   
<style lang="scss" scoped="" type="text/css">

        @import "../assets/css/base.css";
           
</style>