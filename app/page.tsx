import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import CohortClass from "@/components/sections/CohortClass";
import Faq from "@/components/sections/Faq";
import Testimonial from "@/components/sections/Testimonial";
import Order from "@/components/sections/Order";
import Private from "@/components/sections/Private";

export default function Home() {

  return (
    <main className="pt-14 md:pt-0 overflow-x-hidden">

      {/* HERO SECTION */}
      <Hero />

      {/* ABOUT SECTION */}
      <About />

      {/* COHORT SECTION */}
      <CohortClass />

      {/* PRIVATE CLASS SECTION */}
      <Private />

      {/* ORDER FORM SECTION */}
      <Order />

      {/* TESTIMONIAL SECTION */}
      <Testimonial />

      {/* FAQ SECTION */}
      <Faq />

    </main>
  );
}
