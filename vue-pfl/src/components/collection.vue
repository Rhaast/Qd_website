<template>
    <div class="collection">
	<tab></tab>
     <div class="container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="coll">      
        <ul class="collectab">
            <li>嵌入式</li>
            <li>游戏开发</li>
            <li>企业管理系统</li>
        </ul>      
        <div class="miss">                                      
            <div class="sunaa eat">
                    <div class="insunaa clearfix">
                        <div class="endureimg">
                            <div class="dureinmi"><img :src="dureinmiimg"/></div>
                        </div>
                        <div class="enduretxt">
                            <div class="duretop">
                                <h3 v-text="duretoptext"></h3>
                                <p v-text="duretoptexttxt">
                                </p>
                            </div>
                            <div class="durebot">
                                <h3 v-text="durebottext"></h3>
                                <p>1、可裁剪性。支持开放性和可伸缩性的体系结构。</p>
                                <p>2、强实时性。EOS实时性一般较强，可用于各种设备控制中。</p>
                                <p>3、统一的接口。提供设备统一的驱动接口。</p>
                                <p>4、操作方便、简单、提供友好的图形GUI和图形界面，追求易学易用。提供强大的网络功能，支持TCP/IP协议及其他协议，
                                    提供TCP/UDP/IP/PPP协议支持及统一的MAC访问层接口，为各种移动计算设备预留接口。</p>
                                <p>5、强稳定性，弱交互性。嵌入式系统一旦开始运行就不需要用户过多的干预、这就要负责系统管理的EOS具有较强的稳定性。
                                    嵌入式操作系统的用户接口一般不提供操作命令，它通过系统的调用命令向用户程序提供服务。</p>
                                <p>6、固化代码。在嵌入式系统中，嵌入式操作系统和应用软件被固化在嵌入式系统计算机的ROM中。</p>
                                <p>7、更好的硬件适应性，也就是良好的移植性。</p>
                                
                            </div>
                        </div>
                    </div>              
                </div>
                           
                 <div class="sunbb eat">
                    <div class="insunbb">
                        <div class="sunbbtxt">
                            <div class="bbtxttop">
                                <h3 v-text="insubbtext"></h3>
                                <p v-text="insubbtexttxt">
                                </p>
                            </div>
                            <div class="bbtxtbot">
                                <h3>游戏开发的优势</h3>
                                <p>1、具有强烈的免费传播特征，传播人群达到100万以上，同时在线达到数万人。</p>
                                <p>2、游戏机制或简单或有趣或忠于原创，吸引大量人气。</p>
                                <p>3、游戏中可以更换皮肤，并有插入广告内容的机制，对游戏的整体感观可以外部调整。</p>
                                <p>4、运行时占用资源较少，可以低成本长期运行。</p>
                                <p>5、合作方式可以多样化，买断、租赁、设立专区多种合作方式。</p>
                            </div>
                        </div>
                        <div class="sunbbimg">
                            <div class="bbimg"><img :src="bbimgs"/></div>
                        </div>
                    </div>
                </div>
                           
                <div class="suncc eat">
                    <div class="insunaa clearfix">
                        <div class="endureimg">
                            <div class="dureinmi"><img :src="dureinmiimg"/></div>
                        </div>
                        <div class="enduretxt">
                            <div class="duretop">
                                <h3 v-text="duress"></h3>
                                <p v-text="duresstxt"></p>
                            </div>
                            <div class="durebot">
                                <h3>企业管理系统的优势</h3>
                                <p>
                                    M系统：以客户为中心，以信息技术为手段，为企业建立了一整套与客户相关的营销、销售、服务以及支持信息的数据库，帮助企业实时掌控和跟进商
                                    机信息，持续优化营销模式、销售流程、协作策略、服务支持和呼叫中心等，对客户数据进行深度挖掘分析，发现价值客户、潜在市场、需求特征以
                                    及行为模式，为不同客户提供定制化产品或服务，通过高效互动维护和强化客户忠诚度，快速提升服务与支持响应速度，实现市场营销、销售流程、
                                    客户服务等活动的全程自动化管理。该系统与ERP等其他系统无缝对接。
                                    <p>
                                <p>
                                    OA系统：集信息技术与先进管理思想于一体，全方位梳理复杂的集团管理流程，将客户、销售、财务、办公等功能融为一体，打破信息壁垒、降低
                                    交易成本、共享关键资源、分散投资风险、提高竞争能力，有效提高了集团流程效率，解决了集团资源整合利用的问题，是集团管控不可或缺的管理工具。
                                    ERP系统：将企业实际管理需求与先进信息技术完美结合，打造企业全程一体化管理体系，打破各部门、各区域、各系统之间沟通和协作的壁垒，建立规范、
                                    灵捷、高效的业务流程，实现销售、客户、项目、生产、库存、采购、人资、财务、办公等所有环节全程无缝管理，确保了数据信息在传递过程中的准确性、
                                    时效性和有效性，帮助企业快速反应、紧密协作、良好运营，更快推进业务发展，全面提升核心竞争力。
                                </p>    
                            </div>
                        </div>
                    </div>              
                </div>
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
                activeName: 'second',

                dureinmiimg:require('../assets/images/collaa.png'),
                duretoptext:'嵌入式开发的前景',
                duretoptexttxt:'嵌入式系统无疑是当前最热门最有发展前途的IT应用领域之一，像常见到的手机、PDA、机顶盒、高清电视(HDTV)、路由器、汽车电子、智能家电、医疗仪器、航天航空设备等等都是典型的嵌入式系统',
                durebottext:'嵌入式开发的优势',

                insubbtext:'游戏开发的前景',
                insubbtexttxt:'《2014-2018年中国智能手机游戏行业商业模式设计策略与典型案例分析报告》数据显示，截至2012年年底，中国手机游戏用户累计规模已'+
                                    '达2.86亿，手机游戏用户规模较上一年度增长62.5%',
                bbimgs:require('../assets/images/collbb.png'),

                dureinmiimg:require('../assets/images/collcc.png'),
                duress:'企业管理系统',
                duresstxt:'全面整合销售、采购、生产、成本、库存、分销、运输、财务、人才等资源，实现最佳资源组合，取得最佳效',
            }
        },
        methods: {
            handleClick(tab, event) {
            console.log(tab, event);
            }    
        },
        components:{
            navfooter,
            tab,
       },
       mounted(){
        var aLi= $(".collectab li");
        var codr = $(".eat");
        aLi.click(function(){
            var i=$(this).index();
            codr.hide();
            codr.eq(i).show();
        })
       },
    };
    </script>
    
    
    <style lang="scss" scoped="" type="text/css">

    
        .jinian{position: absolute;left: 160px;top: 200px;}
       .coll ul{position: absolute;left: 160px;width: 130px;top: 240px;z-index: 10;background: #fff;border-radius: 4px;}
       .coll ul li{cursor:pointer;height: 40px;color: #333;text-align: center;line-height: 40px;font-size: 18px;}
       .coll ul li:hover{background: #5272f9;color: #fff;}
        .sunaa{height: 900px;background: #455bc0;}
        .sunaa .insunaa{width: 1600px;margin: 0 auto;}
        .sunaa .insunaa .endureimg{float: left;margin-left: 150px;}
        .sunaa .insunaa .endureimg .dureinmi{width: 600px;height: 600px;margin-top: 150px;}
      .sunaa .insunaa .endureimg .dureinmi img{height: 100%;width: 100%;}
       .sunaa .insunaa .enduretxt{float: left;width: 650px;color: #fff;margin-left: 160px;}
      .sunaa .insunaa .enduretxt .duretop{padding-top: 120px;padding-bottom: 80px;}
       .sunaa .insunaa .enduretxt .duretop h3{font-size: 36px;height: 80px;}
       .sunaa .insunaa .enduretxt .duretop p{font-size: 14px;line-height: 30px;}     
       .sunaa .insunaa .enduretxt .durebot h3{font-size: 36px;height: 80px;}
        .sunaa .insunaa .enduretxt .durebot p{font-size: 14px;padding-top: 8px;line-height: 30px;}

       .sunbb{height: 900px;background: #ff8d40;}
      .sunbb .insunbb{width: 1600px;margin: 0 auto;}
       .sunbb .insunbb .sunbbtxt{float: left;margin-left: 150px;width: 650px;color: #fff;}
        .sunbb .insunbb .sunbbtxt .bbtxttop{padding-top: 120px;padding-bottom: 80px;}
        .sunbb .insunbb .sunbbtxt .bbtxttop h3{font-size: 36px;height: 80px;}
       .sunbb .insunbb .sunbbtxt .bbtxttop p{font-size: 14px;line-height: 30px;} 
       .sunbb .insunbb .sunbbtxt .bbtxtbot h3{font-size: 36px;height: 80px;}
       .sunbb .insunbb .sunbbtxt .bbtxtbot p{font-size: 14px;padding-top: 8px;line-height: 30px;}
       .sunbb .insunbb .sunbbimg{float: left;}
       .coll .miss .sunbb .insunbb .sunbbimg .bbimg{width: 600px;height: 600px;margin-top: 150px;}
        .sunbb .insunbb .sunbbimg .bbimg img{height: 100%;width: 100%;}

       .suncc{height: 900px;background: #455bc0;position: relative;}
        .suncc .insunaa{width: 1600px;margin: 0 auto;}
        .suncc .insunaa .endureimg{float: left;margin-left: 150px;}
        .suncc .insunaa .endureimg .dureinmi{width: 600px;height: 600px;margin-top: 150px;}
       .suncc .insunaa .endureimg .dureinmi img{height: 100%;width: 100%;}
        .suncc .insunaa .enduretxt{float: left;width: 650px;color: #fff;margin-left: 160px;}
        .suncc .insunaa .enduretxt .duretop{padding-top: 120px;padding-bottom: 80px;}
        .suncc .insunaa .enduretxt .duretop h3{font-size: 36px;height: 80px;}
        .suncc .insunaa .enduretxt .duretop p{font-size: 14px;line-height: 30px;}     
       .suncc .insunaa .enduretxt .durebot h3{font-size: 36px;height: 80px;}
       .suncc .insunaa .enduretxt .durebot p{font-size: 14px;padding-top: 8px;line-height: 30px;text-indent: 2em;}
      
       .miss .eat:nth-child(1){display: block;}
        .miss .eat{display:none;}
    </style>
    