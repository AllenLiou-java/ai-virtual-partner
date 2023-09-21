import { createRouter, createWebHistory, type RouterOptions,type Router, type RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const AboutUs = () => import('@/views/AboutUsView.vue');
const Product = () => import('@/views/ProductView.vue');
const News = () => import('@/views/NewsView.vue');
const NewsDetail = () => import('@/views/NewsDetailView.vue');
const Faq = () => import('@/views/FaqView.vue');
const Contact = () => import('@/views/ContactView.vue');
const SignUp = () => import('@/views/SignUpView.vue');
const SignIn = () => import('@/views/SignInView.vue');

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/aboutUs',
    name: 'about_us',
    component: AboutUs
  },   
  {
    path: '/product/:productName', 
    name: 'product',
    component: Product
  },
  {
    path: '/news',
    name: 'news',
    component: News
  },
  {
    path: '/newsDetail/:newsId',
    name: 'news_detail',
    component: NewsDetail
  },
  {
    path: '/faq',
    name: 'faq',
    component: Faq
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/signUp',
    name: 'sign_up',
    component: SignUp
  },
  {
    path: '/signIn',
    name: 'sign_in',
    component: SignIn
  }
];

const options: RouterOptions = {
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
};

const router: Router = createRouter(options);

export default router;
