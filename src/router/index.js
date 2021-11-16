import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Charter from "../views/Charter.vue";
import CharterDetail from "../views/CharterDetail.vue";
import Settings from "../views/Settings";
import Profile from "../views/Settings/Profile";
import Password from "../views/Settings/Password";
import Yachts from "../views/Settings/Yachts";

Vue.use(Router);

export const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/login",
      component: Login,
      name: "login",
    },
    {
      path: "/register",
      component: Register,
      name: "register",
    },
    {
      path: "/charter",
      component: Charter,
      name: "charter",
    },
    {
      path: "/rental",
      component: Charter,
      name: "rental",
    },
    {
      path: "/about",
      component: Charter,
      name: "about",
    },
    {
      path: "/contact",
      component: Charter,
      name: "contact",
    },
    {
      path: "/charter/detail",
      component: CharterDetail,
      name: "charter-detail",
    },
    {
      path: "/settings",
      component: Settings,
      name: "settings",
      children: [
        {
          path: "/",
          redirect: { name: "settings.profile" },
        },
        {
          path: "profile",
          component: Profile,
          name: "settings.profile",
        },
        {
          path: "password",
          component: Password,
          name: "settings.password",
        },
        {
          path: "yachts",
          component: Yachts,
          name: "settings.yachts",
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  console.log(to.name, isAuthenticated);
  next();
  //   if (to.name !== "home" && !isAuthenticated) {
  //     console.log("Not Authenticated. Redirects to login");
  //     next({ name: "login" });
  //   } else {
  //     localStorage.setItem("page", to.name);
  //     next();
  //   }
});

export default router;
