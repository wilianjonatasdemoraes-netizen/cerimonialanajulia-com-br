import { useState } from "react";
import { z } from "zod";
import anjuImage from "@/assets/anju-2.jpg";

const contactSchema = z.object({
  nome: z.string().trim().min(2, "Nome muito curto").max(100),
  whatsapp: z.string().trim().min(8, "WhatsApp inválido").max(20),
  email: z.string().trim().email("E-mail inválido").max(120).optional().or(z.literal("")),
  tipo: z.string().trim().min(2).max(60),
  data: z.string().trim().max(50).optional().or(z.literal("")),
  cidade: z.string().trim().min(2, "Informe a cidade do evento").max(100),
  convidados: z.string().trim().max(10).optional().or(z.literal("")),
  orcamento: z.string().trim().max(60).optional().or(z.literal("")),
  mensagem: z.string().trim().max(1000).optional().or(z.literal("")),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    email: "",
    tipo: "Casamento",
    data: "",
    cidade: "",
    convidados: "",
    orcamento: "",
    mensagem: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      setError(result.error.issues[0]?.message ?? "Verifique os campos.");
      return;
    }
    setError(null);
    const message = `Olá Ana Júlia! Me chamo ${formData.nome} (WhatsApp: ${formData.whatsapp}). Quero organizar um(a) ${formData.tipo}${formData.data ? ` na data ${formData.data}` : ""}, na cidade de ${formData.cidade}.${formData.convidados ? ` Cerca de ${formData.convidados} convidados.` : ""}${formData.orcamento ? ` Faixa de orçamento: ${formData.orcamento}.` : ""}${formData.email ? ` E-mail: ${formData.email}.` : ""}${formData.mensagem ? ` ${formData.mensagem}` : ""}`;
    const whatsappUrl = `https://wa.me/5537999265472?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClasses =
    "w-full bg-background border border-gold-light/20 px-5 py-4 text-sm font-light text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold-light/60 focus:shadow-[0_0_15px_-3px_hsl(var(--gold)/0.1)] transition-all duration-500";

  return (
    <section id="contato" className="py-24 md:py-32 bg-secondary">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="hidden md:block">
            <div className="premium-img-frame">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={anjuImage}
                  alt="Ana Júlia, cerimonialista em Pará de Minas, durante o atendimento a um casal"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div>
            <p className="heading-ornament text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 font-sans">
              Contato
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4">
              Vamos Conversar
            </h2>
            <div className="premium-divider mb-6">
              <div className="ornament" />
            </div>
            <p className="text-muted-foreground text-sm font-light leading-relaxed mb-10">
              Conte um pouco sobre o seu evento. Em poucos minutos, retornarei pelo WhatsApp com uma proposta personalizada.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <input
                type="text"
                name="nome"
                placeholder="Seu nome"
                required
                maxLength={100}
                value={formData.nome}
                onChange={handleChange}
                className={inputClasses}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="whatsapp"
                  placeholder="WhatsApp (com DDD)"
                  required
                  maxLength={20}
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className={inputClasses}
                />
                <select
                  name="tipo"
                  required
                  value={formData.tipo}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="Casamento">Casamento</option>
                  <option value="15 Anos">15 Anos</option>
                  <option value="Evento Social">Evento Social</option>
                  <option value="Evento Corporativo">Evento Corporativo</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
              <input
                type="email"
                name="email"
                placeholder="E-mail (opcional)"
                maxLength={120}
                value={formData.email}
                onChange={handleChange}
                className={inputClasses}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="data"
                  placeholder="Data prevista"
                  maxLength={50}
                  value={formData.data}
                  onChange={handleChange}
                  className={inputClasses}
                />
                <input
                  type="text"
                  name="cidade"
                  placeholder="Cidade do evento"
                  required
                  maxLength={100}
                  value={formData.cidade}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="number"
                  inputMode="numeric"
                  min={1}
                  max={5000}
                  name="convidados"
                  placeholder="Número de convidados"
                  value={formData.convidados}
                  onChange={handleChange}
                  className={inputClasses}
                />
                <select
                  name="orcamento"
                  value={formData.orcamento}
                  onChange={handleChange}
                  className={inputClasses}
                  aria-label="Faixa de orçamento"
                >
                  <option value="">Faixa de orçamento (opcional)</option>
                  <option value="Ainda estou definindo">Ainda estou definindo</option>
                  <option value="Até R$ 30 mil">Até R$ 30 mil</option>
                  <option value="R$ 30 mil a R$ 60 mil">R$ 30 mil a R$ 60 mil</option>
                  <option value="R$ 60 mil a R$ 100 mil">R$ 60 mil a R$ 100 mil</option>
                  <option value="Acima de R$ 100 mil">Acima de R$ 100 mil</option>
                </select>
              </div>
              <textarea
                name="mensagem"
                placeholder="Conte um pouco sobre o seu evento..."
                rows={4}
                maxLength={1000}
                value={formData.mensagem}
                onChange={handleChange}
                className={`${inputClasses} resize-none`}
              />
              {error && (
                <p className="text-destructive text-xs font-sans">{error}</p>
              )}
              <button
                type="submit"
                data-event="form_submit"
                className="btn-whatsapp w-full"
              >
                <span className="wa-icon">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                    <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z" />
                  </svg>
                </span>
                Solicitar orçamento
              </button>
            </form>

            <div className="mt-8 flex flex-col items-center gap-3">
              <a
                href="https://wa.me/5537999265472"
                target="_blank"
                rel="noopener noreferrer"
                data-event="contact_whatsapp_click"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm font-light transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z"/>
                </svg>
                (37) 99926-5472
              </a>
              <a
                href="https://www.instagram.com/Anajuliacerimonialista"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm font-light transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                @anajulia.cerimonialista
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
