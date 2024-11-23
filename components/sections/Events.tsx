"use client";
import { Instagram, ReserveIcon } from "@/assets/icons";
import { cn } from "@/utils/cn";
import { container, opacityAnimation } from "@/variants";
import { m, useInView, LazyMotion, domAnimation } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const Video = ({
  title,
  videoUrl,
  classProp,
}: {
  title: string;
  videoUrl: string;
  classProp?: string;
}) => {
  return (
    <div className={cn("flex flex-col gap-4", classProp)}>
      <h3 className="text-center text-2xl text-quinto shadow-quinto-xs font-primary">
        {title}
      </h3>
      <m.video
        variants={opacityAnimation}
        className="w-full md:w-[300px] h-[250px] 450:h-[300px] 500:h-[350px] md:h-[400px] lg:h-[450px] object-cover  bg-segundo box-shadow-black"
        loop
        muted
        autoPlay
        disablePictureInPicture
        disableRemotePlayback
      >
        <source src={videoUrl} type="video/mp4" />
      </m.video>
    </div>
  );
};

const Events = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -200px 0px" });
  return (
    <LazyMotion features={domAnimation}>
      <m.section
        initial="hidden"
        animate={isInView && "visible"}
        variants={container}
        ref={ref}
        className="w-full bg-[url('/wood.webp')] bg-cover bg-center bg-fixed"
      >
        <div className="flex flex-col px-2 md:px-10 pt-40 pb-20 gap-10 bg-primero/60">
          <h2 className="text-4xl md:text-5xl text-center w-full bg-clip-text text-transparent bg-gradient-to-b from-cuarto to-primero text-stroke font-primary">
            MUSTANG EVENTS
          </h2>
          <div className="w-full flex flex-col sm:flex-row max-sm:items-center sm:justify-between max-lg:gap-6">
            {/* COLUM 1 */}
            <Video
              title="MUSTANG TONIC FEST"
              videoUrl="/vibe/event-1.mp4"
              classProp="sm:pb-32"
            />
            {/* COLUM 2 */}
            <Video
              title="STANCE SOCIETY ARG"
              videoUrl="/vibe/event-2.mp4"
              classProp="sm:pt-32"
            />
            {/* COLUM 3 */}
            <Video
              title="rally to nowhere"
              videoUrl="/vibe/event-3.mp4"
              classProp="sm:pb-32"
            />
          </div>
          <div className="w-full flex justify-between ">
            <Link
              href="https://mustang.meitre.com/"
              target="_blank"
              className="flex items-center gap-2 motion-safe:transition ease-in-out duration-100 hover:scale-[0.97] hover:opacity-70"
              aria-label="Resevas del restaurante, se abrirá en una nueva pestaña"
            >
              <ReserveIcon className="w-6 md:w-10 h-6 md:h-10" />
            </Link>
            <Link
              href="https://www.instagram.com/mustangbarngrill/"
              target="_blank"
              className="flex items-center gap-2 motion-safe:transition ease-in-out duration-100 hover:scale-[0.97] hover:opacity-70"
              aria-label="Instagram del restaurante, se abrirá en una nueva pestaña"
            >
              <Instagram className="w-6 md:w-10 h-6 md:h-10" />
            </Link>
          </div>
        </div>
      </m.section>
    </LazyMotion>
  );
};

export default Events;
