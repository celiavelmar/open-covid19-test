import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Test from '../views/Test.vue';
import Results from '../views/Results.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/results',
    name: 'Results',
    component: Results,
    props: true
  },
  {
    path: '*',
    redirect: '/'
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
