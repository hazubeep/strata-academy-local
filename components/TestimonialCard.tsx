'use client'

import { Quote } from "lucide-react";
import Image from "next/image";
import profilePicture from "@/public/images/home-about-doctor-holding-pen.png"; // Pastikan path ini benar
import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const testimonials = [
  {
    id: 1,
    content: "Penjelasannya sangat mendalam namun mudah dimengerti. Sangat membantu persiapan ujian blok saya.",
    name: "Mahasiswa Preklinik ",
    role: "Blok Reproduksi",
    avatar: profilePicture
  },
  {
    id: 2,
    content: "Penjelasannya sangat mendalam namun mudah dimengerti. Sangat membantu persiapan ujian blok saya.",
    name: "Mahasiswa Preklinik ",
    role: "Blok Kardiologi",
    avatar: profilePicture
  },
  {
    id: 3,
    content: "Materi yang disampaikan sangat relevan dengan kasus klinis sehari-hari. Mentornya juga sangat suportif.",
    name: "Mahasiswa Preklinik ",
    role: "Blok Respirasi",
    avatar: profilePicture
  },
]

// 1. KITA BUAT KOMPONEN KARTU TERPISAH AGAR BISA DIPAKAI ULANG (REUSABLE)
const TestimonialItem = ({ item }: any) => (
  <div className="bg-white p-5 rounded-2xl h-full border border-gray-100 shadow-sm flex flex-col justify-between">
    <div>
      <div className="space-y-1.5 mb-6">
        <Quote className="text-primary w-7.5 h-7.5 fill-primary" />
        <p className="text-secondary text-left leading-relaxed mt-2">
          &quot;{item.content}&quot;
        </p>
      </div>
    </div>

    <div>
      <div className="h-px bg-gray-200 w-full mb-6"></div>
      <div className="flex items-center text-left  gap-3">
        <Image
          width={56}
          height={56}
          src={item.avatar}
          alt={item.name}
          className="rounded-full object-cover"
        />
        <div>
          <h4 className="font-bold text-primary capitalize text-xl">
            {item.name}
          </h4>
          <span className="text-sm text-secondary capitalize ">
            {item.role}
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default function TestimonialCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextStep = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }, []);

  const prevStep = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      // Kita cek window width agar autoplay hanya jalan di mobile (opsional)
      if (window.innerWidth < 1024) {
        nextStep();
      }
    }, 5000);
    return () => clearInterval(timer)
  }, [nextStep]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    })
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4">

      {/* --- TAMPILAN DESKTOP (Grid) --- */}
      {/* Muncul di layar besar (lg), tersembunyi di mobile */}
      <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((item) => (
          <div key={item.id} className="h-full">
            <TestimonialItem item={item} />
          </div>
        ))}
      </div>


      {/* --- TAMPILAN MOBILE (Slider) --- */}
      {/* Tersembunyi di layar besar (lg), muncul di mobile */}
      <div className="lg:hidden flex flex-col items-center">
        <div className="relative min-h-95 w-full max-w-md overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = offset.x;
                if (swipe < -50) nextStep();
                else if (swipe > 50) prevStep();
              }}
              className="absolute w-full top-0 left-0"
            >
              {/* Menggunakan komponen kartu yang sama, dibungkus div agar cursor grab bisa jalan */}
              <div className="cursor-grab active:cursor-grabbing">
                <TestimonialItem item={testimonials[currentIndex]} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pill Indicators (Hanya muncul di Mobile) */}
        <div className="mt-2 flex justify-center items-center gap-2 relative z-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`transition-all duration-300 rounded-full ${currentIndex === index
                ? "w-8 h-2.5 bg-primary"
                : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

    </div>
  )
}
