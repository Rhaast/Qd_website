<template>
	<div id="Home">
		<div class="navheader"><tab></tab></div>
		<div>
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
		<div class="banner">
			<el-carousel  class="carouselbanner">
				<el-carousel-item v-for="(item,index) in homebannerdata" :key="index" class="fen" >				
					<img :src="item.imgurl">
					<p class="lunbotxt">{{ item.title}}</p>
				</el-carousel-item>
			</el-carousel>
		</div>
		<div class="inner">
			<div class="homemain">
				<h2 v-text="Corecompetence"></h2>
				<div class="mainle" @click="mainle">
					<img :src="mainleUrl" />
					<p v-text="mainletxt"></p>
				</div>
				<ul>
					<li v-for="item in slide" @click="happiness(item)">							
							<img class="contentimage" :src="item.imgUrl" alt="" />																																	
						<span>{{ item.title }}</span>
					</li>	
				</ul>
				<div class="mainri" @click="mainri">
					<img :src="mainriUrl" />
					<p v-text="mainritxt"></p>
				</div>
			</div>
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
		<div class="homemid">
			<img :src="homemidUrl" />
		</div>
		<!-- jq -->
		<div class="accordion">
			<div class="homebot"><h2>{{ homebot }}</h2></div>
			<ul>
				<li class="item1 active">
					<h2>网站建设</h2>
				 	<p>网站建设综合服务，是为企业提供一对一的定制建站方案，帮助企业在网络中全面展示品牌优势，扩大商业影响力</p>
					<a href=""></a></li>
				<li class="item2">
					<h2>移动端开发</h2>
				 	<p>移动智能终端用户激增，带来了广阔的商业契机。移动应用开发服务，为企业深度挖掘移动流量，转流量为消费提供了有力支持</p>
					<a href=""></a>
					</li>
				<li class="item3">
					<h2>UI设计</h2>
				 	<p>电商平台开发，为电商企业打开互联网营销新渠道，利用平台的数字化信息网络，企业可实现线上交易运营，获得更广阔的商业机遇</p>
					<a href=""></a>
					</li>
				<li class="item4">
					<h2>系统管理</h2>
				 	<p>电商平台开发，为电商企业打开互联网营销新渠道，利用平台的数字化信息网络，企业可实现线上交易运营，获得更广阔的商业机遇</p>
					<a href=""></a>
					</li>
			</ul>
		</div>
		<navfooter></navfooter>
	</div>
</template>

<script>
	import Vue from 'vue'
	import navfooter from './base/navfooter'
	import tab from './base/tab'
	import axios from 'axios'
	import '../assets/jquery-sfqnav20151021/css/default.css'
	import '../assets/jquery-sfqnav20151021/css/jquery.accordion.css'
	import '../assets/jquery-sfqnav20151021/js/jquery.accordion'
	
	export default {
		data() {
			return {
				homebannerdata: [],
				Corecompetence: '核心能力 Core competence',
				mainleUrl: require('../assets/images/rjkf.png'),
				mainletxt: '软件开发',
				slide: [
					{
						imgUrl: require('../assets/images/wo_06.png'),
						title: '战略咨询',
						url: 'strategy'
						
					},
					{
						imgUrl: require('../assets/images/wo_08.png'),
						title: '数据分析',						
						url: 'bidata',						
					},
					{
						imgUrl: require('../assets/images/wo_12.png'),
						title: '测试管理',						
						url: 'testing',					
					},
					{
						imgUrl: require('../assets/images/wo_15.png'),
						title: '用户体验设计',						
						url: 'design',
					},
				],
				mainriUrl: require('../assets/images/wo_03.png'),
				mainritxt: '运维支撑',


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

				homemidUrl: require('../assets/images/csygl_04.jpg'),

				homebot: '互联网及IT服务 Internet and IT services',

			}
		},
		created() {
			this.homebanner();

		},
		mounted () {
							  $(document).ready(function(){
	    			$(".accordion").accordion();
	  });
		},
		methods: {
			homebanner() {
				let that = this;
				axios({
					url: 'http://wansui.tunnel.echomod.cn/img/index?type=0&parentid=12',
					method: 'get',
					dataType: 'jsonp'
				}).then((res) => {
					if (res.status == 200) {
						that.homebannerdata = res.data.data
						console.log(this.homebannerdata)
					}
				})
			},
			mainle() {
				this.$router.push({ path: '/development' });
			},
			mainri() {
				this.$router.push({ path: '/support' });
			},
			happiness(item){
				this.$router.push(`/${item.url}`)
			},
		},
		components: {
			navfooter,
			tab,			
		},	
	};
</script>
<style lang="css" scoped="" type="text/css">
	@import "../assets/css/base.css";
.vue-accordion ul:hover li:hover a{
	background:red !important;
}
</style>