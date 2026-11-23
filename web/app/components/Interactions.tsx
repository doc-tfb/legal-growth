"use client";

import { useEffect } from "react";

export default function Interactions() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Nav shadow al scroll
    const nav = document.getElementById("nav");
    let lastScrolled = false;
    const onScroll = () => {
      const scrolled = window.scrollY > 8;
      if (nav && scrolled !== lastScrolled) {
        nav.dataset.scrolled = scrolled ? "true" : "false";
        lastScrolled = scrolled;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Reveals (fallback para navegadores sin scroll-timeline)
    let io: IntersectionObserver | null = null;
    if (!prefersReduced && "IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              io?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
      );
      document.querySelectorAll(".reveal").forEach((el) => io?.observe(el));
    } else {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
    }

    // Theme toggle (localStorage try/catch)
    const toggle = document.getElementById("themeToggle") as HTMLButtonElement | null;
    const getStored = () => {
      try {
        return localStorage.getItem("tfblegal-theme");
      } catch {
        return null;
      }
    };
    const setStored = (v: string) => {
      try {
        localStorage.setItem("tfblegal-theme", v);
      } catch {}
    };
    const currentTheme = () => {
      const explicit = document.documentElement.getAttribute("data-theme");
      if (explicit) return explicit;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    };
    const applyTheme = (t: string) => {
      if (t === "dark" || t === "light") {
        document.documentElement.setAttribute("data-theme", t);
        setStored(t);
      }
    };
    const stored = getStored();
    if (stored === "dark" || stored === "light") applyTheme(stored);
    const onToggleClick = () => applyTheme(currentTheme() === "dark" ? "light" : "dark");
    toggle?.addEventListener("click", onToggleClick);

    // Magnet form (placeholder submit visual)
    const magnetForm = document.getElementById("magnetForm") as HTMLFormElement | null;
    let formTimer: ReturnType<typeof setTimeout> | null = null;
    const onFormSubmit = (e: Event) => {
      e.preventDefault();
      const btn = magnetForm?.querySelector("button") as HTMLButtonElement | null;
      if (!btn) return;
      const original = btn.textContent;
      btn.textContent = "Revisa tu correo";
      formTimer = setTimeout(() => {
        btn.textContent = original;
        magnetForm?.reset();
      }, 2800);
    };
    magnetForm?.addEventListener("submit", onFormSubmit);

    // Smooth scroll para anchors internos
    const anchorHandlers: Array<{ el: HTMLAnchorElement; handler: (e: Event) => void }> = [];
    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
      const handler = (e: Event) => {
        const href = a.getAttribute("href");
        if (!href || href === "#" || href.length < 2) return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: prefersReduced ? "auto" : "smooth",
            block: "start",
          });
        }
      };
      a.addEventListener("click", handler);
      anchorHandlers.push({ el: a, handler });
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
      toggle?.removeEventListener("click", onToggleClick);
      magnetForm?.removeEventListener("submit", onFormSubmit);
      if (formTimer) clearTimeout(formTimer);
      anchorHandlers.forEach(({ el, handler }) => el.removeEventListener("click", handler));
    };
  }, []);

  return null;
}
