"use client";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
}
