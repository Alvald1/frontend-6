import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddView from '../views/AddView.vue'
import AboutView from '../views/AboutView.vue'
import TaskView from '../views/TaskView.vue'
import DeleteView from '../views/DeleteView.vue'
import CompleteView from '../views/CompleteView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/add', component: AddView },
    { path: '/about', component: AboutView },
    { path: '/task/:id', component: TaskView },
    { path: '/task/:id/delete', component: DeleteView },
    { path: '/task/:id/complete', component: CompleteView },
  ],
})

export default router
