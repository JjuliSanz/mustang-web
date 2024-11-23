import {
  Instagram,
  Facebook,
  ArrowTop,
  ReserveIcon,
  PDFIcon,
} from "@/assets/icons/index";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative flex flex-col place-items-center pt-8 pb-2 gap-6 mt-32 w-full mx-auto bg-primero/60">
      <hr className="absolute top-0 h-[2px] w-full min-w-[18rem] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-quinto to-transparent bg-center" />

      <div className="flex flex-col gap-4 sm:flex-row lg:gap-6 text-quinto text-center text-xl font-serif font-semibold items-center">
        <div className="flex items-center gap-4">
          <span>
            {/* © 2024 CENTENARIO  */}
            &copy; {new Date().getFullYear()}
          </span>
          <Image
            alt="logo"
            src="/logo.webp"
            width={100}
            height={100}
            className="w-14 object-cover"
          />
        </div>
        <span aria-hidden="true" className="hidden sm:inline">
          |
        </span>
        <div className="flex items-center gap-4">
          {/* INSTAGRAM */}
          <Link
            href="https://www.instagram.com/mustangbarngrill/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:scale-110 hover:opacity-70 motion-safe:transition ease-in-out duration-300 motion-reduce:scale-100 text-quinto "
            aria-label="Instagram del restaurante, se abrirá en una nueva pestaña"
          >
            <Instagram className="w-6 h-6" />
          </Link>

          {/* WHATSAPP */}
          {/* <Link
            href="https://api.whatsapp.com/send?phone=541147844364"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:scale-110 hover:opacity-70 motion-safe:transition ease-in-out duration-300 motion-reduce:scale-100 text-quinto  "
            aria-label="Whatsapp del restaurante, se abrirá en una nueva pestaña"
          >
            <Whatsapp width={24} height={24} />
          </Link> */}

          {/* RESERVAS */}
          <Link
            href="https://mustang.meitre.com/"
            target="_blank"
            className="inline-block hover:scale-110 hover:opacity-70 motion-safe:transition ease-in-out duration-300 motion-reduce:scale-100 text-quinto "
            aria-label="Resevas del restaurante, se abrirá en una nueva pestaña"
          >
            <ReserveIcon width={24} height={24} />
          </Link>

          {/* DELIVERY */}
          {/* <Link
            href="https://www.pedidosya.com.ar/restaurantes/buenos-aires/selquet-83ae4641-af74-4c1c-90aa-a40abe57ee9d-menu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:scale-110 hover:opacity-70 motion-safe:transition ease-in-out duration-300 motion-reduce:scale-100 text-quinto text-3xl "
            aria-label="Pedidos ya del restaurante, se abrirá en una nueva pestaña"
          >
            <DeliveryIcon width={24} height={24} />
          </Link> */}

          {/* Facebook */}
          <Link
            href="https://www.facebook.com/MustangMeatMarket/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:scale-110 hover:opacity-70 motion-safe:transition ease-in-out duration-300 motion-reduce:scale-100 text-quinto text-3xl "
            aria-label="Facebook del restaurante, se abrirá en una nueva pestaña"
          >
            <Facebook width={24} height={24} />
          </Link>

          {/* MENU */}
          <Link
            href="https://queresto.com/mustangmeatmarket/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:scale-110 hover:opacity-70 motion-safe:transition ease-in-out duration-300 motion-reduce:scale-100 text-quinto text-3xl "
          >
            <PDFIcon width={24} height={24} />
          </Link>
        </div>
      </div>
      <hr
        aria-hidden="true"
        className="h-[2px] w-full min-w-[18rem] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-quinto to-transparent bg-center"
      />

      <span className="text-quinto text-center text-base font-serif font-semibold flex gap-1">
        Made by
        <Link
          href="https://my-portfoli-website.netlify.app/"
          className="underline flex items-center hover:scale-95 transition ease-in duration-150 hover:opacity-70 active:scale-95 active:opacity-70"
          aria-label="Portfolio del desarrollador, se abrirá en una nueva pestaña"
        >
          Julian Sanz
          <ArrowTop className="w-4 rotate-45" />
        </Link>
      </span>
    </footer>
  );
};

export default Footer;
