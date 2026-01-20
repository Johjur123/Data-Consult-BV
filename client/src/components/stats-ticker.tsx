import { motion } from "framer-motion";

const stats = [
  "€2M+ Waarde Ontsloten",
  "•",
  "15+ Governance Frameworks",
  "•",
  "40% Minder Rapportagetijd",
  "•",
  "100% Onafhankelijk Advies",
  "•",
  "Direct Bestuurlijk Inzicht",
  "•",
];

export function StatsTicker() {
  return (
    <div className="bg-foreground text-background py-4 overflow-hidden border-y border-white/10 relative z-20">
      <div className="flex whitespace-nowrap">
        <motion.div 
          className="flex gap-8 items-center"
          animate={{ x: "-50%" }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {[...stats, ...stats, ...stats, ...stats].map((stat, i) => (
            <span key={i} className="text-sm font-medium tracking-widest uppercase opacity-80">
              {stat}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
