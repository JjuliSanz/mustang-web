"use client";
import React from "react";
import { useRef } from "react";
import { m, useInView, LazyMotion, domAnimation } from "framer-motion";
import { container, opacityAnimation } from "@/variants";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -200px 0px" });
  return (
    <LazyMotion features={domAnimation}>
      <m.section
        initial="hidden"
        animate={isInView && "visible"}
        variants={container}
        ref={ref}
        id="nosotros"
        className="w-full bg-primero flex pt-[200px] mt-20 relative"
      >
        <m.div className="w-[90%] xl:w-[85%] absolute transform top-0 left-1/2 -translate-x-1/2 p-6 text-2xl flex flex-col gap-2 items-center justify-center box-shadow-cuarto-xs bg-segundo">
          <m.h2
            variants={opacityAnimation}
            className="text-2xl sm:text-4xl font-semibold text-center text-transparent text-stroke shadow-cuarto "
          >
            ALL SET FOR YOU
          </m.h2>

          <m.p
            variants={opacityAnimation}
            className="text-quinto text-base 400:text-lg 500:text-xl md:text-2xl font-medium "
          >
            En Mustang, ofrecemos una experiencia gastronómica única que destaca
            por la calidad inigualable de nuestra comida y un servicio
            excepcional. 
          </m.p>

          <m.p
            variants={opacityAnimation}
            className="text-quinto text-base 400:text-lg 500:text-xl md:text-2xl font-medium "
          >
            Cada detalle ha sido cuidadosamente pensado para crear
            un ambiente exclusivo, donde la estética moderna se mezcla con un
            toque de tradición, invitando a nuestros visitantes a disfrutar de
            momentos memorables.
          </m.p>

          <m.p
            variants={opacityAnimation}
            className="text-quinto text-base 400:text-lg 500:text-xl md:text-2xl font-medium hidden lg:block"
          >
            Nos enorgullecemos de nuestra selecta oferta de productos de primer
            nivel, que van desde cortes de carne premium hasta una cuidada
            selección de fiambres, vinos y aderezos. Todo está diseñado para
            garantizar una experiencia que deleite los sentidos, con un entorno
            acogedor y sofisticado que refleja nuestro compromiso con la
            excelencia.
          </m.p>
          <m.p
            variants={opacityAnimation}
            className="text-quinto text-base 400:text-lg 500:text-xl md:text-2xl font-medium hidden 600:block"
          >
            Somos más que un restaurante y un market; somos un espacio donde la
            buena comida, el entretenimiento y un entorno incomparable se
            combinan para ofrecerte momentos inolvidables. En Mustang, cada
            visita es más que una comida; es una celebración de buen gusto y
            estilo.
          </m.p>
        </m.div>

        <div className="w-full h-[400px] sm:h-[500px] bg-cover bg-center bg-fixed max-sm:bg-[url('/vibe/mobile/vibe-1-mb.webp')] sm:bg-[url('/vibe/vibe-1.jpeg')]"></div>
      </m.section>
    </LazyMotion>
  );
};

export default About;
