/*
  Animaciones con GSAP. gsap.matchMedia() permite definir animaciones solo cuando
  NO se pidió movimiento reducido; en ese caso el contenido queda visible tal cual.
*/
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Prepara una línea SVG para "dibujarse": el guion mide lo mismo que la línea y se corre ese largo.
function ocultarTrazo(el) {
  const largo = el.getTotalLength();
  gsap.set(el, { strokeDasharray: largo, strokeDashoffset: largo });
}

/*
  Árbol de habilidades.
  Escritorio: la sección queda fija (pin) y una línea de tiempo atada al scroll (scrub)
  dibuja raíces → tronco → ramas. Cada rama arranca cuando el tronco llega a su altura,
  y cada hoja aparece cuando la rama pasa por su ramita.
  Celular: sin pin; el tronco crece con el scroll y las ramas aparecen al entrar.
*/
export function animarArbol(ajustarEscala) {
  const mm = gsap.matchMedia();
  const TRONCO = { inicio: 0.5, duracion: 2 }; // en "segundos" de la línea de tiempo
  const RAMA = 1.2;

  mm.add("(min-width: 1024px)", () => {
    // Antes de que ScrollTrigger mida la página, el escenario tiene que tener su tamaño final.
    ScrollTrigger.addEventListener("refreshInit", ajustarEscala);
    return () => ScrollTrigger.removeEventListener("refreshInit", ajustarEscala);
  });

  mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
    const raices = gsap.utils.toArray("[data-raiz]");
    const tronco = document.querySelector("[data-tronco]");
    raices.forEach(ocultarTrazo);
    ocultarTrazo(tronco);

    const tl = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: "[data-arbol]",
        start: "top top",
        end: "+=1800",
        pin: true,
        scrub: 0.8,
        anticipatePin: 1,
      },
    });

    tl.to(raices, { strokeDashoffset: 0, duration: 0.8, stagger: 0.05 }, 0)
      .from("[data-etiqueta-raiz]", { autoAlpha: 0, y: 8, duration: 0.3 }, 0.5)
      .to(tronco, { strokeDashoffset: 0, duration: TRONCO.duracion }, TRONCO.inicio)
      .from("[data-yema]", { autoAlpha: 0, scale: 0, transformOrigin: "50% 50%", duration: 0.3 }, TRONCO.inicio + TRONCO.duracion);

    gsap.utils.toArray("[data-rama]").forEach((rama) => {
      const r = rama.dataset.rama;
      const inicio = TRONCO.inicio + Number(rama.dataset.altura) * TRONCO.duracion;
      const trazo = rama.querySelector("[data-trazo-rama]");
      ocultarTrazo(trazo);

      tl.to(trazo, { strokeDashoffset: 0, duration: RAMA }, inicio)
        .from(rama.querySelector("[data-punta]"), { autoAlpha: 0, duration: 0.2 }, inicio + RAMA - 0.1)
        .from(`[data-nombre-rama="${r}"]`, { autoAlpha: 0, x: 0, duration: 0.3 }, inicio + RAMA - 0.2);

      rama.querySelectorAll("[data-ramita]").forEach((ramita) => {
        const i = ramita.dataset.ramita;
        const llega = inicio + Number(ramita.dataset.t) * RAMA;
        ocultarTrazo(ramita);
        tl.to(ramita, { strokeDashoffset: 0, duration: 0.2 }, llega).from(
          `[data-hoja-rama="${r}"][data-hoja="${i}"] > .pildora`,
          { autoAlpha: 0, scale: 0.85, duration: 0.25, ease: "power2.out" },
          llega + 0.15,
        );
      });
    });

    // Un respiro al final, con el árbol completo, antes de soltar la sección.
    tl.to({}, { duration: 0.6 });
  });

  mm.add("(max-width: 1023px) and (prefers-reduced-motion: no-preference)", () => {
    gsap.from("[data-tronco-movil]", {
      scaleY: 0,
      ease: "none",
      scrollTrigger: { trigger: "[data-arbol-movil]", start: "top 75%", end: "bottom 70%", scrub: 0.6 },
    });
    gsap.utils.toArray("[data-rama-movil]").forEach((rama) => {
      gsap.from(rama, {
        autoAlpha: 0,
        x: -12,
        duration: 0.7,
        ease: "power3.out",
        clearProps: "transform", // sin transform, la rama no tapa la tarjeta de evidencia de otra
        scrollTrigger: { trigger: rama, start: "top 85%", once: true },
      });
    });
  });
}

/*
  Proyectos: cada proyecto aparece al entrar, y las tablas del modelo de datos
  se "arman" una por una.
*/
export function animarProyectos() {
  const mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    gsap.utils.toArray("[data-proyecto]").forEach((proyecto) => {
      gsap.from(proyecto, {
        autoAlpha: 0,
        y: 32,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: proyecto, start: "top 80%", once: true },
      });
    });
    gsap.from("[data-tabla]", {
      autoAlpha: 0,
      y: 12,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.1,
      clearProps: "transform", // sin transform queda libre el resaltado al pasar el mouse
      scrollTrigger: { trigger: "[data-modelo]", start: "top 80%", once: true },
    });
  });
}

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
