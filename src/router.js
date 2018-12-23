import VueRouter from 'vue-router'

import home from './components/tabbar/HomeContainer.vue'
import member from './components/tabbar/MemberContainer.vue'
import search from './components/tabbar/SearchContainer.vue'
import shopcar from './components/tabbar/ShopcarContainer.vue'
import newsList from './components/news/newsList.vue'
import newInfo from './components/news/newsInfo.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    { path: '/home', component: home },
    { path: '/member', component: member},
    { path: '/search', component: search},
    { path: '/shopcar', component: shopcar},
    { path: '/home/newList', component: newsList},
    { path: '/home/newsInfo/:id',component: newInfo}
  ],
  linkActiveClass: 'mui-active'
})

// 把路由对象暴露出去
export default router