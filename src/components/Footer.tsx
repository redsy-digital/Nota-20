import { Logo } from './Logo';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#060911] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <Logo />
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              A melhor assessoria académica para estudantes do Ensino Médio e Universitário em Angola. Trabalhos de investigação, relatórios e monografias com rigor científico e pontualidade.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Atendimento em Luanda & Províncias</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4">
              Navegação Rápida
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#servicos" className="hover:text-emerald-400 transition-colors">
                  Serviços Académicos
                </a>
              </li>
              <li>
                <a href="#precos" className="hover:text-emerald-400 transition-colors">
                  Tabela Digital & Físico
                </a>
              </li>
              <li>
                <a href="#pagamentos" className="hover:text-emerald-400 transition-colors">
                  PayPay AO & Unitel Money
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-emerald-400 transition-colors">
                  Processo em 4 Passos
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4">
              Contactos Oficiais
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-mono block font-medium">+244 955 993 656</span>
                  <span className="text-[11px] text-slate-500">WhatsApp & Chamadas Diretas</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white block font-medium">Luanda, Angola</span>
                  <span className="text-[11px] text-slate-500">Entregas em toda a cidade e províncias</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white block font-medium">Segunda a Sábado</span>
                  <span className="text-[11px] text-slate-500">08h00 às 21h00 (Pedidos urgentes 24h)</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4: Payments & Security */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4">
              Garantia & Pagamentos
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Paga com total segurança através de <strong>PayPay AO</strong>, <strong>Unitel Money</strong> ou <strong>Multicaixa Express</strong>.
            </p>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
              <div className="text-[11px] font-semibold text-emerald-400">
                Regra dos 50% / 50%
              </div>
              <div className="text-[11px] text-slate-400">
                Pagas o sinal de 50% no início e os 50% finais só após aprovares a prévia do teu trabalho.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Académico Pro. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span>Privacidade & Sigilo Garantido</span>
            <span>·</span>
            <span>Feito para Estudantes em Angola</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
