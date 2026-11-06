import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: "Como é feita a entrega do formato físico em Luanda e nas outras províncias?",
      answer: "Em Luanda, combinamos a entrega em pontos de referência centrais (como Mutamba, Largo 1º de Maio, Maianga, São Paulo, Talatona, Kilamba, Viana, Cazenga) ou através de serviço de entrega rápida por estafeta/motoboy diretamente ao teu colégio ou residência. Para as províncias fora de Luanda (Benguela, Huambo, Lubango, Cabinda, etc.), enviamos o formato físico através de encomendas Macon / AngoReal ou disponibilizamos o arquivo Digital em alta resolução pronto para impressão no teu centro de cópias local."
    },
    {
      question: "E se o meu professor solicitar alterações ou correções no trabalho?",
      answer: "Fica descansado! Todas as encomendas no Académico Pro incluem até 2 rondas de revisões e ajustes totalmente gratuitos. Se o teu professor fizer observações sobre a estrutura, bibliografia ou conteúdo, basta enviares as anotações no WhatsApp e nós fazemos as devidas correções sem qualquer custo adicional."
    },
    {
      question: "Como é garantido que o trabalho é 100% original e sem plágio?",
      answer: "Não utilizamos cópias da internet nem trabalhos reciclados. Cada trabalho é pesquisado e redigido do zero com citações de autores de referência de acordo com as normas ABNT / APA. Antes de entregar, passamos o texto por softwares profissionais de deteção de plágio para garantir originalidade total."
    },
    {
      question: "Como funciona o pagamento de 50% no início e 50% no final?",
      answer: "Para a tua segurança e tranquilidade, pagas apenas 50% do valor orçado para darmos início imediato à elaboração. Quando o trabalho estiver concluído, enviamos uma prévia com o sumário completo e páginas demonstrativas. Ao aprovares a qualidade, liquidas os restantes 50% via PayPay AO ou Unitel Money para o número +244 955 993 656 e libertamos o arquivo final ou despachamos a versão impressa."
    },
    {
      question: "Qual é o tempo mínimo para entregar um trabalho com urgência?",
      answer: "Para trabalhos escolares normais (investigação, apresentações de slides ou formatação), conseguimos entregar em 12h a 24 horas. Para relatórios de estágio mais extensos e monografias científicas, recomendamos entre 3 a 10 dias para garantir o rigor máximo da pesquisa."
    }
  ];

  return (
    <section id="faq" className="py-16 lg:py-24 border-t border-slate-200 dark:border-white/[0.08] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
            Esclarece as Tuas Dúvidas
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Tudo o que precisas de saber sobre encomendas, entregas e métodos de pagamento em Angola.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0C1222] overflow-hidden transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-semibold text-base sm:text-lg text-slate-900 dark:text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'rotate-180 bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400'
                        : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-700 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-white/5 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
