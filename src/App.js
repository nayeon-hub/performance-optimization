import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
// import ListPage from './pages/ListPage/index';
// import ViewPage from './pages/ViewPage/index';

// 동적 import
const ListPage = lazy(() => import('./pages/ListPage/index'));
const ViewPage = lazy(() => import('./pages/ViewPage/index'));

function App() {
  return (
    <div className='App'>
      <Switch>
        <Suspense fallback={<div>loading...</div>}>
          <Route path='/' component={ListPage} exact />
          <Route path='/view/:id' component={ViewPage} exact />
        </Suspense>
      </Switch>
    </div>
  );
}

export default App;
