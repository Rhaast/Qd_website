<!-- 系统管理 -->
<template>
        <div class="site">
             <!-- 引入选项卡 -->
            <tab></tab>
        <div class="container">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>

        

        <div class="distance">
            <div class="hope">
                <ul class="hopone">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <ul class="hoptwo">
                    <li>企业网站建设</li>
                    <li>品牌·门户网站建设</li>
                    <li>电商网站建设</li>
                    <li>H5活动网站建设</li>
                    <li>营销网站建设</li>
                </ul>
        </div>
            <div class="luckyone">
                <div class="inluckyone">
                    <div class="onetop">
                        <h3>企业官网</h3>
                        <p>拒绝平庸、拒绝模板、为您提供个性化设计</p>
                    </div>
                    <div class="onebot">
                        <div class="botimg"><img src="../assets/images/sitekkaa.png"/></div>
                    </div>
                </div>
            </div>
            <div class="luckytwo">
                    <div class="inluckyone">
                        <div class="onetop">
                            <h3>企业官网</h3>
                            <p>拒绝平庸、拒绝模板、为您提供个性化设计</p>
                        </div>
                        <div class="onebot">
                            <div class="botimg"><img src="../assets/images/sitebb_03.png"/></div>
                        </div>
                    </div>
            </div>
            <div class="luckythree">
                <div class="inluckyone">
                    <div class="onetop">
                        <h3>企业官网</h3>
                        <p>拒绝平庸、拒绝模板、为您提供个性化设计</p>
                    </div>
                    <div class="onebot">
                        <div class="botimg"><img src="../assets/images/sitebb_07.png"/></div>
                    </div>
                </div>
            </div>
            <div class="luckyfour">
                <div class="inluckyone">
                    <div class="onetop">
                        <h3>企业官网</h3>
                        <p>拒绝平庸、拒绝模板、为您提供个性化设计</p>
                    </div>
                    <div class="onebot">
                        <div class="botimg"><img src="../assets/images/sitebb_11.png"/></div>
                    </div>
                </div>
            </div>
            <div class="luckyfive">
                <div class="inluckyone">
                    <div class="onetop">
                        <h3>企业官网</h3>
                        <p>拒绝平庸、拒绝模板、为您提供个性化设计</p>
                    </div>
                    <div class="onebot">
                        <div class="botimg"><img src="../assets/images/sitebb_13.png"/></div>
                    </div>
                </div>
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
         .hope{position: absolute;top: 230px;left: 160px;height: 650px;z-index: 10;border-left: 1px solid #fff;}
        .hope .hopone{height: 650px;width: 30px;float: left;}
        .hope .hopone li{width: 5px;border-top: 1px solid #fff;height: 155px;}
         .hope .hoptwo{color: #fff;height: 650px;width: 200px;float: left;}
         .hope .hoptwo li{font-size: 18px;line-height: 30px;color: #ffff;height: 150px;}

        .distance .luckyone{width:100%; position: relative; height:900px;
           background:-webkit-linear-gradient(left,#5272f9,#b7adfc);
           background: -moz-linear-gradient(left,#5272f9,#b7adfc);
           background: -o-linear-gradient(left,#5272f9,#b7adfc);
           background: linear-gradient(left,#5272f9,#b7adfc);          
           background: -ms-linear-gradient(top,  #5272f9, #b7adfc);    
       }
        .distance .luckyone .inluckyone{margin-left: 450px;margin-right: 160px;}
        .distance .luckyone .inluckyone .onetop{height: 160px;padding-top: 20px;color: #fff;text-align: center;}
        .distance .luckyone .inluckyone .onetop h3{font-size: 48px;line-height: 80px;}
        .distance .luckyone .inluckyone .onetop p{font-size: 30px;line-height: 60px;}
        .distance .luckyone .inluckyone .onebot{height: 650px;}
        .distance .luckyone .inluckyone .onebot .botimg{height: 650px;width: 1300px;}
        .distance .luckyone .inluckyone .onebot .botimg img{height: 100%;width: 100%;}

        .distance .luckytwo{width:100%; position: relative; height:900px;background: #eee;}
        .distance .luckytwo .inluckyone{margin-left: 450px;margin-right: 160px;}
        .distance .luckytwo .inluckyone .onetop{height: 160px;padding-top: 20px;text-align: center;}
        .distance .luckytwo .inluckyone .onetop h3{font-size: 48px;line-height: 80px;color: #333;}
        .distance .luckytwo .inluckyone .onetop p{font-size: 30px;line-height: 60px;color: #999}
        .distance .luckytwo .inluckyone .onebot{height: 650px;}
        .distance .luckytwo .inluckyone .onebot .botimg{height: 650px;width: 1300px;}
        .distance .luckytwo .inluckyone .onebot .botimg img{height: 100%;width: 100%;}

        



           
        </style>
        