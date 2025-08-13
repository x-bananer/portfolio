import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './assets/styles/base.scss';
import './assets/styles/layout.scss';
import './assets/styles/generated.scss';
import './assets/styles/text.scss';

import App from './components/app/app';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
