<!-- h5活动网站建设 -->
<template>
    <div class="activity">
         <!-- 引入选项卡 -->
	    <tab></tab>
     <div class="container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>

    <div class="activibanner"><img src="../assets/images/activ_02.png"/></div>
    <div class="tivimain">
        <div class="inner">
            <div class="coninner">
                <div class="actone">
                    <h3>活动分类</h3>
                    <ul>
                        <li><img src="../assets/images/hdfla.png"/><span>交互游戏</span></li>
                        <li><img src="../assets/images/hdflb.png"/><span>广告宣传</span></li>
                        <li><img src="../assets/images/hdflc.png"/><span>场景活动</span></li>
                    </ul>
                </div>
                <div class="acttwo">
                    <h3>传播渠道</h3>
                    <ul>
                        <li><img src="../assets/images/cbqda.png"/><span>活动分享页</span></li>
                        <li><img src="../assets/images/cbqdb.png"/><span>扫描二维码</span></li>
                        <li><img src="../assets/images/cbqdc.png"/><span>短信推送</span></li>
                    </ul>
                </div>
                <div class="actthree">
                    <h3>营销收货</h3>
                    <ul>
                        <li><img src="../assets/images/yxssa.png"/><span>吸引眼球</span></li>
                        <li><img src="../assets/images/yxssb.png"/><span>品牌推广</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="acrmid">
        <div class="inmid">
            <div class="inmidtxt">
                <h3>品牌定位  网站设计  营销推广</h3>
                <p>三大环节，全力打造品牌及门户网站的吸引力</p>
            </div>
            <div class="inmidimg"><img src="../assets/images/activ_05.png"/></div>
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
    import tab from './../components/base/tab'	
    export default{
        data(){
            return{
        
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
       .activibanner{height: 450px;}
       .tivimain{height: 700px;background: #eeeeee;}
       .inner{margin: 0 auto;width: 1600px;padding-top: 60px;}
       .inner .coninner{}
       .inner .coninner .actone{float: left;margin-left:8px;width: 520px;height: 600px;background: #fff;}
       .inner .coninner .actone h3{font-size: 48px;color: #333;line-height: 100px;height: 100px;padding-top: 40px;width: 100%;text-align: center}
       .inner .coninner .actone ul li{width: 150px;font-size: 28px;color: #666;padding-top: 15px;float: left;margin-left: 15px;padding-bottom: 10px;padding: 5%;margin-left: 55px;}
       .inner .coninner .actone ul li img{width: 110px;height: 110px;}
       .inner .coninner .actone ul li span{display: block;height: 60px;line-height: 60px;}

       .inner .coninner .acttwo{float: left;margin-left:8px;width: 520px;height: 600px;background: #fff;}
       .inner .coninner .acttwo h3{font-size: 48px;color: #333;line-height: 100px;height: 100px;padding-top: 40px;width: 100%;text-align: center}
       .inner .coninner .acttwo ul li{width: 150px;font-size: 28px;color: #666;padding-top: 15px;float: left;margin-left: 15px;padding-bottom: 10px;padding: 5%;margin-left:55px;}
       .inner .coninner .acttwo ul li img{width: 110px;height: 110px;}
       .inner .coninner .acttwo ul li span{display: block;height: 60px;line-height: 60px;}

       .inner .coninner .actthree{float: left;margin-left:8px;width: 520px;height: 600px;background: #fff;}
       .inner .coninner .actthree h3{font-size: 48px;color: #333;line-height: 100px;height: 100px;padding-top: 40px;width: 100%;text-align: center}
       .inner .coninner .actthree ul li{width: 150px;font-size: 28px;color: #666;padding-top: 15px;float: left;margin-left: 15px;padding-bottom: 10px;padding: 5%;margin-left: 55px;}
       .inner .coninner .actthree ul li img{width: 110px;height: 110px;}
       .inner .coninner .actthree ul li span{display: block;height: 60px;line-height: 60px;}

       .acrmid{background: #fff;}
       .acrmid .inmid{margin: 0 auto;width: 1600px;height: 460px;margin-top: 60px;}
       .acrmid .inmid .inmidtxt{float: left;width: 800px;color: #fff;text-align: center;background: #fe8d3f;height: 460px;}
       .acrmid .inmid .inmidtxt h3{font-size: 48px;height: 80px;line-height: 80px;margin-top:20%;}
       .acrmid .inmid .inmidtxt p{font-size: 28px;height: 60px;line-height: 60px;}
       .acrmid .inmid .inmidimg{float: left;width: 800px;height: 460px;}
       .acrmid .inmid .inmidimg img{width: 100%;height: 100%;}

    </style>
    