<template>
    <div class="design" id="design">
        <tab></tab>
        <div class="kernel-banner"><img src="../assets/images/design_02.png"/></div>
        <div class="kernrl-txt">
            <div class="inner">
                <el-breadcrumb separator-class="el-icon-arrow-right" class="inner-tt">
                    <el-breadcrumb-item :to="{ path: '/Home' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/kernel' }">核心能力</el-breadcrumb-item>
                    <el-breadcrumb-item>UI设计</el-breadcrumb-item>
                </el-breadcrumb>
                <div class="inner-bb" v-text="innerbb"></div>
            </div>
        </div>           
        <div class="kernrl-midimga">
            <div class="midimg-le"><img :src="midimgle"/></div>
            <div class="midimg-int">
                <p class="yth">未确定</p>   
            </div>
        </div>       
        <div class="kernrl-midimgb"><img :src="kernrlmidimgb"/></div> 
       <div>
           <navfooter></navfooter>
       </div>	
    </div>
</template>
<script>
    import navfooter from './../components/base/navfooter'
    import tab from './../components/base/tab'	
    export default{
        data(){
            return{
                kernelbanner: require('../assets/images/design_02.png'),
                innerbb:'咨询用户体验不仅仅是一项技术,而是策略。在巧度,我们坚持“以用户为中心”的设计流程来帮助我们的客户设计用户体验友好的产品，减少开发和支持成本，进而促进销售、提升利润和品牌知名度。',
                midimgle:require('../assets/images/yellow_02.png'),
                kernrlmidimgb:require('../assets/images/csygl_04.jpg'),	
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