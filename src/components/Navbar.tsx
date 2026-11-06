import { Logo } from './Logo';
import { MessageSquare, ArrowRight } from 'lucide-react';

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#080C15]/85 border-b border-white/[0.08] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark / Logo */}
        <a href="#" className="flex items-center shrink-0" aria-label="Académico Pro - Página Inicial">
          <Logo textClassName="text-xl sm:text-2xl" />
        </a>

        {/* Zone 2: 4-5 Concise single-line navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a
            href="#servicos"
            className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0"
          >
            Serviços
          </a>
          <a
            href="#precos"
            className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0"
          >
            Tabela de Preços
          </a>
          <a
            href="#pagamentos"
            className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0"
          >
            PayPay & Unitel
          </a>
          <a
            href="#como-funciona"
            className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0"
          >
            Como Funciona
          </a>
          <a
            href="#faq"
            className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0"
          >
            Perguntas
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://wa.me/244955993656?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20o%20meu%20trabalho%20escolar%21"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-md shadow-emerald-500/20 active:scale-[0.98] whitespace-nowrap shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Pedir Orçamento</span>
            <ArrowRight className="w-3.5 h-3.5 opacity-70" />
          </a>

          {/* Mobile direct WhatsApp link */}
          <a
            href="https://wa.me/244955993656"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden inline-flex items-center justify-center p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20"
            aria-label="Abrir WhatsApp"
          >
            <MessageSquare className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
