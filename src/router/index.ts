import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NoCoursesView from "@/views/NoCoursesView.vue";
import CourseView from "@/views/CourseView.vue";

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'NoCoursesView',
      component: NoCoursesView
    },
      // /courses/:id <- id on kurssin id.
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/course/:id',
      name: 'course',
      component: CourseView
    }
  ]
})

export default router
