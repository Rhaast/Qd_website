<template>
    <div class="detailsjob" id="detailsjob">
        <div>
            <tab></tab>
        </div>
        <div class="container">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
        <div class="publicbanner">
            <img :src="imgUrl" alt="" />
            <div class="publictxt">
                <p v-html="hanzi"></p>
                <span v-html="english"></span>
            </div>
        </div>
        <div class="content" v-show="getaticledetail.status==1">
            <div class="inner">
                <div class="job">{{getaticledetail.position}}</div>
                <ul>
                    <li>所属公司：
                        <span>重庆巧度科技有限公司</span>
                    </li>
                    <li>所属部门：
                        <span>{{getaticledetail.department}}</span>
                    </li>
                    <li>工作地点：
                        <span>{{getaticledetail.address}}</span>
                    </li>
                    <li>招聘人数：
                        <span>{{getaticledetail.people}}</span>
                    </li>
                    <li>工作类型：
                        <span>全职</span>
                    </li>
                    <li>
                        <span>发布时间：{{getaticledetail.create_time | dateFrm}}</span>
                    </li>
                </ul>
                <div class="description">
                    <h2>职位描述：</h2>
                    <p>{{getaticledetail.description}}</p>
                </div>
                <div class="requirements">
                    <h2>职位要求：</h2>
                    <p>{{getaticledetail.require}}</p>
                </div>
            </div>
        </div>
        <div class="no-data" v-show="getaticledetail.status!=1">
            <img src="../../static/images/3b672f490e8f2e25c2284af600db2758 (1).png" style="width:264px;height:185px">
            <h1>数据不见了</h1>
        </div>
        <navfooter></navfooter>
    </div>
</template>
<script type="text/javascript">
    import navfooter from './../components/base/navfooter'
    import tab from './../components/base/tab'
    import axios from 'axios'
    import moment from 'moment'
    export default {
        data() {
            return {
                imgUrl: require('../assets/images/rczp_03.png'),
                hanzi: '关于我们',
                english: 'About us',
                getaticledetail:{},
                content:true,
            }
        },
        created() {
            this.getaticle();
        },
        methods: {
                getaticle() {
                    let that = this;
                    that.id = this.$route.query.id;
                    console.log(this.id);
                     sessionStorage.setItem('id',JSON.stringify(this.id));
                    axios({
                        url: 'http://wansui.tunnel.echomod.cn/recruit/detail',
                        method: 'get',
                        dataType: 'json',
                        params: {
                            id: this.id
                        }
                    }).then((res) => {
                        if (res.data.data.status != 0) {
                            that.getaticledetail = res.data.data
                        }
                    })
                }
        },
        filters:{ //转换时间戳
            dateFrm:function () {
                return moment().format("YYYY-MM-DD");
            }
        },
        components: {
            navfooter,
            tab,
        },
    };
</script>
<style lang="scss" scoped="" type="text/css">

    @import "../assets/css/base.css";
    .content{
        margin-top: 60px;
    }
    .no-data{
        margin-top: 120px;
        text-align: center
    }
   
</style>