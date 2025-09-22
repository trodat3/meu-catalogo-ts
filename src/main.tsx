import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { ProvedorDeFavoritos } from './context/Favoritos.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ProvedorDeFavoritos>
        <App />
      </ProvedorDeFavoritos>
    </BrowserRouter>
  </StrictMode>,
);