
<!-- 联系我们页面  -->
<template>
    <div class="contact" id="contact">
        <tab></tab>
        <div class="container">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
        </div>
        <div class="publicbanner"><img :src="imgUrl" alt=""/>
            <div class="publictxt">
                <p v-html="hanzi"></p>
                <span v-html="english"></span>
            </div>
        </div>
        <div class="meet">
            <div class="inmeet">
                <div class="meetle"><img src="../assets/images/lxwm_03.png"/></div>
                <div class="meetri">
                    <span>Contact us</span>
                    <span>联系我们</span>
                    <i>重庆巧度科技有限公司</i>
                    <p>公司地址：重庆市渝中区嘉陵江滨江路242号远见中心14F09室</p>
                    <p>公司邮编：400569</p>
                    <p>营业时间：周一至周五9:00-18：00</p>
                    <p>公司电话：023-63615851</p>
                </div> 
                 <div class="intxt">关注我们</div>
                 <ul class="inmeetimg clearfix">
                     <li><img src="../assets/images/erweim_07.png"/></li>
                     <li><img src="../assets/images/erweim_07.png"/></li>
                 </ul>  
            </div>
        </div>
        <navfooter></navfooter>	
    </div>
</template>
<script>
    import navfooter from './../components/base/navfooter'
    import tab from './../components/base/tab'
    import axios from 'axios'		
    export default{
        data(){
            return{
                imgUrl: require('../assets/images/rczp_03.png'),
                hanzi:'关于我们',
                english:'About us',     
            }
        },
        mounted(){

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
