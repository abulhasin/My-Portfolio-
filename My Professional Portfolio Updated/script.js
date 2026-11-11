const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded", "false");
}));
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
const progress = document.getElementById("progress");
const backTop = document.getElementById("backTop");
window.addEventListener("scroll", () => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0}%`;
  backTop?.classList.toggle("show", window.scrollY > 500);
}, { passive: true });
backTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
