import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/bomtoonGreetings",
    component: () => import("../views/bomtoon/BomtoonGreetings.vue"),
  },
  {
    path: "/lezhinGreetings",
    component: () => import("../views/lezhin/LezhinGreetings.vue"),
  },
  {
    path: "/worldtour",
    component: () => import("../views/lezhin/WorldTour2.vue"),
  },
  {
    path: "/salon2",
    component: () => import("../views/lebom/Salon2.vue"),
  },
  {
    path: "/wefesta",
    component: () => import("../views/WEFESTA.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
