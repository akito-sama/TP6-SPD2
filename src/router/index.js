import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import CreatePostVue from "@/views/CreatePostVue.vue";
import PostDetailView from "@/views/PostDetailView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/create",
    name: "create",
    component: CreatePostVue,
  },
  {
    path: "/posts/:id",
    props: true,
    name: "details",
    component: PostDetailView,
  },
  {
    path: "/tags/:tag",
    props: true,
    name: "hometaged",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
