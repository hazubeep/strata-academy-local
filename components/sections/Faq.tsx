import Image from "next/image";
import AccordionGroup, { FAQItemData } from "../AccordionGroup";
import faqImage from "@/public/images/home-faq-doctor-writing-on-her-note.png";

const faqData: FAQItemData[] = [
  {
    id: 1,
    question: "Bagaimana cara melakukan pemesanan?",
    answer:
      "Anda dapat melakukan pemesanan langsung melalui website kami dengan memilih produk yang diinginkan, menambahkannya ke keranjang, dan mengikuti instruksi checkout yang tersedia.",
  },
  {
    id: 2,
    question: "Apakah ada garansi pengembalian uang?",
    answer:
      "Ya, kami memberikan garansi 30 hari uang kembali jika produk yang Anda terima tidak sesuai dengan deskripsi atau mengalami kerusakan teknis yang tidak bisa diperbaiki.",
  },
  {
    id: 3,
    question: "Metode pembayaran apa saja yang didukung?",
    answer:
      "Kami mendukung berbagai metode pembayaran termasuk transfer bank (BCA, Mandiri, BNI), kartu kredit, serta e-wallet seperti GoPay, OVO, dan Dana.",
  },
  {
    id: 4,
    question: "Berapa lama waktu pengiriman biasanya?",
    answer:
      "Untuk wilayah Jabodetabek, pengiriman biasanya memakan waktu 1-2 hari kerja. Untuk luar wilayah tersebut, estimasi waktu adalah 3-5 hari kerja tergantung ekspedisi yang dipilih.",
  },
  {
    id: 5,
    question: "Apakah saya bisa membatalkan langganan kapan saja?",
    answer:
      "Tentu saja. Anda dapat membatalkan langganan kapan saja melalui pengaturan akun Anda tanpa biaya tambahan. Akses Anda akan tetap aktif hingga akhir periode penagihan berjalan.",
  },
];
interface FAQItem {
  question: string;
  answer: string;
}
interface FAQProps {
  data: {
    title: string;
    faqs: FAQItem[];
  };
}

export default function Faq({
  data,
}: {
  data?: { title?: string; faqs?: { question: string; answer: string }[] };
}) {
  const title = data?.title;
  const faqs = data?.faqs;

  if (!faqs || faqs.length === 0) return null;

  return (
    <section id="faq" className="p-4 md:p-17.5 px-4 mx-auto scroll-mt-14">
      <div className="grid md:grid-cols-[1fr_1.5fr] gap-x-12 items-start">
        <div className="mb-5 md:m-0 md:block md:sticky md:top-24">
          <Image
            src={faqImage}
            alt="Ilustrasi FAQ"
            width={800}
            height={800}
            quality={90}
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-3xl text-primary font-bold mb-4 flex flex-col md:flex-row md:items-center gap-2">
            {title ?? "Pertanyaan Umum"} <span>(FAQ)</span>
          </h2>
          <p className="text-secondary mb-8 leading-relaxed">
            Punya pertanyaan soal kelas, metode belajar, atau mekanisme
            bimbingan? Berikut adalah jawaban dari pertanyaan yang sering
            diajukan.
          </p>

          <AccordionGroup
            data={faqs.map((f, i) => ({
              id: i + 1,
              question: f.question,
              answer: f.answer,
            }))}
          />
        </div>
      </div>
    </section>
  );
}
