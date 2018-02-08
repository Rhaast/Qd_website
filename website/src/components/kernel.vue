<template>
    <div class="kernel" id="kernel">
	    <tab></tab>    
        <keep-alive>
            <router-view class="keview"></router-view>
        </keep-alive>   
        <div class="publicbanner"><img :src="imgUrl" alt=""/>
            <div class="publictxt">
                <p v-html="hanzi"></p>
                <span v-html="english"></span>
            </div>
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
            imgUrl: require('../assets/images/aboutUS_02.png'),
			hanzi:'核心能力',
            english:'Core competence',
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
		}
	},
	methods: {
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
	components:{
		navfooter,
        tab,
   },
};
</script>
<style lang="scss" scoped="" type="text/css">

    @import "../assets/css/base.css";

</style>
