import React from 'react';
import Loadable from 'react-loadable';

// import ErrorDefault from './components/Page/ErrorDefault';
// import Dashboard from './components/Dashboard/Dashboard';

function Loading() {
  return <div>Loading...</div>;
}

const Dashboard = Loadable({
  loader: () => import('./components/Page/Dashboard'),
  loading: Loading,
});

const ErrorDefault = Loadable({
    loader: () => import('./components/Page/ErrorDefault'),
    loading: Loading,
  });

const routes = [
  { path: '/Error', name: 'Error', component: ErrorDefault },
  { path: '/Dashboard', exact: true, name: 'Dashboard', component: Dashboard }
];

export default routes;
