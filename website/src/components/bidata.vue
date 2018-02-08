<template>
  <div class="bidata" id="bidata">
      <tab></tab>
      <div class="kernel-banner"><img :src="kernelbanner"/></div>
      <div class="kernrl-txt">
          <div class="inner">
              <el-breadcrumb separator-class="el-icon-arrow-right" class="inner-tt">
                  <el-breadcrumb-item :to="{ path: '/Home' }">首页</el-breadcrumb-item>
                  <el-breadcrumb-item :to="{ path: '/kernel' }">核心能力</el-breadcrumb-item>
                  <el-breadcrumb-item>大数据</el-breadcrumb-item>
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
            kernelbanner: require('../assets/images/big_02.png'),
            innerbb:'公司数据服务业务致力于向企业机构提供咨询、实施、开发等端到端的数据技术和大数据创新服务，帮助客户确定他们应重点关注的业务，挖掘核心价值，实现利益最大化。'+
            '梳理数据，并将其转换成专业深入的价值洞察系统，快速捕捉市场机遇。',
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
