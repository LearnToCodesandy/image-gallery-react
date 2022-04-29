import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { ImagesProvider } from './context/ImagesContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { CurrentProvider } from './context/CurrentImage';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <ImagesProvider>
      <FavoritesProvider>
        <CurrentProvider>
          <App />
        </CurrentProvider>
      </FavoritesProvider>
    </ImagesProvider>
  </BrowserRouter>
);
