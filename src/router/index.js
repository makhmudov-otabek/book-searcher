import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import BookDetailView from "../views/BookDetailView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginView,
    },
    {
      path: "/home/:query",
      name: "HomeView",
      component: HomeView,
    },
    {
      path: "/home/:query/book-detail/:id",
      name: "BookDetailView",
      component: BookDetailView,
    },
  ],
});

export default router;
