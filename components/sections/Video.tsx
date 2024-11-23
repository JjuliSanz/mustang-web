"use client";
import { container, opacityAnimation } from "@/variants";
import { m, useInView, LazyMotion, domAnimation } from "framer-motion";
import { useRef } from "react";

const Video = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -200px 0px" });
  return (
    <LazyMotion features={domAnimation}>
      <m.section
        initial="hidden"
        animate={isInView && "visible"}
        variants={container}
        ref={ref}
        className="w-full max-sm:bg-[url('/vibe/mobile/vibe-12-mb.webp')] sm:bg-[url('/vibe/vibe-12.jpeg')] bg-fixed bg-cover bg-center"
      >
        <div className="flex justify-center flex-wrap gap-6 px-1 lg:px-10 py-40 bg-primero/40">
          <m.video
            variants={opacityAnimation}
            className="w-[170px] 450:w-[200px] 500:w-[230px] 600:w-[280px] md:w-[300px] h-[250px] 450:h-[300px] 500:h-[350px] md:h-[400px] lg:h-[450px] object-cover box-shadow-quinto-xs border-2 border-quinto bg-segundo p-4"
            loop
            muted
            autoPlay
            disablePictureInPicture
            disableRemotePlayback
          >
            <source src="/vibe/video.mp4" type="video/mp4" />
          </m.video>
          <m.video
            variants={opacityAnimation}
            className="w-[170px] 450:w-[200px] 500:w-[230px] 600:w-[280px] md:w-[300px] h-[250px] 450:h-[300px] 500:h-[350px] md:h-[400px] lg:h-[450px] object-cover box-shadow-quinto-xs border-2 border-quinto bg-segundo p-4"
            loop
            muted
            autoPlay
            disablePictureInPicture
            disableRemotePlayback
          >
            <source src="/vibe/video-2.mp4" type="video/mp4" />
          </m.video>
          <m.video
            variants={opacityAnimation}
            className="w-[170px] 450:w-[200px] 500:w-[230px] 600:w-[280px] md:w-[300px] h-[250px] 450:h-[300px] 500:h-[350px] md:h-[400px] lg:h-[450px] object-cover box-shadow-quinto-xs border-2 border-quinto bg-segundo p-4"
            loop
            muted
            autoPlay
            disablePictureInPicture
            disableRemotePlayback
          >
            <source src="/vibe/video-3.mp4" type="video/mp4" />
          </m.video>
        </div>
      </m.section>
    </LazyMotion>
  );
};

export default Video;
