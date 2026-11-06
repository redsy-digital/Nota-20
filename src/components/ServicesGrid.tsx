import { BookOpen, FileText, Presentation, Award, PenTool, CheckSquare, ArrowUpRight } from 'lucide-react';

export function ServicesGrid() {
  const services = [
    {
      id: "01",
      icon: BookOpen,
      title: "Trabalhos de Investigação & Temáticos",
      description: "Pesquisa académica fundamentada com autores conceituados, introdução estruturada, desenvolvimento crítico e conclusão rigorosa.",
      idealFor: "Ensino Médio, Politécnicos e Faculdades",
      accent: "text-emerald-400"
    },
    {
      id: "02",
      icon: FileText,
      title: "Relatórios de Estágio Curricular",
      description: "Estruturação completa das atividades desenvolvidas na empresa ou instituição: diagnóstico, metodologia, resultados e anexos.",
      idealFor: "Finalistas de Institutos Médios e Licenciaturas",
      accent: "text-cyan-400"
    },
    {
      id: "03",
      icon: Award,
      title: "Monografias & Projetos de Fim de Curso (TCC)",
      description: "Apoio rigoroso por etapas: definição do tema, problemática, hipóteses, marco teórico, pesquisa de campo e formatação integral.",
      idealFor: "Licenciaturas, Mestrados e Pós-Graduações",
      accent: "text-teal-400"
    },
    {
      id: "04",
      icon: Presentation,
      title: "Apresentações em Diapositivos (Slides)",
      description: "Slides modernos no PowerPoint e Canva com design limpo, infográficos explicativos e notas de apoio para dominares a defesa.",
      idealFor: "Defesas de Trabalhos e Seminários",
      accent: "text-amber-400"
    },
    {
      id: "05",
      icon: CheckSquare,
      title: "Formatação de Normas (ABNT / APA)",
      description: "Ajuste de margens, fontes, espaçamento 1.5, sumários automáticos, numeração de páginas, citações e referências bibliográficas.",
      idealFor: "Trabalhos já redigidos que precisam de padrão",
      accent: "text-indigo-400"
    },
    {
      id: "06",
      icon: PenTool,
      title: "Digitação Rápida & Transcrição",
      description: "Conversão de apontamentos manuais, folhas fotocopiadas ou áudios para documentos Word formatados com correção gramatical.",
      idealFor: "Trabalhos manuscritos e apostilas",
      accent: "text-pink-400"
    }
  ];

  return (
    <section id="servicos" className="py-16 lg:py-24 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
            Catálogo de Serviços
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
            Tudo o que precisas para ser o melhor aluno da turma
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Cada trabalho é desenvolvido do zero, respeitando as instruções específicas do teu colégio ou universidade em Angola, sem atalhos e com qualidade comprovada.
          </p>
        </div>

        {/* Services Bento-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative bg-[#0D1424] hover:bg-[#111A2E] border border-white/10 hover:border-emerald-500/30 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className={`w-5 h-5 ${item.accent}`} />
                    </div>
                    <span className="font-mono text-xs text-slate-500 font-semibold">
                      {item.id}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-slate-400">
                    <strong className="text-slate-300 font-medium">Indicado:</strong> {item.idealFor}
                  </span>
                  <a
                    href={`https://wa.me/244955993656?text=Ol%C3%A1%21%20Quero%20saber%20mais%20sobre%20o%20servi%C3%A7o%3A%20${encodeURIComponent(item.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 rounded-md text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/10 transition-colors"
                    title="Solicitar este serviço no WhatsApp"
                    aria-label={`Solicitar ${item.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
