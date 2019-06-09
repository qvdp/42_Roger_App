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
  scrollBehavior (to, from, savedPosition) {
    if (to.matched.some(m => m.meta.disableScroll)) {

    } else if (to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [

    /**************************
    *                         *
    *       P U B L I C       *
    *                         *
    **************************/

    { path: '*', redirect: { name: '404' } },
    // {
    //   path: '/404',
    //   name: '404',
    //   component: resolve => {
    //     require(['@/components/template/system/404.vue'], resolve)
    //   }
    // },
    { path: '/home',
      redirect: {
        name: 'Home'
      }
    },
    {
      path: '/',
      name: 'Home',
      component: resolve => {
        require(['@/views/Home.vue'], resolve)
      }
    },
    {
      path: '/',
      name: 'About',
      component: resolve => {
        require(['@/views/About.vue'], resolve)
      }
    },
    {
      path: '/movie/:movie',
      name: 'MovieDetails',
      component: resolve => {
        require(['@/views/movie/Movie.vue'], resolve)
      }
    },
  ]
})
