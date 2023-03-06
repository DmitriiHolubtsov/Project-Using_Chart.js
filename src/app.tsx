import React, { ReactElement } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';

import Report from './pages/report';

export default function App(): ReactElement {
  return (
    <BrowserRouter>
      <QueryParamProvider adapter={ReactRouter6Adapter}>
        <Routes>
          <Route path='/' element={<Report />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </QueryParamProvider>
    </BrowserRouter>
  );
}
