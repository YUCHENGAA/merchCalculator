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
  {
    path: "/anniversaryCelebration",
    component: () =>
      import("../views/JP/seraphoftheEnd/AnniversaryCelebration.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
