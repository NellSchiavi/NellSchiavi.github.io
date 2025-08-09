// script.js — interações básicas do portfólio

(function () {
    const menuBtn = document.getElementById('menuBtn');
    const menu = document.getElementById('menu');
    const yearEl = document.getElementById('year');
  
    // Ano atual no rodapé
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  
    // Toggle menu mobile
    if (menuBtn && menu) {
      menuBtn.addEventListener('click', () => {
        menu.classList.toggle('open');
        const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
        menuBtn.setAttribute('aria-expanded', String(!expanded));
      });
  
      // Fecha ao clicar fora
      document.addEventListener('click', (e) => {
        const target = e.target;
        if (!menu.contains(target) && target !== menuBtn) {
          menu.classList.remove('open');
          menuBtn.setAttribute('aria-expanded', 'false');
        }
      });
  
      // Fechar ao escolher um link 
      menu.querySelectorAll('a[href^="#"]').forEach((a) =>
        a.addEventListener('click', () => {
          menu.classList.remove('open');
          menuBtn.setAttribute('aria-expanded', 'false');
        })
      );
  
      // fechar com ESC
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          menu.classList.remove('open');
          menuBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }
  
    // Scroll 
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReduced) {
      document.querySelectorAll('a[href^="#"]').forEach((a) => {
        a.addEventListener('click', (e) => {
          const id = a.getAttribute('href');
          if (id && id.length > 1) {
            const el = document.querySelector(id);
            if (el) {
              e.preventDefault();
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              history.pushState(null, '', id);
            }
          }
        });
      });
    }
  })();
  