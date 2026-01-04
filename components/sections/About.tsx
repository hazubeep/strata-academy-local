import Image from "next/image";
import aboutImage from "@/public/images/home-about-doctor-holding-pen.png"

export default function About() {
  return (
    <section
      id="about"
      className="m-4 py-7.5 bg-default rounded-3xl md:mx-16 lg:mx-17.5 lg:p-7.5 md:grid md:grid-cols-[400px_1fr] md:gap-12 items-center scroll-mt-28"
    >
      <div className="flex items-center justify-center mb-8 md:mb-0">
        <Image
          src={aboutImage}
          width={400}
          height={400}
          alt="Tentang StrataAcademy"
          className="w-full max-w-75 md:max-w-full h-auto"
        />
      </div>

      <div className="space-y-6 px-4 md:px-0">
        <div className="p-6 border border-white rounded-2xl shadow-sm bg-white/50 backdrop-blur-sm">
          <h2 className="mb-3 text-xl font-bold text-primary md:text-4xl">Sekilas Tentang Kami</h2>
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
  )
}
