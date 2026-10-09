// Sauvia Lux Perfume — landing page script

/*
 * CONTACT CONFIG — fill these in before going live.
 * Leave a value empty ("") and its button keeps pointing to the contact section.
 */
const CONTACT = {
  messengerUrl: "",   // e.g. "https://m.me/your-page-name"
  phone: "",          // e.g. "+62 812 3456 7890"
  email: "",          // e.g. "hello@sauvia.id"
  location: ""        // e.g. "Jakarta, Indonesia"
};

document.addEventListener("DOMContentLoaded", () => {
  // Mobile navigation
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  if (toggle && nav) {
    const setOpen = (open) => {
      nav.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "Close" : "Menu";
    };
    toggle.addEventListener("click", () => setOpen(!nav.classList.contains("open")));
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
  }

  // Contact buttons and details
  const messengerBtn = document.querySelector('[data-contact="messenger"]');
  if (messengerBtn && CONTACT.messengerUrl) {
    messengerBtn.href = CONTACT.messengerUrl;
    messengerBtn.target = "_blank";
    messengerBtn.rel = "noopener";
  }
  const phoneBtn = document.querySelector('[data-contact="phone"]');
  if (phoneBtn && CONTACT.phone) {
    phoneBtn.href = "tel:" + CONTACT.phone.replace(/[^\d+]/g, "");
  }
  const fill = (key, value, href) => {
    const el = document.querySelector(`[data-contact-text="${key}"]`);
    if (!el || !value) return;
    el.textContent = "";
    if (href) {
      const a = document.createElement("a");
      a.href = href;
      a.textContent = value;
      el.appendChild(a);
    } else {
      el.textContent = value;
    }
  };
  fill("phone", CONTACT.phone, CONTACT.phone && "tel:" + CONTACT.phone.replace(/[^\d+]/g, ""));
  fill("email", CONTACT.email, CONTACT.email && "mailto:" + CONTACT.email);
  fill("location", CONTACT.location);

  // Footer year
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
