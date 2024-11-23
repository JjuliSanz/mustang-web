"use client";
import { useRef } from "react";
import { m, useInView, LazyMotion, domAnimation } from "framer-motion";
import Link from "next/link";
import { container, left } from "@/variants";
import {
  ArrowTop,
  ClockIcon,
  Facebook,
  Instagram,
  PinIcon,
  ReserveIcon,
} from "@/assets/icons";

const ContactUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -200px 0px" });
  return (
    <LazyMotion features={domAnimation}>
      <m.section
        initial="hidden"
        animate={isInView && "visible"}
        variants={container}
        ref={ref}
        className="relative w-full mt-20 bg-segundo"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11025.212221004133!2d-58.6730781!3d-34.3979958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca1c7cefe3423%3A0x9e10837c9b2d24f3!2sMustang%20Bar%20%26%20Grill!5e1!3m2!1sen!2sar!4v1731872939218!5m2!1sen!2sar"
          className="border-none w-[60%] lg:w-full h-[300px] md:h-[500px] opacity-40"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <m.ul className="w-[200px] 450:w-[250px] 500:w-[280px] sm:w-fit h-[400px] md:h-[600px] absolute right-0 lg:right-[80px] top-1/2 transform -translate-y-1/2 about-shadow bg-quinto p-4 md:p-10 flex flex-col justify-between text-sm 450:text-lg sm:text-xl md:text-2xl font-semibold text-segundo z-20">
          {/* ADDRESS */}
          <m.li variants={left} className="flex items-center gap-2 w-fit">
            <PinIcon className="w-6 md:w-10 h-6 md:h-10" /> RP27 10500,
            Benavídez, Buenos Aires.
          </m.li>
          {/* RESERVE */}
          <m.li variants={left} className="w-fit">
            <Link
              href="https://mustang.meitre.com/"
              target="_blank"
              className="flex items-center gap-2 motion-safe:transition ease-in-out duration-100 hover:scale-[0.97] hover:opacity-70"
              aria-label="Resevas del restaurante, se abrirá en una nueva pestaña"
            >
              <ReserveIcon className="w-6 md:w-10 h-6 md:h-10" />
              <div className="flex items-center gap-1">
                <span> Reservas</span>{" "}
                <ArrowTop className="rotate-45 w-4 h-4" />
              </div>
            </Link>{" "}
          </m.li>
          {/* WHATSAPP */}
          {/* <m.li variants={left} className="w-fit">
            <Link
              href="https://api.whatsapp.com/send?phone=541147844364"
              target="_blank"
              className="flex items-center gap-2 motion-safe:transition ease-in-out duration-100 hover:scale-[0.97] hover:opacity-70"
              aria-label="WhatsApp del restaurante, se abrirá en una nueva pestaña"
            >
              <Whatsapp className="w-5 md:w-10 h-5 md:h-10" />
              <div className="flex items-center gap-1">
                <span> +54 11 4784-4364</span>{" "}
                <ArrowTop className="rotate-45 w-4 h-4" />
              </div>
            </Link>
          </m.li> */}
          {/* DELIVERY */}
          {/* <m.li variants={left} className="w-fit">
            <Link
              href="https://www.pedidosya.com.ar/restaurantes/buenos-aires/selquet-83ae4641-af74-4c1c-90aa-a40abe57ee9d-menu"
              target="_blank"
              className="flex items-center gap-2 motion-safe:transition ease-in-out duration-100 hover:scale-[0.97] hover:opacity-70"
              aria-label="Pedidos Ya del restaurante, se abrirá en una nueva pestaña"
            >
              <DeliveryIcon className="w-6 md:w-10 h-6 md:h-10" />
              <div className="flex items-center gap-1">
                <span> Pedidos ya</span>{" "}
                <ArrowTop className="rotate-45 w-4 h-4" />
              </div>
            </Link>
          </m.li> */}
          {/* TIME */}
          <m.li variants={left} className="flex items-center gap-2 w-fit">
            <ClockIcon className="w-6 md:w-10 h-6 md:h-10" />{" "}
            <span> Lunes a Sábados de 9:30am a 00hs</span>
          </m.li>
          <m.li variants={left} className="flex items-center gap-2 w-fit">
            <ClockIcon className="w-6 md:w-10 h-6 md:h-10" />{" "}
            <span> Domingos 9:30am a 16pm</span>
          </m.li>
          {/* SOCIALS */}
          <m.li
            variants={left}
            className="w-full flex items-center justify-center gap-6 "
          >
            <Link
              href="https://www.instagram.com/mustangbarngrill/"
              target="_blank"
              className="flex items-center gap-2 motion-safe:transition ease-in-out duration-100 hover:scale-[0.97] hover:opacity-70"
              aria-label="Instagram del restaurante, se abrirá en una nueva pestaña"
            >
              <Instagram className="w-6 md:w-10 h-6 md:h-10" />
            </Link>
            <Link
              href="https://www.facebook.com/MustangMeatMarket/"
              className="flex items-center gap-2 transition ease-in-out duration-100 hover:scale-[0.97] hover:opacity-70"
              target="_blank"
              aria-label="Facebook del restaurante, se abrirá en una nueva pestaña"
            >
              <Facebook className="w-6 md:w-10 h-6 md:h-10" />
            </Link>
            {/* <Link
              href="mailto:info@selquet.com"
              target="_blank"
              className="flex items-center gap-2 transition ease-in-out duration-100 hover:scale-[0.97] hover:opacity-70"
              aria-label="Mail del restaurante, se abrirá en una nueva pestaña"
            >
              <MailIcon className="w-6 md:w-10 h-6 md:h-10" />
            </Link> */}
          </m.li>
        </m.ul>
      </m.section>
    </LazyMotion>
  );
};

export default ContactUs;
