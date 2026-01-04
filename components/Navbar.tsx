'use client'

import { motion, useScroll, AnimatePresence } from 'motion/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import logo from "@/public/logo.png"
import Button from './Button'

const navLinks = [
  { name: 'Beranda', href: '#home' },
  { name: 'Cohort Class', href: '#cohort' },
  { name: 'Kelas Privat', href: '#privat' },
  { name: 'Tentang Kami', href: '#about' },
  { name: 'Testimoni', href: '#testimoni' },
  { name: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const { scrollY } = useScroll()

  const [isPill, setIsPill] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const updateNavbar = (currentY: number) => {
      const isMobile = window.innerWidth < 768;

      if (isMobile) {
        setIsPill(true);
      } else {
        const shouldBePill = currentY > 0;
        setIsPill((prev) => (prev !== shouldBePill ? shouldBePill : prev));
      }
    };

    const unsubscribe = scrollY.on('change', updateNavbar);

    requestAnimationFrame(() => {
      updateNavbar(window.scrollY);
    });

    return () => unsubscribe();
  }, [scrollY]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      layout
      animate={{
        width: isPill ? '92%' : '100%',
        borderRadius: isPill ? '52px' : '0px',
        top: isPill ? '1rem' : '0rem',
        height: isOpen ? 'auto' : '4rem',
      }}
      transition={{
        type: 'tween',
        duration: 0.3,
        ease: 'easeInOut'
      }}
      className="
        fixed left-1/2 -translate-x-1/2 z-50 overflow-hidden
        bg-white/80 backdrop-blur-xl
        border border-white/20 shadow-xl
        md:bg-white/60
      "
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="font-bold text-lg shrink-0">
          <Image
            src={logo}
            width={120}
            height={80}
            alt='Logo'
            className="object-contain h-auto w-auto"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-black transition-colors">{link.name}</Link>
          ))}
        </div>

        {/* Desktop button */}
        <div className="hidden md:flex gap-3">
          <Button
            onClick={() => setIsOpen(false)}
          >
            Daftar
          </Button>
          <Button variant='secondary'
            onClick={() => setIsOpen(false)}
          >
            Masuk
          </Button>        </div>

        {/* Mobile hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-1 rounded-full hover:bg-gray-100 transition-colors"
        >
          {isOpen ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
        </button>
      </div>

      {/* --- MOBILE MENU CONTENT --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }} // Sedikit delay agar container membesar dulu baru konten muncul
            className="md:hidden flex flex-col px-6 pb-8 pt-2"
          >
            {/* Links List */}
            <div className="flex flex-col gap-4 text-lg font-medium text-gray-800">
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={idx === 0 ? "text-[#14b8a6]" : "hover:text-[#14b8a6]"}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex gap-4 w-full">
              <Button
                onClick={() => setIsOpen(false)}
              >
                Daftar
              </Button>
              <Button variant='secondary'
                onClick={() => setIsOpen(false)}
              >
                Masuk
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
