<template>
    <div class="fate" id="fate">
         <div>
            <tab></tab> 
         </div>         
        <div class="infata" id="infata">
            <div class="erline">
                <div class="line">
                    <ul class="adx">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <ul class="fatatab">
                        <li><a href="javascript:;">餐饮类</a></li>
                        <li><a href="javascript:;">医疗类</a></li>
                        <li><a href="javascript:;">金融类</a></li>
                        <li><a href="javascript:;">智能家居</a></li>
                        <li><a href="javascript:;">电商类</a></li>
                        <li><a href="javascript:;">社交类</a></li>
                    </ul>
                </div> 
            </div> 
            <div class="linetentaa cold" style="display: block;">
                <div class="comele"><img :src="comele"/></div> 
                <div class="comeri">
                    <div class="comeritop">
                        <h3 v-text="comertop"></h3>
                        <P v-text="comertoptxt"></P>
                    </div>
                    <div class="comerimid">
                        <h3 v-text="comerimid"></h3>
                        <P v-text="comerimidtxt"></P>          
                    </div>
                    <div class="comeribot">
                        <h3 v-text="comeribot"></h3>
                        <div class="fan"><img :src="fan"/></div>
                    </div>
                </div>
            </div>  
            <div class="linetentbb cold">
                <div class="comeonle">
                    <div class="comeritop">
                        <h3 v-text="seconda"></h3>
                        <P v-text="secondatxt"></P>
                    </div>
                    <div class="comerimid">
                        <h3 v-text="secondb"></h3>
                        <P v-text="secondbtxt"></P>          
                    </div>
                    <div class="comeribot">
                        <h3 v-text="secondc"></h3>
                        <div class="fan"><img :src="secondcimg"/></div>
                    </div>
                </div>
                <div class="comeonri"><img :src="comeonriimg"/></div>
            </div> 
            <div class="linetentcc cold">
                <div class="comele"><img :src="hirimg"/></div> 
                <div class="comeri">
                    <div class="comeritop">
                        <h3 v-text="thethirda"></h3>
                        <P v-text="thethirdatxt"></P>
                    </div>
                    <div class="comerimid">
                        <h3 v-text="thethirdb"></h3>
                        <P v-text="thethirdbtxt"></P> 
                    </div>
                    <div class="comeribot">
                        <h3 v-text="thethirdc"></h3>
                        <div class="fan"><img :src="hethimg"/></div>
                    </div>
                </div>
            </div>
            <div class="linetentdd cold">
                <div class="comeonle">
                    <div class="comeritop">
                        <h3 v-text="thefourtha"></h3>
                        <P v-text="thefourthatxt"></P>
                    </div>
                    <div class="comerimid">
                        <h3 v-text="thefourthb"></h3>
                        <P v-text="thefourthbtxt"></P>       
                    </div>
                    <div class="comeribot">
                        <h3 v-text="thefourthc"></h3>
                        <div class="fan"><img :src="thefourthcimg"/></div>
                    </div>
                </div>
                <div class="comeonri"><img :src="eonriimg"/></div>
            </div>
            <div class="linetentee cold">
                <div class="comele"><img :src="omelimg"/></div> 
                <div class="comeri">
                    <div class="comeritop">
                        <h3 v-text="thefiftha"></h3>
                        <P v-text="thefifthatxt"></P>
                    </div>
                    <div class="comerimid">
                        <h3 v-text="thefifthb"></h3>
                        <P v-text="thefifthbtxt"></P>       
                    </div>
                    <div class="comeribot">
                        <h3 v-text="thefifthc"></h3>
                        <div class="fan"><img :src="thefifthcimg"/></div>
                    </div>
                </div>
            </div> 
            <div class="linetentff cold">
                <div class="comeonle">
                    <div class="comeritop">
                        <h3 v-text="thesixtha"></h3>
                        <P v-text="thesixthatxt"></P>
                    </div>
                    <div class="comerimid">
                        <h3 v-text="thesixthb"></h3>
                        <P v-text="thesixthbtxt"></P>        
                    </div>
                    <div class="comeribot">
                        <h3 v-text="thesixthc"></h3>
                        <div class="fan"><img :src="thesixthcimg"/></div>
                    </div>
                </div>
                <div class="comeonri"><img :src="klopimg"/></div>
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
                comele:require('../assets/images/life_03.png'),
                comertop:'餐饮行业APP开发的商机',
                comertoptxt:'互联网+餐饮的发展，实体店商与移动支付联姻已然成为一种潮流。根据酷蜂科技市场调研人员统计数据显示，'+
                            '2014年，整个餐饮业的O2O市场规模接近千亿，占餐饮行业总体比重的3.5%。预计到2017年，'+
                            '我国餐饮业的O2O市场将突破2000亿规模。 深圳app开发华人网络公司表示，为此餐饮企业应该提高自身信息化，'+
                            '移动互联网业务快速发展，这就需要餐饮企具有快速的演化能力，及时更上时代步伐。一方面，餐饮企业在硬件上需'+
                            '打通线上业务和后台系统，包括“会员管理”、“电子菜谱(点菜器)”等应用的优化。另一方面，需要对线上线下的服务进行升级。'+
                            '网站功能：产品展示、公信力展示、SEO优化、在线订单、运营统计',
                comerimid:'餐饮行业APP开发的优势',
                comerimidtxt:'加客源：通过手机APP订餐，并通过微信朋友圈分享，将有效提升客源。'+
                            '降低成本：通过智能手机进行全面的移动管理，降低餐饮企业的运营成本。'+
                            '提升形象：手机APP是移动互联网的名片，将大大提升餐饮企业的品牌知名度。',
                comeribot:'餐饮行业APP主要功能',
                fan:require('../assets/images/fan_06.png'),

                seconda:'医疗卫生APP开发的市场商机',
                secondatxt:'医疗卫生APP开发市场发展的如火如荼，这块“金矿”吸引了越来越多的人参与到了移动医疗健康事业中来，今年的移动医疗健康市场内容更加丰富。'+
                            '不仅包括了传统的提供医疗养生知识以及用药建议的APP，智能可穿戴设备也加入到市场中来，为健康监测提供了条件。而今年作为重头戏的O2O理念'+
                            '也被医疗卫生APP开发吸纳进来。',
                secondb:'医疗卫生APP开发的优势',
                secondbtxt:'提高医患互动:提供随时随地的在线咨询服务,让患者不用去医院排队也能看病了。'+
                            '远程患者监测:让患者再也不用担心因事而耽误病情,可以随时检测身体状况。'+
                            '提升服务质量:让医院能够更为从容地调整资源,整体化安排病患。' ,
                secondc:'医疗卫生APP开发的常见功能',
                secondcimg: require('../assets/images/fabklb_13.png'),
                comeonriimg:require('../assets/images/farebb.png'), 
                
                hirimg:require('../assets/images/fatrop.png'), 
                thethirda:'金融app开发的市场商机',
                thethirdatxt:'在过去的一年中形成了迅猛的发展态势，金融app月度覆盖人数到超过6818.2万人，同比增长了124.3%，远高于整体移动App同期64.9%的增长，市场潜力非常巨大。',
                thethirdb:'金融app开发的优势',
                thethirdbtxt:'在用户信任的问题上，客户端是金融机构与客户间的直接纽带，有助于塑造专业的金融机构形象。金融app已成为居间商开拓、服务和管理的利器，'+
                '专业的服务工具，提高金融机构服务质量为用户提供平台的保障。创新的营销工具，精准宣传，节约成本。',
                thethirdc:'金融app开发的主要功能',
                hethimg:require('../assets/images/fanjk_03.png'), 

                thefourtha:'智能家居APP开发的商机',
                thefourthatxt:'2012-2020年中国智能家居市场发展趋势及投资机会分析报告》中显示，2011年我国智能家居销售额已达110亿元，2014年这一数据为286亿元，'+
                '2018年我国智能家居市场规模将达1396亿元人民币。而从全球范围来看，根据JuniperResearch的预测，2018年全球智能家居市场规模将达710亿美元。',
                thefourthb:'智能家居APP开发的优势',
                thefourthbtxt:'提供个性化设计：根据用户的房屋大小及预算情况，提供个性化的家居建设。提高企业知名度：多渠道地宣传企业，从而提高企业的知名度。'+
                '获得更多客源：抢占移动端的市场资源，从而获得更多客户。智能连接：轻松便捷的用手机连接你的智能设备。设备控制：通过智能家居APP随时随地的控制、管理你的智能设备。'+
                '分享给家人：建立你自己的家庭组，并且可以把设备分享给家人，一起享受便捷温馨的智能生活。智能通知：设备信息随时随地通知给你，家中状态尽在掌握。',
                thefourthc:'智能家居APP开发的功能',
                thefourthcimg:require('../assets/images/fanjk_07.png'),
                eonriimg:require('../assets/images/faredd.png'),

                omelimg:require('../assets/images/fareeee.png'),
                thefiftha:'电子商务APP开发的商机',
                thefifthatxt:'在过去，互联网用传统的广告是引导用户购买，但在移动互联网时代，拿起手机就可以购买了，当把智能手机和二维码结合起来，移动领域的电'+
                '子商务市场空间就突然膨胀了起来。',
                thefifthb:'电子商务APP开发的优势',
                thefifthbtxt:'占领用户桌面资源，提高客户忠诚度用户随身包随身携带移动设备，随时浏览，增加商业机会新品信息、促销信息第一时间推送到客户手中，精准'+
                '营销，占领先机方便集成地理位置系统，线上线下联动,方便拓展多种支付接口，商业机会增多',
                thefifthc:'电子商务APP开发的功能',
                thefifthcimg:require('../assets/images/fanjk_11.png'),

                thesixtha:'社交APP开发的商机',
                thesixthatxt:'人口红利在给移动互联网带来增长机遇的同时，还推动着智能移动终端的普及，以及带动国内移动社交应用覆盖设备规模的逐渐扩大，目前预计覆盖'+
                '了10.41亿部终端，包括陌生人社交和熟人社交，其中陌生人社交用户规模达3.5亿。',
                thesixthb:'社交APP开发的优势',
                thesixthbtxt:'基础社交，社交最基本的需求就是可以发语音、发图片、发文字。目前的一般通讯工具APP都可以实现该功能。'+
                        '私信，典型案例是微信，在微信刚开始只是作为一个基础社交的文字，后面发展到语音，文件。现在能够实现实时视频通话。'+
                        '实时客服，这个主要应用在特殊行业上，如医疗、教育、证券开户等行业，通过移动端的客服服务，及时解决客户的需要。',
                thesixthc:'社交APP开发的功能',
                thesixthcimg:require('../assets/images/fanjk_15.png'),
                klopimg:require('../assets/images/klop_24.png'),
            }
        },
        components:{
            navfooter,
            tab,
       },
       mounted(){
        var aLi= $(".fatatab li");
        var codr = $(".cold");
        aLi.click(function(){
            var i=$(this).index();
            codr.hide();
            codr.eq(i).show();
        })
       },
    };
</script>
<style lang="scss" scoped="" type="text/css">

    @import "../assets/css/base.css";

</style>    