"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { m, useInView, LazyMotion, domAnimation } from "framer-motion";
import { container, opacityAnimation } from "@/variants";

const Item = ({ image, title }: { image: string; title: string }) => {
  return (
    <m.div
      variants={opacityAnimation}
      className="relative group w-full col-span-1 h-[200px] md:h-[300px] flex items-center justify-center overflow-hidden rounded-lg"
    >
      {/* Imagen */}
      <Image
        src={image}
        alt={`image-${title}`}
        width={600}
        height={600}
        sizes="(max-width: 768px) 50vw, 100vw"
        className="absolute inset-0 w-full h-full object-cover rounded-lg"
      />
      
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.6),rgba(0,0,0,0.9))] opacity-100 group-hover:opacity-100 transition-opacity duration-300 rounded-lg lg:opacity-0"></div>
           
      <h3 className="w-full relative z-10 text-lg 400:text-2xl text-center font-primary text-quinto px-2 break-words opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {title}
      </h3>
    </m.div>
  );
};


const WeServe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <LazyMotion features={domAnimation}>
      <m.section
        ref={ref}
        initial="hidden"
        animate={isInView && "visible"}
        variants={container}
        className="w-full mt-20 px-4 sm:px-10 py-20 flex flex-col items-center justify-center gap-10 wrap bg-primero"
      >
        <m.h2
          variants={opacityAnimation}
          className="text-4xl md:text-5xl text-center w-full py-2 bg-clip-text text-transparent bg-gradient-to-b from-cuarto to-primero text-stroke font-primary"
        >
          Nuestro Menú!
        </m.h2>
        <div className="w-full grid grid-cols-2 900:grid-cols-4 gap-4 ">
          <Item image="/comida/entrada.jpeg" title="Entradas" />
          <Item image="/comida/malfatti.jpeg" title="Principales" />
          <Item image="/comida/parrilla.jpeg" title="Parrilla" />
          <Item image="/comida/burgers.jpeg" title="Burgers" />
          <Item image="/comida/pure.jpeg" title="Guarniciones" />
          <Item image="/comida/salad.jpeg" title="Ensaladas" />
          <Item image="/comida/volcan-choco.jpeg" title="Postres" />
          <Item image="/comida/campari-orange.jpeg" title="Tragos" />
        </div>

        <m.p
          variants={opacityAnimation}
          className="text-xl text-quinto font-medium italic"
        >
          and more!
        </m.p>
        <m.button variants={opacityAnimation} className="w-fit mx-auto">
          <Link
            href="/menu"
            target="_blank"
            className="w-fit  motion-safe:transition duration-150 ease-in-out font-semibold font-primary uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none hover:scale-[0.97] flex items-center gap-2 bg-segundo border-2 border-quinto text-quinto hover:bg-cuarto hover:text-segundo hover:border-cuarto active:bg-tercero active:text-segundo active:border-tercero"
          >
            VER MÁS
          </Link>
        </m.button>
      </m.section>
    </LazyMotion>
  );
};

export default WeServe;
