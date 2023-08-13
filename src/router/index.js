import { createRouter, createWebHistory } from 'vue-router'
import Chart from "@/views/ChartShow.vue";
import Slider from "@/views/SliderShow.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'chart',
      component: Chart
    },
    {
      path: '/slider',
      name: 'slider',
      component: Slider
    },

  ]
})

export default router
