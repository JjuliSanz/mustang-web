"use client";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { container, opacityAnimation } from "@/variants";

const Hero = () => {
  return (
    <LazyMotion features={domAnimation}>
      <m.section
        initial="hidden"
        animate="visible"
        variants={container}
        className="w-full h-[calc(100vh-50px)] mt-[50px] overflow-hidden flex flex-col relative bg-fixed bg-cover bg-center max-sm:bg-[url('/vibe/mobile/hero-mb.webp')] sm:bg-[url('/vibe/hero.jpeg')]"
        // className="w-full h-screen overflow-hidden flex flex-col relative"
        id="inicio"
      >
        <div className="w-full h-full flex flex-col sm:gap-6 items-center justify-center bg-primero/60  z-20 relative">
          {/* PHRASE */}
          <m.div className="w-fit flex flex-col items-center justify-center max-sm:gap-0 relative">
            <span className="text-2xl sm:text-3xl font-primary italic">WE ARE</span>
            <m.h1
              variants={opacityAnimation}
              className="font-primary text-sexto font-bold text-7xl 450:text-8xl sm:text-9xl ochent flex justify-center items-center"
            >
              MUSTANG
            </m.h1>
            <m.span
              variants={opacityAnimation}
              className="font-primary text-quinto font-bold italic text-2xl sm:text-3xl bg-transparent"
            >
              BAR & GRILL
            </m.span>
          </m.div>
        </div>
      </m.section>
    </LazyMotion>
  );
};

export default Hero;
