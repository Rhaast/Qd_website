import Vue from 'vue'
import Router from 'vue-router'

const Home = (resolve) => {  //首页面 
  import('@/components/Home').then((module) => {
    resolve(module)
  })
}
const kernel = (resolve) => {  //核心能力 
  import('@/components/kernel').then((module) => {
    resolve(module)
  })
}
const wisdom = (resolve) => {  //智慧产业及物联网 
  import('@/components/wisdom').then((module) => {
    resolve(module)
  })
}
const internet = (resolve) => {  //互联网及IT服务 
  import('@/components/internet').then((module) => {
    resolve(module)
  })
}
const aboutUs = (resolve) => {  //关于我们
  import('@/components/aboutUs').then((module) => {
    resolve(module)
  })
}
const talentjob = (resolve) => {  //招聘人才 f
  import('@/components/talentjob').then((module) => {
    resolve(module)
  })
}
const detailsjob = (resolve) => {  //招聘详情 f
  import('@/components/detailsjob').then((module) => {
    resolve(module)
  })
}
const contact = (resolve) => {  //联系我们
  import('@/components/contact').then((module) => {
    resolve(module)
  })
}
const design = (resolve) => {  //Ul设计 用户体验设计 
  import('@/components/design').then((module) => {
    resolve(module)
  })
}
const bidata = (resolve) => {  //大数据
  import('@/components/bidata').then((module) => {
    resolve(module)
  })
}
const support = (resolve) => {  //运维支撑 
  import('@/components/support').then((module) => {
    resolve(module)
  })
}
const development = (resolve) => {  //软件研发 
  import('@/components/development').then((module) => {
    resolve(module)
  })
}
const strategy = (resolve) => {  //战略咨询 
  import('@/components/strategy').then((module) => {
    resolve(module)
  })
}
const testing = (resolve) => {  //测试与管理页面
  import('@/components/testing').then((module) => {
    resolve(module)
  })
}
const environment = (resolve) => {  //智慧环境f
  import('@/components/environment').then((module) => {
    resolve(module)
  })
}
const newtraffic = (resolve) => {  //智慧交通f
  import('@/components/newtraffic').then((module) => {
    resolve(module)
  })
}
const education = (resolve) => {  //智慧教育f
  import('@/components/education').then((module) => {
    resolve(module)
  })
}
const finance = (resolve) => {  //智慧金融f
  import('@/components/finance').then((module) => {
    resolve(module)
  })
}
const tourism = (resolve) => {  //智慧旅游f
  import('@/components/tourism').then((module) => {
    resolve(module)
  })
}
const energy = (resolve) => {  //智慧能源f
  import('@/components/energy').then((module) => {
    resolve(module)
  })
}
const medica = (resolve) => {  //智慧医疗f
  import('@/components/medica').then((module) => {
    resolve(module)
  })
}
const architecture = (resolve) => {  //智慧建筑f
  import('@/components/architecture').then((module) => {
    resolve(module)
  })
}
const electricity = (resolve) => {  //电商网站建设
  import('@/components/electricity').then((module) => {
    resolve(module)
  })
}
const fate = (resolve) => {  //app页面
  import('@/components/fate').then((module) => {
    resolve(module)
  })
}
const activity = (resolve) => {  //h5活动网站建设
  import('@/components/activity').then((module) => {
    resolve(module)
  })
}
const portal = (resolve) => {  //门户网站建设
  import('@/components/portal').then((module) => {
    resolve(module)
  })
}
const wechat = (resolve) => {  //微信开发
  import('@/components/wechat').then((module) => {
    resolve(module)
  })
}
const collection = (resolve) => {  //系统管理
  import('@/components/collection').then((module) => {
    resolve(module)
  })
}
const site = (resolve) => {  //网站合集  未做完
  import('@/components/site').then((module) => {
    resolve(module)
  })
}
const enterprise = (resolve) => {  //企业官网
  import('@/components/enterprise').then((module) => {
    resolve(module)
  })
}


Vue.use(Router)
export default new Router({
  mode:'history',
  base: __dirname,
  routes: [  
    {    //  首页面
      path: '*',
      component: Home,
    },   
    { 
      path: '/',          
      redirect: '/Home',          
    },  
    {
      path: '/development',
      component: development,      
    },
    {
      path:'/support',
      component:support,
    },
    {
      path:'/electricity',
      component:electricity,
    },
    {
      path:'/activity',
      component:activity,
    },
    {
      path:'/portal',
      component:portal,
    },
    {
      path:'/collection',
      component:collection,
    },  
                 
    {
      path:'/strategy',
      component:strategy,
    },
    {
      path:'/bidata',
      component:bidata,
    },
    {
      path:'/testing',
      component:testing,
    },
    {
      path:'/design',
      component:design,
    },
    {
      path:'/environment',
      component:environment,
    },
    {
      path:'/newtraffic',
      component:newtraffic,
    },
    {
      path:'/education',
      component:education,
    },
    {
      path:'/finance',
      component:finance,
    },
    {
      path:'/tourism',
      component:tourism,
    },
    {
      path:'/energy',
      component:energy,
    },
    {
      path:'/medica',
      component:medica,
    },
    {
      path:'/architecture',
      component:architecture,
    },                
    {  //核心能力
      path: '/kernel',
      component: kernel,      
    }, 
    {  //智慧产业及物联网
      path: '/wisdom',
      component: wisdom
    },
    { //互联网及IT服务
      path: '/internet',
      component: internet,
    },
    {
      path: '/enterprise',
      component: enterprise,      
    },
    {
      path: '/fate',
      component: fate,      
    },
    {
      path: '/wechat',
      component: wechat,      
    },
    {
      path: '/collection',
      component: collection,      
    },
    {  //关于我们
      path: '/aboutUs',
      component: aboutUs
    },
    {
      path:'/talentjob',
      component:talentjob
    },
    {
      path:'/detailsjob',
      component:detailsjob
    },
    {
      path:'/contact',
      component:contact
    },
     
]
})
