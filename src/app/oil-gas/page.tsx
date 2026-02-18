"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Droplet, Flame, Globe, ArrowRight } from "lucide-react";

export default function OilGasPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <PageHeader 
        title="ENERGY SECTOR" 
        subtitle="Upstream & Midstream" 
        index="OP-02"
      />
      
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-8 space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-black text-davic-accent uppercase tracking-tighter">
                  Fueling <span className="text-davic-primary">Industrial Growth</span>
                </h2>
                <p className="text-lg font-bold text-davic-secondary uppercase tracking-widest leading-relaxed">
                  Dav-Ric Oil & Gas leverages cutting-edge technology and precision engineering 
                  to deliver sustainable energy solutions for a global market.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                 {[
                   { icon: <Droplet className="w-6 h-6" />, title: "Exploration", desc: "Technical precision in upstream asset identification." },
                   { icon: <Flame className="w-6 h-6" />, title: "Production", desc: "Optimizing output while minimizing environmental impact." },
                   { icon: <Globe className="w-6 h-6" />, title: "Logistics", desc: "Strategic midstream infrastructure and global delivery." },
                 ].map((item, i) => (
                   <div key={i} className="p-8 border-l border-davic-primary bg-davic-gray-light group hover:bg-davic-primary transition-all duration-500">
                      <div className="text-davic-primary mb-6 group-hover:text-white transition-colors">
                        {item.icon}
                      </div>
                      <h4 className="text-xs font-black uppercase tracking-[0.2em] text-davic-accent group-hover:text-white mb-4">{item.title}</h4>
                      <p className="text-[10px] font-bold text-davic-secondary group-hover:text-white/60 uppercase tracking-widest leading-relaxed">{item.desc}</p>
                   </div>
                 ))}
              </div>
            </div>
            
            <div className="lg:col-span-4 space-y-8">
               <div className="p-10 border border-davic-gray-medium rounded-sm">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-davic-primary mb-8">Asset Matrix</h3>
                  <div className="space-y-6">
                     {["Refineries", "Pipeline Tech", "Drilling Rigs", "Export Terminals"].map((item) => (
                       <div key={item} className="flex items-center justify-between group cursor-pointer">
                          <span className="text-xs font-black uppercase tracking-widest text-davic-accent group-hover:text-davic-primary transition-colors">{item}</span>
                          <ArrowRight className="w-4 h-4 text-davic-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                       </div>
                     ))}
                  </div>
               </div>
               
               <div className="p-10 bg-davic-primary text-white rounded-sm shadow-xl shadow-davic-primary/20">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-4">Production Cap</p>
                  <p className="text-4xl font-black">200k <span className="text-xs font-bold text-white/40">BPD</span></p>
               </div>
            </div>

          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
