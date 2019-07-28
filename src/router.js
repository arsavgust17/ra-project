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
      component: () => import(/* webpackChunkName: "qr" */ "@/components/scanQR.vue"),
      children: [
        {
          path: "/quiz",
          name: "quiz",
          component: () =>
              import(/* webpackChunkName: "quiz" */ "@/components/quiz.vue")
        },
      ]
    },
    {
      path: "/statistics",
      name: "scaning",
      component: () =>
          import(/* webpackChunkName: "scanning" */ "@/components/scaning.vue")
    }
  ]
});
