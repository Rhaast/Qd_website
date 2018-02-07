<template>
    <div class="testing" id="testing">
        <tab></tab>
        <div class="kernel-banner"><img src="../assets/images/kernel-banner_02.png"/></div>
        <div class="kernrl-txt">
            <div class="inner">
                <el-breadcrumb separator-class="el-icon-arrow-right" class="inner-tt">
                        <el-breadcrumb-item :to="{ path: '/Home' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item :to="{ path: '/kernel' }">核心能力</el-breadcrumb-item>
                        <el-breadcrumb-item>测试与管理</el-breadcrumb-item>
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
        <navfooter></navfooter>
    </div>
</template>
<script>
    import navfooter from './../components/base/navfooter'
    import tab from './../components/base/tab'	
    export default{
        data(){
            return{
                kernelbanner: require('../assets/images/kernel-banner_02.png'),
                innerbb:'巧度在质量保证和测试方面拥有雄厚的技术能力，满足企业在关键系统测试和质量保证方面的需要。巧度拥有专业化的知识和定制服务，满足您所有的测试需求。'+
                    '巧度利用最新的开发、设计工具和自动化测试脚本，依据客户预算，提供及时高效的服务。让您的产品更快地交付、为开发人员节省宝贵的时间、节约公司内部资源成本。',
                midimgle:require('../assets/images/green.png'),
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
    