import { GraduationCap, Quote } from 'lucide-react';

export function StudentReviews() {
  const reviews = [
    {
      name: "Mauro Domingos",
      institution: "Universidade Católica de Angola (UCAN)",
      course: "Economia e Gestão · 4º Ano",
      grade: "Nota 19",
      text: "Estava a trabalhar e sem tempo para concluir o meu relatório de estágio curricular. A equipa do Académico Pro organizou toda a estrutura teórica e prática com normas ABNT impecáveis. O orientador elogiou o trabalho e passei com 19 valores!",
      format: "Formato Físico Encadernado em Luanda"
    },
    {
      name: "Esperança Kiluanji",
      institution: "ISPTEC - Talatona",
      course: "Engenharia Informática · 3º Ano",
      grade: "Nota 18",
      text: "Paguei os 50% pelo Unitel Money em 30 segundos. Recebi o trabalho no prazo combinado de 48 horas em PDF e Word. Foi super fácil fazer pequenos retoques e apresentar os slides na aula. Muito profissionais e atenciosos.",
      format: "Formato Digital + Slides PowerPoint"
    },
    {
      name: "Adilson Capemba",
      institution: "IMEL - Instituto Médio de Economia de Luanda",
      course: "Contabilidade · 13ª Classe",
      grade: "Nota 20",
      text: "Encomendei a versão impressa e encadernada para entregar no colégio. A encadernação em espiral com capa plástica transparente veio impecável e o texto sem plágio nenhum. Recomendo a todos os colegas de turma!",
      format: "Formato Físico (Entregue no Morro Bento)"
    }
  ];

  return (
    <section className="py-16 lg:py-24 border-t border-slate-200 dark:border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
            Resultados Comprovados
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            O que dizem os estudantes que já tiraram 18 a 20
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Apoiamos estudantes das principais escolas secundárias, institutos médios e universidades de Luanda e de todo o país.
          </p>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#0C1222] border border-slate-200 dark:border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-500/40 dark:hover:border-emerald-500/25 transition-all shadow-sm hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display font-bold text-sm text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 px-2.5 py-1 rounded-lg">
                    {rev.grade}
                  </span>
                  <Quote className="w-5 h-5 text-slate-400 dark:text-slate-600" />
                </div>

                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic mb-6">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-white/5">
                <div className="font-display font-bold text-sm text-slate-900 dark:text-white">
                  {rev.name}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {rev.course}
                </div>
                <div className="text-[11px] text-emerald-700 dark:text-emerald-400/90 mt-1 flex items-center gap-1.5 font-medium">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>{rev.institution}</span>
                </div>
                <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-2 font-mono">
                  {rev.format}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
