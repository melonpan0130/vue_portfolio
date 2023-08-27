import Vue from 'vue';
import VueRouter from 'vue-router';
import MainComponent from '@/components/MainComponent/MainComponent';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/#/:section_name',
      redirect: '/',
    },
    {
      path: '/',
      name: 'Home',
      component: MainComponent,
    },
  ],
});
