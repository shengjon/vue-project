// 导入 vue
import Vue from 'vue'
// 导入 App 组件
import App from './App.vue'
// 引入 mint-ui
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
// 引入mui 样式
import './lib/mui/css/mui.min.css'


var vm = new Vue ({
    el: '#app',
    data:{

    },
    render: c => c (App)
})
