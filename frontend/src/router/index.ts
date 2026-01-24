import { createRouter, createWebHistory } from 'vue-router'
import TodoListView from '../views/TodoListView.vue'
import About from '../views/About.vue'
import TodoDetail from '../views/TodoDetail.vue'


const routes = [
  { path: '/', name: 'TodoList', component: TodoListView },
  { path: '/about', name: 'About', component: About },
  { path: '/todos/:id', name: 'TodoDetail', component: TodoDetail }
]
export const router = createRouter({
  history: createWebHistory(),
  routes
})
 


export default router
