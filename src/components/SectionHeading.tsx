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
          className="text-xs font-semibold tracking-widest uppercase mb-3 text-cyan-400"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4 }}
        >
          {label}
        </motion.p>
      )}
      <motion.h2
        className={`text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight ${
          light ? 'text-white' : 'text-white'
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
          } text-slate-300`}
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
