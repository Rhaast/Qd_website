
<template>
    <div class="inheader clearfix">
        <div class="logo">
            <div class="inlogo"><img :src="imgUrl"></div>
        </div>
        <ul class="tab">
            <li><router-link to="/home">首页</router-link></li>
            <li><router-link to="/kernel">核心能力</router-link></li><!-- tag="li"   -->
            <li><router-link to="/wisdom">智慧产业<span>|</span>及物联网</router-link></li>
            <li><router-link to="/internet">互联网<span>|</span>及IT服务</router-link></li>
            <li><router-link to="/aboutUs">关于我们</router-link></li>
        </ul>      
        <keep-alive>
            <router-view></router-view>
        </keep-alive>                 
    </div>
</template>
<script type="text/javascript">
import imgUrl from '../../assets/images/logob.png'
    export default{
        data(){
            return{
               imgUrl:require('../../assets/images/logob.png')
            }           
        },
    };
    </script>
<style lang="scss" scoped="" type="text/css">
    .inheader{height: 100px;}
    .inheader .logo{float: left;margin-left: 150px;width: 100px;height: 100px;}
    .inheader .logo .inlogo{height: 80px;width: 80px;margin-top: 10px;}
    .inheader .logo .inlogo img{width: 100%;height: 100%;}
    .tab{height: 100px;float: left;width:1500px;margin-left: 100px;}
    .tab li{float: left;height: 60px;line-height: 60px;padding-top: 20px;color: #666;font-size: 24px;padding-right: 175px;}
    .tab li a{height:58px;font-size: 24px;display: block;color:#666;}
    .tab li:hover a{color: #ff6700;border-bottom: 2px solid #ff6700;}
</style>