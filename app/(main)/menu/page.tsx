import { PDFIcon } from "@/assets/icons";
import Cart from "@/components/Cart";
import CardSkeleton from "@/components/menu/CardSkeleton";
import CategorySelector from "@/components/menu/CategorySelector";
import MenuList from "@/components/menu/MenuList";
import SearchBarMenu from "@/components/menu/SearchBarMenu";
import Footer from "@/components/ui/Footer";
import ToTopButton from "@/components/ui/ToTopButton";
import { getCategories } from "@/utils/serverActions";
import Link from "next/link";
import React, { Suspense } from "react";

export default async function Menu({
  searchParams,
}: {
  searchParams?: { category?: string; query?: string };
}) {
  // const categories = await getCategories();
  // const query = searchParams?.query || "";
  // const selectedCategory =
  //   searchParams?.category ||
  //   (categories.length > 0 ? categories[0].title : "");

  return (
    <main className="w-full mt-[50px] min-h-dvh relative flex flex-col ">
      {/* Fondo con imagen */}
      <div className="absolute inset-0 bg-fixed bg-cover bg-center max-sm:bg-[url('/galeria/galeria-7-mobile.webp')] sm:bg-[url('/galeria/galeria-7.jpeg')]" />

      {/* Capa de color con opacidad */}
      <div className="absolute inset-0 bg-primero/60" />

      {/* MOBILE CART */}
      <Cart classNameProp="z-50 fixed bottom-4 left-4 sm:hidden text-quinto rounded-full bg-segundo border border-quinto p-2 hover:scale-95 transition ease-in duration-150 hover:opacity-70 active:scale-95 active:opacity-70" />
     
        {/* <CategorySelector
          selectedCategory={selectedCategory}
          categories={categories}
        /> */}

        <div className="relative flex flex-col sm:flex-row gap-4 justify-center items-center mt-10 z-10">
          <SearchBarMenu placeholder="Buscar productos por su titulo" />
          <Link
            href="https://queresto.com/mustangmeatmarket/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit motion-safe:transition duration-150 ease-in-out text-lg sm:text-2xl font-medium px-6 py-2 rounded-xl flex items-center gap-2 bg-segundo border-2 border-quinto text-quinto hover:bg-quinto hover:text-segundo  active:bg-quinto active:text-segundo "
          >
            <PDFIcon width="32" height="32" />
            Menú Completo
          </Link>
        </div>

        <div
          // key={selectedCategory}
          className="grow p-8 grid grid-cols-1 600:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 z-20 relative"
        >
          <Suspense
            fallback={
              <>
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
              </>
            }
          >
            {/* <MenuList selectedCategory={selectedCategory} query={query} /> */}
          </Suspense>
        </div>
        <ToTopButton extraClass="z-20" />
        <Footer />
      
    </main>
  );
}
