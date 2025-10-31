"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

const Section = ({ id, className = '', children }: SectionProps) => {
  return (
    <section
      id={id}
      className={`py-16 md:py-20 ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
