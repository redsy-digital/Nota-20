/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesGrid } from './components/ServicesGrid';
import { PricingSection } from './components/PricingSection';
import { PaymentSection } from './components/PaymentSection';
import { HowItWorks } from './components/HowItWorks';
import { StudentReviews } from './components/StudentReviews';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QuickOrderModal } from './components/QuickOrderModal';
import { MessageSquare, Sparkles } from 'lucide-react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#080C15] text-slate-900 dark:text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-slate-950 font-sans transition-colors duration-200">
      {/* Top Navigation with Light/Dark Mode Toggle */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Eye-catching Hero */}
        <Hero />

        {/* 2. Academic Services Grid */}
        <ServicesGrid />

        {/* 3. Pricing Section (Digital & Physical Tables + Interactive Kwanza Calculator) */}
        <PricingSection />

        {/* 4. Payment Section (PayPay AO & Unitel Money & 50/50 Safety) */}
        <PaymentSection />

        {/* 5. 4-Step Process */}
        <HowItWorks />

        {/* 6. Social Proof / Student Testimonials */}
        <StudentReviews />

        {/* 7. Frequently Asked Questions */}
        <FaqSection />

        {/* Bottom Pre-CTA Banner */}
        <section className="py-16 bg-gradient-to-b from-slate-100 via-slate-50 to-slate-100 dark:from-[#080C15] dark:via-[#0B1220] dark:to-[#080C15] border-t border-slate-200 dark:border-white/[0.08]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Pronto para tirar a melhor nota do trimestre?</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Não deixes o trabalho escolar para a última hora
            </h2>
            
            <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
              Envia agora o tema do teu trabalho pelo WhatsApp (+244 955 993 656) e recebe o teu orçamento em menos de 15 minutos com pagamento facilitado em PayPay AO e Unitel Money.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/244955993656?text=Ol%C3%A1%21%20Quero%20encomendar%20um%20trabalho%20escolar%20pelo%20Acad%C3%A9mico%20Pro."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-extrabold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-xl shadow-emerald-500/25 transition-all active:scale-[0.98]"
              >
                <MessageSquare className="w-5 h-5 fill-slate-950" />
                <span>Conversar no WhatsApp Agora</span>
              </a>

              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-white/[0.05] hover:bg-slate-100 dark:hover:bg-white/[0.1] border border-slate-300 dark:border-white/10 rounded-xl transition-all shadow-sm cursor-pointer"
              >
                <span>Preencher Detalhes do Trabalho</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Large Floating Green WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Optional Structured Quick Order Modal */}
      <QuickOrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
