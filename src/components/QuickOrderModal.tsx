import { useState } from 'react';
import { X, Sparkles, CheckCircle2, MessageCircle } from 'lucide-react';

interface QuickOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuickOrderModal({ isOpen, onClose }: QuickOrderModalProps) {
  const [name, setName] = useState('');
  const [institution, setInstitution] = useState('');
  const [theme, setTheme] = useState('');
  const [format, setFormat] = useState<'digital' | 'fisico'>('digital');
  const [workType, setWorkType] = useState('investigacao');
  const [deadline, setDeadline] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const typeLabel =
      workType === 'investigacao' ? 'Trabalho de Investigação' :
      workType === 'relatorio' ? 'Relatório de Estágio' :
      workType === 'monografia' ? 'Monografia / TCC' :
      workType === 'slides' ? 'Apresentação em Slides' : 'Formatação ABNT';

    const formatLabel = format === 'digital' ? 'Apenas Digital (PDF + Word)' : 'Físico (Impresso + Encadernado em Luanda)';

    const text = `Olá! Quero encomendar um trabalho no Académico Pro:%0A%0A*Nome:* ${encodeURIComponent(name || 'Estudante')}%0A*Instituição:* ${encodeURIComponent(institution || 'Não especificada')}%0A*Tipo de Trabalho:* ${encodeURIComponent(typeLabel)}%0A*Tema:* ${encodeURIComponent(theme || 'A definir')}%0A*Formato:* ${encodeURIComponent(formatLabel)}%0A*Data de Entrega:* ${encodeURIComponent(deadline || 'Normal')}%0A%0A_Aguardando orçamento e dados para pagamento via PayPay AO / Unitel Money._`;

    window.open(`https://wa.me/244955993656?text=${text}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white dark:bg-[#0D1424] border border-slate-200 dark:border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">Encomendar Trabalho</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">Preenche os dados e abre diretamente no WhatsApp.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              O Teu Nome ou Apelido:
            </label>
            <input
              type="text"
              required
              placeholder="Ex: Manuel ou Teresa"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-slate-50 dark:bg-[#080C15] border border-slate-300 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                Escola ou Faculdade:
              </label>
              <input
                type="text"
                placeholder="Ex: IMEL, UCAN, ISPTEC..."
                value={institution}
                onChange={(e) => setInstitution(e.target.value)}
                className="w-full bg-slate-50 dark:bg-[#080C15] border border-slate-300 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                Tipo de Trabalho:
              </label>
              <select
                value={workType}
                onChange={(e) => setWorkType(e.target.value)}
                className="w-full bg-slate-50 dark:bg-[#080C15] border border-slate-300 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
              >
                <option value="investigacao">Investigação Escolar</option>
                <option value="relatorio">Relatório de Estágio</option>
                <option value="monografia">Monografia / TCC</option>
                <option value="slides">Slides / PowerPoint</option>
                <option value="formatacao">Formatação ABNT</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Tema do Trabalho:
            </label>
            <textarea
              required
              rows={2}
              placeholder="Descreve o tema ou assunto que o teu professor passou..."
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="w-full bg-slate-50 dark:bg-[#080C15] border border-slate-300 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-emerald-500 resize-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                Formato Desejado:
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setFormat('digital')}
                  className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-all ${
                    format === 'digital'
                      ? 'border-cyan-500 bg-cyan-50 dark:bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 font-bold'
                      : 'border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#080C15] text-slate-600 dark:text-slate-400'
                  }`}
                >
                  Digital
                </button>
                <button
                  type="button"
                  onClick={() => setFormat('fisico')}
                  className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-all ${
                    format === 'fisico'
                      ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 font-bold'
                      : 'border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#080C15] text-slate-600 dark:text-slate-400'
                  }`}
                >
                  Físico
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                Data Máxima de Entrega:
              </label>
              <input
                type="text"
                placeholder="Ex: Sexta-feira ou 2 dias"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="w-full bg-slate-50 dark:bg-[#080C15] border border-slate-300 dark:border-white/10 rounded-xl px-4 py-2 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between gap-4">
            <span className="text-[11px] text-slate-600 dark:text-slate-400 flex items-center gap-1 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              PayPay AO & Unitel Money
            </span>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-md shadow-emerald-500/20 active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>Enviar no WhatsApp</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
