import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ArticleList from '../views/ArticleList.vue'
import ArticleDetail from '../views/ArticleDetail.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'


const routes = [
{ path: '/', name: 'Home', component: Home },
{ path: '/articles', name: 'Articles', component: ArticleList },
{ path: '/articles/:id', name: 'ArticleDetail', component: ArticleDetail, props: true },
{ path: '/about', name: 'About', component: About },
{ path: '/contact', name: 'Contact', component: Contact },
{path: '/:pathMatch(.*)*' ,redirect: '/'}

]


const router = createRouter({ history: createWebHistory(), routes })
export default router