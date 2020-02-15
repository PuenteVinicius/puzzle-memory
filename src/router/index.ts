import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/login.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/board",
    name: "Board",
    component: () => import("@/views/board.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
