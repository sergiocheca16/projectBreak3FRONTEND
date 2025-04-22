import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '/src/App.jsx';

const btn = document.getElementById('loadReactBtn');
const modal = document.getElementById('root');
const overlay = document.getElementById('modalOverlay');
const closeBtn = document.getElementById('closeModalBtn');

btn.addEventListener('click', () => {
  modal.style.display = 'block';
  overlay.style.display = 'block';

  const root = createRoot(document.getElementById('root'));
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});

const closeModal = () => {
  modal.style.display = 'none';
  overlay.style.display = 'none';
};

overlay.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);



