"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <PageHero 
        title="CONNECT"
        subtitle="Reach out to our global headquarters or local subsidiaries to discuss how we can partner on your next landmark project."
        image="/davricgroup-oilandgas2.jpg"
        category="Contact Us"
      />

      <section className="py-32">
        <div className="px-8 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
                
                {/* Contact Info */}
                <div className="lg:col-span-4 space-y-16">
                   <div className="space-y-8">
                      <div className="flex items-center gap-4 text-davic-primary">
                        <div className="w-12 h-[2px] bg-davic-primary" />
                        <span className="text-[10px] uppercase font-black tracking-[0.5em]">Global HQ</span>
                      </div>
                      <h2 className="text-4xl font-black text-davic-accent uppercase tracking-tighter">Get in <br /> Touch</h2>
                   </div>

                   <div className="space-y-12">
                      <div className="flex gap-6 group">
                         <div className="w-12 h-12 flex items-center justify-center border border-davic-gray-medium text-davic-primary group-hover:bg-davic-primary group-hover:text-white transition-all duration-500">
                            <MapPin className="w-5 h-5" />
                         </div>
                         <div className="space-y-2">
                            <span className="text-[9px] font-black text-davic-primary uppercase tracking-widest">Address</span>
                            <p className="text-xs font-bold text-davic-accent uppercase tracking-widest leading-loose">
                               Lagos, Nigeria <br />
                               Global Operations Hub
                            </p>
                         </div>
                      </div>

                      <div className="flex gap-6 group">
                         <div className="w-12 h-12 flex items-center justify-center border border-davic-gray-medium text-davic-primary group-hover:bg-davic-primary group-hover:text-white transition-all duration-500">
                            <Phone className="w-5 h-5" />
                         </div>
                         <div className="space-y-2">
                            <span className="text-[9px] font-black text-davic-primary uppercase tracking-widest">Phone</span>
                            <p className="text-xs font-bold text-davic-accent uppercase tracking-widest">
                               +234 (0) 800 DAVRIC
                            </p>
                         </div>
                      </div>

                      <div className="flex gap-6 group">
                         <div className="w-12 h-12 flex items-center justify-center border border-davic-gray-medium text-davic-primary group-hover:bg-davic-primary group-hover:text-white transition-all duration-500">
                            <Mail className="w-5 h-5" />
                         </div>
                         <div className="space-y-2">
                            <span className="text-[9px] font-black text-davic-primary uppercase tracking-widest">Email</span>
                            <p className="text-xs font-bold text-davic-accent uppercase tracking-widest">
                               info@davricgroup.com
                            </p>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-8">
                   <div className="p-12 md:p-20 bg-davic-gray-light border border-davic-gray-medium relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-davic-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
                      
                      <form className="space-y-12 relative z-10">
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-4">
                               <label className="text-[9px] font-black text-davic-primary uppercase tracking-[0.3em]">Full Name</label>
                               <input type="text" placeholder="Iyke Agwu" className="w-full bg-transparent border-b border-davic-gray-medium py-4 text-xs font-bold uppercase tracking-widest focus:border-davic-primary outline-none transition-all" />
                            </div>
                            <div className="space-y-4">
                               <label className="text-[9px] font-black text-davic-primary uppercase tracking-[0.3em]">Email Address</label>
                               <input type="email" placeholder="iyke@example.com" className="w-full bg-transparent border-b border-davic-gray-medium py-4 text-xs font-bold uppercase tracking-widest focus:border-davic-primary outline-none transition-all" />
                            </div>
                         </div>

                         <div className="space-y-4">
                            <label className="text-[9px] font-black text-davic-primary uppercase tracking-[0.3em]">Sector of Inquiry</label>
                            <select className="w-full bg-transparent border-b border-davic-gray-medium py-4 text-xs font-bold uppercase tracking-widest focus:border-davic-primary outline-none transition-all cursor-pointer">
                               <option>Oil & Gas Operations</option>
                               <option>Construction & Civil Works</option>
                               <option>Real Estate Development</option>
                               <option>The Dav-Ric Foundation</option>
                            </select>
                         </div>

                         <div className="space-y-4">
                            <label className="text-[9px] font-black text-davic-primary uppercase tracking-[0.3em]">Your Message</label>
                            <textarea rows={4} placeholder="How can we assist you?" className="w-full bg-transparent border-b border-davic-gray-medium py-4 text-xs font-bold uppercase tracking-widest focus:border-davic-primary outline-none transition-all resize-none"></textarea>
                         </div>

                         <button className="w-full md:w-auto px-12 py-6 bg-davic-accent text-white text-[10px] font-black uppercase tracking-[0.5em] hover:bg-davic-primary transition-all duration-500 shadow-2xl flex items-center justify-center gap-6">
                            Send Inquiry <ArrowRight className="w-5 h-5" />
                         </button>
                      </form>
                   </div>
                </div>

             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
