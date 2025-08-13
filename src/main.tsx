import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './assets/styles/base.scss';
import './assets/styles/layout.scss';

import App from './components/app/app/app.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
