"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Building2, Layout, HardHat, ArrowRight } from "lucide-react";

export default function ConstructionPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <PageHeader 
        title="CIVIL WORKS" 
        subtitle="Infrastructure & Design" 
        index="OP-03"
      />
      
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-8 space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-black text-davic-accent uppercase tracking-tighter">
                  Structural <span className="text-davic-primary">Integrity</span>
                </h2>
                <p className="text-lg font-bold text-davic-secondary uppercase tracking-widest leading-relaxed">
                  Dav-Ric Construction delivers high-performance infrastructure through rigorous 
                  technical discipline and industrial-scale operational capacity.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                 {[
                   { icon: <Building2 className="w-6 h-6" />, title: "Commercial", desc: "Large scale office and facility construction solutions." },
                   { icon: <Layout className="w-6 h-6" />, title: "Architecture", desc: "Technical drafting and industrial design protocols." },
                   { icon: <HardHat className="w-6 h-6" />, title: "Civil Works", desc: "Roads, bridges, and critical urban infrastructure." },
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
               <div className="p-10 border border-davic-gray-medium rounded-sm space-y-10">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-davic-primary">Site Information</h3>
                  <div className="space-y-6">
                     <div className="flex flex-col gap-2">
                        <span className="text-[10px] font-bold uppercase text-davic-accent/40 tracking-widest">Global Sites</span>
                        <p className="text-xl font-black text-davic-primary">LAC:042 / LON:018</p>
                     </div>
                     <div className="flex flex-col gap-2">
                        <span className="text-[10px] font-bold uppercase text-davic-accent/40 tracking-widest">Active Crew</span>
                        <p className="text-xl font-black text-davic-primary">2,500+ PERSONNEL</p>
                     </div>
                     <div className="flex flex-col gap-2">
                        <span className="text-[10px] font-bold uppercase text-davic-accent/40 tracking-widest">Compliance</span>
                        <p className="text-xl font-black text-davic-primary">ISO:9001 QUALIFIED</p>
                     </div>
                  </div>
                  <button className="w-full py-5 bg-davic-primary text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-davic-accent transition-all flex items-center justify-center gap-4 shadow-xl shadow-davic-primary/20">
                    Project Request <ArrowRight className="w-4 h-4" />
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
