/*
  Animaciones con GSAP. gsap.matchMedia() permite definir animaciones solo cuando
  NO se pidió movimiento reducido; en ese caso el contenido queda visible tal cual.
*/
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/*
  Trayectoria: el riel se dibuja a medida que se baja (scrub = atado al scroll) y cada
  hito aparece una sola vez al entrar en pantalla.
*/
export function animarTrayectoria() {
  const mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    gsap.from("[data-riel]", {
      scaleY: 0,
      ease: "none",
      scrollTrigger: { trigger: "[data-linea]", start: "top 70%", end: "bottom 60%", scrub: 0.6 },
    });

    gsap.utils.toArray("[data-hito]").forEach((hito) => {
      gsap.from(hito, {
        autoAlpha: 0,
        y: 24,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: hito, start: "top 82%", once: true },
      });
    });
  });
}

/*
  Certificados: las tres tarjetas entran escalonadas, una detrás de otra.
*/
export function animarCertificados() {
  const mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    gsap.from("[data-credencial]", {
      autoAlpha: 0,
      y: 32,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.12,
      scrollTrigger: { trigger: "[data-credenciales]", start: "top 80%", once: true },
    });
  });
}

export function animarPortada() {
  const mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    // Para "dibujar" una línea SVG: el guion mide lo mismo que la línea, y se corre ese largo.
    gsap.utils.toArray("[data-anim='trazo']").forEach((el) => {
      const largo = el.getTotalLength();
      gsap.set(el, { strokeDasharray: largo, strokeDashoffset: largo });
    });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Las líneas del nombre suben desde una máscara (cada palabra está en un span con overflow oculto).
    tl.from("[data-anim='nombre'] > span > span", { yPercent: 105, duration: 1.1, stagger: 0.12 })
      .from("[data-anim='aparece']", { autoAlpha: 0, y: 12, duration: 0.7, stagger: 0.08 }, "-=0.6")
      // Los trazos finos se dibujan: stroke-dashoffset va del largo total a 0.
      .to("[data-anim='trazo']", { strokeDashoffset: 0, duration: 1.4, ease: "power2.inOut", stagger: 0.15 }, "-=0.9")
      .from("[data-anim='ficha']", { autoAlpha: 0, y: 24, duration: 0.9 }, 0.35)
      .from("[data-anim='nodo']", { scale: 0, transformOrigin: "50% 50%", duration: 0.5, stagger: 0.1 }, "-=0.4");
  });
}
