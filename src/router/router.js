import Vue from "vue";
import Router from "vue-router";

// --------------------------------------------------------------------------
//  ||  Routing definitions
//  \/
// --------------------------------------------------------------------------

Vue.use(Router)

export default new Router({
  base: '/',
  mode: 'history',
  routes: [

    /**************************
    *                         *
    *       P U B L I C       *
    *                         *
    **************************/

    { path: '*', redirect: { name: 'Home' } },
    {
      path: '/',
      name: 'Home',
      component: resolve => {
        require(['@/views/Home.vue'], resolve)
      }
    }
  ]
})
