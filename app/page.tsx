import Image from "next/image";
import Button from "@/components/Button";

// Assets
import heroImage from "@/public/images/hero-image-dummy.png";
import faqImage from "@/public/images/home-faq-doctor-writing-on-her-note.png";
import aboutImage from "@/public/images/home-about-doctor-holding-pen.png";
import testimonialImage from "@/public/images/home-testimonial-doctor-writing.png";

// Components
import { CohortCardProps } from "@/components/CohortCard";
import PrivateClassCard from "@/components/PrivateClassCard";
import OrderForm from "@/components/OrderForm";
import TestimonialCard from "@/components/TestimonialCard";
import AccordionGroup, { FAQItemData } from "@/components/AccordionGroup";
import CohortSlider from "@/components/CohortSlider";

// 1. DATA DEFINITION
const faqData: FAQItemData[] = [
  {
    id: 1,
    question: "Bagaimana cara melakukan pemesanan?",
    answer: "Anda dapat melakukan pemesanan langsung melalui website kami dengan memilih produk yang diinginkan, menambahkannya ke keranjang, dan mengikuti instruksi checkout yang tersedia."
  },
  {
    id: 2,
    question: "Apakah ada garansi pengembalian uang?",
    answer: "Ya, kami memberikan garansi 30 hari uang kembali jika produk yang Anda terima tidak sesuai dengan deskripsi atau mengalami kerusakan teknis yang tidak bisa diperbaiki."
  },
  {
    id: 3,
    question: "Metode pembayaran apa saja yang didukung?",
    answer: "Kami mendukung berbagai metode pembayaran termasuk transfer bank (BCA, Mandiri, BNI), kartu kredit, serta e-wallet seperti GoPay, OVO, dan Dana."
  },
  {
    id: 4,
    question: "Berapa lama waktu pengiriman biasanya?",
    answer: "Untuk wilayah Jabodetabek, pengiriman biasanya memakan waktu 1-2 hari kerja. Untuk luar wilayah tersebut, estimasi waktu adalah 3-5 hari kerja tergantung ekspedisi yang dipilih."
  },
  {
    id: 5,
    question: "Apakah saya bisa membatalkan langganan kapan saja?",
    answer: "Tentu saja. Anda dapat membatalkan langganan kapan saja melalui pengaturan akun Anda tanpa biaya tambahan. Akses Anda akan tetap aktif hingga akhir periode penagihan berjalan."
  }
];
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

