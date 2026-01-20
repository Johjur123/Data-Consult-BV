import { motion } from "framer-motion";
import portrait from "@assets/generated_images/professional_portrait_of_a_male_consultant_black_and_white.png";
import signature from "@assets/generated_images/handwritten_signature_script.png";

export function FoundersNote() {
  return (
    <section className="py-24 md:py-32 bg-background border-b border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Portrait */}
          <div className="md:col-span-5 md:col-start-2 relative">
             <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
                <motion.img 
                  initial={{ scale: 1.1, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  viewport={{ once: true }}
                  src={portrait} 
                  alt="Founder Portrait" 
                  className="w-full h-full object-cover grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
             </div>
             {/* Decorative Elements */}
             <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r border-b border-primary/30 hidden md:block" />
             <div className="absolute -top-6 -left-6 w-24 h-24 border-l border-t border-primary/30 hidden md:block" />
          </div>

          {/* Text Content */}
          <div className="md:col-span-6 md:pl-12">
            <span className="text-xs font-bold tracking-widest uppercase text-primary mb-6 block">
              Founder's Note
            </span>
            <h2 className="text-3xl md:text-4xl font-serif leading-tight text-foreground mb-8">
              "Techniek is makkelijk. <br/>Mensen meekrijgen is de kunst."
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                In de afgelopen 10 jaar heb ik tientallen organisaties zien worstelen met hetzelfde probleem. Er wordt geïnvesteerd in tools, licenties en consultants, maar de besluitvorming verbetert niet.
              </p>
              <p>
                Mijn overtuiging is simpel: Data is geen IT-feestje. Het is een strategisch bedrijfsmiddel dat thuishoort in de boardroom, niet in de serverruimte.
              </p>
              <p>
                Als Fractional Head of BI breng ik geen nieuwe dashboard-tool, maar een nieuwe mindset. Eigenaarschap. Mandaat. En eindelijk rust in de tent.
              </p>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
               <img src={signature} alt="Signature" className="h-16 w-auto opacity-80 -ml-4" />
               <div className="border-l border-border pl-6">
                  <div className="font-bold text-foreground">J.D. Vries</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">Founder & Lead Strategist</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
