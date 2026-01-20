import { ArrowRight } from "lucide-react";

const segments = [
  {
    id: "board",
    title: "Directie & Raad van Bestuur",
    description:
      "U stuurt op strategie en resultaten, maar krijgt verschillende antwoorden op dezelfde vraag. Wij helpen u naar één bestuurlijke waarheid, met duidelijke KPI-keuzes en vast eigenaarschap — zodat besluitvorming versnelt.",
  },
  {
    id: "cfo",
    title: "CFO & Finance",
    description:
      "U wilt grip op marge, cash en risico, zonder maandelijkse discussies over definities of herkomst van cijfers. Wij brengen rust door financiële KPI’s bestuurlijk te verankeren in governance, tooling en verantwoordelijkheden.",
  },
  {
    id: "bi",
    title: "Head of BI / Data & Analytics",
    description:
      "U zit tussen een groeiende vraag uit de business en een team dat vooral reactief werkt. Wij helpen u prioriteiten, rollen en standaarden aan te brengen — zodat BI van backlog-fabriek naar stuurinstrument beweegt.",
  },
  {
    id: "pe",
    title: "Private Equity & Portfolioteams",
    description:
      "U wilt consistent inzicht over participaties, zonder dat elke organisatie zijn eigen waarheid bouwt. Wij helpen bij portfolio-brede BI-regie, met ruimte voor lokale verschillen en centrale sturing.",
  },
];

export function ForWhoWeWork() {
  const handleClick = () => {
    const el = document.querySelector("#expertise");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-surface-light border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12 max-w-3xl">
          <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase mb-4 block" data-testid="text-forwho-kicker">
            Voor wie we werken
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4" data-testid="text-forwho-heading">
            Data als bestuurder, niet als bijzaak.
          </h2>
          <p className="text-white/60 text-lg" data-testid="text-forwho-subtitle">
            Wij werken voor leiders die eindverantwoordelijk zijn voor resultaten — en voelen dat hun BI-omgeving die verantwoordelijkheid nog onvoldoende ondersteunt. Niet door gebrek aan data, maar door gebrek aan richting, eigenaarschap en samenhang.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10 mb-12">
          {segments.map((segment, index) => (
            <button
              key={segment.id}
              onClick={() => handleClick()}
              className="group text-left pb-6 pt-4 border-b border-white/10 hover:border-primary/60 transition-colors flex flex-col justify-between focus-ring-accent cursor-pointer bg-transparent"
              data-testid={`card-segment-${index}`}
            >
              <div>
                <h3 className="text-xl font-serif text-white mb-3 group-hover:text-primary transition-colors">
                  {segment.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">{segment.description}</p>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 group-hover:text-white">
                Zie relevante uitdagingen
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          ))}
        </div>

        <div className="text-center">
            <p className="text-lg text-white/80 font-serif italic">
               "In al deze rollen draait het om dezelfde vraag: wie bepaalt wat leidend is — en hoe is dat duurzaam georganiseerd?"
            </p>
        </div>
      </div>
    </section>
  );
}
