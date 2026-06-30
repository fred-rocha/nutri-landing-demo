import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Heart,
  Leaf,
  MessageCircle,
  Sparkles,
  Star,
  Users,
  Video,
} from "lucide-react";
import marinaPortrait from "@/assets/marina-portrait.jpg";
import methodFood from "@/assets/method-food.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dra. Marina Oliveira — Nutrição feminina sem dietas restritivas" },
      {
        name: "description",
        content:
          "Acompanhamento nutricional humanizado para mulheres que querem emagrecer com leveza, reeducação alimentar e autoestima. Consulta online e presencial.",
      },
      { property: "og:title", content: "Dra. Marina Oliveira — Nutrição feminina" },
      {
        property: "og:description",
        content:
          "Emagreça sem dietas restritivas. Reeducação alimentar leve, sustentável e sem culpa.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: LandingPage,
});

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    el.querySelectorAll("[data-reveal]").forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <PainPoints />
      <About />
      <Method />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-background/70 border-b border-border/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-sage/15">
            <Leaf className="h-4 w-4 text-sage-deep" strokeWidth={1.5} />
          </span>
          <span className="font-display text-lg tracking-tight">Dra. Marina Oliveira</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#metodo" className="hover:text-foreground transition">Método</a>
          <a href="#sobre" className="hover:text-foreground transition">Sobre</a>
          <a href="#depoimentos" className="hover:text-foreground transition">Depoimentos</a>
          <a href="#faq" className="hover:text-foreground transition">Dúvidas</a>
        </nav>
        <a
          href="#cta"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-foreground/90 transition"
        >
          Agendar
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.8} />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-sage/10 blur-3xl" />
        <div className="absolute top-40 -right-20 h-[24rem] w-[24rem] rounded-full bg-beige/60 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-24 lg:pt-28 lg:pb-36 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 space-y-8">
          <div data-reveal className="reveal inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-sage-deep" strokeWidth={1.6} />
            Nutrição humanizada
          </div>

          <h1 data-reveal className="reveal reveal-delay-1 text-[2.6rem] leading-[1.05] sm:text-5xl lg:text-[4.2rem] lg:leading-[1.02] font-display">
            Emagreça sem{" "}
            <em className="italic text-sage-deep font-normal">dietas restritivas</em>{" "}
            e recupere sua autoestima.
          </h1>

          <p data-reveal className="reveal reveal-delay-2 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Transforme sua relação com a comida através de um acompanhamento nutricional
            humanizado, leve e sustentável — feito para a sua rotina e o seu corpo.
          </p>

          <div data-reveal className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#cta"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-7 py-4 text-sm font-medium tracking-wide hover:bg-foreground/90 transition shadow-[var(--shadow-lift)]"
            >
              Agendar consulta
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" strokeWidth={1.8} />
            </a>
            <a
              href="#metodo"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-4 text-sm font-medium tracking-wide hover:bg-secondary transition"
            >
              Conhecer método
            </a>
          </div>

          <div data-reveal className="reveal reveal-delay-3 flex items-center gap-6 pt-4 text-sm text-muted-foreground">
            <div className="flex -space-x-2">
              {[1,2,3,4].map((i) => (
                <span key={i} className="h-8 w-8 rounded-full bg-sage/20 border-2 border-background" />
              ))}
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-sage-deep text-sage-deep" />
                ))}
              </div>
              <span>4,9 — avaliada por 300+ pacientes</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <div data-reveal className="reveal reveal-delay-2 relative aspect-[4/5] max-w-md mx-auto lg:max-w-none rounded-[2rem] overflow-hidden bg-beige shadow-[var(--shadow-lift)]">
            <img
              src={marinaPortrait}
              alt="Dra. Marina Oliveira, nutricionista"
              width={896}
              height={1152}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/15 via-transparent to-transparent" />
          </div>

          {/* Floating trust cards */}
          <div className="reveal reveal-delay-3 float-soft absolute -left-4 sm:-left-10 top-10 lg:top-16 bg-card rounded-3xl px-5 py-4 shadow-[var(--shadow-card)] border border-border/60 w-[12.5rem]">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-sage/15">
                <Users className="h-5 w-5 text-sage-deep" strokeWidth={1.5} />
              </span>
              <div>
                <div className="text-base font-display leading-none">+300</div>
                <div className="text-xs text-muted-foreground mt-1">pacientes atendidas</div>
              </div>
            </div>
          </div>

          <div
            className="reveal reveal-delay-3 float-soft absolute -right-4 sm:-right-6 bottom-10 lg:bottom-20 bg-card rounded-3xl px-5 py-4 shadow-[var(--shadow-card)] border border-border/60 w-[13.5rem]"
            style={{ animationDelay: "1.5s" }}
          >
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-sage/15">
                <Video className="h-5 w-5 text-sage-deep" strokeWidth={1.5} />
              </span>
              <div>
                <div className="text-sm font-medium leading-none">Consulta</div>
                <div className="text-xs text-muted-foreground mt-1">online e presencial</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PainPoints() {
  const ref = useReveal<HTMLElement>();
  const items = [
    { t: "Já tentou várias dietas e desistiu", d: "Cada nova dieta vem com uma promessa que não se sustenta na rotina real." },
    { t: "Vive no efeito sanfona", d: "Perde peso, recupera tudo de volta — e ainda sente que falhou de novo." },
    { t: "Sente culpa ao comer", d: "Sua relação com a comida virou um peso emocional, e não um prazer." },
    { t: "Não consegue manter constância", d: "Começa motivada na segunda e desiste na sexta — não é falta de força de vontade." },
  ];
  return (
    <section ref={ref} className="py-24 lg:py-36 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <div data-reveal className="reveal text-xs uppercase tracking-[0.2em] text-sage-deep mb-5">
            Quem você é hoje
          </div>
          <h2 data-reveal className="reveal reveal-delay-1 text-4xl lg:text-6xl leading-[1.05]">
            Você sente que já <em className="italic text-sage-deep font-normal">tentou de tudo</em>?
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 gap-5 lg:gap-6">
          {items.map((it, i) => (
            <div
              key={it.t}
              data-reveal
              className={`reveal reveal-delay-${Math.min(i+1, 3)} group rounded-3xl bg-card border border-border/60 p-8 lg:p-10 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] hover:-translate-y-0.5 transition-all duration-500`}
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sage/12 mb-6">
                <Heart className="h-5 w-5 text-sage-deep" strokeWidth={1.5} />
              </span>
              <h3 className="text-2xl font-display leading-snug">{it.t}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="sobre" className="py-24 lg:py-36">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
        <div data-reveal className="reveal text-xs uppercase tracking-[0.2em] text-sage-deep mb-6">
          A filosofia
        </div>
        <h2 data-reveal className="reveal reveal-delay-1 text-4xl lg:text-6xl leading-[1.05]">
          Nutrição sem <em className="italic text-sage-deep font-normal">terrorismo alimentar</em>.
        </h2>
        <div data-reveal className="reveal reveal-delay-2 mt-10 space-y-6 text-lg lg:text-xl leading-relaxed text-muted-foreground">
          <p>
            Acredito que emagrecer não é uma punição. É um processo de reconciliação —
            com o seu corpo, com a sua história e com a comida que está no seu prato todos os dias.
          </p>
          <p>
            No meu consultório, não existem alimentos proibidos, planilhas impossíveis ou
            metas que ignoram a sua vida real. Existe escuta, ciência e a construção paciente
            de hábitos que você consegue sustentar por anos — não por sete dias.
          </p>
        </div>
        <div data-reveal className="reveal reveal-delay-3 mt-12 flex flex-wrap justify-center gap-3">
          {["CRN-3 ativo", "Especialista em comportamento alimentar", "Pós em nutrição clínica"].map((b) => (
            <span key={b} className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm text-foreground/80">
              <Check className="h-3.5 w-3.5 text-sage-deep" strokeWidth={2} />
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Method() {
  const ref = useReveal<HTMLElement>();
  const steps = [
    {
      n: "01",
      t: "Avaliação completa",
      d: "Anamnese aprofundada, histórico clínico, exames e um mapa honesto da sua relação com a comida.",
    },
    {
      n: "02",
      t: "Plano personalizado",
      d: "Um plano alimentar construído sobre a sua rotina, preferências e cultura — não sobre uma planilha genérica.",
    },
    {
      n: "03",
      t: "Acompanhamento contínuo",
      d: "Retornos quinzenais, ajustes finos e suporte pelo WhatsApp para sustentar a constância no longo prazo.",
    },
  ];
  return (
    <section ref={ref} id="metodo" className="py-24 lg:py-36 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <div data-reveal className="reveal text-xs uppercase tracking-[0.2em] text-sage-deep mb-5">O método</div>
          <h2 data-reveal className="reveal reveal-delay-1 text-4xl lg:text-6xl leading-[1.05]">
            Como funciona meu <em className="italic text-sage-deep font-normal">acompanhamento</em>.
          </h2>
        </div>

        <div className="mt-16 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div data-reveal className="reveal reveal-delay-2 aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[var(--shadow-card)]">
              <img
                src={methodFood}
                alt="Alimentos frescos e naturais"
                width={1024}
                height={768}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <ol className="lg:col-span-7 space-y-4">
            {steps.map((s, i) => (
              <li
                key={s.n}
                data-reveal
                className={`reveal reveal-delay-${Math.min(i+1,3)} group rounded-3xl bg-card border border-border/60 p-8 lg:p-10 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] transition-all duration-500`}
              >
                <div className="grid sm:grid-cols-[auto_1fr] gap-6 items-start">
                  <div className="font-display text-5xl text-sage-deep/60 leading-none">{s.n}</div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-display leading-tight">{s.t}</h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{s.d}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const ref = useReveal<HTMLElement>();
  const items = [
    {
      name: "Camila Ribeiro",
      role: "São Paulo · 8 meses de acompanhamento",
      quote:
        "Perdi 14 kg sem nunca sentir que estava de dieta. Pela primeira vez, comer fora com amigos deixou de ser um problema. A Marina mudou minha cabeça antes de mudar meu corpo.",
    },
    {
      name: "Juliana Mendes",
      role: "Belo Horizonte · 6 meses",
      quote:
        "Vinha de dez anos de efeito sanfona. Aqui aprendi a comer com prazer e ainda assim emagrecer 11 kg de forma constante. Não é mágica — é método.",
    },
    {
      name: "Renata Almeida",
      role: "Rio de Janeiro · 1 ano",
      quote:
        "A culpa depois de comer simplesmente foi embora. Recuperei minha autoestima, minha energia e 9 kg a menos na balança — mas o que mais importa é como me sinto.",
    },
  ];
  return (
    <section ref={ref} id="depoimentos" className="py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <div data-reveal className="reveal text-xs uppercase tracking-[0.2em] text-sage-deep mb-5">Histórias reais</div>
          <h2 data-reveal className="reveal reveal-delay-1 text-4xl lg:text-6xl leading-[1.05]">
            Mulheres que <em className="italic text-sage-deep font-normal">se reencontraram</em>.
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-5 lg:gap-6">
          {items.map((t, i) => (
            <figure
              key={t.name}
              data-reveal
              className={`reveal reveal-delay-${Math.min(i+1,3)} rounded-3xl bg-card border border-border/60 p-8 lg:p-10 shadow-[var(--shadow-soft)] flex flex-col`}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-sage-deep text-sage-deep" />
                ))}
              </div>
              <blockquote className="text-lg leading-relaxed text-foreground/90 font-display italic">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-border/60">
                <div className="font-medium">{t.name}</div>
                <div className="text-sm text-muted-foreground mt-1">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const ref = useReveal<HTMLElement>();
  const [open, setOpen] = useState<number | null>(0);
  const items = [
    {
      q: "A consulta é online ou presencial?",
      a: "Atendo nas duas modalidades. As consultas online acontecem por videochamada em ambiente seguro, com a mesma profundidade do atendimento presencial. O presencial é em consultório próprio em São Paulo.",
    },
    {
      q: "Você aceita plano de saúde?",
      a: "O atendimento é particular, mas emito recibo para reembolso. Muitos planos cobrem nutrição — verifico com você antes da primeira consulta.",
    },
    {
      q: "Em quanto tempo vejo resultados?",
      a: "Mudanças sutis aparecem nas primeiras semanas: mais energia, menos compulsão, melhor digestão. Resultados visíveis na balança costumam acontecer entre o segundo e terceiro mês — com sustentação no longo prazo.",
    },
  ];
  return (
    <section ref={ref} id="faq" className="py-24 lg:py-36 bg-secondary/40">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="text-center">
          <div data-reveal className="reveal text-xs uppercase tracking-[0.2em] text-sage-deep mb-5">Perguntas frequentes</div>
          <h2 data-reveal className="reveal reveal-delay-1 text-4xl lg:text-5xl leading-[1.05]">
            Antes de começar.
          </h2>
        </div>

        <div className="mt-14 space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div
                key={it.q}
                data-reveal
                className={`reveal reveal-delay-${Math.min(i+1,3)} rounded-3xl bg-card border border-border/60 overflow-hidden`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 text-left px-7 py-6 hover:bg-secondary/40 transition"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-display">{it.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    strokeWidth={1.5}
                  />
                </button>
                <div
                  className="grid transition-all duration-500 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-7 pb-7 text-muted-foreground leading-relaxed">{it.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="cta" className="py-24 lg:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div
          data-reveal
          className="reveal relative overflow-hidden rounded-[2.5rem] bg-foreground text-background px-8 py-20 lg:px-20 lg:py-28 text-center shadow-[var(--shadow-lift)]"
        >
          <div className="absolute -top-32 -right-20 h-[28rem] w-[28rem] rounded-full bg-sage/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-[24rem] w-[24rem] rounded-full bg-sage/15 blur-3xl" />

          <div className="relative">
            <div className="text-xs uppercase tracking-[0.25em] text-sage/80 mb-6">
              Próximo passo
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] font-display max-w-3xl mx-auto">
              Pronta para transformar sua{" "}
              <em className="italic text-sage font-normal">relação com a comida</em>?
            </h2>
            <p className="mt-6 max-w-xl mx-auto text-base lg:text-lg text-background/70 leading-relaxed">
              Vagas limitadas a cada mês para garantir um acompanhamento próximo.
              Responde no WhatsApp e a Marina retorna em até 24h.
            </p>

            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noreferrer"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-sage text-background px-8 py-5 text-base font-medium hover:bg-sage-deep transition shadow-[0_24px_48px_-12px_rgba(143,165,139,0.5)]"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={1.8} />
              Falar no WhatsApp
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" strokeWidth={1.8} />
            </a>

            <div className="mt-8 text-xs text-background/50 tracking-wide">
              Resposta em até 24h · Consulta online ou presencial
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col sm:flex-row gap-4 justify-between items-center text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-sage/15">
            <Leaf className="h-3.5 w-3.5 text-sage-deep" strokeWidth={1.5} />
          </span>
          <span>Dra. Marina Oliveira · CRN-3 · Nutricionista</span>
        </div>
        <div>© {new Date().getFullYear()} Todos os direitos reservados</div>
      </div>
    </footer>
  );
}
