import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DESTINOS } from "@/app/destinos/destinosData";

export default function DestinosPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[color:var(--color-background)] min-h-screen">
        <section className="pt-16 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--color-muted)] mb-2">
                Destinos destacados
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-[color:var(--color-foreground)]">
                ¿Dónde querés ir?
              </h1>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {DESTINOS.map((dest, idx) => (
                <Link
                  key={dest.id}
                  href={`/destinos/${dest.id}`}
                  className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] max-w-[420px] group"
                >
                  <div className="bg-white rounded-xl shadow-sm border border-[color:var(--color-muted)]/20 overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative w-full aspect-[4/5] lg:aspect-[1/1]">
                      <Image
                        src={dest.image}
                        alt={dest.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        priority={idx < 2}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white text-xl sm:text-2xl font-semibold drop-shadow">
                          {dest.title}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

