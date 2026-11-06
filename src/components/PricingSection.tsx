import { useState } from 'react';
import { Check, Download, BookOpen, Calculator, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';

interface PricingTier {
  id: string;
  name: string;
  category: string;
  digitalPrice: string;
  digitalRaw: number;
  physicalPrice: string;
  physicalRaw: number;
  scope: string;
  turnaround: string;
  popular?: boolean;
  features: string[];
}

export function PricingSection() {
  const [activeTab, setActiveTab] = useState<'comparison' | 'calculator'>('comparison');
  
  // Interactive Calculator State
  const [calcWorkType, setCalcWorkType] = useState('investigacao');
  const [calcFormat, setCalcFormat] = useState<'digital' | 'fisico'>('digital');
  const [calcPages, setCalcPages] = useState<number>(10);
  const [calcUrgency, setCalcUrgency] = useState<'normal' | 'urgente'>('normal');

  const pricingTiers: PricingTier[] = [
    {
      id: "investigacao",
      name: "Trabalho de Investigação Escolar",
      category: "Ensino Geral & Médio (7ª a 13ª Classe)",
      digitalPrice: "4.000 Kz",
      digitalRaw: 4000,
      physicalPrice: "6.500 Kz",
      physicalRaw: 6500,
      scope: "Até 12 páginas · Pesquisa temática completa",
      turnaround: "24h a 48h",
      popular: true,
      features: [
        "Capa formal com logotipo da tua escola",
        "Índice, Introdução, Desenvolvimento e Conclusão",
        "Bibliografia com fontes atuais e fiáveis",
        "Ficheiros em PDF + Word editável",
        "Versão Física: Impressão a cores + Capa transparente + Espiral"
      ]
    },
    {
      id: "relatorio",
      name: "Relatório de Estágio ou Visita",
      category: "Institutos Médios & Politécnicos",
      digitalPrice: "9.500 Kz",
      digitalRaw: 9500,
      physicalPrice: "14.500 Kz",
      physicalRaw: 14500,
      scope: "15 a 30 páginas · Descrição técnica de atividades",
      turnaround: "3 a 5 dias",
      features: [
        "Apresentação da empresa/instituição acolhedora",
        "Diário de bordo das tarefas e competências",
        "Gráficos, tabelas explicativas e anexos técnicos",
        "Adequação ao regulamento de estágio da instituição",
        "Versão Física: Impressão frente e verso de alta gramagem + Espiral"
      ]
    },
    {
      id: "monografia",
      name: "Monografia & TCC Universitário",
      category: "Finalistas de Licenciatura & Mestrado",
      digitalPrice: "29.000 Kz",
      digitalRaw: 29000,
      physicalPrice: "44.000 Kz",
      physicalRaw: 44000,
      scope: "40 a 70 páginas · Rigor científico absoluto",
      turnaround: "7 a 15 dias (por etapas)",
      features: [
        "Estruturação completa (Problemática, Justificativa, Marco Teórico)",
        "Tratamento de dados e análise de questionários",
        "Normas ABNT ou exigências específicas da tua faculdade",
        "Apoio e preparação com possíveis perguntas da banca",
        "Versão Física: Encadernação térmica de luxo ou capa dura"
      ]
    },
    {
      id: "slides",
      name: "Apresentação em Diapositivos (Slides)",
      category: "Defesa de Trabalhos & Seminários",
      digitalPrice: "3.500 Kz",
      digitalRaw: 3500,
      physicalPrice: "6.000 Kz",
      physicalRaw: 6000,
      scope: "10 a 20 slides · Visual moderno e dinâmico",
      turnaround: "24h",
      features: [
        "Design visual atrativo sem excesso de texto",
        "Infográficos, diagramas e sínteses dos tópicos",
        "Notas do orador incluídas para saberes o que falar",
        "Ficheiro PowerPoint (.pptx) editável + PDF",
        "Versão Física: Guias impressos de apoio à apresentação"
      ]
    },
    {
      id: "formatacao",
      name: "Formatação & Normalização ABNT",
      category: "Trabalhos já redigidos pelo estudante",
      digitalPrice: "2.500 Kz",
      digitalRaw: 2500,
      physicalPrice: "5.000 Kz",
      physicalRaw: 5000,
      scope: "Trabalho até 30 páginas",
      turnaround: "12h a 24h",
      features: [
        "Configuração de margens (3-3-2-2) e parágrafos",
        "Sumário e listas de figuras automáticas",
        "Padronização de citações curtas e longas",
        "Adequação de referências bibliográficas",
        "Versão Física: Impressão após validação final"
      ]
    },
    {
      id: "digitacao",
      name: "Digitação Rápida de Apontamentos",
      category: "Manuscritos, Cadernos e Cópias",
      digitalPrice: "150 Kz / pág.",
      digitalRaw: 150,
      physicalPrice: "250 Kz / pág.",
      physicalRaw: 250,
      scope: "Preço calculado por lauda digitada",
      turnaround: "Conforme quantidade",
      features: [
        "Passagem a limpo de caligrafia manual ou fotos",
        "Correção ortográfica e de concordância em Português",
        "Organização em títulos, subtítulos e marcadores",
        "Entrega em ficheiro Word (.docx) e PDF limpo",
        "Versão Física: Impressão e grampeamento / encadernação"
      ]
    }
  ];

  // Calculate live estimate
  const calculateTotal = () => {
    let base = 4000;
    if (calcWorkType === 'investigacao') base = 3500 + Math.max(0, calcPages - 8) * 250;
    if (calcWorkType === 'relatorio') base = 8000 + Math.max(0, calcPages - 15) * 350;
    if (calcWorkType === 'monografia') base = 25000 + Math.max(0, calcPages - 40) * 450;
    if (calcWorkType === 'slides') base = 3000 + Math.max(0, calcPages - 10) * 200;
    if (calcWorkType === 'formatacao') base = 2000 + Math.max(0, calcPages - 15) * 100;
    if (calcWorkType === 'digitacao') base = calcPages * 150;

    // Physical format addition (printing + binding)
    if (calcFormat === 'fisico') {
      const printCost = calcPages * 100;
      const bindingCost = calcWorkType === 'monografia' ? 8000 : 2500;
      base += printCost + bindingCost;
    }

    // Urgency surcharge
    if (calcUrgency === 'urgente') {
      base = Math.round(base * 1.3);
    }

    return base;
  };

  const estimatedTotal = calculateTotal();
  const formattedEstimate = new Intl.NumberFormat('pt-AO').format(estimatedTotal) + ' Kz';

  const generateWhatsAppQuoteUrl = () => {
    const typeLabel = 
      calcWorkType === 'investigacao' ? 'Trabalho de Investigação' :
      calcWorkType === 'relatorio' ? 'Relatório de Estágio' :
      calcWorkType === 'monografia' ? 'Monografia / TCC' :
      calcWorkType === 'slides' ? 'Apresentação de Slides' :
      calcWorkType === 'formatacao' ? 'Formatação ABNT' : 'Digitação de Manuscritos';

    const formatLabel = calcFormat === 'digital' ? 'Apenas Digital (PDF + Word)' : 'Físico (Impresso + Encadernado)';
    const urgencyLabel = calcUrgency === 'urgente' ? 'Urgente (24h)' : 'Prazo Normal';

    const msg = `Olá! Fiz uma simulação no Académico Pro:%0A- Tipo: ${typeLabel}%0A- Formato: ${formatLabel}%0A- Páginas estimadas: ${calcPages}%0A- Prazo: ${urgencyLabel}%0A- Estimativa: ${formattedEstimate}%0A%0AGostaria de confirmar a encomenda!`;
    return `https://wa.me/244955993656?text=${msg}`;
  };

  return (
    <section id="precos" className="py-16 lg:py-24 border-t border-slate-200 dark:border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl text-left">
            <div className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
              Transparência Total em Kwanzas (AOA)
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
              Preços Justos para Estudantes: Digital & Físico
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
              Escolhe entre receber os ficheiros prontos no teu WhatsApp/Email ou a cópia física impressa em papel de qualidade e encadernada em Luanda.
            </p>
          </div>

          {/* Interactive Mode Toggle */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-200/80 dark:bg-white/[0.05] border border-slate-300 dark:border-white/10 rounded-xl self-start md:self-auto shrink-0">
            <button
              onClick={() => setActiveTab('comparison')}
              className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                activeTab === 'comparison'
                  ? 'bg-emerald-400 text-slate-950 shadow-md font-bold'
                  : 'text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Tabela Comparativa</span>
            </button>
            <button
              onClick={() => setActiveTab('calculator')}
              className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                activeTab === 'calculator'
                  ? 'bg-emerald-400 text-slate-950 shadow-md font-bold'
                  : 'text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Calculadora Rápida</span>
            </button>
          </div>
        </div>

        {/* Visual Callout Bar: The Real Physical vs Digital Contrast */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white dark:bg-[#0C1222] border border-slate-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 mb-16 shadow-lg dark:shadow-xl">
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/10">
            <img
              src="/src/assets/images/work_presentation_mockup_1793915831908.jpg"
              alt="Monografia impressa e encadernada em espiral com apresentação digital no tablet"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 text-xs text-white font-medium bg-[#080C15]/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center justify-between">
              <span>Encadernação em Espiral & Digital</span>
              <span className="text-emerald-400 font-semibold">Alta Resolução</span>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Digital Box */}
              <div className="p-5 rounded-2xl bg-cyan-50/60 dark:bg-[#080C15]/90 border border-cyan-200 dark:border-cyan-500/20">
                <div className="flex items-center gap-2 text-cyan-700 dark:text-cyan-400 font-display font-bold text-base mb-2">
                  <Download className="w-4 h-4" />
                  <span>Formato Digital</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
                  Ideal se queres enviar por email ao docente, imprimir na tua faculdade ou fazer a tua própria apresentação.
                </p>
                <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1.5">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                    <span>Ficheiro PDF fechado + Word (.docx) editável</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                    <span>Entrega instantânea no teu WhatsApp</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                    <span>Mais económico e ecológico</span>
                  </li>
                </ul>
              </div>

              {/* Physical Box */}
              <div className="p-5 rounded-2xl bg-emerald-50/60 dark:bg-[#080C15]/90 border border-emerald-200 dark:border-emerald-500/25">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-display font-bold text-base mb-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Formato Físico (Impresso)</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
                  Pronto para entregar na mão do professor. Não precisas de procurar gráfica nem perder tempo em filas.
                </p>
                <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1.5">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Impressão nítida em papel 80g alta alvura</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Capa transparente + Espiral ou Capa Dura</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Entrega combinada em Luanda & Províncias</span>
                  </li>
                </ul>
              </div>

            </div>

            <div className="mt-5 p-3.5 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 text-xs text-slate-700 dark:text-slate-300 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Na encomenda do formato físico, <strong>recebes também</strong> os ficheiros digitais sem custo adicional!</span>
              </span>
            </div>
          </div>
        </div>

        {/* View Mode 1: Detailed Comparison Table & Cards */}
        {activeTab === 'comparison' && (
          <div className="space-y-10">
            {/* Desktop Structured Table with crisp academic readability */}
            <div className="hidden lg:block overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0B101D] shadow-lg dark:shadow-xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02]">
                    <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-400">Tipo de Trabalho</th>
                    <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-400">Âmbito & Páginas</th>
                    <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">Preço Digital</th>
                    <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">Preço Físico</th>
                    <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-400">Prazo Médio</th>
                    <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-right text-slate-700 dark:text-slate-400">Ação</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-white/5 text-sm">
                  {pricingTiers.map((tier) => (
                    <tr key={tier.id} className="hover:bg-slate-50/80 dark:hover:bg-white/[0.02] transition-colors group">
                      <td className="py-5 px-6">
                        <div className="font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                          {tier.name}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{tier.category}</div>
                      </td>
                      <td className="py-5 px-6 text-slate-700 dark:text-slate-300 text-xs">
                        {tier.scope}
                      </td>
                      <td className="py-5 px-6">
                        <span className="font-mono font-bold text-cyan-700 dark:text-cyan-300 text-base tabular-nums">
                          {tier.digitalPrice}
                        </span>
                        <span className="block text-[11px] text-slate-500">PDF + Word editável</span>
                      </td>
                      <td className="py-5 px-6">
                        <span className="font-mono font-bold text-emerald-700 dark:text-emerald-400 text-base tabular-nums">
                          {tier.physicalPrice}
                        </span>
                        <span className="block text-[11px] text-slate-500">Impresso + Espiral</span>
                      </td>
                      <td className="py-5 px-6 text-slate-700 dark:text-slate-300 text-xs">
                        <span className="font-mono font-medium">{tier.turnaround}</span>
                      </td>
                      <td className="py-5 px-6 text-right">
                        <a
                          href={`https://wa.me/244955993656?text=Ol%C3%A1%2C%20gostaria%20de%20encomendar%3A%20${encodeURIComponent(tier.name)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-all shadow-sm"
                        >
                          <span>Pedir</span>
                          <ArrowRight className="w-3 h-3" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile / Responsive Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-6">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.id}
                  className="bg-white dark:bg-[#0C1222] border border-slate-200 dark:border-white/10 rounded-2xl p-6 relative flex flex-col justify-between shadow-sm"
                >
                  {tier.popular && (
                    <div className="absolute top-4 right-4 text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 px-2 py-0.5 rounded">
                      Mais Solicitado
                    </div>
                  )}

                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{tier.category}</span>
                    <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mt-1 mb-2">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mb-4">{tier.scope}</p>

                    <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-[#080C15] border border-slate-200 dark:border-white/5 mb-5">
                      <div>
                        <span className="text-[11px] text-cyan-700 dark:text-cyan-400 font-semibold block">Digital</span>
                        <span className="text-base font-bold font-mono text-cyan-800 dark:text-cyan-300 tabular-nums">
                          {tier.digitalPrice}
                        </span>
                      </div>
                      <div className="border-l border-slate-200 dark:border-white/10 pl-3">
                        <span className="text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold block">Físico</span>
                        <span className="text-base font-bold font-mono text-emerald-800 dark:text-emerald-400 tabular-nums">
                          {tier.physicalPrice}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      {tier.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/244955993656?text=Ol%C3%A1%2C%20gostaria%20de%20encomendar%3A%20${encodeURIComponent(tier.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Encomendar no WhatsApp</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* View Mode 2: Interactive Real-Time Price Calculator */}
        {activeTab === 'calculator' && (
          <div id="calculadora" className="max-w-4xl mx-auto bg-white dark:bg-[#0C1222] border border-slate-200 dark:border-white/10 rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">Simulador de Orçamento Imediato</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Configura o teu trabalho e descobre o valor estimado antes de falar no WhatsApp.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Controls */}
              <div className="space-y-5">
                {/* 1. Tipo de Trabalho */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    1. Qual é o tipo de trabalho?
                  </label>
                  <select
                    value={calcWorkType}
                    onChange={(e) => setCalcWorkType(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-[#080C15] border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 transition-colors"
                  >
                    <option value="investigacao">Trabalho de Investigação Escolar (7ª a 13ª)</option>
                    <option value="relatorio">Relatório de Estágio / Visita Técnica</option>
                    <option value="monografia">Monografia / TCC de Licenciatura</option>
                    <option value="slides">Apresentação de Slides (PowerPoint)</option>
                    <option value="formatacao">Apenas Formatação ABNT / Normas</option>
                    <option value="digitacao">Digitação de Manuscritos / Apontamentos</option>
                  </select>
                </div>

                {/* 2. Formato */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    2. Em que formato queres receber?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setCalcFormat('digital')}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        calcFormat === 'digital'
                          ? 'border-cyan-500 bg-cyan-50 dark:bg-cyan-500/10 text-slate-900 dark:text-white'
                          : 'border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#080C15] text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                      }`}
                    >
                      <div className="text-xs font-bold text-cyan-700 dark:text-cyan-300 flex items-center gap-1.5">
                        <Download className="w-3.5 h-3.5" /> Apenas Digital
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">PDF + Word no WhatsApp</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setCalcFormat('fisico')}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        calcFormat === 'fisico'
                          ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 text-slate-900 dark:text-white'
                          : 'border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#080C15] text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                      }`}
                    >
                      <div className="text-xs font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5" /> Físico + Digital
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Impresso & Encadernado</div>
                    </button>
                  </div>
                </div>

                {/* 3. Número de Páginas / Slides */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      3. Quantidade aproximada de páginas:
                    </label>
                    <span className="font-mono text-sm font-bold text-emerald-600 dark:text-emerald-400 tabular-nums">
                      {calcPages} {calcWorkType === 'slides' ? 'slides' : 'páginas'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max={calcWorkType === 'monografia' ? 80 : 40}
                    step="1"
                    value={calcPages}
                    onChange={(e) => setCalcPages(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                    <span>3 páginas</span>
                    <span>{calcWorkType === 'monografia' ? '80 páginas' : '40 páginas'}</span>
                  </div>
                </div>

                {/* 4. Urgência */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    4. Qual é a urgência?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setCalcUrgency('normal')}
                      className={`py-2 px-3 rounded-xl text-xs font-medium border text-center transition-all ${
                        calcUrgency === 'normal'
                          ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 font-semibold'
                          : 'border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#080C15] text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      Normal (2 a 4 dias)
                    </button>
                    <button
                      type="button"
                      onClick={() => setCalcUrgency('urgente')}
                      className={`py-2 px-3 rounded-xl text-xs font-medium border text-center transition-all ${
                        calcUrgency === 'urgente'
                          ? 'border-amber-500 bg-amber-50 dark:bg-amber-500/10 text-amber-800 dark:text-amber-300 font-semibold'
                          : 'border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#080C15] text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      ⚡ Urgente (24h)
                    </button>
                  </div>
                </div>
              </div>

              {/* Estimate Result Panel */}
              <div className="flex flex-col justify-between bg-slate-50 dark:bg-[#080C15] border border-slate-200 dark:border-white/10 rounded-2xl p-6 sm:p-8">
                <div>
                  <span className="text-xs uppercase font-semibold tracking-wider text-slate-500 dark:text-slate-400">
                    Estimativa de Investimento
                  </span>
                  
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tabular-nums">
                      {formattedEstimate}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                    Valor total de referência. Inclui pesquisa, redação, normas ABNT e garantia de correções.
                  </p>

                  <div className="my-6 pt-6 border-t border-slate-200 dark:border-white/10 space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
                    <div className="flex justify-between">
                      <span className="text-slate-500 dark:text-slate-400">1º Pagamento (Sinal 50%):</span>
                      <span className="font-mono font-bold text-emerald-700 dark:text-emerald-400">
                        {new Intl.NumberFormat('pt-AO').format(Math.round(estimatedTotal * 0.5))} Kz
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 dark:text-slate-400">2º Pagamento (Entrega 50%):</span>
                      <span className="font-mono font-bold text-emerald-700 dark:text-emerald-400">
                        {new Intl.NumberFormat('pt-AO').format(Math.round(estimatedTotal * 0.5))} Kz
                      </span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-slate-200 dark:border-white/5">
                      <span className="text-slate-500 dark:text-slate-400">Métodos aceites:</span>
                      <span className="font-medium text-slate-900 dark:text-white">PayPay AO · Unitel Money</span>
                    </div>
                  </div>
                </div>

                <a
                  href={generateWhatsAppQuoteUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-lg shadow-emerald-500/20 transition-all active:scale-[0.98]"
                >
                  <MessageSquare className="w-4 h-4 fill-slate-950" />
                  <span>Enviar Orçamento no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
