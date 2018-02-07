<template>
    <div class="wechat" id="wechat">
        <div>
            <tab></tab> 
        </div>  
        <div class="cowechat">
            <ul class="tab">
                <li>微官网</li>
                <li>公众号</li>
                <li>微商城</li>
                <li>小程序</li>
            </ul>
            <div class="inweone eat">
                <h3 v-text="inweonet"></h3>
                <p v-text="inweonetxt"></p>
                <div class="weonebot">
                    <ul>
                        <li v-for="list in wx">
                            <a>{{ list.len }}</a>
                        </li>               
                    </ul>
                    <div class="weoneimg"><img :src="weoneimg"/></div>
                </div>
            </div>
            <div class="inwetwo eat">
                    <h3 v-text="inwetwot">公众号</h3>
                    <p v-text='inwetwotxt'></p>
                    <div class="weonebot">
                        <ul>
                            <li v-for="ays in wxb">
                                <a>{{ ays.lenb }}</a>
                            </li>  
                        </ul>
                        <div class="weoneimg"><img :src="wetwoimg"/></div>
                    </div>
            </div>
            <div class="inwethree eat">
                    <h3 v-text="inwethree"></h3>
                    <p v-text="inwethreetxt"></p>
                    <div class="weonebot">
                        <ul>
                            <li v-for="aystwo in zfpz">
                                <a>{{ aystwo.lenc }}</a>
                            </li>                        
                        </ul>
                        <div class="weoneimg"><img :src="wethreeimg"/></div>
                    </div>
            </div>
            <div class="inwefour eat">
                    <h3 v-text="ineatfour"></h3>
                    <p v-text="ineatfourtxt"></p>
                    <div class="weonebot">
                        <ul>
                            <li v-for=" aysfour in wxshare">
                                <a>{{ aysfour.lend }}</a>
                            </li>                    
                        </ul>
                        <div class="weoneimg"><img :src="wefourimg"/></div>
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
                inweonet:'微官网',
                inweonetxt:'微官网方便的展示企业信息，企业产品等',
                wx:[
                    {len:'官网分类'},
                    {len:'分类设置'},
                    {len:'文章管理'},
                    {len:'模板选择'},
                    {len:'幻灯片设置'},
                    {len:'导航栏管理'},
                ],
                weoneimg:require('../assets/images/weaa.png'),

                inwetwot:'公众号',
                inwetwotxt:'实现了大部分公众号功能，方便运营者在一个平台操作多种功能，方便简单',
                wxb:[
                    {lenb:'群发消息'},
                    {lenb:'欢迎语设置'},
                    {lenb:'自定义菜单'},
                    {lenb:'用户积分管理'},
                    {lenb:'用户分组（与微信同步）'},
                    {lenb:'用户咨询（回复用户消息）'},
                    {lenb:'素材管理（语音，图文，视频，文本素材）'},
                ],
                wetwoimg:require('../assets/images/webb.png'),

                inwethree:'微商城',
                inwethreetxt:'结合常用商城的操作习惯打造的微商城，支持线下发货虚拟物品自动发货，支持多种支付方式',
                zfpz:[
                    {lenc:'支付配置'},
                    {lenc:'商品管理'},
                    {lenc:'订单管理'},
                    {lenc:'商品分类'},
                    {lenc:'商城幻灯片'},
                    {lenc:'商品属性配置'},
                    {lenc:'商品库存管理'},
                    {lenc:'商城基本信息配置'},
                ],
                wethreeimg:require('../assets/images/wecc.png'),

                ineatfour:'小程序',
                ineatfourtxt:'应用小程序抢占流量红利，实现盈利激增',
                wxshare:[
                    {lend:'便捷的微信分享'},
                    {lend:'强大的开放接口'},
                    {lend:'微信顶级流量入口'},
                    {lend:'用户无需安装下载'},
                    {lend:'媲美源生APP页面体验'},
                    {lend:'ios/Android跨平台适配'},
                ],
                wefourimg:require('../assets/images/wedd.png'),
       
            }
        },
        mounted(){
            var dt=0;
            var aLi= $(".tab li");
            var codr = $(".eat");
            aLi.click(function(){
                var i=$(this).index();
                dt =i;
                codr.hide();
                codr.eq(i).show();
            })
            aLi.mouseover(function(){
                var i=$("this").index();
                if(dt != 1 && dt != 3){
                    aLi.removeClass("hover1");
                    aLi.removeClass("hover2");
                    $(this).addClass("hover1");
                }else{
                    aLi.removeClass("hover1");
                    aLi.removeClass("hover2");
                    $(this).addClass("hover2");
                }
            })
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
    