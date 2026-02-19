"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Droplet, Flame, Globe, ArrowRight, Shield, Zap } from "lucide-react";
import Image from "next/image";

const SERVICES = [
  { icon: <Droplet className="w-6 h-6" />, title: "Upstream Exploration", desc: "Leveraging geophysical expertise and technical precision to identify and develop energy assets." },
  { icon: <Flame className="w-6 h-6" />, title: "Midstream Operations", desc: "Strategic infrastructure for the processing, storage, and transportation of crude oil." },
  { icon: <Zap className="w-6 h-6" />, title: "Refining & Distribution", desc: "Delivering high-quality refined products to secondary markets with industrial-scale logistics." },
  { icon: <Shield className="w-6 h-6" />, title: "HSE Standards", desc: "Zero-compromise approach to Health, Safety, and Environment in all energy terrains." }
];

export default function OilGasPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <PageHero 
        title="ENERGY FUTURE"
        subtitle="Dav-Ric Oil & Gas is a powerhouse in the energy sector, focused on sustainable extraction, precision refining, and global resource distribution."
        image="/davricgroup-oilandgas.png"
        category="Energy Sector"
      />

      {/* Industrial Narrative */}
      <section className="py-32">
        <div className="px-8 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                   <div className="flex items-center gap-4 text-davic-primary mb-8">
                     <div className="w-12 h-[2px] bg-davic-primary" />
                     <span className="text-[10px] uppercase font-black tracking-[0.5em]">Global Energy</span>
                   </div>
                   <h2 className="text-5xl font-black text-davic-accent uppercase tracking-tighter leading-none mb-10">
                     Technical <br />
                     <span className="text-davic-primary">Precision</span>
                   </h2>
                   <p className="text-xs md:text-sm font-bold text-davic-secondary uppercase tracking-widest leading-loose mb-12">
                     In the complex landscape of global energy, Dav-Ric Oil & Gas stands as a symbol of reliability. We operate at the intersection of traditional resource management and futuristic energy innovation, ensuring energy security through technical discipline and operational excellence.
                   </p>
                   
                   <div className="grid grid-cols-2 gap-8 py-8 border-y border-davic-gray-medium">
                      <div>
                         <span className="text-[9px] font-black text-davic-primary uppercase tracking-widest">Global Capacity</span>
                         <p className="text-2xl font-black text-davic-accent">200K BPD</p>
                      </div>
                      <div>
                         <span className="text-[9px] font-black text-davic-primary uppercase tracking-widest">Compliance</span>
                         <p className="text-2xl font-black text-davic-accent">ISO 14001</p>
                      </div>
                   </div>
                </motion.div>

                <div className="relative aspect-square">
                   <motion.div 
                     initial={{ opacity: 0, scale: 1.1 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     className="absolute inset-0 border border-davic-gray-medium"
                   >
                     <Image src="/davricgroup-oilandgas2.jpg" alt="Oil & Gas" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                   </motion.div>
                   {/* Industrial Overlay Element */}
                   <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-davic-accent p-10 flex flex-col justify-end">
                      <Globe className="text-davic-primary mb-4" />
                      <span className="text-[8px] font-black text-white uppercase tracking-[0.3em]">Global Network</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-davic-accent text-white relative">
        <div className="px-8 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {SERVICES.map((s, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-10 border border-white/5 hover:border-davic-primary transition-all duration-500 group"
                  >
                     <div className="text-davic-primary mb-8 transition-transform group-hover:scale-110">{s.icon}</div>
                     <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-4">{s.title}</h3>
                     <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest leading-relaxed">{s.desc}</p>
                  </motion.div>
                ))}
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
