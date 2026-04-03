/* ═══════════════════════════════════════════════
   main.js — DevPixel Game Dev Portfolio
   ═══════════════════════════════════════════════ */

// ═══════════════════════════════════════════════
// PIXEL SPRITE RENDERER
// Draws pixel-art characters onto <canvas> elements
// using a color-key grid map.
// ═══════════════════════════════════════════════
function drawPixels(canvas, map, palette) {
  const ctx = canvas.getContext('2d');
  const cw = canvas.width;
  const ch = canvas.height;
  ctx.clearRect(0, 0, cw, ch);
  const pw = cw / map[0].length;
  const ph = ch / map.length;
  map.forEach((row, y) => {
    row.forEach((c, x) => {
      if (!c || !palette[c]) return;
      ctx.fillStyle = palette[c];
      ctx.fillRect(
        Math.floor(x * pw),
        Math.floor(y * ph),
        Math.ceil(pw),
        Math.ceil(ph)
      );
    });
  });
}

// ─── Knight Sprite ───────────────────────────────
const knight = [
  [0,0,0,'g','g','g','g',0,0,0,0,0,0,0,0,0],
  [0,0,'g','g','g','g','g','g',0,0,0,0,0,0,0,0],
  [0,0,'s','s','s','s','s','s',0,0,0,0,0,0,0,0],
  [0,0,'s','f','f','f','f','s',0,0,0,0,0,0,0,0],
  [0,0,'s','f','e','e','f','s',0,0,0,0,0,0,0,0],
  [0,0,'s','f','f','f','f','s',0,0,0,0,0,0,0,0],
  [0,0,'s','s','s','s','s','s',0,0,0,0,0,0,0,0],
  [0,'b','b','b','b','b','b','b','b',0,0,0,0,0,0,0],
  [0,'b','b','b','b','b','b','b','b',0,0,0,0,0,0,0],
  [0,0,'b','b',0,0,'b','b',0,0,0,0,0,0,0,0],
  [0,0,'b','b',0,0,'b','b',0,0,0,0,0,0,0,0],
  [0,0,'b','b',0,0,'b','b',0,0,0,0,0,0,0,0],
  [0,'b','b','b',0,0,'b','b','b',0,0,0,0,0,0,0],
  [0,'b','b','b',0,0,'b','b','b',0,0,0,0,0,0,0],
  [0,'b','b',0,0,0,0,'b','b',0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];
drawPixels(document.getElementById('spriteA'), knight, {
  g: '#888', s: '#aaa', f: '#f5cba7', e: '#00e5ff', b: '#4466aa'
});

// ─── Wizard Sprite ───────────────────────────────
const wizard = [
  [0,0,0,'p','p','p','p',0,0,0,0,0,0,0,0,0],
  [0,0,'p','p','p','p','p','p',0,0,0,0,0,0,0,0],
  [0,'p','p','y','y','y','y','p','p',0,0,0,0,0,0,0],
  [0,'p','p','f','f','f','f','p','p',0,0,0,0,0,0,0],
  [0,'p','p','f','e','e','f','p','p',0,0,0,0,0,0,0],
  [0,'p','p','f','f','f','f','p','p',0,0,0,0,0,0,0],
  [0,0,'p','r','r','r','r','p',0,0,0,0,0,0,0,0],
  [0,0,'r','r','r','r','r','r',0,0,0,0,0,0,0,0],
  [0,'r','r','r','r','r','r','r','r',0,0,0,0,0,0,0],
  [0,'r','r','r','r','r','r','r','r',0,0,0,0,0,0,0],
  [0,0,'r','r',0,0,'r','r',0,0,0,0,0,0,0,0],
  [0,0,'r','r',0,0,'r','r',0,0,0,0,0,0,0,0],
  [0,'r','r','r',0,0,'r','r','r',0,0,0,0,0,0,0],
  [0,'r','r','r',0,0,'r','r','r',0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];
drawPixels(document.getElementById('spriteB'), wizard, {
  p: '#9b59b6', y: '#ffe600', f: '#f5cba7', e: '#ff4081', r: '#6c3483'
});

// ─── Slime Sprite ────────────────────────────────
const slime = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,'s','s','s','s','s','s',0,0,0,0,0,0,0],
  [0,0,'s','s','s','s','s','s','s','s',0,0,0,0,0,0],
  [0,'s','s','s','s','s','s','s','s','s','s',0,0,0,0,0],
  [0,'s','s','e',0,'s','s',0,'e','s','s',0,0,0,0,0],
  [0,'s','s','s','s','s','s','s','s','s','s',0,0,0,0,0],
  [0,'s','s','s','m','m','m','m','s','s','s',0,0,0,0,0],
  [0,'s','s','s','s','s','s','s','s','s','s',0,0,0,0,0],
  [0,0,'s','s','s','s','s','s','s','s',0,0,0,0,0,0],
  [0,0,0,'d','d',0,0,'d','d',0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];
drawPixels(document.getElementById('spriteC'), slime, {
  s: '#39ff14', e: '#000', m: '#1a5e00', d: '#1d8a00'
});

// Avatar is now a real photo (game_pfp.jpg) — no canvas drawing needed.


// ═══════════════════════════════════════════════
// HERO TYPING ANIMATION
// ═══════════════════════════════════════════════
const heroEl   = document.getElementById('heroName');
const heroText = 'John Glenn De Leon';
let charIndex  = 0;

heroEl.classList.add('typed');

function typeHero() {
  if (charIndex <= heroText.length) {
    heroEl.textContent = heroText.slice(0, charIndex);
    charIndex++;
    setTimeout(typeHero, 100);
  }
}
setTimeout(typeHero, 600);


// ═══════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

function closeMobile() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
}

