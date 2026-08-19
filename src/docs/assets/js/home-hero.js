(() => {
  const hero = document.querySelector(".lab-hero");
  const media = hero?.querySelector(".lab-hero__media");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const narrowViewport = window.matchMedia("(max-width: 800px)");

  if (!hero || !media || reducedMotion.matches || narrowViewport.matches) return;

  let framePending = false;

  const updateParallax = () => {
    const bounds = hero.getBoundingClientRect();

    if (bounds.bottom > 0 && bounds.top < window.innerHeight) {
      const progress = Math.min(1, Math.max(0, -bounds.top / bounds.height));
      media.style.transform = `translate3d(0, ${progress * 46}px, 0)`;
    }

    framePending = false;
  };

  const requestUpdate = () => {
    if (framePending) return;
    framePending = true;
    window.requestAnimationFrame(updateParallax);
  };

  updateParallax();
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate, { passive: true });
})();
