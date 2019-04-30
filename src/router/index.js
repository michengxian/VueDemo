import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import TestVue from '@/components/TestVue';
import SecondComponent from '@/components/SecondComponent';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/test',
      name: 'TestVue',
      component: TestVue,
    },
    {
      path: '/second',
      name: 'SecondComponent',
      component: SecondComponent,
    },
  ],
});
