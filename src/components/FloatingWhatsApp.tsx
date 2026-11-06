import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/244955993656?text=Ol%C3%A1%21%20Gostaria%20de%20encomendar%20um%20trabalho%20escolar%20pelo%20Acad%C3%A9mico%20Pro.";

  return (
    <aside
      aria-label="Atendimento Rápido via WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex items-center"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-slate-950 font-display font-extrabold text-sm sm:text-base px-5 py-3.5 sm:px-6 sm:py-4 rounded-full shadow-[0_10px_35px_rgba(37,211,102,0.45)] hover:shadow-[0_15px_40px_rgba(37,211,102,0.6)] transition-all duration-300 border-2 border-white/20"
      >
        {/* Animated pulse halo */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 blur-sm group-hover:opacity-100 transition-opacity animate-pulse pointer-events-none" />

        {/* WhatsApp Icon */}
        <div className="relative z-10 w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center shrink-0">
          <svg
            viewBox="0 0 24 24"
            className="w-full h-full fill-slate-950"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.031 2C6.516 2 2.031 6.484 2.031 12C2.031 13.844 2.531 15.594 3.406 17.109L2.094 22L7.125 20.688C8.594 21.5 10.266 21.969 12.031 21.969C17.547 21.969 22.031 17.484 22.031 12C22.031 6.484 17.547 2 12.031 2ZM16.891 16.516C16.688 17.078 15.891 17.562 15.344 17.656C14.953 17.719 14.438 17.75 12.719 17.031C10.531 16.125 9.109 13.906 9 13.766C8.891 13.625 8.125 12.609 8.125 11.547C8.125 10.484 8.656 9.969 8.875 9.75C9.062 9.562 9.328 9.469 9.594 9.469C9.688 9.469 9.781 9.484 9.859 9.484C10.094 9.5 10.219 9.516 10.375 9.875C10.562 10.328 11.016 11.453 11.078 11.562C11.141 11.672 11.188 11.812 11.109 11.969C11.031 12.125 10.969 12.219 10.844 12.359C10.719 12.5 10.594 12.609 10.469 12.766C10.328 12.922 10.188 13.078 10.344 13.344C10.5 13.594 11.047 14.484 11.844 15.188C12.875 16.109 13.719 16.406 14.016 16.547C14.25 16.656 14.531 16.641 14.703 16.453C14.922 16.219 15.188 15.828 15.469 15.438C15.672 15.156 15.922 15.125 16.188 15.219C16.453 15.312 17.844 16.000 18.125 16.141C18.406 16.281 18.594 16.344 18.656 16.453C18.719 16.562 18.719 17.062 18.516 17.625L16.891 16.516Z" />
          </svg>
        </div>

        {/* Text Label */}
        <span className="relative z-10 whitespace-nowrap tracking-tight">
          Encomendar via WhatsApp
        </span>
      </a>
    </aside>
  );
}
