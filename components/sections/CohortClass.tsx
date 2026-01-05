import CohortSlider from "../CohortSlider"
import { CohortCardProps } from "@/components/CohortCard";

const cohortClassesData: CohortCardProps[] = [
  {
    title: "Paket Blok 1",
    description: "Record Cohort Class dan Try Out Intensive Blok Kardio.",
    price: 300000,
    features: ["Konsep klinis inti", "Latihan soal", "Mentoring"],
  },
  {
    title: "Paket Populer Bundling",
    description: "Full Bundling Record semua blok semester ini.",
    price: 1200000,
    features: ["Akses seumur hidup", "Konsultasi privat", "E-sertifikat", "Komunitas"],
    isPopular: true,
  },
  {
    title: "Paket Riset",
    description: "Metodologi riset dan bimbingan skripsi kedokteran.",
    price: 500000,
    features: ["Analisis data", "Penulisan jurnal", "Reviewer FK"],
  },
  {
    title: "Paket UKMPPD",
    description: "Persiapan intensif menghadapi ujian kompetensi.",
    price: 750000,
    features: ["CBT Simulai", "OSCE Prep", "Bank soal 5 tahun"],
  },
];


export default function CohortClass() {
  return (
    <section
      id="cohort"
      className="p-3.5 md:p-17.5 bg-default scroll-mt-28"
    >
      <div className="mb-10 text-center">
        <h2 className="text-primary text-3xl font-bold mb-3 md:text-4xl leading-tight">
          Kelas Cohort
        </h2>
        <p className="text-secondary text-base mx-auto leading-relaxed">
          Pelatihan dan bimbingan berbasis evidence untuk mahasiswa kedokteran di berbagai tahap pendidikan. Pilih paket yang sesuai kebutuhanmu.
        </p>
      </div>

      {/* Implementasi Slider */}
      <div className=" w-full mx-auto">
        <CohortSlider data={cohortClassesData} />
      </div>
    </section>
  )

}
