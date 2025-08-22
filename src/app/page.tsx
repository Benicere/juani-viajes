import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
// import FeaturedServices from "@/components/FeaturedServices";
// import Testimonials from "@/components/Testimonials";
import FAQs from "@/components/FAQs";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <IntroSection />
        {/* <FeaturedServices /> */}
        {/* <Testimonials /> */}
        <FAQs />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
