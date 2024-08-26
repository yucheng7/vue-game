import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/LoginView.vue"),
    },
    {
      path: "/gamelobby",
      name: "gamelobby",
      component: () => import("@/views/GameLobbyView.vue"),
    },
    {
      path: "/userspace",
      name: "userspace",
      component: () => import("@/views/UserSpaceView.vue"),
    },
    {
      path: "/userrank",
      name: "userrank",
      component: () => import("@/views/UserRankView.vue"),
    },{
      path: "/pointshop",
      name: "pointshop",
      component: () => import("@/views/PointShopView.vue"),
    },{
      path: "/gamemode",
      name: "gamemode",
      component: () => import("@/views/GameModeView.vue"),
    },{
      path: "/gamesetting",
      name: "gamesetting",
      component: () => import("@/views/GameSettingView.vue"),
    },{
      path: "/gamechat",
      name: "gamechat",
      component: () => import("@/views/GameChatView.vue"),
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

// 路由驗證

// const token = localStorage.getItem("token");
// router.beforeEach((to, from, next) => {
//   if (token || to.path === "/login" || to.path === "/") {
//     next();
//   } else {
//     if (localStorage.getItem("token") === null) {
//       next("/login");
//     } else {
//       next();
//     }
//   }
// })

export default router;
