import CohortSlider from "../CohortSlider"
import { CohortCardProps } from "@/components/CohortCard";

// const cohortClassesData: CohortCardProps[] = [
//   {
//     title: "Paket Blok 1",
//     description: "Record Cohort Class dan Try Out Intensive Blok Kardio.",
//     price: 300000,
//     features: ["Konsep klinis inti", "Latihan soal", "Mentoring"],
//   },
//   {
//     title: "Paket Populer Bundling",
//     description: "Full Bundling Record semua blok semester ini.",
//     price: 1200000,
//     features: ["Akses seumur hidup", "Konsultasi privat", "E-sertifikat", "Komunitas"],
//     isPopular: true,
//   },
//   {
//     title: "Paket Riset",
//     description: "Metodologi riset dan bimbingan skripsi kedokteran.",
//     price: 500000,
//     features: ["Analisis data", "Penulisan jurnal", "Reviewer FK"],
//   },
//   {
//     title: "Paket UKMPPD",
//     description: "Persiapan intensif menghadapi ujian kompetensi.",
//     price: 750000,
//     features: ["CBT Simulai", "OSCE Prep", "Bank soal 5 tahun"],
//   },
// ];

type CohortSectionData = {
  title?: string;
  description?: string;
  packages?: Array<{
    title: string;
    description?: string;
    price: number;
    features?: string[];
    isPopular?: boolean;
    buttonText?: string;
  }>;
};


export default function CohortClass({ data }: { data?: CohortSectionData }) {

  const items: CohortCardProps[] = (data?.packages || []).map((p) => ({
    title: p.title,
    description: p.description || "",
    price: Number(p.price || 0),
    features: p.features || [],
    isPopular: !!p.isPopular,
    buttonText: p.buttonText,
  }));

  return (
    <section
      id="cohort"
      className="p-3.5 md:p-17.5 bg-default scroll-mt-8"
    >
      <div className="mb-10 text-center">
        <h2 className="text-primary text-3xl font-bold mb-3 md:text-4xl leading-tight">
          {data?.title ?? "Kelas Cohort"}
        </h2>
        <p className="text-secondary text-base mx-auto leading-relaxed max-w-prose">
          {data?.description ?? "Pelatihan dan bimbingan berbasis evidence untuk mahasiswa kedokteran di berbagai tahap pendidikan. Pilih paket yang sesuai kebutuhanmu."}
        </p>
      </div>

      {/* Implementasi Slider */}
      <div className=" w-full mx-auto">
        <CohortSlider data={items} />
      </div>
    </section>
  )

}
