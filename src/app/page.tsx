import HeroSlider from "../components/HeroSlider";
import ImpactCounter from "../components/ImpactCounter";
import AboutSection from "../components/AboutSection";
import AreasOfWorkSection from "../components/AreasOfWorkSection";
import ProjectsSection from "../components/ProjectsSection";
import GallerySection from "../components/GallerySection";
import PartnersSection from "../components/PartnersSection";
import TestimonialsSection from "../components/TestimonialsSection";
import DonateCTASection from "../components/DonateCTASection";
import Newsletter from "../components/Newsletter";

export default function Page() {
return ( <main className="overflow-hidden bg-white">

  <HeroSlider />

  <section id="impact">
    <ImpactCounter />
  </section>

  <section id="about">
    <AboutSection />
  </section>

  <section id="areas-of-work">
    <AreasOfWorkSection />
  </section>

  <section id="projects">
    <ProjectsSection />
  </section>

  <section id="gallery">
    <GallerySection />
  </section>

  <section id="partners">
    <PartnersSection />
  </section>

  <section id="testimonials">
    <TestimonialsSection />
  </section>

  <section id="donate">
    <DonateCTASection />
  </section>

  <section id="newsletter">
    <Newsletter />
  </section>

</main>

);
}
