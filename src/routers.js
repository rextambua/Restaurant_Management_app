import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import Login from "./components/Login.vue";
import Add from "./components/Add.vue";
import Update from "./components/Update.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Home-page",
    component: Home,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/sign-up",
  },
  {
    name: "Login-page",
    component: Login,
    path: "/login",
  },
  {
    name: "add-page",
    component: Add,
    path: "/add",
  },
  {
    name: "update-page",
    component: Update,
    path: "/update/:id",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
