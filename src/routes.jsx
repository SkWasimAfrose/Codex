import { lazy } from 'react';

export const routes = [
  { path: '/', component: lazy(() => import('./pages/Home')) },
  { path: '/about', component: lazy(() => import('./pages/About')) },
  { path: '/universities', component: lazy(() => import('./pages/Universities')) },
  { path: '/universities/:id', component: lazy(() => import('./pages/UniversityDetail')) },
  { path: '/courses', component: lazy(() => import('./pages/Courses')) },
  { path: '/courses/:id', component: lazy(() => import('./pages/CourseDetail')) },
  { path: '/countries', component: lazy(() => import('./pages/Countries')) },
  { path: '/countries/:id', component: lazy(() => import('./pages/CountryDetail')) },
  { path: '/blog', component: lazy(() => import('./pages/Blog')) },
  { path: '/blog/:slug', component: lazy(() => import('./pages/BlogDetail')) },
  { path: '/contact', component: lazy(() => import('./pages/Contact')) },
  { path: '*', component: lazy(() => import('./pages/NotFound')) },
];
