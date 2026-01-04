'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import avatar from "@/public/images/home-about-doctor-holding-pen.png"

// Data Dummy Testimoni
const testimonials = [
  {
    id: 1,
    name: "Andi Saputra",
    role: "Fullstack Developer",
    message: "Desain yang sangat bersih dan kode yang mudah dipahami. Sangat membantu mempercepat proses development saya.",
    avatar: avatar,
  },
  {
    id: 2,
    name: "Siti Aminah",
    role: "UI/UX Designer",
    message: "Komponen slider ini sangat responsif dan mudah dikustomisasi. Pill indicator-nya memberikan sentuhan modern.",

    avatar: avatar,
  },
  {
    id: 3,
    name: "Budi Santoso",
    role: "Product Manager",
    message: "Sangat puas dengan hasilnya. Performa website meningkat drastis setelah menggunakan template ini.",
    avatar: avatar,
  },
  {
    id: 4,
    name: "Rina Kartika",
    role: "Digital Marketer",
    message: "Tampilannya profesional dan elegan. Konversi penjualan kami meningkat sejak redesign menggunakan ini.",
    avatar: avatar,
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fungsi untuk mengubah slide secara manual via Pill
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  // Optional: Auto-slide setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Apa Kata Mereka?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Feedback jujur dari klien yang telah bekerja sama dengan kami.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative overflow-hidden w-full">
          {/* Track (Bagian yang bergerak) */}
          <div
            className="flex transition-transform duration-500 ease-out will-change-transform"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((item) => (
              <div key={item.id} className="w-full flex-shrink-0 px-4">
                {/* Card Testimoni */}
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 flex flex-col items-center text-center border border-gray-100 h-full">
                  <div className="relative w-16 h-16 mb-6">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="rounded-full object-cover border-4 border-blue-100"
                    />
                  </div>
                  <blockquote className="text-xl text-gray-700 font-medium mb-6">
                    "{item.message}"
                  </blockquote>
                  <div>
                    <div className="font-bold text-gray-900">{item.name}</div>
                    <div className="text-sm text-blue-600">{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pill Indicators */}
        <div className="flex justify-center items-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`transition-all duration-300 rounded-full ${currentIndex === index
                ? "w-8 h-3 bg-blue-600"  // Style Aktif (Melebar/Pill)
                : "w-3 h-3 bg-gray-300 hover:bg-gray-400" // Style Inaktif (Dot biasa)
                }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
