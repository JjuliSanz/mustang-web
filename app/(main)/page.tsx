import {
  ContactUs,
  Hero,
  About,
  WeServe,
  Video,
  Gallery,
  Kids,
  Events,
} from "@/components/sections";
import AboutSlider from "@/components/sliders/AboutSlider";
import Footer from "@/components/ui/Footer";

export default async function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <WeServe />
      <About />
      {/* <Servicies /> */}
      <Kids />
      <ContactUs />
      <Events />
      <AboutSlider />
      <Video />
      <Gallery />
      <Footer />
    </div>
  );
}
