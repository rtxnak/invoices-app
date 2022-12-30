import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/My-Home.vue'

export const routes = [
  { path: '', name: 'home', component: Home, titulo: 'Home', menu: true },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;