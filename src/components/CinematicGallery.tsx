"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const GALLERY_IMAGES = [
  {
    src: "/davricgroup-oilandgas2.jpg",
    title: "Precision Operations",
    category: "Industrial Logistics",
    size: "large"
  },
  {
    src: "/renewable_energy_hero.png",
    title: "Sustainable Power",
    category: "Future Energy",
    size: "tall"
  },
  {
    src: "/davricgroup-construction4.jpeg",
    title: "Structural Integrity",
    category: "Infrastructure",
    size: "small"
  },
  {
    src: "/engineering_precision_hero.png",
    title: "Engineering Excellence",
    category: "Advanced Robotics",
    size: "wide"
  }
];

export default function CinematicGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={containerRef} className="py-40 bg-white relative overflow-hidden">
      {/* Background Section Title */}
      <div className="absolute top-20 left-10 opacity-[0.03] select-none">
        <h2 className="text-[20vw] font-black uppercase tracking-tighter leading-none">Perspective</h2>
      </div>

      <div className="px-8 md:px-16 lg:px-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32">
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-davic-primary">
                <div className="w-12 h-[2px] bg-davic-primary" />
                <span className="text-[10px] uppercase font-black tracking-[0.5em]">Visual Identity</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-davic-accent uppercase tracking-tighter leading-none">
                CINEMATIC <br />
                <span className="text-davic-primary">SHOWCASE</span>
              </h2>
            </div>
            <p className="md:max-w-xs text-[11px] font-bold text-davic-secondary uppercase tracking-widest leading-loose mt-12 md:mt-0">
              Capturing the scale and complexity of our global operations through a unique architectural lens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10">
            {/* Image 1: Featured Main - Top Left */}
            <motion.div 
              style={{ y: y1 }}
              className="md:col-span-8 group relative aspect-[16/9] overflow-hidden border border-davic-gray-medium"
            >
              <Image 
                src={GALLERY_IMAGES[0].src}
                alt={GALLERY_IMAGES[0].title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-davic-accent/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-10 left-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-[10px] font-black text-davic-primary uppercase tracking-[0.4em] mb-2">{GALLERY_IMAGES[0].category}</p>
                <h3 className="text-2xl font-black text-white uppercase">{GALLERY_IMAGES[0].title}</h3>
              </div>
            </motion.div>

            {/* Image 2: Vertical Slice - Top Right */}
            <motion.div 
              style={{ y: y2 }}
              className="md:col-span-4 md:row-span-2 group relative aspect-[3/4] md:aspect-auto overflow-hidden border border-davic-gray-medium"
            >
              <Image 
                src={GALLERY_IMAGES[1].src}
                alt={GALLERY_IMAGES[1].title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-davic-accent/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-10 left-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-[10px] font-black text-davic-primary uppercase tracking-[0.4em] mb-2">{GALLERY_IMAGES[1].category}</p>
                <h3 className="text-2xl font-black text-white uppercase leading-none">{GALLERY_IMAGES[1].title}</h3>
              </div>
            </motion.div>

            {/* Image 3: Small Detail - Bottom Left */}
            <motion.div 
              style={{ y: y1 }}
              className="md:col-span-4 group relative aspect-square md:aspect-auto h-[350px] overflow-hidden border border-davic-gray-medium"
            >
              <Image 
                src={GALLERY_IMAGES[2].src}
                alt={GALLERY_IMAGES[2].title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-davic-accent/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-10 left-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-[10px] font-black text-davic-primary uppercase tracking-[0.4em] mb-2">{GALLERY_IMAGES[2].category}</p>
                <h3 className="text-xl font-black text-white uppercase">{GALLERY_IMAGES[2].title}</h3>
              </div>
            </motion.div>

            {/* Image 4: Wide Anchor - Bottom Middle */}
            <motion.div 
              style={{ y: y1 }}
              className="md:col-span-4 group relative aspect-square md:aspect-auto h-[350px] overflow-hidden border border-davic-gray-medium"
            >
              <Image 
                src={GALLERY_IMAGES[3].src}
                alt={GALLERY_IMAGES[3].title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-davic-accent/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-10 left-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-[10px] font-black text-davic-primary uppercase tracking-[0.4em] mb-2">{GALLERY_IMAGES[3].category}</p>
                <h3 className="text-xl font-black text-white uppercase">{GALLERY_IMAGES[3].title}</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Industrial Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-1/4 h-[1px] bg-davic-gray-medium" />
      <div className="absolute top-0 left-0 w-[1px] h-1/4 bg-davic-gray-medium" />
    </section>
  );
}
