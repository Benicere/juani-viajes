import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DESTINOS } from "@/app/destinos/destinosData";

export function generateStaticParams() {
  return DESTINOS.map((d) => ({ destinoId: d.id }));
}

export default async function DestinoDetallePage({
  params,
}: {
  params: Promise<{ destinoId: string }>;
}) {
  const { destinoId } = await params;
  const destino = DESTINOS.find((d) => d.id === destinoId);
  if (!destino) notFound();

  return (
    <>
      <Navbar />
      <main className="bg-[color:var(--color-background)] min-h-screen">
        <section className="pt-16 pb-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--color-muted)] mb-2">
                Destinos destacados
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-[color:var(--color-foreground)]">
                {destino.title}
              </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-stretch">
              {destino.trips.map((trip, idx) => (
                <div
                  key={trip.title}
                  className="bg-white rounded-xl shadow-sm border border-[color:var(--color-muted)]/20 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={trip.image}
                      alt={trip.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={idx < 2}
                    />
                  </div>
                  <div className="px-4 py-3 text-left">
                    <p className="text-base font-semibold text-[color:var(--color-foreground)]">
                      {trip.title}
                    </p>
                    <p className="text-sm text-[color:var(--color-muted)] leading-snug mt-1">
                      {trip.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


