import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App';
import './global.scss';
import { startMonitoring } from './monitoring/monitoring';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


if (import.meta.env.PROD && (import.meta.env.VITE_ENABLE_WEB_ANALYTICS === 'true' || import.meta.env.VITE_ENABLE_SPEED_INSIGHTS === 'true')) {
  void startMonitoring();
}
