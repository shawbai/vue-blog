import login from '@/components/login';
import home from '@/components/home';
import articles from '@/components/home/articles';
import articleDetails from '@/components/home/articleDetails';
import about from '@/components/home/about';
import latestArticles from '@/components/home/latestArticles';
import NotFoundComponent from '@/components/NotFoundComponent';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/',
    name: 'home',
    component: home,
    children: [
      {
        path: 'articles',
        name: 'articles',
        component: articles
      },
      {
        path: 'articleDetails:id',
        name: 'articleDetails',
        component: articleDetails
      },
      {
        path: 'about',
        name: 'about',
        component: about
      },
      {
        path: 'latestArticles',
        name: 'latestArticles',
        component: latestArticles
      },
      {
        path: '/',
        name: 'latestArticles',
        component: latestArticles
      }
    ]
  },
  {
    path: '*',
    component: NotFoundComponent
  }
];
export default routes;
