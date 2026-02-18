"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  index: string;
}

export default function PageHeader({ title, subtitle, index }: PageHeaderProps) {
  return (
    <section className="relative pt-48 pb-24 bg-white overflow-hidden border-b border-davic-gray-medium">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:30px_30px] opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 text-davic-primary"
          >
            <span className="text-4xl font-black opacity-10">{index}</span>
            <div className="w-12 h-[1px] bg-davic-primary" />
            <span className="text-[10px] uppercase font-black tracking-[0.4em]">{subtitle}</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-black text-davic-accent uppercase leading-[0.85] tracking-tighter"
          >
            {title}
          </motion.h1>
          
          <div className="absolute top-0 right-0 h-full w-[1px] bg-davic-gray-medium hidden lg:block" />
        </div>
      </div>
      
      {/* Decorative Index */}
      <div className="absolute bottom-10 right-10 hidden md:block">
         <span className="text-[120px] font-black text-davic-primary/[0.03] leading-none uppercase select-none">
            {title.split(" ").pop()}
         </span>
      </div>
    </section>
  );
}
