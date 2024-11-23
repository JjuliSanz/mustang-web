"use client";
import { container, opacityAnimation } from "@/variants";
import { m, useInView, LazyMotion, domAnimation } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowTop } from "@/assets/icons";

const Kids = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -200px 0px" });
  return (
    <LazyMotion features={domAnimation}>
      <m.section
        initial="hidden"
        animate={isInView && "visible"}
        variants={container}
        ref={ref}
        className="w-full mt-20 px-6 450:px-10 py-20 bg-primero flex flex-col md:flex-row max-md:gap-6"
      >
        {/* TEXT */}
        <div className="order-2 md:order-1 w-full md:w-1/2 flex flex-col md:justify-between max-md:gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl md:text-5xl text-center w-full bg-clip-text text-transparent bg-gradient-to-b from-cuarto to-primero text-stroke font-primary">
              KIDS ZONE + PONY KIDS CLUB
            </h2>
            <p className="text-2xl font-medium">
              El aire libre siempre es la mejor opción para los más peques!
            </p>
          </div>
          <div className="flex flex-col gap-6 md:gap-10 text-quinto">
            <p className="text-3xl font-medium ">
              Kids Zone:{" "}
              <span className="text-2xl font-normal"> todos los días.</span>
            </p>
            <p className="text-3xl font-medium ">
              Pony kids club:{" "}
              <span className="text-2xl font-normal">
                {" "}
                sábados y domingos al mediodía.
              </span>
            </p>
            <p className="text-3xl font-medium flex flex-col 600:flex-row md:flex-col lg:flex-row">
              En conjunto a:
              <Link
                href="https://www.instagram.com/clubhipicobenavidez/"
                target="_blank"
                className="text-cuarto underline text-2xl font-normal ml-1 flex items-center gap-1"
              >
                @clubhipicobenavidez <ArrowTop className="rotate-45 w-4 h-4" />
              </Link>
            </p>
          </div>
        </div>
        {/* VIDEO */}
        <div className="order-1 md:order-2 w-full md:w-1/2 h-[300px] md:h-[450px] 850:px-4 flex justify-center items-center">
          <m.video
            variants={opacityAnimation}
            className="w-full h-full object-cover border-2 border-quinto p-2 bg-gradient-to-b from-cuarto to-primero"
            loop
            muted
            autoPlay
            disablePictureInPicture
            disableRemotePlayback
          >
            <source src="/vibe/kids.mp4" type="video/mp4" />
          </m.video>
        </div>
      </m.section>
    </LazyMotion>
  );
};

export default Kids;
