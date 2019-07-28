import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import(/* webpackChunkName: "home" */ "./views/Home.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/auth",
      name: "auth",
      component: () =>
        import(/* webpackChunkName: "auth" */ "@/components/auth.vue")
    },
    {
      path: "/qr",
      name: "qr",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "qr" */ "@/components/scanQR.vue")
    },
    {
      path: "/start",
      name: "start",
      component: () =>
          import(/* webpackChunkName: "auth" */ "@/components/start.vue")
    },
    {
      path: "/photoload",
      name: "photoload",
      component: () =>
          import(/* webpackChunkName: "auth" */ "@/components/photoload.vue")
    },
    {
      path: "/quiz",
      name: "quiz",
      component: () =>
          import(/* webpackChunkName: "quiz" */ "@/components/quiz.vue")
    }
  ]
});
