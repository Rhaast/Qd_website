<template>
  <div class="wisdom" id="wisdom">
	    <tab></tab>  
      <keep-alive>
          <router-view></router-view>
      </keep-alive> 
      <div class="citybanner"><img :src="imgUrl" alt=""/>
          <div class="citylictxt">
            <p v-html="hanzi"></p>
            <span v-html="english"></span>
          </div>
      </div>
	  <div class="inner">
          <div class="hometent">
              <h2>{{ hometenttxt }}</h2>
              <div class="incontent">				
                  <el-carousel  type="card" height="700px">
                      <el-carousel-item v-for="(itemd,index) in slideb" :key="index">
                        <a :href="itemd.href">	
                          <img :src="itemd.tentUrl" alt="" />
                        </a>			 
                      </el-carousel-item>
                  </el-carousel>
              </div>
          </div>        
      </div>
	<navfooter></navfooter>
  </div>
</template>
<script>
import navfooter from './../components/base/navfooter'
import tab from './../components/base/tab'	
export default{
	data(){
		return{
        imgUrl: require('../assets/images/widf_02.png'),
				hanzi:'智慧产业及物联网',
				english:'Intelligent industries and networking',
        hometenttxt: '智慧产业及物联网 Intelligent industries and networking',			  	
				slideb: [
					{
						tentUrl: require('../assets/images/zhlv.png'),
						href: 'tourism'
					},
					{
						tentUrl: require('../assets/images/zhhj.png'),
						href: 'environment'
					},
					{
						tentUrl: require('../assets/images/zhjr.png'),
						href: 'finance'
					},
					{
						tentUrl: require('../assets/images/zhjt.png'),
						href: 'newtraffic'
					},
					{
						tentUrl: require('../assets/images/zhjy.png'),						
						href: 'education'
					},
					{
						tentUrl: require('../assets/images/zhjz.png'),						
						href: 'architecture'
					},
					{
						tentUrl: require('../assets/images/zhny.png'),						
						href: 'energy'
					},
					{
						tentUrl: require('../assets/images/zhyl.png'),						
						href: 'medica'
					},										
				],	
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
