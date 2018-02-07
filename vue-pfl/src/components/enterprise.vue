    <template>
    <div class="enterprise" id="enterprise">
        <div>
            <tab></tab>
        </div>
        <div class="erpriba"><img :src="imgUrl" alt=""/>
            <div class="erpribanner">
                <p v-html="erprititle"></p>
                <span v-html="erpricontent"></span>
            </div>
        </div>
        <div class="erprimain">
            <div class="inner">
                <div class="former">
                    <div class="formerle">
                        <div class="formerlea">
                            <h3 v-text="cxjc"></h3>
                            <p v-text="cxjctxt"></p>
                        </div>
                        <div class="formerlea">
                            <h3 v-text="fhq"></h3>
                            <p v-text="fhqtxt"></p>
                        </div>
                    </div>
                    <div class="formermid">
                        <p v-text="aqbs"></p>
                        <span v-text="aqbsendlish"></span>
                    </div>
                    <div class="formerle">
                        <div class="formerlea">
                            <h3 v-text="ldjc"></h3>
                            <p v-text="ldjctxt"></p>
                        </div>
                        <div class="formerlea">
                            <h3 v-text="aqws"></h3>
                            <p v-text="aqwstxt"></p>
                        </div>
                    </div>
                </div>           
            </div>
            <div class="coer">
                <div class="mertwo">
                    <div class="ertwoimg"><img :src="coerximg"/></div>
                    <div class="ertwotxt">
                        <h3 v-text="coertxta"></h3>
                        <h4 v-text="coertxtb"></h4>
                        <p v-text="coertxtc"></p>
                        <p v-text="coertxtd"></p>
                        <p v-text="coertxte"></p>
                        <p v-text="coertxtf"></p>
                    </div>
                </div>
            </div>
            <div class="nh" v-text="nh"></div>
            <div class="nhimg"><img :src="nhimg"/></div>
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
                imgUrl: require('../assets/images/bteng_02.png'),
                erprititle:'巧度科技·企业官网',
                erpricontent:'拒绝平庸、拒绝模板、为您提供个性化设计',

                cxjc:'程序检测',
                cxjctxt:'上线之初严格检测，由专业测试人员，对程序测试条目逐一排查，严格把控网站质量，确保网站安全。',
                fhq:'流量防火墙',
                fhqtxt:'监控实时目标，对已有流量主动进行分析，对满足规则的攻击流量进行告警和阻止，充分保证系统完整。',
                aqbs:'网站安全部署',
                aqbsendlish:'Site security deployment',
                ldjc:'漏洞检测',
                ldjctxt:'对网站漏洞进行扫描检测，及时协助更新漏洞补丁。对新上线网站开启观察模式，统计安全威胁，并提供网站漏洞修补服务，保证网站能够顺利运营。',
                aqws:'网站安全卫士',
                aqwstxt:'加载第三方安全应用，强化网站安全水准。高效拦截CC、DNS、流量攻击，让您的网站固若金汤。',

                coerximg:require('../assets/images/bteng_05.png'),
                coertxta:'一站式后台管理',
                coertxtb:'10分钟上手的后台管理系统，真的简单好用',
                coertxtc:'网站后台，为网站管理带来福音',
                coertxtd:'仅需简单交互，就能更新官网内容',
                coertxte:'一站更新，就能实现多个平台同步',
                coertxtf:'实现真正高效管理网站',

                nh:'网站功能 Website function',
                nhimg:require('../assets/images/bteng_08.png'),      
            }
        },
        components:{
            navfooter,
            tab,
       },
    };
    </script>
    <style lang="scss" scoped="" type="text/css">

        @import "../assets/css/base.css"

    </style>
    