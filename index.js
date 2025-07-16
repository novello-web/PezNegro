// Lightbox
document.querySelectorAll('.lightbox').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const src = link.getAttribute('href');
    const overlay = document.createElement('div');
    overlay.style = `
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0,0,0,0.8); display: flex; align-items: center; justify-content: center;
      z-index: 9999;
    `;
    const img = document.createElement('img');
    img.src = src;
    img.style = "max-width: 90%; max-height: 90%; border-radius: 8px;";
    overlay.appendChild(img);
    overlay.addEventListener('click', () => document.body.removeChild(overlay));
    document.body.appendChild(overlay);
  });
});

// Menú desplegable
const toggleBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.navrapido');

// Abrir/cerrar menú
toggleBtn.addEventListener('click', () => {
  nav.classList.toggle('show');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.navrapido a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('show');
  });
});

// Cerrar menú al hacer clic fuera del nav
document.addEventListener('click', (e) => {
  const isClickInside = nav.contains(e.target) || toggleBtn.contains(e.target);
  if (!isClickInside) {
    nav.classList.remove('show');
  }
});

