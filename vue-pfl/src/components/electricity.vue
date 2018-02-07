
<!-- 电商网站建设 -->

<template>  
    <div class="electricity" id="electricity">
        <div class="elebanner"><img src="../assets/images/eletri_05.png"/>
            <div class="inelebanner">
                <h2>电商网站建设</h2>
                <p>随着电子商务快速发展，新型电商模式层出不穷。为企业提供括O2O、B2B、B2C、C2C，分销和B2B2C
                    在内的多种电商平台建设，帮助企业开辟稳定的商业营销渠道，牢牢占据网络市场。
                </p>
            </div>
        </div>
        <div class="elemain">
            <div class="conelemain">
                <div class="elemaintop">
                    <h2>功能丰富·自由定制</h2>
                    <p>您既可以选择已有的网站功能，也可以定制前所未有的个性化功能</p>
                </div>
                <div class="elemainbot clearfix">

                    <div class="inelemainbot">
                        <div class="mainbotle"><img src="../assets/images/zcdl.png"/></div>
                        <div class="mainbotri">
                            <h3>注册登录</h3>
                            <p>用户可通过手机短信验证注册登陆网站，同时支持第三方登录。</p>
                        </div>
                    </div>
                    <div class="inelemainbot">
                        <div class="mainbotle"><img src="../assets/images/shmb.png"/></div>
                        <div class="mainbotri">
                            <h3>商户模板</h3>
                            <p>网站中商户的店铺拥有统一模板，精美华丽 十分便于管理。</p>
                        </div>
                    </div>
                    <div class="inelemainbot">
                        <div class="mainbotle"><img src="../assets/images/shcx.png"/></div>
                        <div class="mainbotri">
                            <h3>商户促销</h3>
                            <p>团购、拍卖、秒杀、积分红包，各类促销活 动，功能完整.</p>
                        </div>
                    </div>
                    <div class="inelemainbot">
                        <div class="mainbotle"><img src="../assets/images/ddcx.png"/></div>
                        <div class="mainbotri">
                            <h3>订单查询</h3>
                            <p>会员在网站下单后，即时接收短信通知，通过网站查询物流情况。</p>
                        </div>
                    </div>
                    <div class="inelemainbot">
                        <div class="mainbotle"><img src="../assets/images/sjdr.png"/></div>
                        <div class="mainbotri">
                            <h3>淘宝数据导入</h3>
                            <p>支持淘宝等商城的数据导入功能，评论，让您的网站真实可信。</p>
                        </div>
                    </div>
                    <div class="inelemainbot">
                        <div class="mainbotle"><img src="../assets/images/zxzf.png"/></div>
                        <div class="mainbotri">
                            <h3>在线支付方式</h3>
                            <p>支持支付宝，微信支付等国内支付Paypal，Dhpay等海外支付方式。</p>
                        </div>
                    </div>

                </div>
                <div class="elemid clearfix">
                    <div class="elemidz"><img src="../assets/images/eletri_06.png"/></div>
                    <div class="elemidy">
                        <h3>一站式后台管理</h3>
                        <p>后台管理系统，一站更新，多平台同步自动生成销售报表统计，让您对网站运营情况了如指掌 操作简单，轻轻一点即可更新商品信息，
                            更可以批量管理 订单、物流、评论，全盘掌控，建站无后患之忧。</p>
                    </div>
                </div>
            </div>
        </div>
         <!--   页面底部组件 -->
         <navfooter></navfooter>
    </div>
</template>
<script type="text/javascript">
    import navfooter from './../components/base/navfooter'	
    export default{
        data(){
            return{
        
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
    .elebanner{height: 450px;position: relative;color:#fff;}
    .elebanner .inelebanner{position: absolute;top: 10%;left: 56%;width: 650px;}
    .elebanner .inelebanner h2{height: 116px;line-height: 116px;font-size: 72px;}
    .elebanner .inelebanner p{height: 50px;line-height: 50px;width: 85%;font-size: 28px;}
    .elemain{background: #eeeeee;}
    .elemain .conelemain{width: 1600PX;margin: 0 auto;}
    .elemain .conelemain .elemaintop{text-align: center;}
    .elemain .conelemain .elemaintop h2{color:#000;font-size: 36px;height: 60px;line-height: 60px;padding-top: 30px;}
    .elemain .conelemain .elemaintop p{color: #999;font-size: 24px;height: 30px;line-height: 30px;padding-bottom: 30px;}
    .elemain .conelemain .elemainbot{margin-bottom: 60px;height: 470px;}
    .elemain .conelemain .elemainbot .inelemainbot{float: left;margin-left: 6px;width: 525px;background: #fff;margin-bottom: 6px;}
    .elemain .conelemain .elemainbot .inelemainbot .mainbotle{float: left;margin:60px 35px;}
    .elemain .conelemain .elemainbot .inelemainbot .mainbotle img{height: 70px;width: 70px;}
    .elemain .conelemain .elemainbot .inelemainbot .mainbotri{float: right;width: 380px;}
    .elemain .conelemain .elemainbot .inelemainbot .mainbotri h3{height: 60px;line-height: 60px;font-size: 36px;color: #333;}
    .elemain .conelemain .elemainbot .inelemainbot .mainbotri p{height: 40px;line-height: 40px;font-size:24px;color: #999;}
    .elemain .conelemain .elemid{height: 460px;}
    .elemain .conelemain .elemid .elemidz{float: left;width: 800px;height: 460px;}
    .elemain .conelemain .elemid .elemidy{float: left;width: 800px;background:#2ed0c3; height: 460px;color: #fff;}
    .elemain .conelemain .elemid .elemidy img{height: 100%;width: 100%;display: block;}
    .elemain .conelemain .elemid .elemidy h3{font-size: 48px;height: 80px;line-height: 80px;padding-top:80px;padding-left: 40px;}
    .elemain .conelemain .elemid .elemidy p{font-size: 28px;height: 50px;line-height: 50px;padding-left: 40px;}



    </style>