import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight, BarChart3, Lock, Zap } from "lucide-react";
import chaosImg from "@assets/generated_images/abstract_tangled_data_lines_representing_chaos.png";
import clarityImg from "@assets/generated_images/abstract_structured_grid_representing_clarity.png";
import controlImg from "@assets/generated_images/abstract_upward_trajectory_representing_control.png";

const phases = [
  {
    id: "chaos",
    title: "1. De Chaos",
    subtitle: "Het Startpunt",
    description: "Gefragmenteerde data, tegenstrijdige rapportages en een team zonder duidelijke richting. Het MT stuurt op gevoel in plaats van feiten.",
    stat: "80% van tijd gaat naar data cleaning",
    icon: <Zap className="w-5 h-5" />,
    image: chaosImg
  },
  {
    id: "clarity",
    title: "2. De Helderheid",
    subtitle: "De Transformatie",
    description: "We definiëren de 'Single Source of Truth'. KPI's worden vastgelegd, definities afgestemd en eigenaarschap belegd in de organisatie.",
    stat: "100% definitie consistentie",
    icon: <Lock className="w-5 h-5" />,
    image: clarityImg
  },
  {
    id: "control",
    title: "3. De Controle",
    subtitle: "Het Resultaat",
    description: "Een voorspelbare, schaalbare data-organisatie. Het dashboard is geen doel meer, maar een betrouwbaar stuurmiddel voor strategie.",
    stat: "Directe strategische bijsturing",
    icon: <BarChart3 className="w-5 h-5" />,
    image: controlImg
  }
];

export function MethodologySection() {
  const [activePhase, setActivePhase] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play functionality
  useEffect(() => {
    const duration = 5000; // 5 seconds per slide
    const intervalTime = 50; // Update every 50ms
    const step = 100 / (duration / intervalTime);

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActivePhase((current) => (current + 1) % phases.length);
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Reset progress when user clicks
  const handlePhaseClick = (index: number) => {
    setActivePhase(index);
    setProgress(0);
  };

  return (
    <section className="py-24 md:py-32 bg-background border-t border-border overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest uppercase text-primary mb-4 block">
              Onze Methodologie
            </span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight text-foreground">
              Van Complexiteit naar <span className="italic text-primary">Controle.</span>
            </h2>
          </div>
          <div className="hidden md:block text-right">
             <p className="text-muted-foreground font-light text-lg">
                Een bewezen proces voor datavolwassenheid.
             </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Content Navigation */}
          <div className="lg:col-span-5 space-y-4">
            {phases.map((phase, index) => (
              <div 
                key={phase.id}
                onClick={() => handlePhaseClick(index)}
                className={cn(
                  "group cursor-pointer p-6 border-l-2 transition-all duration-500 relative overflow-hidden",
                  activePhase === index 
                    ? "border-primary bg-secondary/5" 
                    : "border-border hover:border-primary/30"
                )}
              >
                {/* Progress Bar Background for Active Item */}
                {activePhase === index && (
                  <motion.div 
                    className="absolute bottom-0 left-0 h-[2px] bg-primary"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.05, ease: "linear" }}
                  />
                )}

                <div className="flex justify-between items-center mb-2">
                  <span className={cn(
                    "text-sm font-bold uppercase tracking-wider transition-colors",
                    activePhase === index ? "text-primary" : "text-muted-foreground"
                  )}>
                    {phase.subtitle}
                  </span>
                  {activePhase === index && (
                    <motion.div layoutId="activeIcon">
                        <ArrowRight className="w-4 h-4 text-primary" />
                    </motion.div>
                  )}
                </div>
                
                <h3 className={cn(
                  "text-2xl font-serif mb-2 transition-colors",
                  activePhase === index ? "text-foreground" : "text-muted-foreground/60"
                )}>
                  {phase.title}
                </h3>
                
                <AnimatePresence>
                  {activePhase === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-muted-foreground leading-relaxed pt-2 pb-4">
                        {phase.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                        <span className="p-1 bg-primary/10 rounded-full text-primary">{phase.icon}</span>
                        {phase.stat}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right: Visual Display */}
          <div className="lg:col-span-7 relative h-[500px] w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhase}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, y: -20 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                 <div className="relative w-full h-full overflow-hidden rounded-sm shadow-2xl border border-border">
                    <img 
                      src={phases[activePhase].image} 
                      alt={phases[activePhase].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-8 left-8 right-8">
                       <div className="bg-background/90 backdrop-blur-sm p-6 border border-border inline-block max-w-md">
                          <p className="font-serif italic text-lg text-primary">
                             "{phases[activePhase].id === 'chaos' ? 'Zonder regie regeert de waan van de dag.' : phases[activePhase].id === 'clarity' ? 'Structuur geeft vrijheid.' : 'Voorspelbaarheid is de ultieme luxe.'}"
                          </p>
                       </div>
                    </div>
                 </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
