import React from 'react';

const Home = React.lazy(() => import('../Views/Home/home'));
const Article = React.lazy(() => import('../Views/Article/article'));

const routes = [
  {
    path: '/',
    exact: true,
    name: 'Main',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: Article,
  },
];

export default routes;
