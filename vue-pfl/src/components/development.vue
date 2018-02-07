<template>
    <div class="development" id="development">
        <tab></tab>
        <div class="kernel-banner"><img :src="kernelbanner"/></div>
        <div class="kernrl-txt">
            <div class="inner">
                <el-breadcrumb separator-class="el-icon-arrow-right" class="inner-tt">
                        <el-breadcrumb-item :to="{ path: '/Home' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item :to="{ path: '/kernel' }">核心能力</el-breadcrumb-item>
                        <el-breadcrumb-item>软件研发</el-breadcrumb-item>
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
        <div class="kernrl-midimgb"><img src="../assets/images/csygl_04.jpg"/></div>   
	<navfooter></navfooter>   
    </div>     
</template>
      
<script>
      import navfooter from './../components/base/navfooter'
      import tab from './../components/base/tab'	  
      export default{
        data(){
            return{
                kernelbanner: require('../assets/images/deve_02.png'),
                innerbb:'依托多年的运维和管理经验，采用专业规范的IT基础架构管理制度，帮助客户整合IT资源并降低成本，持续优化和提升系统的可用性和安全性。',
                midimgle:require('../assets/images/blue_04.png'),
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
