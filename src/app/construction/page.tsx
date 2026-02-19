"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Building2, Layout, HardHat, ShieldCheck, Ruler, ArrowRight } from "lucide-react";
import Image from "next/image";

const EXPERTISE = [
  { icon: <Building2 />, title: "Structural Engineering", label: "INDUSTRIAL SCALE" },
  { icon: <Layout />, title: "Project Management", label: "TECHNICAL RIGOR" },
  { icon: <HardHat />, title: "Civil Works", label: "URBAN INFRASTRUCTURE" },
  { icon: <Ruler />, title: "Architectural Design", label: "AESTHETIC PRECISION" }
];

export default function ConstructionPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <PageHero 
        title="BUILT LEGACY"
        subtitle="Dav-Ric Construction is redefining the skylines of emerging economies through structural innovation, technical mastery, and industrial discipline."
        image="/davricgroup-construction.png"
        category="Civil Engineering"
      />

      <section className="py-32">
        <div className="px-8 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto">
             <div className="flex flex-col lg:flex-row gap-24 items-center">
                <div className="lg:w-1/2 space-y-12">
                   <div className="flex items-center gap-4 text-davic-primary">
                     <div className="w-12 h-[2px] bg-davic-primary" />
                     <span className="text-[10px] uppercase font-black tracking-[0.5em]">Core Capability</span>
                   </div>
                   <h2 className="text-5xl font-black text-davic-accent uppercase tracking-tighter leading-none">
                     Structural <br />
                     <span className="text-davic-primary">Dominance</span>
                   </h2>
                   <p className="text-xs md:text-sm font-bold text-davic-secondary uppercase tracking-widest leading-loose">
                     Our construction division operates as a synchronized machine. We integrate architectural vision with heavy-duty engineering to deliver projects that are not only aesthetically superior but structurally immortal. From commercial complexes to critical infrastructure, our word is bond and our bond links the world.
                   </p>
                   <div className="flex items-center gap-12">
                      <div className="text-center md:text-left">
                         <span className="text-[8px] font-black text-davic-primary uppercase tracking-widest mb-1 block">Safety Record</span>
                         <p className="text-2xl font-black text-davic-accent">100% LTI FREE</p>
                      </div>
                      <div className="text-center md:text-left">
                         <span className="text-[8px] font-black text-davic-primary uppercase tracking-widest mb-1 block">Personnel</span>
                         <p className="text-2xl font-black text-davic-accent">2,500+</p>
                      </div>
                   </div>
                </div>

                <div className="lg:w-1/2 relative">
                   <div className="grid grid-cols-2 gap-4">
                      <div className="aspect-[3/4] relative overflow-hidden border border-davic-gray-medium transition-all duration-700 hover:scale-[1.02]">
                         <Image src="/davricgroup-construction2.jpeg" alt="Construction detail" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                      </div>
                      <div className="aspect-[3/4] relative overflow-hidden border border-davic-gray-medium transition-all duration-700 hover:scale-[1.02] mt-12">
                         <Image src="/davricgroup-construction3.jpeg" alt="Construction layout" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                      </div>
                   </div>
                   {/* Background element */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[120%] h-1/2 bg-davic-gray-light rotate-[-5deg]" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-32 bg-davic-accent text-white relative">
        <div className="px-8 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {EXPERTISE.map((e, i) => (
                  <div key={i} className="space-y-6">
                     <div className="text-davic-primary">{e.icon}</div>
                     <h3 className="text-xs font-black uppercase tracking-[0.3em]">{e.title}</h3>
                     <p className="text-[8px] font-black text-davic-primary uppercase tracking-[0.4em]">{e.label}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
