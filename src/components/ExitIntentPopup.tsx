import { useEffect, useState } from "react";
import { X } from "lucide-react";

const STORAGE_KEY = "anaju_lead_popup_shown";
const WHATSAPP_BASE = "https://wa.me/5537999265472?text=";

const ExitIntentPopup = () => {
  const [open, setOpen] = useState(false);
  const [nome, setNome] = useState("");
  const [whats, setWhats] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    let shown = false;
    const show = () => {
      if (shown) return;
      shown = true;
      sessionStorage.setItem(STORAGE_KEY, "1");
      setOpen(true);
    };

    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) show();
    };
    const timer = window.setTimeout(show, 40000);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá, Ana Júlia! Quero receber o Checklist gratuito das 47 coisas para verificar antes do casamento. Nome: ${nome}. WhatsApp: ${whats}.`;
    window.open(WHATSAPP_BASE + encodeURIComponent(msg), "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[10001] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-w-md w-full p-8 md:p-10 border border-gold/40"
        style={{ background: "hsl(var(--background))", boxShadow: "0 30px 80px -10px rgba(0,0,0,0.6)" }}
      >
        <button
          onClick={() => setOpen(false)}
          aria-label="Fechar"
          className="absolute top-3 right-3 text-warm-dark/50 hover:text-warm-dark"
        >
          <X className="w-5 h-5" />
        </button>

        <p className="font-sans text-[10px] tracking-[0.3em] uppercase mb-3 text-center" style={{ color: "hsl(var(--gold))" }}>
          ⚠ Antes de ir embora...
        </p>
        <h3 className="font-serif italic font-light text-[26px] md:text-[30px] leading-tight text-center mb-3" style={{ color: "hsl(var(--warm-dark))" }}>
          Baixe grátis o Checklist completo
        </h3>
        <p className="text-center font-sans text-sm mb-6" style={{ color: "hsl(var(--body-text))" }}>
          ✅ <strong>47 coisas</strong> que toda noiva precisa verificar antes do casamento.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome"
            className="w-full bg-transparent border border-gold/30 px-3 py-2.5 text-sm font-light outline-none focus:border-gold"
            style={{ color: "hsl(var(--warm-dark))" }}
          />
          <input
            type="tel"
            required
            value={whats}
            onChange={(e) => setWhats(e.target.value)}
            placeholder="Seu WhatsApp"
            className="w-full bg-transparent border border-gold/30 px-3 py-2.5 text-sm font-light outline-none focus:border-gold"
            style={{ color: "hsl(var(--warm-dark))" }}
          />
          <button
            type="submit"
            className="w-full py-3 font-sans text-[11px] tracking-[0.22em] uppercase font-medium text-white transition-all hover:brightness-110"
            style={{ background: "linear-gradient(135deg, #d4af37 0%, #b8860b 100%)" }}
          >
            Quero o Checklist Grátis! →
          </button>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="block mx-auto text-warm-dark/50 hover:text-warm-dark text-xs font-sans underline-offset-2 hover:underline"
          >
            Não, obrigada
          </button>
        </form>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
