import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NosotrosPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white">
        <section className="py-24">
          <div className="container">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">Sobre Nosotros</h1>
              <p className="text-lg text-[color:var(--color-muted)] max-w-2xl mx-auto">
                Conoce nuestro equipo y la pasión que ponemos en cada trabajo
              </p>
            </div>
            
            {/* Placeholder para contenido sobre nosotros */}
            <div className="mt-16 text-center">
              <p className="text-[color:var(--color-muted)]">
                Contenido sobre nosotros próximamente...
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
