
<!-- 门户网站建设页面  -->
<template>
    <div class="portal" id="portal">
        <div class="container">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
        </div>
        <div class="portalba"><img :src="imgUrl" alt=""/>
            <div class="portalbanner">
                <p v-html="portaltitle"></p>
                <span v-html="portalcontent"></span>
            </div>
        </div>
        <div class="conportal">
            <div class="incon">
                <div class="mian clearfix">
                    <div class="mainle"><img src="../assets/images/portal_05.png"/>
                        <P class="lehanzi">品牌 ·门户网站建设</P>
                        <P class="leendlish">Brand and portal construction</P>
                    </div>
                    <div class="mainmid">
                        <div class="inmidd">
                            <P class="immiddtxt">视觉风格</P>
                            <P class="immidtent">分析品牌所属行业，设计师团队精确定位配图元素，创作新奇动效，带出差异化的视觉体验。</P>
                        </div>
                        <div class="inmidd immidtwo">
                            <P class="immiddtxt">网站SEO的优化</P>
                            <P class="immidtent">根据品牌所属行业，调整网站定位；更新内容建立搜索蜘蛛的友好性；后期分析网站的PV/UV/IP，做好用户体验。</P>
                        </div>
                    </div>
                    <div class="midri">
                            <P class="midritxt">网站结构</P>
                            <P class="midritent">导航、图标等，设计师团队会根据品牌及门户的需求，进行个性化设计。通过从品牌及门户的主题中提炼出创意，对传统设计元素重塑，对细节优化，从而让新元素富有全新特色。</P>
                        </div>
                </div>
                <ul>
                    <li>
                        <p>品牌定位    网站设计    营销推广</p>
                        <span>三大环节，全力打造品牌及门户网站的吸引力</span>
                    </li>
                    <li><img src="../assets/images/portal_09.png"/></li>
                </ul>
            </div>
        </div>
       <!--   页面底部组件 -->
       <div>
           <navfooter></navfooter>
       </div>
	
</div>
</template>

<script>
import navfooter from './../components/base/navfooter'
export default{
	data(){
        return{
            imgUrl: require('../assets/images/portal_02.png'),
            portaltitle:'品牌·门户网站建设',
            portalcontent:'通过对网站结构的变换，带来视觉风格的冲击，网站栏目、关键字的调配，网站SEO的优化，围绕品牌及品牌的核心来设计与开发。',
    
        }
    },
	mounted(){
            
    },
	components:{
		navfooter,
   },
};
</script>


<style lang="scss" scoped="" type="text/css">

@import "../assets/css/base.css";
.portalba{position: relative;height: 500px;}
.portalbanner{position: absolute;right: 160px;color: #fff;top:80px;width: 650px;}
.portalbanner p{font-size: 72px;line-height: 110px;height: 110px;}
.portalbanner span{font-size: 28px;line-height: 50px;display: block;}
.conportal{background: #eee;}
.conportal .incon{margin: 0 auto;width: 1600px;}
.conportal .incon .mian{margin-top:60px;height: 720px;background:#eeeeee;}
.conportal .incon .mian .mainle{float: left;width: 365px;height: 665px;margin-left: 7px;position: relative;}
.conportal .incon .mian .mainle img{width: 100%;height: 100%;}
.conportal .incon .mian .mainle .lehanzi{position: absolute;left: 50%;top:45%;font-size: 36px;color: #fff;
    height: 60px;line-height: 60px;width: 320px;margin-left: -160px;text-align: center;}
.conportal .incon .mian .mainle .leendlish{position: absolute;left: 50%;top:55%;font-size: 20px;color: #fff;
    height: 60px;line-height: 60px;width: 320px;margin-left: -160px;text-align: center;}
.conportal .incon .mian .mainmid{float: left;width: 740px;margin-left: 7px;height: 665px;}
.conportal .incon .mian .mainmid .inmidd{height: 330px;margin-bottom: 7px;color: #fff;background: #5272f9;padding-left: 35px;}
.conportal .incon .mian .mainmid .inmidd .immiddtxt{font-size: 48px;height: 90px;line-height: 90px;padding-top: 80px;}
.conportal .incon .mian .mainmid .inmidd .immidtent{line-height: 40px;font-size: 24px;padding-right: 70px;}
.conportal .incon .mian .mainmid .immidtwo{background: #ff8d40;}
.conportal .incon .mian .midri{background: #4f9cdb;width: 470px;height: 665px;float: left;margin-left: 7px;color: #fff;}
.conportal .incon .mian .midri .midritxt{font-size: 48px;height: 90px;line-height: 90px;padding-top: 80px;padding-left: 35px;padding-bottom: 100px;}
.conportal .incon .mian .midri .midritent{line-height: 40px;font-size: 24px;width: 400px;padding-left: 35px;}
.conportal .incon ul{background: #2ed0c3;height: 460px;}
.conportal .incon ul li{float: left;width: 800px;color: #fff;height: 460px;}
.conportal .incon ul li p{font-size: 48px;width: 700px;text-align: center;padding-top: 150px;height: 120px;padding-left: 50px;}
.conportal .incon ul li span{font-size: 28px;display: block;width: 700px;text-align: center;padding-left: 50px;}




</style>
