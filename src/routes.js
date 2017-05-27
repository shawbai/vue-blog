import login from '@/components/login';
import home from '@/components/home';
import article from '@/components/home/article';

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/home',
    name: 'home',
    component: home,
    children: [
      {
        path: 'article',
        name: 'article',
        component: article
      }
    ]
  }
];
export default routes;
