import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ServiciosPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white">
        <section className="py-24">
          <div className="container">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">Nuestros Servicios</h1>
              <p className="text-lg text-[color:var(--color-muted)] max-w-2xl mx-auto">
                Especialistas en tatuajes y piercings con la más alta calidad y profesionalismo
              </p>
            </div>
            
            {/* Placeholder para contenido de servicios */}
            <div className="mt-16 text-center">
              <p className="text-[color:var(--color-muted)]">
                Contenido de servicios próximamente...
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
