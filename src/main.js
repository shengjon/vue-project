// 导入 vue
import Vue from 'vue'
// 导入 App 组件
import App from './App.vue'
// 引入 mint-ui
import { Header, Swipe, SwipeItem, Button } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
// 引入mui 样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
// 引入 VueRouter 包
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 导入自己的 router.js 路由模块
import router from './router.js';
// 导入 vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
// 配置请求的全局根路径
Vue.http.options.root = 'http://47.89.21.179:8080'
// 全局设置 post 时候表单数据格式的组织形式
Vue.http.options.emulateJSON = true;
// 导入全局格式化插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dataFormat',function(dataStr,pattern = 'YYYY-MM-DD HH:mm:ss'){
    return moment(dataStr).format(pattern);
})

var vm = new Vue ({
    el: '#app',
    data:{

    },
    render: c => c (App),
    router // 挂载路由对象到 vm 实例上
})
