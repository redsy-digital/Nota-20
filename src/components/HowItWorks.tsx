import { MessageSquare, CreditCard, Sparkles, Truck, Check } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      step: "1",
      icon: MessageSquare,
      title: "Envia o Teu Tema no WhatsApp",
      description: "Diz-nos o tema do trabalho, a tua escola ou faculdade, o número de páginas pretendido, a data de entrega e se queres formato Digital ou Físico.",
      badge: "Passo Inicial"
    },
    {
      step: "2",
      icon: CreditCard,
      title: "Confirmação & Sinal de 50%",
      description: "Recebes o orçamento fechado em minutos. Pagas apenas 50% via PayPay AO ou Unitel Money para darmos início imediato à elaboração.",
      badge: "Início Seguro"
    },
    {
      step: "3",
      icon: Sparkles,
      title: "Pesquisa, Redação & Formatação",
      description: "A nossa equipa elabora o trabalho com fontes académicas fiáveis, normas ABNT / APA e passa o documento por verificador anti-plágio.",
      badge: "Qualidade Rigorosa"
    },
    {
      step: "4",
      icon: Truck,
      title: "Aprovação & Entrega Final",
      description: "Enviamos uma prévia com sumário. Após aprovação e pagamento dos 50% restantes, recebes os ficheiros ou a entrega física encadernada em Luanda.",
      badge: "Entrega Garantida"
    }
  ];

  return (
    <section id="como-funciona" className="py-16 lg:py-24 border-t border-slate-200 dark:border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
            Processo Simples & Descomplicado
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Como funciona do início até à tua entrega
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Sem burocracias. Tudo é tratado diretamente no WhatsApp com acompanhamento em tempo real.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative bg-white dark:bg-[#0D1424] border border-slate-200 dark:border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-500/40 dark:hover:border-emerald-500/30 transition-all duration-300 shadow-sm hover:shadow-md group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-2xl font-black text-slate-300 dark:text-slate-700 group-hover:text-emerald-600/40 dark:group-hover:text-emerald-500/40 transition-colors">
                      0{item.step}
                    </span>
                  </div>

                  <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider block mb-2">
                    {item.badge}
                  </span>

                  <h3 className="text-base font-display font-bold text-slate-900 dark:text-white mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Acompanhamento direto</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
