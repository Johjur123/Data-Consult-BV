import { motion } from "framer-motion";

const brands = [
  "Global Fortune 500", "•", "Fintech Scale-ups", "•", "Government Agencies", "•", "Private Equity", "•", "Retail Giants"
];

export function SocialProof() {
  return (
    <section className="border-y border-white/5 bg-black/40 backdrop-blur-sm py-12 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-8 items-center">
         <div className="w-full md:w-auto md:border-r border-white/10 md:pr-8 text-center md:text-left">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 block mb-1">Trusted By</span>
            <span className="font-serif text-xl text-white">The Boardroom Standard</span>
         </div>
         
         <div className="flex-1 overflow-hidden w-full relative mask-gradient-x">
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black to-transparent z-10" />
            
            <div className="flex whitespace-nowrap">
              <motion.div 
                className="flex gap-12 items-center"
                animate={{ x: "-50%" }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
                  <span key={i} className="text-lg font-serif text-white/30 tracking-wide uppercase">
                    {brand}
                  </span>
                ))}
              </motion.div>
            </div>
         </div>
      </div>
    </section>
  );
}
