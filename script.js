/* ── NAV SCROLL ───────────────────────────────────────── */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });

    /* ── HAMBURGER ────────────────────────────────────────── */
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    let menuOpen = false;

    hamburger.addEventListener('click', toggleMenu);
    hamburger.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') toggleMenu(); });

    function toggleMenu() {
      menuOpen = !menuOpen;
      mobileMenu.classList.toggle('open', menuOpen);
      hamburger.setAttribute('aria-expanded', menuOpen);
      // animate lines
      const spans = hamburger.querySelectorAll('span');
      if (menuOpen) {
        spans[0].style.transform = 'rotate(45deg) translate(5px,5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
      } else {
        spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      }
    }

    function closeMobile() { if (menuOpen) toggleMenu(); }

    /* ── TYPEWRITER ───────────────────────────────────────── */
    const phrases = ['Intelligent AI.', 'Cloud Scale.', 'Secure Systems.', 'Real Impact.'];
    let phraseIdx = 0, charIdx = 0, deleting = false;
    const tw = document.getElementById('typewriter');

    function type() {
      const current = phrases[phraseIdx];
      if (!deleting) {
        tw.textContent = current.slice(0, ++charIdx);
        if (charIdx === current.length) {
          deleting = true;
          setTimeout(type, 1800);
          return;
        }
        setTimeout(type, 60);
      } else {
        tw.textContent = current.slice(0, --charIdx);
        if (charIdx === 0) {
          deleting = false;
          phraseIdx = (phraseIdx + 1) % phrases.length;
          setTimeout(type, 300);
          return;
        }
        setTimeout(type, 35);
      }
    }
    setTimeout(type, 800);

    /* ── PARTICLE CANVAS ──────────────────────────────────── */
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let W, H;

    function resizeCanvas() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', () => { resizeCanvas(); initParticles(); }, { passive: true });

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.r = Math.random() * 1.8 + 0.4;
        this.alpha = Math.random() * 0.5 + 0.1;
        this.color = Math.random() > 0.5 ? '0,229,255' : '123,47,255';
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color},${this.alpha})`;
        ctx.fill();
      }
    }

    function initParticles() {
      const count = Math.min(Math.floor((W * H) / 12000), 130);
      particles = Array.from({ length: count }, () => new Particle());
    }
    initParticles();

    function drawConnections() {
      const maxDist = 110;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0,229,255,${0.08 * (1 - dist / maxDist)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    }

    let animFrame;
    function animate() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => { p.update(); p.draw(); });
      drawConnections();
      animFrame = requestAnimationFrame(animate);
    }
    animate();

    /* ── COUNTER ANIMATION ────────────────────────────────── */
    function animateCounters() {
      document.querySelectorAll('.stat-num').forEach(el => {
        const target = parseFloat(el.dataset.target);
        const decimals = parseInt(el.dataset.decimal || '0');
        const suffix = el.dataset.target.includes('.') ? (decimals === 1 ? '%' : '') : '+';
        let start = 0;
        const duration = 1800;
        const step = (timestamp) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = (eased * target).toFixed(decimals) + suffix;
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
    }

    /* ── INTERSECTION OBSERVER ────────────────────────────── */
    const observerOpts = { threshold: 0.15, rootMargin: '0px 0px -40px 0px' };

    // Counters — trigger once hero stats are visible
    const statsObserver = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { animateCounters(); statsObserver.disconnect(); }
      });
    }, { threshold: 0.3 });
    statsObserver.observe(document.querySelector('.hero-stats'));

    // Feature list
    const featureObserver = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('li').forEach((li, i) => {
            setTimeout(() => li.classList.add('visible'), i * 100);
          });
          featureObserver.unobserve(e.target);
        }
      });
    }, observerOpts);
    featureObserver.observe(document.querySelector('.feature-list'));

    // Cards & steps & testimonials
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          revealObserver.unobserve(e.target);
        }
      });
    }, observerOpts);

    document.querySelectorAll('.service-card, .process-step, .testimonial-card').forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 80}ms`;
      revealObserver.observe(el);
    });

    /* ── FORM VALIDATION & SUBMISSION ─────────────────────── */
    const form = document.getElementById('contact-form');
    const successMsg = document.getElementById('form-success');

    function setError(id, msg) {
      const el = document.getElementById(id);
      const errEl = document.getElementById(id + '-error');
      if (msg) {
        el.classList.add('error');
        if (errEl) errEl.textContent = msg;
      } else {
        el.classList.remove('error');
        if (errEl) errEl.textContent = '';
      }
    }

    function validateEmail(v) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;

      // First name
      const fname = document.getElementById('fname').value.trim();
      if (!fname) { setError('fname', 'Please enter your first name.'); valid = false; }
      else setError('fname', '');

      // Last name
      const lname = document.getElementById('lname').value.trim();
      if (!lname) { setError('lname', 'Please enter your last name.'); valid = false; }
      else setError('lname', '');

      // Email
      const email = document.getElementById('email').value.trim();
      if (!email) { setError('email', 'Please enter your email address.'); valid = false; }
      else if (!validateEmail(email)) { setError('email', 'Please enter a valid email address.'); valid = false; }
      else setError('email', '');

      // Message
      const message = document.getElementById('message').value.trim();
      if (!message) { setError('message', 'Please tell us about your project.'); valid = false; }
      else if (message.length < 20) { setError('message', 'Please provide at least 20 characters.'); valid = false; }
      else setError('message', '');

      if (!valid) return;

      // Simulate submission
      const btn = document.getElementById('submit-btn');
      btn.disabled = true;
      btn.textContent = 'Sending…';

      setTimeout(() => {
        form.style.display = 'none';
        successMsg.classList.add('show');
      }, 1200);
    });

    // Live validation on blur
    ['fname','lname','email','message'].forEach(id => {
      document.getElementById(id).addEventListener('blur', () => {
        const val = document.getElementById(id).value.trim();
        if (!val) setError(id, 'This field is required.');
        else if (id === 'email' && !validateEmail(val)) setError(id, 'Please enter a valid email.');
        else setError(id, '');
      });
    });

    /* ── ACTIVE NAV LINK ──────────────────────────────────── */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    const navObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(a => {
            a.style.color = a.getAttribute('href') === `#${entry.target.id}` ? 'var(--white)' : '';
          });
        }
      });
    }, { threshold: 0.4 });

    sections.forEach(s => navObserver.observe(s));