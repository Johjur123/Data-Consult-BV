import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { CheckCircle2, AlertCircle, HelpCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    id: 1,
    title: "De Ambitie",
    desc: "Het MT wil sturen op feiten. De strategie is helder, de KPI's zijn benoemd.",
    highlight: "MT wil sturen",
    icon: <CheckCircle2 className="w-6 h-6 text-primary" />
  },
  {
    id: 2,
    title: "De Realiteit A",
    desc: "Sales rapporteert in hun dashboard een omzetgroei van +12%. Iedereen blij.",
    highlight: "Dashboard A zegt X",
    icon: <CheckCircle2 className="w-6 h-6 text-primary" />
  },
  {
    id: 3,
    title: "Het Conflict",
    desc: "Finance komt met hun eigen rapportage: +4% groei. De definities matchen niet. Discussie ontstaat over welk cijfer klopt, in plaats van wat de cijfers betekenen.",
    highlight: "Dashboard B zegt Y",
    icon: <AlertCircle className="w-6 h-6 text-destructive" />
  },
  {
    id: 4,
    title: "De Oplossing",
    desc: "Wie heeft het mandaat om te beslissen? Dit is geen toolprobleem, maar een governance vraagstuk. Wij brengen de regie terug.",
    highlight: "Regie & Mandaat",
    icon: <HelpCircle className="w-6 h-6 text-secondary" />
  }
];

export function BoardroomTestSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative bg-background text-foreground py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20 max-w-3xl">
          <span className="text-xs font-bold tracking-widest uppercase text-primary mb-4 block">
            30 Seconden Scenario
          </span>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
            De Bestuurskamer Test
          </h2>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            Herkenbaar? Een klassiek voorbeeld van waar data-ambities stranden.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 relative">
          {/* Sticky Scene Panel */}
          <div className="hidden lg:block relative h-[80vh] sticky top-24">
            <div className="absolute inset-0 bg-secondary/5 border border-border rounded-sm overflow-hidden flex items-center justify-center p-12">
               {/* Dynamic Visuals based on scroll would go here - simplified for mockup */}
               <div className="relative w-full aspect-square max-w-md">
                  <div className="absolute inset-0 bg-background border border-border shadow-2xl p-8 flex flex-col justify-between">
                    <div className="flex justify-between items-center border-b border-border pb-4">
                        <span className="font-serif font-bold text-lg">Board Meeting</span>
                        <span className="text-xs uppercase tracking-wider text-muted-foreground">09:00 AM</span>
                    </div>
                    
                    <div className="space-y-6">
                        <motion.div 
                            style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [0.5, 1]) }}
                            className="p-4 bg-primary/5 border border-primary/10 rounded-sm"
                        >
                            <div className="text-sm font-bold text-primary mb-1">Strategische Doelen</div>
                            <div className="h-2 bg-primary/20 rounded-full w-3/4"></div>
                        </motion.div>

                        <motion.div 
                            style={{ opacity: useTransform(scrollYProgress, [0.25, 0.45], [0.2, 1]) }}
                            className="flex gap-4"
                        >
                            <div className="flex-1 p-4 bg-background border border-border shadow-sm">
                                <div className="text-xs text-muted-foreground mb-1">Sales View</div>
                                <div className="text-2xl font-serif text-green-600">+12%</div>
                            </div>
                            <motion.div 
                                style={{ opacity: useTransform(scrollYProgress, [0.5, 0.7], [0.2, 1]) }}
                                className="flex-1 p-4 bg-background border border-border shadow-sm"
                            >
                                <div className="text-xs text-muted-foreground mb-1">Finance View</div>
                                <div className="text-2xl font-serif text-amber-600">+4%</div>
                            </motion.div>
                        </motion.div>
                        
                        <motion.div 
                             style={{ opacity: useTransform(scrollYProgress, [0.75, 1], [0, 1]) }}
                             className="p-4 bg-secondary/10 border border-secondary text-secondary-foreground text-center font-serif italic"
                        >
                            "Wie beslist wat waar is?"
                        </motion.div>
                    </div>

                    <div className="text-center text-xs text-muted-foreground pt-4 border-t border-border">
                        Fractional.BI Governance Framework
                    </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Scrolling Steps */}
          <div className="space-y-[40vh] py-[10vh]">
            {steps.map((step, index) => (
              <StepCard key={step.id} step={step} index={index} />
            ))}
            
            <div className="h-[20vh] flex items-center">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90 text-lg px-8 h-14 w-full md:w-auto" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
                    Plan Kennismaking
                </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, index }: { step: any, index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
                "p-8 border rounded-sm transition-all duration-500",
                isInView 
                    ? "bg-background border-primary/50 shadow-lg scale-100" 
                    : "bg-background/50 border-border opacity-50 scale-95"
            )}
        >
            <div className="flex items-center gap-4 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary/20 text-secondary font-bold text-sm border border-secondary/20">
                    {index + 1}
                </span>
                <h3 className="text-xl font-serif font-bold">{step.title}</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
                {step.desc}
            </p>
        </motion.div>
    );
}