export default function Home() {
  return (
    <main className="pt-14 md:pt-0 overflow-x-hidden">

      {/* Hero Section -> ID: #home */}
      <section
        id="home"
        className="m-4 md:min-h-screen md:grid md:grid-cols-2 md:items-center md:px-16 lg:px-24 scroll-mt-28"
      >
        <div className="order-2 md:order-2 flex justify-center md:justify-end">
          <Image
            src={heroImage}
            width={600}
            height={600}
            alt="Ilustrasi dokter profesional StrataAcademy"
            priority
            className="object-contain w-full max-w-125 md:max-w-full"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="mt-8 md:mt-0 order-1 md:order-1">
          <h1 className="text-primary font-bold text-3xl mb-4 md:text-5xl lg:text-6xl leading-tight">
            Belajar kedokteran dengan metode terstruktur dan berbasis bukti.
          </h1>
          <p className="text-base text-secondary leading-relaxed max-w-prose mb-8">
            StrataAcademy adalah platform pembelajaran kedokteran yang membantu mahasiswa memahami konsep klinis dan riset secara mendalam, bukan sekadar hafalan. Telah diikuti oleh puluhan mahasiswa FK melalui pembelajaran yang interaktif dan sistematis.
          </p>
          <div className="flex gap-x-3 items-center justify-center md:justify-start">
            <Button variant="primary" size="md">Cohort Class</Button>
            <Button variant="secondary" size="md">Private Class</Button>
          </div>
        </div>

        {/* Hero Image  */}
      </section>

      {/* About section -> ID: #about */}
      <section
        id="about"
        className="m-4 py-10 bg-default rounded-3xl md:mx-16 lg:mx-17.5 lg:p-7.5 md:grid md:grid-cols-[400px_1fr] md:gap-12 items-center scroll-mt-28"
      >
        <div className="flex items-center justify-center mb-8 md:mb-0">
          <Image
            src={aboutImage}
            width={400}
            height={400}
            alt="Tentang StrataAcademy"
            className="w-full max-w-[300px] md:max-w-full h-auto"
          />
        </div>

        <div className="space-y-6 px-4 md:px-0">
          <div className="p-6 border border-white rounded-2xl shadow-sm bg-white/50 backdrop-blur-sm">
            <h2 className="mb-3 text-2xl font-bold text-primary md:text-4xl">Sekilas Tentang Kami</h2>
            <p className="text-secondary leading-relaxed">
              StrataAcademy adalah platform pembelajaran kedokteran yang membantu mahasiswa memahami konsep klinis dan riset secara mendalam.
            </p>
          </div>

          <div className="p-6 border border-white rounded-2xl shadow-sm bg-white/50 backdrop-blur-sm">
            <p className="text-secondary leading-relaxed">
              Kami berfokus pada pemahaman fundamental, bukan sekadar hafalan. Telah diikuti oleh puluhan mahasiswa FK melalui pembelajaran yang interaktif dan sistematis.
            </p>
          </div>
        </div>
      </section>

      <section
        id="cohort"
        className="py-16 px-4.5 bg-default  scroll-mt-28"
      >
        <div className="mb-10 text-center px-4">
          <h2 className="text-primary text-3xl font-bold mb-3 md:text-4xl leading-tight">
            Kelas Cohort
          </h2>
          <p className="text-secondary text-base max-w-2xl mx-auto leading-relaxed">
            Pelatihan dan bimbingan berbasis evidence untuk mahasiswa kedokteran di berbagai tahap pendidikan. Pilih paket yang sesuai kebutuhanmu.
          </p>
        </div>

        {/* Implementasi Slider */}
        <div className="md:max-w-[1440px] w-full mx-auto">
          <CohortSlider data={cohortClassesData} />
        </div>
      </section>

      {/* --- PRIVATE CLASS SECTION -> ID: #privat --- */}
      <section
        id="privat"
        className="pb-12 md:py-12 md:px-4 bg-default scroll-mt-28"
      >
        <div className="mb-10 text-center">
          <h2 className="text-primary text-2xl font-bold mb-3 md:text-3xl">Kelas Private</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Bimbingan intensif satu lawan satu untuk hasil yang maksimal.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {[1, 2, 3].map((item) => (
            <PrivateClassCard key={item} />
          ))}
        </div>
      </section>

      {/* --- ORDER FORM SECTION -> ID: #order (Navbar: "Get Started" / "Daftar") --- */}
      <section
        id="order"
        className="py-12 px-4 scroll-mt-28"
      >
        <div className="bg-default p-3.5 rounded-2xl mx-auto md:p-10 md:m-17.5">
          <h1 className="font-bold text-center text-2xl text-primary pb-3 md:pb-7.5">Form Order Private</h1>

          <OrderForm />
        </div>
      </section>

      {/* --- TESTIMONIAL SECTION -> ID: #testimoni --- */}
      <section
        id="testimoni"
        className="relative py-20 px-4 md:min-h-[500px] flex flex-col items-center justify-center scroll-mt-28"
      >
        {/* Background Image with Overlay */}
        <Image
          src={testimonialImage}
          alt="Latar belakang testimoni"
          fill
          className="object-cover -z-10"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/80 -z-10"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-bold text-3xl text-white mb-4">Testimoni</h2>
          <p className="text-white/90 text-base mb-10 max-w-2xl mx-auto">
            Pendapat mahasiswa FK setelah ikut kelas dan try out di StrataAcademy,
            dari yang awalnya bingung sampai lebih kebayang pola soalnya.
          </p>

          <div className="flex justify-center">
            <TestimonialCard />
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION -> ID: #faq --- */}
      <section
        id="faq"
        className="py-16 px-4 max-w-7xl mx-auto scroll-mt-28"
      >
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-start">
          <div className="hidden md:block sticky top-24">
            <Image
              src={faqImage}
              alt="Ilustrasi FAQ"
              width={500}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-3xl text-primary font-bold mb-4 flex flex-col md:flex-row md:items-center gap-2">
              Pertanyaan Umum <span>(FAQ)</span>
            </h2>
            <p className="text-secondary mb-8 leading-relaxed">
              Punya pertanyaan soal kelas, metode belajar, atau mekanisme bimbingan?
              Berikut adalah jawaban dari pertanyaan yang sering diajukan.
            </p>

            <AccordionGroup data={faqData} />
          </div>
        </div>
      </section>

    </main>
  );
}
