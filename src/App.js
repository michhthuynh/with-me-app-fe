import React, { Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Route></Route>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
