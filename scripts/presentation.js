class SlidePresentation {
  constructor() {
    this.slides = Array.from(document.querySelectorAll('.slide'));
    this.nav = document.getElementById('navDots');
    this.progressBar = document.getElementById('progressBar');
    this.current = 0;
    this.locked = false;
    this.touchStartY = null;
    this.buildDots();
    this.bind();
    this.observeSlides();
    this.updateUI();
  }

  buildDots() {
    this.slides.forEach((slide, index) => {
      const button = document.createElement('button');
      button.className = 'nav-dot';
      button.type = 'button';
      button.setAttribute('aria-label', `Go to slide ${index + 1}: ${slide.dataset.title || ''}`.trim());
      button.addEventListener('click', () => this.goTo(index));
      this.nav.appendChild(button);
    });
    this.dots = Array.from(document.querySelectorAll('.nav-dot'));
  }

  bind() {
    document.addEventListener('keydown', (event) => {
      if (['ArrowDown', 'ArrowRight', 'PageDown', ' '].includes(event.key)) {
        event.preventDefault();
        this.next();
      }
      if (['ArrowUp', 'ArrowLeft', 'PageUp'].includes(event.key)) {
        event.preventDefault();
        this.prev();
      }
      if (event.key === 'Home') this.goTo(0);
      if (event.key === 'End') this.goTo(this.slides.length - 1);
    });

    document.addEventListener('wheel', (event) => {
      if (this.locked) return;
      this.locked = true;
      event.deltaY > 0 ? this.next() : this.prev();
      window.setTimeout(() => { this.locked = false; }, 800);
    }, { passive: true });

    document.addEventListener('touchstart', (event) => {
      this.touchStartY = event.touches[0].clientY;
    }, { passive: true });

    document.addEventListener('touchend', (event) => {
      if (this.touchStartY == null) return;
      const delta = this.touchStartY - event.changedTouches[0].clientY;
      if (Math.abs(delta) > 50) delta > 0 ? this.next() : this.prev();
      this.touchStartY = null;
    }, { passive: true });
  }

  observeSlides() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        const index = this.slides.indexOf(entry.target);
        if (index >= 0) {
          this.current = index;
          this.updateUI();
        }
      });
    }, { threshold: 0.55 });

    this.slides.forEach((slide) => observer.observe(slide));
    this.slides[0]?.classList.add('visible');
  }

  next() {
    if (this.current < this.slides.length - 1) this.goTo(this.current + 1);
  }

  prev() {
    if (this.current > 0) this.goTo(this.current - 1);
  }

  goTo(index) {
    this.current = index;
    this.slides[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.updateUI();
  }

  updateUI() {
    this.dots.forEach((dot, index) => dot.classList.toggle('active', index === this.current));
    const progress = ((this.current + 1) / this.slides.length) * 100;
    this.progressBar.style.width = `${progress}%`;
    const slide = this.slides[this.current];
    document.title = `${slide?.dataset.title || 'AI Value Gap'} · AI Value Gap Deck`;
  }
}

document.addEventListener('DOMContentLoaded', () => new SlidePresentation());
