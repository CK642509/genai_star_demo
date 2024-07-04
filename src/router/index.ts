import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/resource",
      name: "resource",
      component: () => import("../views/ResourceView.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/ProfileView.vue"),
    },
    {
      path: "/notes",
      name: "notes",
      component: () => import("../views/NoteView.vue"),
    },
    {
      path: "/courses",
      name: "courses",
      component: () => import("../views/CourseView.vue"),
    },
    {
      path: "/copilot",
      name: "copilot",
      component: () => import("../views/CopilotView.vue"),
    },
    {
      path: "/decision-tool",
      name: "decision-tool",
      component: () => import("../views/DecisionToolView.vue"),
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});

export default router;
