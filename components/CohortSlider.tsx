'use client';

import { motion } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import CohortCard, { CohortCardProps } from './CohortCard';

type CohortSliderProps = {
  data: CohortCardProps[];
};

export default function CohortSlider({ data }: CohortSliderProps) {
  const [width, setWidth] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Cek ukuran layar untuk menentukan apakah drag aktif atau tidak
    const checkIsDesktop = () => {
      // Breakpoint md di Tailwind biasanya 768px
      setIsDesktop(window.innerWidth >= 768);
    };

    // 2. Hitung batasan drag (hanya relevan untuk desktop)
    const calculateWidth = () => {
      if (carouselRef.current) {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
      }
    };

    // Jalankan saat mount
    checkIsDesktop();
    calculateWidth();

    // Event listener saat layar di-resize
    window.addEventListener('resize', checkIsDesktop);
    window.addEventListener('resize', calculateWidth);

    return () => {
      window.removeEventListener('resize', checkIsDesktop);
      window.removeEventListener('resize', calculateWidth);
    };
  }, [data]);

  return (
    <div className="w-full  md:px-4 md:py-8">
      {/* Container Utama 
         - Mobile: overflow visible (biar bisa scroll page wajar)
         - Desktop: overflow hidden (untuk slider)
      */}
      <div className="md:overflow-hidden cursor-default md:cursor-grab md:active:cursor-grabbing">
        <motion.div
          ref={carouselRef}
          // Hanya aktifkan drag 'x' jika di desktop. Jika mobile, false (matikan drag)
          drag={isDesktop ? "x" : false}
          dragConstraints={{ right: 0, left: -width }}
          whileTap={isDesktop ? { cursor: "grabbing" } : {}}
          // Layout: Mobile (flex-col + items-center), Desktop (flex-row)
          className="flex flex-col items-center gap-6 md:flex-row md:items-stretch md:gap-8"
        >
          {data.map((card, index) => (
            <motion.div
              key={index}
              // Hapus flex-shrink di mobile agar card tidak gepeng, tapi tetap perlu di desktop
              className="flex w-full md:w-auto justify-center"
              style={{ flexShrink: 0 }}
            >
              <CohortCard {...card} />
            </motion.div>
          ))}
        </motion.div>
      </div>

    </div>
  );
}
