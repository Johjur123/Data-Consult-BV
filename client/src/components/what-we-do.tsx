import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Eén BI-agenda",
    tag: "Agenda",
    description:
      "Een duidelijke, gedragen BI-agenda: wat wél prioriteit heeft, wat bewust niet — afgestemd met MT en teams.",
  },
  {
    title: "Scherpe stuur-KPI's",
    tag: "KPI's",
    description:
      "Een compacte set stuur-KPI's met eenduidige definities, vaste eigenaren en herleidbare bronnen — zodat discussies over cijfers stoppen.",
  },
  {
    title: "Werkend ritme",
    tag: "Ritme",
    description:
      "Een vast overleg- en beslisritme waarin data leidt tot keuzes en acties — niet tot herhaling van dezelfde discussie.",
  },
  {
    title: "Een zelfstandig team",
    tag: "Team",
    description:
      "Een BI- en datateam met duidelijke rollen, kaders en prioriteiten — dat zelfstandig kan leveren binnen de afgesproken regie.",
  },
];

export function WhatWeDo() {
  return (
    <section id="expertise" className="py-24 bg-slate-50 text-slate-900 relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12 max-w-3xl">
          <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase mb-4 block" data-testid="text-whatwedo-kicker">
            Wat regie op data in de praktijk betekent
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4" data-testid="text-whatwedo-heading">
            Regie op data. Zichtbaar in de praktijk.
          </h2>
          <p className="text-slate-600 text-lg" data-testid="text-whatwedo-subtitle">
            Wij brengen orde in agenda, KPI’s en ritme — zodat data weer een bestuurlijk instrument wordt in plaats van ruis.
            Geen extra dashboards om het dashboarden, maar duidelijke keuzes over wat telt, wie eigenaar is en hoe er gestuurd wordt.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group border border-slate-200 bg-white p-6 flex flex-col justify-between cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:border-primary/60 transition-all focus-ring-accent"
              data-testid={`card-service-${index}`}
            >
              <div>
                <span className="inline-flex items-center text-[10px] font-mono uppercase tracking-[0.2em] text-slate-700 mb-4 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">
                  {service.tag}
                </span>
                <h3 className="text-xl font-serif text-slate-900 mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">{service.description}</p>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500 group-hover:text-primary">
                Lees meer
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
