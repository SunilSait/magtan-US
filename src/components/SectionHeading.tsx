'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  align = 'left',
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}>
      {label && (
        <motion.p
          className="text-sm font-semibold tracking-wider uppercase mb-3 text-gold"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4 }}
        >
          {label}
        </motion.p>
      )}
      <motion.h2
        className={`text-2xl md:text-3xl font-semibold ${
          light ? 'text-white' : 'text-text-dark'
        }`}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {title}
      </motion.h2>
      <motion.span
        className={`accent-line mt-4 ${align === 'center' ? 'mx-auto' : ''}`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ transformOrigin: align === 'center' ? 'center' : 'left' }}
      />
      {description && (
        <motion.p
          className={`mt-5 text-base leading-relaxed max-w-2xl ${
            align === 'center' ? 'mx-auto' : ''
          } ${light ? 'text-white/70' : 'text-text-body'}`}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
