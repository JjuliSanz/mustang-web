"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectFade,
  Navigation,
  Parallax,
  Scrollbar,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import Image from "next/image";

const AboutSlider = () => {
  return (
    <Swiper
      // autoplay={{
      //   delay: 3000,
      //   reverseDirection: true,
      //   // pauseOnMouseEnter: true,
      //   waitForTransition: true,
      // }}
      slidesPerView={1}
      loop={false}
      grabCursor={false}
      parallax={true}
      effect={"fade"}
      speed={1500}
      scrollbar={{ hide: false }}
      navigation={true}
      lazyPreloadPrevNext={3}
      modules={[Parallax, EffectFade, Autoplay, Scrollbar, Navigation]}
      className="w-full !py-20"
    >
      <SwiperSlide className="w-full !flex flex-col 900:flex-row gap-6 items-center px-10 py-20" >
        {/* IMAGES */}
        <div className="w-full 900:w-1/2 mt-6 900:mt-0 flex flex-row items-center justify-center gap-4">
          <div className="flex flex-col w-1/2 h-full gap-4">
            <div
              className="relative w-full h-[200px] 900:h-[300px] "
              data-swiper-parallax-opacity="0"
              data-swiper-parallax-scale="0.8"
              data-swiper-parallax-duration="400"
            >
              <Image
                src="/vibe/vibe-6.jpeg"
                alt="Foto del restaurante"
                width={1000}
                height={1000}
                loading="lazy"
                sizes="(max-width: 768px), 50vw, 100vw"
                className="w-full h-full rounded-lg object-cover"
              />
              <div className="swiper-lazy-preloader"></div>
            </div>
            <div
              className="relative w-full h-[200px] 900:h-[300px] "
              data-swiper-parallax-opacity="0"
              data-swiper-parallax-scale="0.8"
              data-swiper-parallax-duration="600"
            >
              <Image
                src="/vibe/vibe-3.jpeg"
                alt="Foto del restaurante"
                width={1000}
                height={1000}
                loading="lazy"
                sizes="(max-width: 768px), 50vw, 100vw"
                className="w-full h-full rounded-lg object-cover"
              />
              <div className="swiper-lazy-preloader"></div>
            </div>
          </div>
          {/* SECOND ROW */}
          <div
            className="relative flex flex-col w-1/2 h-[300px] sm:h-[500px] md:h-[600px] gap-4"
            data-swiper-parallax-opacity="0"
            data-swiper-parallax-scale="0.8"
            data-swiper-parallax-duration="800"
          >
            <Image
              src="/vibe/vibe-4.jpeg"
              alt="Foto del restaurante"
              width={1000}
              height={1000}
              loading="lazy"
              sizes="(max-width: 768px), 50vw, 100vw"
              className="w-full h-full rounded-lg object-cover"
            />
            <div className="swiper-lazy-preloader"></div>
          </div>
        </div>
        {/* TEXT */}
        <div className="w-full 900:w-1/2 flex flex-col items-center gap-4">
          <h2
            data-swiper-parallax-opacity="0"
            data-swiper-parallax-scale="0.8"
            data-swiper-parallax-duration="400"
            className="py-2 text-4xl md:text-5xl text-start w-full bg-clip-text text-transparent bg-gradient-to-b from-cuarto to-primero text-stroke  z-10 font-primary"
          >
            Food Hall
          </h2>

          <p
            data-swiper-parallax-opacity="0"
            data-swiper-parallax-scale="0.8"
            data-swiper-parallax-duration="600"
            className={`text-xl md:text-2xl font-medium`}
          >
            Mustang Meat Market combina de manera única un mercado y un restaurante para ofrecer una experiencia gastronómica sin igual en Argentina. Construido a partir de un container renovado y reciclado, Mustang se destaca por su ambiente exclusivo, una amplia galería circundante, un espacioso estacionamiento y equipamiento comercial de última generación. Cada detalle ha sido cuidadosamente diseñado para asegurar la más alta calidad, desde sus productos premium hasta su servicio.
          </p>
          <p
            data-swiper-parallax-opacity="0"
            data-swiper-parallax-scale="0.8"
            data-swiper-parallax-duration="800"
            className={`text-xl md:text-2xl font-medium hidden sm:block`}
          >
            Este innovador concepto está pensado para disfrutar en cualquier momento del día: desde un café por la mañana, un brunch o picada en el deck, almuerzos de trabajo, reuniones familiares o de amigos, hasta un cóctel al atardecer en el bar. La experiencia culmina con la posibilidad de realizar una cabalgata nocturna en el cercano Hípico, seguida de una cena memorable.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-full !flex flex-col 900:flex-row gap-6 items-center px-10 py-20">
        {/* TEXT */}
        <div className="900:w-1/2 w-full flex flex-col items-center gap-4">
          <h2
            data-swiper-parallax-opacity="0"
            data-swiper-parallax-scale="0.8"
            data-swiper-parallax-duration="400"
            className="py-2 text-4xl md:text-5xl text-start w-full bg-clip-text text-transparent bg-gradient-to-b from-cuarto to-primero text-stroke  z-10 font-primary"
          >
            Tradición y Modernidad
          </h2>
          <p
            data-swiper-parallax-opacity="0"
            data-swiper-parallax-scale="0.8"
            data-swiper-parallax-duration="600"
            className={`text-xl md:text-2xl font-medium`}
          >
            Mustang no solo ha revitalizado la zona detrás de Nordelta, donde anteriormente había poco desarrollo, sino que se ha convertido en un punto de encuentro gastronómico y de entretenimiento, posicionándose como un &quot;Food Hall&quot; de referencia. Entre sus propuestas se destacan las carnes del Frigorífico Los Prados, fiambres, vinos y aderezos de alta gama, productos nacionales y europeos de excelencia.
          </p>

          <p
            data-swiper-parallax-opacity="0"
            data-swiper-parallax-scale="0.8"
            data-swiper-parallax-duration="800"
            className={`text-xl md:text-2xl font-medium hidden sm:block`}
          >
            La decoración del lugar refleja un estilo que combina modernidad con elementos de herrería artesanal. Los visitantes pueden disfrutar de su comida rodeados de motocicletas clásicas colgantes y caballos, o en la Fiambrería, observando al maestro fiambrero preparar una picada junto a los cortes de carne. Mustang Meat Market es un espacio diseñado para vivir una experiencia inolvidable, donde la gastronomía y el entretenimiento convergen en un entorno singular.
          </p>
        </div>
        {/* IMAGES */}
        <div className="900:w-1/2 w-full mt-6 900:mt-0 flex flex-row gap-4">
          <div className="flex flex-col w-full gap-4 pt-8">
            <div
              data-swiper-parallax-opacity="0"
              data-swiper-parallax-scale="0.8"
              data-swiper-parallax-duration="600"
              className="relative w-full h-48 900:h-72 "
            >
              <Image
                src="/vibe/vibe-5.jpeg"
                alt="Foto del restaurante"
                width={1000}
                height={1000}
                loading="lazy"
                sizes="(max-width: 768px), 50vw, 100vw"
                className="rounded-lg object-cover w-full h-full"
              />
              <div className="swiper-lazy-preloader"></div>
            </div>
            <div
              data-swiper-parallax-opacity="0"
              data-swiper-parallax-scale="0.8"
              data-swiper-parallax-duration="600"
              className="relative w-full h-48 900:h-72 "
            >
              <Image
                src="/vibe/vibe-8.jpeg"
                alt="Foto del restaurante"
                width={1000}
                height={1000}
                loading="lazy"
                sizes="(max-width: 768px), 50vw, 100vw"
                className="rounded-lg object-cover w-full h-full"
              />
              <div className="swiper-lazy-preloader"></div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-4 pb-8">
            <div
              data-swiper-parallax-opacity="0"
              data-swiper-parallax-scale="0.8"
              data-swiper-parallax-duration="800"
              className="relative w-full h-48 900:h-72 "
            >
              <Image
                src="/vibe/vibe-2.jpeg"
                alt="Foto del restaurante"
                width={1000}
                height={1000}
                loading="lazy"
                sizes="(max-width: 768px), 50vw, 100vw"
                className="rounded-lg object-cover w-full h-full"
              />
              <div className="swiper-lazy-preloader"></div>
            </div>
            <div
              data-swiper-parallax-opacity="0"
              data-swiper-parallax-scale="0.8"
              data-swiper-parallax-duration="1000"
              className="relative w-full h-48 900:h-72 "
            >
              <Image
                src="/vibe/vibe-9.jpeg"
                alt="Foto del restaurante"
                width={1000}
                height={1000}
                loading="lazy"
                sizes="(max-width: 768px), 50vw, 100vw"
                className="rounded-lg object-cover w-full h-full"
              />
              <div className="swiper-lazy-preloader"></div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default AboutSlider;
