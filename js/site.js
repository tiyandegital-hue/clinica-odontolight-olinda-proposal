/* Shared behavior — no-JS safe: everything visible unless <html class="js"> is set. */
(function () {
  document.documentElement.classList.add("js");

  /* ---- business constant injection: [data-clinica="key"] ---- */
  try {
    document.querySelectorAll("[data-clinica]").forEach(function (el) {
      var key = el.getAttribute("data-clinica");
      if (CLINICA[key] !== undefined && CLINICA[key] !== "") el.textContent = CLINICA[key];
    });
  } catch (e) { /* config missing — static fallback text stays */ }

  /* ---- mobile nav ---- */
  var burger = document.querySelector(".burger");
  var nav = document.getElementById("navMain");
  if (burger && nav) {
    burger.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") nav.classList.remove("open");
    });
  }

  /* ---- reveal on scroll ---- */
  var io = ("IntersectionObserver" in window) ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }) : null;
  document.querySelectorAll(".rv").forEach(function (el) {
    if (io) io.observe(el); else el.classList.add("in");
  });

  /* ---- demo forms: simulated submit, honest messaging ---- */
  document.querySelectorAll("form[data-demo-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var ok = form.parentElement.querySelector(".form-ok");
      form.hidden = true;
      if (ok) {
        ok.hidden = false;
        var name = form.querySelector('[name="nome"]');
        var slot = ok.querySelector("[data-nome]");
        if (name && slot) slot.textContent = name.value.split(" ")[0];
        ok.querySelector(".btn, a") && ok.querySelector(".btn, a").focus();
      }
    });
  });

  /* ---- footer year ---- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
