import fs from "fs";
import path from "path";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

// Asegurar prerender estático de los programas conocidos (1..10).
const TOTAL_PROGRAMS = 10;

type ProgramImage = {
  file: string;
  url: string;
  order: number;
};

export function generateStaticParams() {
  return Array.from({ length: TOTAL_PROGRAMS }, (_, i) => ({
    programId: String(i + 1),
  }));
}

function getProgramImages(programNumber: number): ProgramImage[] {
  const baseDir = path.join(process.cwd(), "public", "assets", "programas-inside");
  if (!fs.existsSync(baseDir)) return [];

  const files = fs.readdirSync(baseDir);

  const images = files
    .map((file) => {
      const program = extractProgramNumber(file);
      return {
        file,
        program,
        url: `/assets/programas-inside/${file}`,
        order: extractOrder(file),
      };
    })
    .filter((entry) => entry.program === programNumber)
    .map(({ file, url, order }) => ({ file, url, order }))
    .sort((a, b) => {
      if (a.order !== b.order) return a.order - b.order;
      return a.file.localeCompare(b.file);
    });

  return images;
}

function extractOrder(file: string): number {
  const match = file.match(/mitad(\d+)/i);
  if (match) {
    const num = parseInt(match[1], 10);
    if (Number.isFinite(num)) return num;
  }
  return Number.MAX_SAFE_INTEGER;
}

function extractProgramNumber(file: string): number | null {
  const match = file.toLowerCase().match(/^argentina(\d+)/);
  if (!match) return null;
  const num = parseInt(match[1], 10);
  return Number.isFinite(num) ? num : null;
}

export default async function ProgramaDetallePage({
  params,
}: {
  params: Promise<{ programId: string }>;
}) {
  const { programId } = await params;
  const programNumber = Number(programId);
  if (!Number.isFinite(programNumber) || programNumber < 1 || programNumber > 50) {
    notFound();
  }

  const images = getProgramImages(programNumber);
  const title = `Programa ${programNumber}`;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)]">
        <section className="pt-8 pb-16">
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 flex flex-col gap-8">
            {images.length === 0 && (
              <div className="text-center text-[color:var(--color-muted)] bg-white rounded-xl border border-[color:var(--color-muted)]/20 px-6 py-10 shadow-sm">
                Aún no hay imágenes para este programa.
              </div>
            )}

            {images.map((img) => (
              <div
                key={img.file}
                className="relative w-full rounded-lg border border-[color:var(--color-muted)]/30 shadow-sm bg-white overflow-hidden"
              >
                <Image
                  src={img.url}
                  alt={`${title} - ${img.file}`}
                  width={2000}
                  height={3200}
                  className="w-full h-auto object-contain bg-white"
                  sizes="(max-width: 768px) 100vw, (max-width: 1440px) 98vw, 1800px"
                  priority
                />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

