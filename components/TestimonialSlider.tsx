"use client";

import { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import profilePicture from "@/public/images/home-about-doctor-holding-pen.png";
import TestimonialCard from "./TestimonialCard";

type Testimonial = {
  id?: number;
  content: string;
  name: string;
  role?: string;
};

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    content:
      "Di blok Repro aku selalu bingung hubungan hormon, siklus, dan penyakit. Tapi di cohort Repro StrataAcademy dijelasin dengan mapping yang rapi banget.",
    name: "Mahasiswa Preklinik",
    role: "Blok Reproduksi",
  },
  {
    id: 2,
    content:
      "Materi yang disampaikan sangat relevan dengan kasus klinis sehari-hari. Mentornya juga sangat suportif.",
    name: "Mahasiswa Preklinik",
    role: "Blok Kardiologi",
  },
  {
    id: 3,
    content:
      "Sangat puas dengan hasilnya. Performa website meningkat drastis setelah menggunakan template ini.",
    name: "Mahasiswa Preklinik",
    role: "Blok Respirasi",
  },
  {
    id: 4,
    content:
      "Desain yang sangat bersih dan kode yang mudah dipahami. Sangat membantu.",
    name: "Dokter Muda",
    role: "Stase Bedah",
  },
];

export default function TestimonialSlider({ data }: { data?: Testimonial[] }) {
  return (
    <div
      className="
      w-full!
      /* CUSTOM PAGINATION STYLES */
      [&_.swiper-pagination-bullet]:w-3.5! 
      [&_.swiper-pagination-bullet]:h-3.5!
      [&_.swiper-pagination-bullet]:bg-white! 
      [&_.swiper-pagination-bullet]:opacity-100!
      
      /* Active State (Pill Shape) */
      [&_.swiper-pagination-bullet-active]:w-8 
      [&_.swiper-pagination-bullet-active]:rounded-full 
      [&_.swiper-pagination-bullet-active]:bg-dark-primary!
      "
    >
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        // --- BREAKPOINTS ---
        breakpoints={{
          640: {
            slidesPerView: 2, // Tablet: 2 slide
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3, // Desktop: 3 slide
            spaceBetween: 30,
          },
        }}
        style={
          {
            "--swiper-pagination-bottom": "0px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          } as React.CSSProperties
        }
        className="pb-16!"
      >
        {(data && data.length ? data : defaultTestimonials).map((item, i) => (
          // Pastikan tinggi otomatis agar rapi
          <SwiperSlide key={item.id ?? i} className="h-auto lg:min-w-125">
            <TestimonialCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
