import './index.css';
import './i18n.ts';

import React, { Suspense } from 'react'; // <-- Import Suspense
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback="Loading..."> {/* <-- Add Wrapper */}
      <App />
    </Suspense> {/* <-- Add Wrapper */}
  </React.StrictMode>,
);