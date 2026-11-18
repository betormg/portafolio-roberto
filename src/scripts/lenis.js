/*
  Scroll suave con Lenis. Lo conectamos al "ticker" de GSAP para que Lenis y
  ScrollTrigger usen el mismo reloj: así las animaciones ligadas al scroll no tiemblan.
  Si la persona pidió menos movimiento (prefers-reduced-motion), no se activa.
*/
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function iniciarLenis() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return null;

  const lenis = new Lenis({
    duration: 1.1,
    anchors: { offset: -72 }, // los links #seccion también se desplazan suave, dejando lugar a la barra
  });

  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((tiempo) => lenis.raf(tiempo * 1000));
  gsap.ticker.lagSmoothing(0);

  return lenis;
}
