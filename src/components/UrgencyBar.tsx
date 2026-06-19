import { useState } from "react";
import { X } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5537999265472?text=" +
  encodeURIComponent(
    "Olá, Ana Júlia! Vi que ainda há datas disponíveis. Quero garantir a minha agora."
  );

const UrgencyBar = () => {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div
      className="w-full text-white text-[11px] md:text-[12px] font-sans tracking-wide"
      style={{ background: "#b8860b" }}
      role="region"
      aria-label="Aviso de urgência"
    >
      <div className="container max-w-6xl mx-auto px-4 py-2 flex items-center justify-center gap-3 text-center">
        <span className="leading-snug">
          🗓️ Apenas <strong>3 datas disponíveis</strong> para o segundo semestre de 2026 —{" "}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 font-medium hover:text-white/90"
          >
            Garanta a sua agora
          </a>
        </span>
        <button
          onClick={() => setOpen(false)}
          aria-label="Fechar aviso"
          className="ml-2 shrink-0 hover:opacity-70 transition-opacity"
        >
          <X className="w-3.5 h-3.5" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
};

export default UrgencyBar;
