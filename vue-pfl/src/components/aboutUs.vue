<template>
  <div class="aboutUs">
	 <tab></tab>		
	<keep-alive>
			<router-view></router-view>
	</keep-alive>
	<div class="jie">
		<ul class="jobwork">
			<li><router-link to="/detailsjob">关于我们</router-link></li>
			<li><router-link to="/talentjob">人才招聘</router-link></li>
			<li><router-link to="/contact">联系我们</router-link></li>
    	</ul>  
	</div>	
	<!-- 公共banner  -->
	<div class="publicbanner"><img :src="imgUrl" alt=""/>
		<div class="publictxt">
			<p v-html="hanzi"></p>
			<span v-html="english"></span>
		</div>
	</div>
		
	<div class="fate">
		<div class="infate">
			<ul class="aboutmain">
				<li><img class=gymain :src="imgUrlb" alt=""/></li>
				<li>
					<h2 v-html="company"></h2>
					<p>{{ incom }}</p>
				</li>
			</ul>
			<ul class="aboutmainb">
				<li>
					<h2 v-html="vision"></h2>
					<p>{{ invision }}</p>
					<h2 v-html="values"></h2>
					<p>{{ invalues }}</p>
					<h2 v-html="mission"></h2>
					<p>{{ inmission }}</p>
				</li>
				<li><img class="gymainb" :src="imgUrlc" alt=""/></li>
			</ul>
		</div>
	</div>
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
				imgUrl: require('../assets/images/aboutUS_02.png'),
				hanzi:'关于我们',
				english:'About us',

				imgUrlb: require('../assets/images/aboutUS_05.png'),
				company:'公司简介',
				incom: '巧度科技是一家为通信运营商、政府、企事业单位提供研发及人力外包、系统集成等整体解决方案的创业型科技企业。以民族振兴，'+
				'社会进步为使命，立足中国、放眼全球，立志成为中国一流的软件研发和服务提供商。每次的进步都立足于坚实的发展基础之上，多年来巧度科技创业团队'+
				'一直深耕通信运营商业务领域，积累了丰富的经营经验和可靠的商业信誉，得到了业界的一致认可与好评。在新时代环境下我们积极顺应互联网、物联网、云计算、大数据、智慧城市的产业发展趋势，'+
				'紧密团结上下游合作伙伴，构建以技术研发、产品运营、运行维护、厂商资源整合为一体的核心竞争力事业价值平台。',

				vision:'公司愿景',
				invision:'成为公司员工最有梦想的舞台，成为合作企业最有价值的商业伙伴，成为互联网行业最有力度的领军品牌。',
				values:'公司价值观',
				invalues:'始于贤者忠于德，起于利来止于义，精于品质重于果，胜于解决败于拖。',
				mission:'公司使命',
				inmission:'用科技开创未来，以服务引领现在，为中国民族企业增添浓墨重彩的一笔。',
				imgUrlc: require('../assets/images/aboutUS_08.png')
		}
	},
	methods:{
		
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
