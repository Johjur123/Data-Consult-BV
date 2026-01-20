import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Check, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const questions = [
  {
    id: 1,
    question: "Is er een heldere data-strategie?",
    options: [
      { label: "Ja, gedocumenteerd & bekend", score: 10 },
      { label: "Deels, maar niet breed gedragen", score: 5 },
      { label: "Nee, we werken ad-hoc", score: 0 }
    ]
  },
  {
    id: 2,
    question: "Wie is eigenaar van de datakwaliteit?",
    options: [
      { label: "Duidelijke data stewards", score: 10 },
      { label: "IT / BI afdeling", score: 5 },
      { label: "Niemand specifiek", score: 0 }
    ]
  },
  {
    id: 3,
    question: "Worden dashboards gebruikt voor besluiten?",
    options: [
      { label: "Altijd, in elke vergadering", score: 10 },
      { label: "Soms, ter ondersteuning", score: 5 },
      { label: "Zelden, ze worden gewantrouwd", score: 0 }
    ]
  }
];

export function MaturityCheck() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleOptionClick = (optionScore: number) => {
    setScore(prev => prev + optionScore);
    if (step < questions.length - 1) {
      setStep(prev => prev + 1);
    } else {
      setCompleted(true);
    }
  };

  const reset = () => {
    setStep(0);
    setScore(0);
    setCompleted(false);
  };

  const getResult = () => {
    if (score >= 25) return { label: "Strategisch Leider", color: "text-green-500", desc: "U bent goed op weg, maar pas op voor stagnatie." };
    if (score >= 15) return { label: "Groeifase", color: "text-amber-500", desc: "De basis is er, maar governance mist." };
    return { label: "Operationele Chaos", color: "text-destructive", desc: "U verliest dagelijks geld aan ineffiëntie." };
  };

  return (
    <section className="py-24 bg-foreground text-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-white/60 mb-4 block">
              Quick Scan
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
              Waar staat uw organisatie?
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Doe de test in 3 klikken. Ontdek direct of u waarde haalt uit uw data, of dat u geld laat liggen.
            </p>
            <div className="flex gap-4 text-sm text-white/40">
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Gratis</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Direct uitslag</span>
            </div>
          </div>

          <div className="bg-background rounded-sm p-8 shadow-2xl min-h-[300px] flex flex-col justify-center relative overflow-hidden">
            {!completed ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between items-center mb-6">
                   <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Vraag {step + 1}/{questions.length}</span>
                   <div className="w-12 h-1 bg-border rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        animate={{ width: `${((step) / questions.length) * 100}%` }}
                      />
                   </div>
                </div>
                
                <h3 className="text-xl font-serif text-foreground mb-8 font-medium">
                  {questions[step].question}
                </h3>
                
                <div className="space-y-3">
                  {questions[step].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleOptionClick(option.score)}
                      className="w-full text-left p-4 border border-border rounded-sm hover:border-primary hover:bg-primary/5 transition-all text-sm font-medium text-foreground flex justify-between group"
                    >
                      {option.label}
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className="mb-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">Uw Resultaat</div>
                <h3 className={cn("text-3xl font-serif mb-2", getResult()?.color)}>
                  {getResult()?.label}
                </h3>
                <p className="text-muted-foreground mb-8">
                  {getResult()?.desc}
                </p>
                <Button className="w-full bg-primary text-white hover:bg-primary/90 mb-4" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Plan Audit Gesprek
                </Button>
                <button 
                  onClick={reset}
                  className="text-xs text-muted-foreground hover:text-primary flex items-center justify-center gap-2 w-full"
                >
                  <RefreshCw className="w-3 h-3" /> Doe opnieuw
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
