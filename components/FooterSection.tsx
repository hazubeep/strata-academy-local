'use client'

import { ChevronDown } from "lucide-react";
import { ReactNode, useState } from "react";
import { motion } from "motion/react";

type FooterSectionProps = {
  title: string;
  children: ReactNode;
  isLast?: boolean; // Opsional: untuk border bawah tambahan 
};

export default function FooterSection({ title, children }: FooterSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-white/20 md:border-none">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full flex justify-between items-center py-4 text-left md:cursor-default md:pointer-events-none group outline-none"
      >
        <h3 className="text-lg font-medium text-white tracking-wide">
          {title}
        </h3>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden"
        >
          <ChevronDown className="w-5 h-5 text-white" />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { height: "auto", opacity: 1, marginBottom: 16 },
          closed: { height: 0, opacity: 0, marginBottom: 0 }
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden md:h-auto! md:opacity-100! md:mb-0"
      >
        <div className="text-white/80 font-light pb-2 md:pb-0">
          {children}
        </div>
      </motion.div>
    </div>
  );
};
