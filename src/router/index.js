import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  // mode:"hash",
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/home',
    },
    {
      path:'/home',
      component:()=>import('../components/Home/Home.vue'),
    },
    {
      path:'/arcblock',
      component:()=>import('../components/Arcblock/Arcblock.vue') ,
    },
    // {
    //   path:'*',
    //   redirect:'/home'
    // },
  ]
})
