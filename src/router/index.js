import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home.vue";
import Overview from "@/views/Overview.vue";

import details from "./details";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: "home"
  },
  {
    path: "/overview",
    name: "Overview",
    component: Overview,
    meta: "overview"
  },
  details
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