// Highlight active nav link on scroll
const allSections = document.querySelectorAll('section');
const navLinks    = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  allSections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 80) current = sec.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});


// ═══════════════════════════════════════════════
// SKILLS — dynamically rendered cards
// ═══════════════════════════════════════════════
const skills = [
  { icon: '🎨', name: 'GAME DESIGN',  pct: 50 },
  { icon: '🕹️',  name: '2D / PIXEL GAMES',   pct: 80 },
  { icon: '🔧', name: 'GODOT ENGINE', pct: 90 },
  { icon: '💡', name: 'UNITY / C#',   pct: 50 },
  { icon: '🎵', name: 'CHIPTUNE',     pct: 50 },
  { icon: '📜', name: 'GDSCRIPT',     pct: 90 },
  { icon: '⚙',  name: 'TILEMAPPING', pct: 60 },
  { icon: '🌐', name: 'WEB EXPORT',   pct: 90 },
];

const skillsGrid = document.getElementById('skillsGrid');
skills.forEach(sk => {
  skillsGrid.innerHTML += `
    <div class="skill-card reveal">
      <span class="skill-card-icon">${sk.icon}</span>
      <div class="skill-card-name">${sk.name}</div>
      <div class="skill-bar-wrap">
        <div class="skill-bar" data-pct="${sk.pct}"></div>
      </div>
      <div class="skill-bar-label">${sk.pct}/100</div>
    </div>
  `;
});


// ═══════════════════════════════════════════════
// PROJECTS — dynamically rendered cards
// ═══════════════════════════════════════════════
const projects = [
  {
    badge: 'NOT YET RELEASED',
    title: 'EC0 QUEST',
    desc:  'An environmental awareness adventure with simple puzzles and mini-games, built as part of my learning journey in game development, where players progress by overcoming polluters and helping solve environmental challenges.',
    tags:  ['GODOT', '2D GAME', 'ADVENTURE', 'MINI-GAMES', 'PUZZLE'],
    color: '#0dee3a',
  },
];

// Generate a procedural pixel thumbnail for each project
function generateThumb(color) {
  const c  = document.createElement('canvas');
  c.width  = 40;
  c.height = 22;
  const cx = c.getContext('2d');

  cx.fillStyle = '#0d0d1a';
  cx.fillRect(0, 0, 40, 22);

  for (let row = 0; row < 22; row++) {
    for (let col = 0; col < 40; col++) {
      if (Math.random() < 0.06) {
        cx.fillStyle = color + '99';
        cx.fillRect(col, row, 1, 1);
      }
    }
  }
  for (let n = 0; n < 12; n++) {
    cx.fillStyle = color;
    const rx = Math.floor(Math.random() * 38);
    const ry = Math.floor(Math.random() * 20);
    cx.fillRect(rx, ry, 2, 2);
  }
  return c.toDataURL();
}

const projectsGrid = document.getElementById('projectsGrid');
projects.forEach(p => {
  const thumb = generateThumb(p.color);
  const tagsHTML = p.tags
    .map(t => `<span class="tag" style="color:${p.color};border-color:${p.color}">${t}</span>`)
    .join('');

  projectsGrid.innerHTML += `
    <div class="project-card reveal">
      <img class="project-thumb" src="${thumb}" alt="${p.title}" style="background:#0d0d1a;">
      <div class="project-body">
        <span class="project-badge" style="background:${p.color}">${p.badge}</span>
        <div class="project-title">${p.title}</div>
        <p class="project-desc">${p.desc}</p>
        <div class="project-tags">${tagsHTML}</div>
        <div class="project-links">
          <a href="#">▶ PLAY</a>
          <a href="#">{ CODE }</a>
        </div>
      </div>
    </div>
  `;
});


// ═══════════════════════════════════════════════
// SCROLL REVEAL + SKILL BAR ANIMATION
// Uses IntersectionObserver to trigger .reveal
// elements and animate skill bars when in view.
// ═══════════════════════════════════════════════
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    // Stagger siblings for a cascade effect
    const siblings = Array.from(entry.target.parentElement.children);
    const delay    = siblings.indexOf(entry.target) * 80;

    setTimeout(() => {
      entry.target.classList.add('visible');

      // Animate skill bar width if present
      const bar = entry.target.querySelector('.skill-bar');
      if (bar) {
        setTimeout(() => {
          bar.style.width = bar.dataset.pct + '%';
        }, 100);
      }
    }, delay);
  });
}, { threshold: 0.12 });

// Observe all .reveal elements (including dynamically added ones)
// Small timeout ensures JS-injected cards are in the DOM first
setTimeout(() => {
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}, 50);