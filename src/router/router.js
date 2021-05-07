import One from '../components/One.vue'
import Two from '../components/Two.vue'
import HelloWorld from '../components/HelloWorld.vue'

import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    mode:'history',
    routes: [
        {path: '/home', component: HelloWorld},
        {path: '/one', component: One},
        {path: '/two', component: Two},
    ]
})