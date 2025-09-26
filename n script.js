// Navbar Slide-In
gsap.to(".navbar", {
  y: 80,  // slide in from top
  duration: 1,
  ease: "power3.out"
});

// Button Hover Pulse (JS-based)
document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("mouseenter", () => {
    gsap.to(button, { scale: 1.1, duration: 0.3, ease: "power1.inOut" });
  });
  button.addEventListener("mouseleave", () => {
    gsap.to(button, { scale: 1, duration: 0.3, ease: "power1.inOut" });
  });
});

// Scroll-Triggered Fade-Ins
gsap.utils.toArray(".content").forEach(section => {
  gsap.from(section, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
});