import Cart from "@/components/Cart";
import Navbar from "@/components/ui/Navbar";
import { Suspense } from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense>
        <Navbar />
      </Suspense>
      {children}
      {/* MOBILE CART */}
      <Cart classNameProp="z-50 fixed bottom-4 left-4 sm:hidden text-quinto rounded-full bg-segundo border border-quinto p-2 hover:scale-95 transition ease-in duration-150 hover:opacity-70 active:scale-95 active:opacity-70" />
    </>
  );
}
