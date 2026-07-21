/* ============================================================
   IAI PRODUÇÕES — Multiverse interactions
   ============================================================ */

// 1) Nav scrolled state + mobile menu
const nav = document.querySelector('.nav');
const toggle = document.querySelector('.menu-toggle');
if (nav) {
  addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 24), { passive: true });
}
if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
  document.querySelectorAll('.nav a').forEach(a =>
    a.addEventListener('click', () => nav.classList.remove('open'))
  );
}

// 2) Reveal on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(e => observer.observe(e));

// 3) Smooth scroll with header offset
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (!href || href === '#') return;
    const t = document.querySelector(href);
    if (t) {
      e.preventDefault();
      const y = t.getBoundingClientRect().top + scrollY - 72;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  });
});

// 4) Generate twinkling stars in hero
const starsContainer = document.getElementById('hero-stars');
if (starsContainer) {
  const count = Math.min(110, Math.max(40, window.innerWidth / 14));
  const frag = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const s = document.createElement('i');
    s.style.left = (Math.random() * 100) + '%';
    s.style.top  = (Math.random() * 100) + '%';
    s.style.animationDelay = (Math.random() * 4) + 's';
    s.style.animationDuration = (3 + Math.random() * 4) + 's';
    const size = 1 + Math.random() * 2.4;
    s.style.width  = size + 'px';
    s.style.height = size + 'px';
    s.style.opacity = (.3 + Math.random() * .5).toFixed(2);
    frag.appendChild(s);
  }
  starsContainer.appendChild(frag);
}

// 5) Multiverse — draw dynamic connecting lines (visual polish)
function buildConstellationLines() {
  const center = document.querySelector('.center-iai');
  if (!center) return;
  const nodes = document.querySelectorAll('.planet-node');
  const svg = document.querySelector('.constellation');
  if (!svg) return;

  // remove dynamic lines (keep original 6)
  svg.querySelectorAll('line.dynamic').forEach(l => l.remove());

  const c = center.getBoundingClientRect();
  const cx = c.left + c.width / 2;
  const cy = c.top  + c.height / 2;
  const vb = svg.viewBox.baseVal;

  nodes.forEach(n => {
    const r = n.getBoundingClientRect();
    const nx = r.left + r.width / 2;
    const ny = r.top  + r.height / 2;

    const x1 = (cx / window.innerWidth)  * vb.width;
    const y1 = (cy / window.innerHeight) * vb.height;
    const x2 = (nx / window.innerWidth)  * vb.width;
    const y2 = (ny / window.innerHeight) * vb.height;

    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    line.setAttribute('class', 'cline dynamic');
    line.setAttribute('stroke', 'rgba(233,41,207,.18)');
    line.setAttribute('stroke-width', '1');
    line.setAttribute('stroke-dasharray', '2 8');
    svg.appendChild(line);
  });
}

// Rebuild lines after layout settles
window.addEventListener('load', () => setTimeout(buildConstellationLines, 200));
window.addEventListener('resize', () => {
  clearTimeout(window._rcT);
  window._rcT = setTimeout(buildConstellationLines, 200);
});

// 6) Subtle parallax on the multiverse center
const multiverse = document.querySelector('.multiverse');
if (multiverse) {
  document.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth  - .5) * 12;
    const y = (e.clientY / window.innerHeight - .5) * 12;
    multiverse.style.setProperty('--mx', x + 'px');
    multiverse.style.setProperty('--my', y + 'px');
  }, { passive: true });
}
