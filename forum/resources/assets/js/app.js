//import dependencies
import VueRouter from 'vue-router'
import routes from './routes/routes'
import VueProgressBar from 'vue-progressbar'
import Icon from 'vue-awesome/icons'

//expose jQUery
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

require('./bootstrap');
window.Vue = require('vue');

//register icons and router
Vue.component('icon', Icon)
Vue.use(VueRouter)

//register progress bar
Vue.use(VueProgressBar, {
  color: 'rgba(208, 170, 88, 1)',
  failedColor: 'red',
  height: '3px',
  thickness: '4px',
  transition : {speed: '5s', opacity: '5s', termination: 1000}
})

window.bus = new Vue()
bus.g_users = [];
bus.g_quest_pathways = [];

//mount vue router
const router = new VueRouter({
    routes, // short for routes: routes
    linkActiveClass: 'active'
})


//mount the vue instance
const app = new Vue({
    el: '#app',
    router
});
