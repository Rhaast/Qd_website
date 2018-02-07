<template>
    <div class="internet">
          <tab></tab>         
          <keep-alive>
              <router-view></router-view>
          </keep-alive>
        <div class="interbanner"><img :src="imgUrl" alt=""/>
          <div class="bannertxt">
              <p v-html="hanzi"></p>
              <span v-html="english"></span>
          </div>
        </div>
      <div class="intermain">
          <div class="conmain">
            <div class="conmaintop">
                <div class="intopa" v-for="item in rose">
                    <div class="topaimg"><img :src="item.imgrose"/></div>
                    <h3 v-html="item.roseleaf"></h3>
                    <p v-html="item.roseflower"></p>
                    <span></span>
                </div>
            </div>
            <div class="conmainbot clearfix">
                <div class="conmainbotshow">
                    <template>              
                          <el-tabs :tab-position="tabPosition">
                            <el-tab-pane label="网站搭建">
                                  <div class="delp">
                                      <div class="delpz" @click="jumpwz">
                                          <div class="delpzimg"><img :src="deimga"/></div>
                                          <h3 v-html="wzdja"></h3>
                                          <p v-html="hxa"></p>
                                      </div>
                                      <ul class="delpy">
                                          <li><img :src="itimga"/></li>
                                          <li><img :src="itimgb"/></li>
                                          <li><img :src="itimgc"/></li>
                                          <li><img :src="itimgd"/></li>
                                          <li><img :src="itimge"/></li>
                                          <li><img :src="itimgf"/></li>
                                      </ul>
                                  </div>  
                            </el-tab-pane>
                            <el-tab-pane label="APP开发">
                                  <div class="delptwo">
                                      <div class="delpz" @click="jumpwap">                     
                                          <div class="delpzimg"><img :src="deimgb"/></div>
                                          <h3 v-html="wzdjb"></h3>
                                          <p v-html="hxb"></p>                      
                                      </div>
                                      <ul class="delpy">
                                          <li><img :src="itimgaa"/></li>
                                          <li><img :src="itimgbb"/></li>
                                          <li><img :src="itimgcc"/></li>
                                          <li><img :src="itimgdd"/></li>
                                      </ul>
                                  </div>
                            </el-tab-pane>
                            <el-tab-pane label="微信开发">
                                  <div class="delpthree">
                                      <div class="delpth"  @click="jumpwx">
                                          <div class="delpzimg"><img :src="deimgc"/></div>
                                          <h3 v-html="wzdjc"></h3>
                                          <p v-html="hxc"></p> 
                                      </div>
                                      <ul class="delpthr">
                                          <li><img :src="itimgaaa"/></li>
                                          <li><img :src="itimgbbb"/></li>
                                          <li><img :src="itimgccc"/></li>
                                      </ul>
                                      <div class="delee"><img :src="sepimg"/></div>
                                  </div>
                            </el-tab-pane>
                            <el-tab-pane label="软件开发">
                                  <div class="delpfour">
                                      <div class="delpth" @click="jumprj">
                                          <div class="delpzimg"><img :src="deimgd"/></div>
                                          <h3 v-html="wzdjd"></h3>
                                          <p v-html="hxd"></p> 
                                      </div>
                                      <ul class="delpthr">
                                          <li><img :src="itimgaaaa"/></li>
                                          <li><img :src="itimgbbbb"/></li>
                                      </ul>
                                      <div class="delur"><img :src="stepimg"/></div>
                                  </div>
                            </el-tab-pane>
                      </el-tabs>
                  </template>             
                </div>
            </div>
          </div>
      </div>   
      <navfooter></navfooter>
     </div>
  </template>
  <script >
  import navfooter from './../components/base/navfooter'
  import tab from './../components/base/tab'
  export default{
      data(){
          return{
          imgUrl: require('../assets/images/inter_02.png'),
                  hanzi:'互联网及IT服务',
          english:'Internet and IT services',
          tabPosition: 'left',
  
  
          deimga:require('../assets/images/ee.png'),
          wzdja:'网站搭建',
          hxa:'突出企业核心特点，全面展示企业优势。',
          itimga:require('../assets/images/inter_08.png'),
          itimgb:require('../assets/images/inter_05.png'),
          itimgc:require('../assets/images/inter_10.png'),
          itimgd:require('../assets/images/inter_16.png'),
          itimge:require('../assets/images/inter_19.png'),
          itimgf:require('../assets/images/inter_14.png'),
  
          deimgb:require('../assets/images/ss.png'),
          wzdjb:'APP开发',
          hxb:'精准、互动、创意、超强的用户黏性。',       
          itimgaa:require('../assets/images/inter_23.png'),
          itimgbb:require('../assets/images/inter_24.png'),
          itimgcc:require('../assets/images/inter_27.png'),
          itimgdd:require('../assets/images/inter_29.png'),
               
          deimgc:require('../assets/images/ww.png'),
          wzdjc:'微信开发',
          hxc:'再小的个体也有自己的品牌',
          itimgaaa:require('../assets/images/inter_32.png'),
          itimgbbb:require('../assets/images/inter_34.png'),
          itimgccc:require('../assets/images/inter_38.png'),
          sepimg:require('../assets/images/inter_35.png'),
                     
          deimgd:require('../assets/images/ee.png'),
          wzdjd:'软件开发',
          hxd:'助力企业信息化建设',
          itimgaaaa:require('../assets/images/inter_41.png'),
          itimgbbbb:require('../assets/images/inter_45.png'),
          stepimg:require('../assets/images/inter_43.png'),
          
          rose:[
            {
              imgrose:require('../assets/images/wzds.png'),
              roseleaf:'网站搭建',
              roseflower:'Website construction',
            },
            {
              imgrose:require('../assets/images/APPkaifa.png'),
              roseleaf:'APP开发',
              roseflower:'APP development',
            },
            {
              imgrose:require('../assets/images/wxkf.png'),
              roseleaf:'微信开发',
              roseflower:'WeChat developer',
            },
            {
              imgrose:require('../assets/images/rjkff.png'),
              
              roseleaf:'软件开发',
              roseflower:'software development',
            },
          ],
          }
      },  
      methods:{
          jumpwz(){
              this.$router.push({path:'/enterprise'});
          },     
          jumpwap(){
              this.$router.push({path:'/fate'});
          },    
          jumpwx(){
              this.$router.push({path:'/wechat'});
          },
          jumprj(){
              this.$router.push({path:'/collection'});
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
  