import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart3, 
  BrainCircuit, 
  Users, 
  Lightbulb, 
  Target, 
  LayoutTemplate,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/abstract_corporate_data_strategy_background.png";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary pt-20">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src={heroBg} 
            alt="Data Strategy Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary border border-secondary/30 text-sm font-semibold tracking-wide uppercase">
              Strategisch BI & Data Consulting
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading leading-tight">
              Van Data Chaos naar <span className="text-secondary">Strategische Sturing</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">
              Ik help organisaties hun BI-capaciteit zó inrichten dat data daadwerkelijk gebruikt wordt voor besluitvorming. Niet als pure bouwer, maar als jouw Fractional Head of BI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-semibold h-12 px-8 text-base" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Kennismaking Inplannen
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 h-12 px-8 text-base" onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}>
                Bekijk Diensten
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-blue-600 rounded-lg blur opacity-30" />
              <div className="relative bg-card/10 backdrop-blur-sm border border-white/10 p-8 rounded-lg shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-white/90">
                    <div className="bg-secondary/20 p-3 rounded-full">
                      <Target className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Heldere BI Visie</h3>
                      <p className="text-sm text-white/60">Prioriteiten die aansluiten op doelen</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-white/90">
                    <div className="bg-secondary/20 p-3 rounded-full">
                      <Users className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Schaalbaar Team</h3>
                      <p className="text-sm text-white/60">Duidelijke rollen en governance</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-white/90">
                    <div className="bg-secondary/20 p-3 rounded-full">
                      <LayoutTemplate className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Effectieve Dashboards</h3>
                      <p className="text-sm text-white/60">Gebouwd voor gebruik, niet voor de show</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-primary">Het probleem is niet techniek, maar regie</h2>
            <p className="text-muted-foreground text-lg">
              Veel organisaties hebben de tools, maar missen de strategie. Herkenbaar?
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BrainCircuit className="w-10 h-10 text-destructive/80" />,
                title: "Chaotisch Landschap",
                desc: "\"We hebben Power BI, maar het voelt ongestructureerd en we weten niet waar we moeten kijken.\""
              },
              {
                icon: <LayoutTemplate className="w-10 h-10 text-destructive/80" />,
                title: "Ongebruikte Dashboards",
                desc: "\"Iedereen bouwt rapportages, maar niemand stuurt er echt op. Het inzicht ontbreekt.\""
              },
              {
                icon: <Users className="w-10 h-10 text-destructive/80" />,
                title: "Kennis Afhankelijkheid",
                desc: "\"We zijn te afhankelijk van één persoon en missen een structurele teamopzet.\""
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="mb-6 bg-red-50 w-16 h-16 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">{item.title}</h3>
                <p className="text-muted-foreground italic leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-8">
              Rust, Richting en Structuur
            </h2>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-12">
              "Ik help organisaties hun BI-capaciteit zó inrichten dat data daadwerkelijk gebruikt wordt voor sturing, besluitvorming en verantwoording."
            </p>
            <div className="grid sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
              {[
                "Heldere BI-visie (wat wel / niet)",
                "Minder afhankelijkheid van individuen",
                "Prioriteiten o.b.v. strategische doelen",
                "Meer draagvlak bij management",
                "Schaalbaar BI-team en rollen",
                "Dashboards die écht gebruikt worden"
              ].map((val, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                  <span className="text-white/90">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold tracking-wider uppercase text-sm">Diensten</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mt-2 text-primary">Hoe ik kan helpen</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-border hover:border-secondary/50 transition-colors duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl text-primary">BI Maturity Scan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Een snelle, grondige analyse van waar de organisatie staat. Inzicht in processen, techniek en mensen.
                </p>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2" /> Analyse huidige situatie</li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2" /> Quick wins identificeren</li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2" /> Roadmap voor groei</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-secondary/50 transition-colors duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-secondary text-white text-xs px-3 py-1 rounded-bl-lg font-medium">Populair</div>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl text-primary">Fractional Head of BI</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Leiderschap op afroep. Ik fungeer als uw strategisch BI-manager voor 1-2 dagen per week.
                </p>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2" /> Strategie bepalen & bewaken</li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2" /> Team coaching & aansturing</li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2" /> Stakeholder management</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-secondary/50 transition-colors duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl text-primary">Governance & Opzet</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Het neerzetten van de juiste structuren zodat data betrouwbaar en schaalbaar wordt.
                </p>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2" /> Standaarden & Definities</li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2" /> Way of Working (Agile/Scrum)</li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2" /> Self-service BI inrichting</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About / Fractional Concept */}
      <section id="about" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-heading mb-6 text-primary">Waarom "Fractional"?</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Veel organisaties hebben behoefte aan senioriteit en strategie, maar hebben (nog) geen budget of werkdruk voor een fulltime Head of Data & Analytics.
                </p>
                <p>
                  Als <strong>Fractional Head of BI</strong> breng ik die senioriteit precies daar waar het nodig is. Ik ben geen pure bouwer die uren maakt op dashboards, maar de architect die zorgt dat het team effectief bouwt.
                </p>
                <p>
                  Het resultaat? Een professionele data-organisatie zonder de overhead van een fulltime manager.
                </p>
              </div>
              <Button className="mt-8 text-secondary font-semibold p-0" variant="link">
                Meer over mijn achtergrond <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-border/50">
              <h3 className="font-bold text-xl mb-6 text-primary">Mijn rol vs. traditionele consultant</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                    <span className="text-red-600 font-bold">Trad</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Traditionele Consultant / Bouwer</h4>
                    <p className="text-sm text-muted-foreground">Focus op tickets wegwerken, dashboards bouwen, uurtje-factuurtje. Vaak operationeel.</p>
                  </div>
                </div>
                <div className="w-full h-px bg-border" />
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <span className="text-green-600 font-bold">Frac</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Fractional Leader (Ik)</h4>
                    <p className="text-sm text-muted-foreground">Focus op lange termijn waarde, eigenaarschap, teamstructuur en strategie. Onderdeel van uw MT/Management.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Laten we kennismaken</h2>
            <p className="text-white/70 text-lg">
              Benieuwd wat een strategische blik voor uw data-organisatie kan betekenen? Plan vrijblijvend een gesprek.
            </p>
          </div>

          <div className="bg-white text-foreground rounded-2xl shadow-2xl p-8 md:p-12">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Naam</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-input focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="Uw naam" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Bedrijf</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-input focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="Bedrijfsnaam" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-input focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="uw@email.nl" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Waar loopt u tegenaan?</label>
                <textarea className="w-full px-4 py-3 rounded-lg border border-input focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all h-32 resize-none" placeholder="Beschrijf kort uw situatie..." />
              </div>
              <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-6 text-lg">
                Verstuur Bericht
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
