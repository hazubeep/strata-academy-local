import heroImage from "@/public/images/home-hero-doctor-pointing-her-hand.png"
import Image from "next/image";
import Button from "../Button";
import { promises as fs } from 'fs';
import path from 'path';

// // Definisikan tipe data sesuai struktur JSON
// interface LandingPageData {
//   hero_title: string;
//   hero_desc: string;
//   cta_text: string;
//   features: Array<{ name: string; detail: string }>;
// }
//
// async function getLandingPageData(): Promise<LandingPageData> {
//   // Membaca file JSON dari folder content
//   const filePath = path.join(process.cwd(), 'content', 'landing-page.json');
//   const fileContents = await fs.readFile(filePath, 'utf8');
//   return JSON.parse(fileContents);
// }

export default function Hero() {

  // const data = await getLandingPageData();

  return (
    <section
      id="home"
      className="m-4 md:min-h-screen md:grid md:grid-cols-[1fr_800px] md:items-center md:px-16 lg:px-17.5 lg:m-0 scroll-mt-28"
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
        <h1 className="text-primary font-bold text-2xl mb-4 md:text-5xl leading-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, illo.
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

  )

}
