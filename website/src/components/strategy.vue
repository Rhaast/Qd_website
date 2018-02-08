<template>
    <div class="strategy" id="strategy">
        <tab></tab>
        <div class="kernel-banner"><img :src="kernelbanner"/></div>
        <div class="kernrl-txt">
            <div class="inner">
                <el-breadcrumb separator-class="el-icon-arrow-right" class="inner-tt">
                    <el-breadcrumb-item :to="{ path: '/Home' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/kernel' }">核心能力</el-breadcrumb-item>
                    <el-breadcrumb-item>战略咨询</el-breadcrumb-item>
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
            kernelbanner: require('../assets/images/djs_02.png'),
            innerbb:'咨询服务通过提供战略咨询和业务咨询服务，帮助集团把握客户业务本质，掌握客户真实需求，有效提升服务的专业化水平，实现与客户“共成长”的业务目标。'+
                        '公司提供的信息化咨询专注于帮助客户在业务驱动和IT需求的互动中获得更大的价值。公司的咨询产品及服务都是基于严格和行之有效的科学方法和框架，'+
                        '在业务流程、技术和外包等方面，公司在对现有环境进行充分研究与评估的基础上，确定优化机会，为客户提供能够显著节约成本并提高生产力的战略发展路线，'+
                        '使业务策略与运营实际保持一致。致力于通过实施变革推动业务改进，专注于将战略转化为现实，并拥有强大的交付团队来支撑战略建议，与客户合作，'+
                        '共同创建从市场到业务策略、从系统到数据策略等不同层面上的可执行策略。',
            midimgle:require('../assets/images/pink.png'),
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

    @import "../assets/css/base.css";

</style>
    