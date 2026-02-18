"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Heart, Users, GraduationCap, ArrowRight } from "lucide-react";

export default function FoundationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <PageHeader 
        title="SOCIAL IMPACT" 
        subtitle="Corporate Responsibility" 
        index="MSN-01"
      />
      
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-8 space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-black text-davic-accent uppercase tracking-tighter">
                  Empowering <span className="text-davic-primary">Emerging Markets</span>
                </h2>
                <p className="text-lg font-bold text-davic-secondary uppercase tracking-widest leading-relaxed">
                  Dav-Ric Foundation is committed to creating long-term value through strategic 
                  investments in health, education, and community development.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                 {[
                   { icon: <Users />, title: "Community Building", desc: "Strengthening social foundations through direct engagement." },
                   { icon: <GraduationCap />, title: "Educational Excellence", desc: "Funding scholarships and technical training centers." },
                   { icon: <Heart />, title: "Healthcare Access", desc: "Investing in critical medical infrastructure and outreach." },
                 ].map((item, i) => (
                   <div key={i} className="p-8 border border-davic-gray-medium bg-davic-gray-light group hover:border-davic-primary transition-all duration-500">
                      <div className="text-davic-primary mb-6 transition-transform group-hover:scale-110">
                        {item.icon}
                      </div>
                      <h4 className="text-xs font-black uppercase tracking-[0.2em] text-davic-accent mb-4">{item.title}</h4>
                      <p className="text-[10px] font-bold text-davic-secondary uppercase tracking-widest leading-relaxed">{item.desc}</p>
                   </div>
                 ))}
              </div>
            </div>
            
            <div className="lg:col-span-4">
               <div className="sticky top-32 p-10 bg-davic-accent text-white rounded-sm space-y-8 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-davic-primary/10 rounded-full blur-3xl" />
                  <h3 className="text-xs font-black uppercase tracking-[0.4em] text-davic-primary">Global Reach</h3>
                  <div className="space-y-6">
                     <div className="flex justify-between items-end border-b border-white/10 pb-4">
                        <span className="text-[10px] font-bold uppercase text-white/40 tracking-widest">Active Projects</span>
                        <span className="text-2xl font-black text-davic-primary">24+</span>
                     </div>
                     <div className="flex justify-between items-end border-b border-white/10 pb-4">
                        <span className="text-[10px] font-bold uppercase text-white/40 tracking-widest">Lives Impacted</span>
                        <span className="text-2xl font-black text-davic-primary">500k</span>
                     </div>
                     <div className="flex justify-between items-end border-b border-white/10 pb-4">
                        <span className="text-[10px] font-bold uppercase text-white/40 tracking-widest">Core Regions</span>
                        <span className="text-2xl font-black text-davic-primary">12</span>
                     </div>
                  </div>
                  <button className="w-full py-5 bg-davic-primary text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-davic-accent transition-all flex items-center justify-center gap-4 shadow-xl shadow-davic-primary/20">
                    Get Involved <ArrowRight className="w-4 h-4" />
                  </button>
               </div>
            </div>

          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
