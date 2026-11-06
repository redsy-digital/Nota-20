import { MessageSquare, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Clock } from 'lucide-react';

export function Hero() {
  const whatsappUrl = "https://wa.me/244955993656?text=Ol%C3%A1%2C%20vi%20o%20vosso%20site%20do%20Acad%C3%A9mico%20Pro%20e%20quero%20encomendar%20um%20trabalho%20escolar%21";

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24">
      {/* Background radial gradient mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-emerald-500/10 via-cyan-500/10 to-transparent dark:from-emerald-500/15 dark:via-cyan-500/10 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Context kicker: clean unboxed metadata */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-4">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Assessoria Académica em Angola
              </span>
              <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
              <span className="text-slate-600 dark:text-slate-400">Ensino Médio & Superior</span>
            </div>

            {/* Main Headline with high academic contrast */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6 text-balance">
              Garante a tua melhor nota com o <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400 bg-clip-text text-transparent">Académico Pro</span> sem noites em claro.
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl mb-8 font-normal">
              Chega de stress com prazos apertados! Elaboramos trabalhos de investigação, relatórios de estágio, monografias e apresentações de diapositivos. Entregamos em ficheiro <strong className="text-slate-900 dark:text-white font-semibold">Digital</strong> (PDF e Word editável) ou <strong className="text-slate-900 dark:text-white font-semibold">Físico</strong> (impresso e encadernado) em Luanda.
            </p>

            {/* Trust points list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mb-8 text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Normas ABNT, APA e regras da tua instituição</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>100% Original e sem risco de plágio</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Revisões gratuitas após feedback do professor</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Paga com PayPay AO ou Unitel Money (50%/50%)</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 text-base font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-lg shadow-emerald-500/25 transition-all active:scale-[0.98] whitespace-nowrap"
              >
                <MessageSquare className="w-5 h-5 fill-slate-950" />
                <span>Encomendar via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#precos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-white/[0.05] hover:bg-slate-100 dark:hover:bg-white/[0.1] border border-slate-300 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/20 rounded-xl transition-all shadow-sm whitespace-nowrap"
              >
                <span>Ver Preços & Formatos</span>
              </a>
            </div>

            {/* Student proof stats strip */}
            <div className="flex items-center gap-6 mt-10 pt-6 border-t border-slate-200 dark:border-white/[0.08] text-xs text-slate-600 dark:text-slate-400">
              <div>
                <span className="block font-display text-xl font-bold text-slate-900 dark:text-white tabular-nums">+1.450</span>
                <span>Trabalhos Entregues</span>
              </div>
              <span className="h-7 w-[1px] bg-slate-200 dark:bg-white/10" aria-hidden="true" />
              <div>
                <span className="block font-display text-xl font-bold text-slate-900 dark:text-white tabular-nums">18 a 20</span>
                <span>Média de Notas Obtidas</span>
              </div>
              <span className="h-7 w-[1px] bg-slate-200 dark:bg-white/10" aria-hidden="true" />
              <div>
                <span className="block font-display text-xl font-bold text-emerald-600 dark:text-emerald-400 tabular-nums">24h a 48h</span>
                <span>Prazos de Entrega</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Hero Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Glow border ring */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-br from-emerald-500/30 via-cyan-500/20 to-purple-600/15 blur-lg opacity-60" />

              {/* Main Card Wrapper */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/15 bg-white dark:bg-slate-900/90 shadow-2xl">
                
                {/* Photo container */}
                <div className="relative aspect-[16/11] overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src="/src/assets/images/hero_student_angola_1793915832212.jpg"
                    alt="Estudante universitário em Angola focado e confiante com os seus trabalhos académicos"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  {/* Floating badge inside image */}
                  <div className="absolute top-4 left-4 bg-white/95 dark:bg-[#0B1120]/90 backdrop-blur-md border border-slate-200 dark:border-white/15 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5 shadow-lg">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Garantia de Aprovação</span>
                  </div>
                </div>

                {/* Bottom feature summary strip */}
                <div className="p-5 bg-slate-50 dark:bg-[#0C1222] border-t border-slate-200 dark:border-white/10">
                  <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 mb-3">
                    <span className="flex items-center gap-1.5 font-medium text-slate-800 dark:text-slate-300">
                      <Clock className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" /> Atendimento Rápido em Angola
                    </span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold font-mono">Disponível Agora</span>
                  </div>

                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-normal mb-3">
                    Envia o tema, número de páginas e data de entrega. Recebes o orçamento detalhado em menos de 15 minutos!
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-200 dark:border-white/5 text-[11px] text-slate-500 dark:text-slate-400">
                    <span>Luanda, Benguela, Huambo e todas as províncias</span>
                    <span className="text-slate-800 dark:text-slate-300 font-medium">WhatsApp: 955 993 656</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
