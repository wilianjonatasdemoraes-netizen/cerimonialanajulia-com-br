import { useState } from "react";
import anjuImage from "@/assets/anju-2.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: "",
    data: "",
    cidade: "",
    convidados: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá Ana Júlia! Me chamo ${formData.nome}. Meu casamento será em ${formData.data}, na cidade de ${formData.cidade}, com aproximadamente ${formData.convidados} convidados. ${formData.mensagem}`;
    const whatsappUrl = `https://wa.me/5537998263766?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClasses =
    "w-full bg-background border border-gold-light/20 px-5 py-4 text-sm font-light text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold-light/60 focus:shadow-[0_0_15px_-3px_hsl(var(--gold)/0.1)] transition-all duration-500";

  return (
    <section id="contato" className="py-24 md:py-32 bg-secondary">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image with premium frame */}
          <div className="hidden md:block">
            <div className="premium-img-frame">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={anjuImage}
                  alt="Ana Júlia"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Form */}
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
              Conte-me sobre o casamento dos seus sonhos. Terei prazer em ajudar a torná-lo realidade.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
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
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="data"
                  placeholder="Data do casamento"
                  required
                  maxLength={50}
                  value={formData.data}
                  onChange={handleChange}
                  className={inputClasses}
                />
                <input
                  type="text"
                  name="cidade"
                  placeholder="Cidade"
                  required
                  maxLength={100}
                  value={formData.cidade}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
              <input
                type="text"
                name="convidados"
                placeholder="Número de convidados"
                maxLength={20}
                value={formData.convidados}
                onChange={handleChange}
                className={inputClasses}
              />
              <textarea
                name="mensagem"
                placeholder="Conte um pouco sobre o casamento dos seus sonhos..."
                rows={4}
                maxLength={1000}
                value={formData.mensagem}
                onChange={handleChange}
                className={`${inputClasses} resize-none`}
              />
              <button
                type="submit"
                className="btn-premium w-full bg-primary text-primary-foreground py-4 text-xs tracking-[0.25em] uppercase font-sans"
              >
                Solicitar Orçamento
              </button>
            </form>

            <div className="mt-8 text-center">
              <a
                href="https://wa.me/5537998263766"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm font-light transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Falar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
