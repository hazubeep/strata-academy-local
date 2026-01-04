'use client'

import { useState } from "react";
import FaqItem from "./FaqItem";

export interface FAQItemData {
  id: number;
  question: string;
  answer: string;
}

interface AccordionGroupProps {
  data: FAQItemData[];
}
export default function AccordionGroup({ data }: AccordionGroupProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="space-y-1">
      {data.map((item, index) => (
        <FaqItem
          key={item.id}
          item={item}
          isOpen={activeIndex === index}
          onToggle={() => setActiveIndex(activeIndex === index ? null : index)}
        />
      ))}
    </div>
  );
};
