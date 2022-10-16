import { createRouter, createWebHistory } from "vue-router";

import home from "../views/Home.vue";
import about from "../views/About.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: home,
    },
    {
      path: '/about',
      component: about,
    },
  ],
});

export default router;