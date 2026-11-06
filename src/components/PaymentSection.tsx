import { Smartphone, ShieldCheck, CheckCircle2, ArrowRight, Wallet, QrCode, RefreshCw } from 'lucide-react';

export function PaymentSection() {
  const whatsappUrl = "https://wa.me/244955993656?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20os%20dados%20para%20pagamento%20via%20PayPay%20AO%20ou%20Unitel%20Money%21";

  return (
    <section id="pagamentos" className="py-16 lg:py-24 border-t border-slate-200 dark:border-white/[0.08] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
            Pagamentos Fáceis & Seguros em Angola
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Aceitamos PayPay AO & Unitel Money
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Sabemos que nem todos os estudantes têm conta bancária tradicional. Por isso, aceitamos as carteiras digitais mais populares e rápidas de Angola, com confirmação em menos de 1 minuto.
          </p>
        </div>

        {/* Payment Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1: PayPay AO */}
          <div className="relative rounded-2xl bg-white dark:bg-[#0D1424] border border-cyan-200 dark:border-cyan-500/30 p-6 flex flex-col justify-between hover:border-cyan-400 dark:hover:border-cyan-400/50 transition-all duration-300 shadow-sm hover:shadow-md group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-500 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
                    <QrCode className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">PayPay AO</h3>
                    <span className="text-[11px] text-cyan-700 dark:text-cyan-400 font-semibold font-mono">App de Pagamentos</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-800 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-500/15 border border-cyan-200 dark:border-cyan-500/30 px-2 py-0.5 rounded">
                  Instantâneo
                </span>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Paga diretamente através da tua carteira digital PayPay AO sem filas nem complicações.
              </p>

              <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-[#080C15] p-3.5 rounded-xl border border-slate-200 dark:border-white/5 mb-4">
                <div className="font-semibold text-slate-900 dark:text-slate-200">Como Pagar com PayPay AO:</div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-700 dark:text-cyan-400 font-bold">1.</span>
                  <span>Abre o app PayPay AO no teu telemóvel</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-700 dark:text-cyan-400 font-bold">2.</span>
                  <span>Transfere para o número: <strong className="text-slate-950 dark:text-white font-mono">+244 955 993 656</strong></span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-700 dark:text-cyan-400 font-bold">3.</span>
                  <span>Partilha o comprovativo no WhatsApp e iniciamos logo</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-white/5 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
              <span>Sem taxas adicionais</span>
              <span className="text-cyan-700 dark:text-cyan-300 font-semibold">Confirmação em 1 min</span>
            </div>
          </div>

          {/* Card 2: Unitel Money */}
          <div className="relative rounded-2xl bg-white dark:bg-[#0D1424] border border-emerald-200 dark:border-emerald-500/35 p-6 flex flex-col justify-between hover:border-emerald-400 dark:hover:border-emerald-400/50 transition-all duration-300 shadow-sm hover:shadow-md group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-emerald-500/20">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">Unitel Money</h3>
                    <span className="text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold font-mono">Saldo Móvel Unitel</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-500/15 border border-emerald-200 dark:border-emerald-500/30 px-2 py-0.5 rounded">
                  Fácil *111#
                </span>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Funciona em qualquer telefone (smartphones ou analógicos). Paga com saldo de dinheiro Unitel Money.
              </p>

              <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-[#080C15] p-3.5 rounded-xl border border-slate-200 dark:border-white/5 mb-4">
                <div className="font-semibold text-slate-900 dark:text-slate-200">Como Pagar com Unitel Money:</div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold">1.</span>
                  <span>Marca o código USSD <strong className="text-emerald-800 dark:text-emerald-300 font-mono">*111#</strong> ou abre o app</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold">2.</span>
                  <span>Escolhe «Transferir Dinheiro» para o número: <strong className="text-slate-950 dark:text-white font-mono">955 993 656</strong></span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold">3.</span>
                  <span>Confirma o PIN e envia o SMS de notificação</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-white/5 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
              <span>Disponível 24/7</span>
              <span className="text-emerald-700 dark:text-emerald-300 font-semibold">Todo o território de Angola</span>
            </div>
          </div>

          {/* Card 3: Multicaixa Express & Bancos */}
          <div className="relative rounded-2xl bg-white dark:bg-[#0D1424] border border-slate-200 dark:border-white/10 p-6 flex flex-col justify-between hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300 shadow-sm hover:shadow-md group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
                    <Wallet className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">Multicaixa Express</h3>
                    <span className="text-[11px] text-indigo-700 dark:text-indigo-400 font-semibold font-mono">MCX & IBAN Angolano</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-800 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-500/15 border border-indigo-200 dark:border-indigo-500/30 px-2 py-0.5 rounded">
                  Bancário
                </span>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Para quem prefere transferência interbancária rápida através de BAI Directo, BFA Net, BIC ou Multicaixa Express.
              </p>

              <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-[#080C15] p-3.5 rounded-xl border border-slate-200 dark:border-white/5 mb-4">
                <div className="font-semibold text-slate-900 dark:text-slate-200">Como Pagar com MCX / IBAN:</div>
                <div className="flex items-start gap-2">
                  <span className="text-indigo-700 dark:text-indigo-400 font-bold">1.</span>
                  <span>Pede o nosso IBAN oficial do Académico Pro no WhatsApp</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-indigo-700 dark:text-indigo-400 font-bold">2.</span>
                  <span>Transfere pelo Multicaixa Express ou no teu ATM</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-indigo-700 dark:text-indigo-400 font-bold">3.</span>
                  <span>Envia o PDF ou foto do talão de transferência</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-white/5 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
              <span>BAI · BFA · BIC · SOL</span>
              <span className="text-indigo-700 dark:text-indigo-300 font-semibold">Transferência Segura</span>
            </div>
          </div>

        </div>

        {/* 50% / 50% Trust Guarantee Banner */}
        <div className="rounded-3xl bg-gradient-to-br from-emerald-50/90 via-teal-50/50 to-slate-50 dark:from-[#0B1222] dark:via-[#09101E] dark:to-[#0A1629] border border-emerald-300 dark:border-emerald-500/30 p-8 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Política de Confiança Mútua para Estudantes</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white mb-3">
                Paga apenas 50% para começar. O restante só após veres o trabalho!
              </h3>
              
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                Não exigimos o valor total adiantado. Criamos uma relação de confiança: pagas 50% para iniciarmos a investigação e redação. Quando concluirmos, enviamos uma prévia detalhada com sumário e páginas-chave. Só pagas o restante ao aprovar a prévia!
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Sem surpresas nem cobranças adicionais ocultas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Ajustes e correções gratuitas incluídas</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-white dark:bg-[#080C15]/80 border border-slate-200 dark:border-white/10 text-center shadow-md">
              <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-300 dark:border-emerald-500/20 flex items-center justify-center text-emerald-700 dark:text-emerald-400 mb-3">
                <RefreshCw className="w-6 h-6" />
              </div>
              <span className="font-display font-bold text-lg text-slate-900 dark:text-white">50% Sinal / 50% Entrega</span>
              <span className="text-xs text-slate-600 dark:text-slate-400 mt-1 mb-4">Garantia total para a tua segurança</span>
              
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-sm"
              >
                <span>Falar sobre Pagamento</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
