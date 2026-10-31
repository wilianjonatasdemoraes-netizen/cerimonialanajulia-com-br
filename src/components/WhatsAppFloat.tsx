import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { z } from "zod";

const todayIso = () => {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const NAME_MAX = 80;

const nameField = (label: string) =>
  z
    .string()
    .trim()
    .max(NAME_MAX, `Máximo ${NAME_MAX} caracteres`)
    .refine(
      (v) => !v || /^[\p{L}\s\-'&]+$/u.test(v),
      `${label} contém caracteres inválidos`,
    )
    .refine(
      (v) => !v || /\p{L}/u.test(v),
      `Informe um ${label.toLowerCase()} válido`,
    )
    .optional();

const formSchema = z.object({
  noivos: nameField("Nome"),
  cidade: nameField("Cidade"),
  data: z
    .string()
    .optional()
    .refine((v) => !v || /^\d{4}-\d{2}-\d{2}$/.test(v), "Data inválida")
    .refine((v) => {
      if (!v) return true;
      const d = new Date(v + "T00:00:00");
      return !isNaN(d.getTime()) && v >= todayIso();
    }, "A data deve ser hoje ou futura"),
  convidados: z
    .string()
    .optional()
    .refine((v) => !v || /^\d+$/.test(v), "Use apenas números")
    .refine((v) => !v || parseInt(v, 10) > 0, "Deve ser maior que zero")
    .refine((v) => !v || parseInt(v, 10) <= 5000, "Máximo 5000"),
});

type FormErrors = Partial<Record<"noivos" | "cidade" | "data" | "convidados", string>>;

const PHONE = "5537999265472";

const LOWER_WORDS = new Set(["de", "da", "do", "das", "dos", "e", "di", "du"]);

// Allow only letters (incl. acentos), espaço, hífen, apóstrofo e &, com limite.
const maskName = (raw: string) =>
  raw
    .replace(/[^\p{L}\s\-'&]/gu, "")
    .replace(/\s{2,}/g, " ")
    .replace(/^\s+/, "")
    .slice(0, NAME_MAX);

const titleCase = (raw: string) =>
  raw
    .toLocaleLowerCase("pt-BR")
    .split(" ")
    .map((w, i) => {
      if (!w) return w;
      if (i > 0 && LOWER_WORDS.has(w)) return w;
      // preserva hífens: ex. "são-josé"
      return w
        .split("-")
        .map((p) => (p ? p[0].toLocaleUpperCase("pt-BR") + p.slice(1) : p))
        .join("-");
    })
    .join(" ")
    .trim();

const buildUrl = (
  noivos: string,
  cidade: string,
  data: string,
  convidados: string,
) => {
  const partes = [
    "Olá, Ana Júlia! Vi seu site e gostaria de receber uma proposta para cerimonial/organização do meu evento.",
    noivos.trim() ? `Noivos: ${noivos.trim()}.` : "",
    cidade.trim() ? `Cidade do evento: ${cidade.trim()}.` : "",
    data.trim() ? `Data prevista: ${formatDate(data)}.` : "",
    convidados.trim() ? `Convidados estimados: ${convidados.trim()}.` : "",
  ].filter(Boolean);
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(partes.join(" "))}`;
};

const formatDate = (iso: string) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return iso;
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
};

const WhatsAppFloat = () => {
  const [open, setOpen] = useState(false);
  const [noivos, setNoivos] = useState("");
  const [cidade, setCidade] = useState("");
  const [data, setData] = useState("");
  const [convidados, setConvidados] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const panelRef = useRef<HTMLDivElement>(null);
  const fieldRefs = {
    noivos: useRef<HTMLInputElement>(null),
    cidade: useRef<HTMLInputElement>(null),
    data: useRef<HTMLInputElement>(null),
    convidados: useRef<HTMLInputElement>(null),
  };
  const fieldOrder: (keyof FormErrors)[] = ["noivos", "cidade", "data", "convidados"];

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  const runValidation = (values: {
    noivos: string;
    cidade: string;
    data: string;
    convidados: string;
  }) => {
    const result = formSchema.safeParse(values);
    const next: FormErrors = {};
    if (!result.success) {
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FormErrors;
        if (key && !next[key]) next[key] = issue.message;
      }
    }
    return next;
  };

  const validateField = (key: keyof FormErrors, override?: string) => {
    const values = { noivos, cidade, data, convidados, [key]: override ?? "" };
    const next = runValidation(values);
    setErrors((p) => ({ ...p, [key]: next[key] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next = runValidation({ noivos, cidade, data, convidados });
    if (Object.keys(next).length > 0) {
      setErrors(next);
      const firstInvalid = fieldOrder.find((k) => next[k]);
      if (firstInvalid) {
        const el = fieldRefs[firstInvalid].current;
        el?.focus({ preventScroll: true });
        el?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }
    setErrors({});
    window.open(buildUrl(noivos, cidade, data, convidados), "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9998]">
      {/* Popover */}
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="Personalizar mensagem do WhatsApp"
          className="absolute bottom-20 right-0 w-[300px] md:w-[340px] bg-warm-dark border border-gold/30 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.6)] p-5 animate-in fade-in slide-in-from-bottom-2 duration-300"
        >
          <button
            onClick={() => setOpen(false)}
            aria-label="Fechar"
            className="absolute top-3 right-3 text-champagne/50 hover:text-champagne transition-colors"
          >
            <X className="w-4 h-4" strokeWidth={1.4} />
          </button>

          <p className="text-gold/70 text-[9px] tracking-[0.3em] uppercase font-sans mb-1">
            Atendimento Premium
          </p>
          <h4 className="font-serif text-xl text-cream font-light italic mb-4 leading-tight">
            Vamos falar sobre o seu evento
          </h4>

          <form onSubmit={handleSubmit} noValidate className="space-y-3">
            <div>
              <label className="block text-cream/60 text-[10px] tracking-[0.2em] uppercase font-sans mb-1.5">
                Nome dos noivos
              </label>
              <input
                type="text"
                ref={fieldRefs.noivos}
                value={noivos}
                maxLength={NAME_MAX}
                onChange={(e) => {
                  const v = maskName(e.target.value);
                  setNoivos(v);
                  if (errors.noivos) validateField("noivos", v);
                }}
                onBlur={() => {
                  const v = titleCase(maskName(noivos)).slice(0, NAME_MAX);
                  setNoivos(v);
                  validateField("noivos", v);
                }}
                placeholder="Ex: Ana & Lucas"
                aria-invalid={!!errors.noivos}
                className={`w-full bg-transparent border outline-none text-cream text-sm font-light px-3 py-2 transition-colors placeholder:text-cream/30 ${
                  errors.noivos ? "border-destructive/70" : "border-champagne/20 focus:border-gold/60"
                }`}
              />
              {errors.noivos && (
                <p className="mt-1 text-destructive text-[10px] font-sans">{errors.noivos}</p>
              )}
            </div>
            <div>
              <label className="block text-cream/60 text-[10px] tracking-[0.2em] uppercase font-sans mb-1.5">
                Cidade do evento
              </label>
              <input
                type="text"
                ref={fieldRefs.cidade}
                value={cidade}
                maxLength={NAME_MAX}
                onChange={(e) => {
                  const v = maskName(e.target.value);
                  setCidade(v);
                  if (errors.cidade) validateField("cidade", v);
                }}
                onBlur={() => {
                  const v = titleCase(maskName(cidade)).slice(0, NAME_MAX);
                  setCidade(v);
                  validateField("cidade", v);
                }}
                placeholder="Ex: Pará de Minas"
                aria-invalid={!!errors.cidade}
                className={`w-full bg-transparent border outline-none text-cream text-sm font-light px-3 py-2 transition-colors placeholder:text-cream/30 ${
                  errors.cidade ? "border-destructive/70" : "border-champagne/20 focus:border-gold/60"
                }`}
              />
              {errors.cidade && (
                <p className="mt-1 text-destructive text-[10px] font-sans">{errors.cidade}</p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-cream/60 text-[10px] tracking-[0.2em] uppercase font-sans mb-1.5">
                  Data
                </label>
                <input
                  type="date"
                  ref={fieldRefs.data}
                  value={data}
                  min={todayIso()}
                  onChange={(e) => {
                    setData(e.target.value);
                    if (errors.data) setErrors((p) => ({ ...p, data: undefined }));
                  }}
                  aria-invalid={!!errors.data}
                  className={`w-full bg-transparent border outline-none text-cream text-sm font-light px-3 py-2 transition-colors [color-scheme:dark] ${
                    errors.data ? "border-destructive/70" : "border-champagne/20 focus:border-gold/60"
                  }`}
                />
                {errors.data && (
                  <p className="mt-1 text-destructive text-[10px] font-sans">{errors.data}</p>
                )}
              </div>
              <div>
                <label className="block text-cream/60 text-[10px] tracking-[0.2em] uppercase font-sans mb-1.5">
                  Convidados
                </label>
                <input
                  type="number"
                  min={1}
                  max={5000}
                  step={1}
                  inputMode="numeric"
                  ref={fieldRefs.convidados}
                  value={convidados}
                  onChange={(e) => {
                    setConvidados(e.target.value);
                    if (errors.convidados) setErrors((p) => ({ ...p, convidados: undefined }));
                  }}
                  placeholder="Ex: 150"
                  aria-invalid={!!errors.convidados}
                  className={`w-full bg-transparent border outline-none text-cream text-sm font-light px-3 py-2 transition-colors placeholder:text-cream/30 ${
                    errors.convidados ? "border-destructive/70" : "border-champagne/20 focus:border-gold/60"
                  }`}
                />
                {errors.convidados && (
                  <p className="mt-1 text-destructive text-[10px] font-sans">{errors.convidados}</p>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="btn-whatsapp w-full mt-2"
            >
              <span className="wa-icon">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z" />
                </svg>
              </span>
              Enviar no WhatsApp
            </button>
            <button
              type="button"
              onClick={() => {
                window.open(buildUrl("", "", "", ""), "_blank", "noopener,noreferrer");
                setOpen(false);
              }}
              className="w-full text-champagne/50 hover:text-champagne text-[10px] tracking-[0.2em] uppercase font-sans py-1 transition-colors"
            >
              Pular e falar agora
            </button>
          </form>
        </div>
      )}

      {/* Floating button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Falar com Ana Júlia no WhatsApp"
        aria-expanded={open}
        data-event="whatsapp_float_click"
        className="relative group block"
      >
        {!open && (
          <span className="hidden md:block wa-float-label group-hover:opacity-100 opacity-90 transition-opacity">
            Fale agora — Resposta em minutos!
          </span>
        )}
        {!open && <span className="wa-float-halo" aria-hidden="true" />}
        <span
          className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/30 transition-all duration-300 group-hover:scale-110 group-active:scale-95"
          style={{
            background: "linear-gradient(135deg, #2ee06b 0%, #25D366 50%, #1faa52 100%)",
            boxShadow:
              "0 14px 38px -8px rgba(37,211,102,0.65), 0 0 0 1px rgba(255,255,255,0.15) inset, 0 6px 14px -6px rgba(201,169,110,0.45)",
            animation: open ? undefined : "wa-soft-pulse 3.6s ease-in-out infinite",
          }}
        >
          {open ? (
            <X className="w-6 h-6 md:w-7 md:h-7 text-white" strokeWidth={2} />
          ) : (
            <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-8 md:h-8 fill-white" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          )}
        </span>
      </button>
    </div>
  );
};

export default WhatsAppFloat;
