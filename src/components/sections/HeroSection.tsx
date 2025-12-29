import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import philabsLogo from "@/assets/philabs-logo.png";

const FloatingOrb = ({ 
  className, 
  delay = 0,
  size = "w-72 h-72"
}: { 
  className?: string; 
  delay?: number;
  size?: string;
}) => (
  <motion.div
    className={`absolute rounded-full blur-3xl opacity-40 ${size} ${className}`}
    animate={{
      y: [0, -30, 10, -40, 0],
      x: [0, 20, -10, 15, 0],
      scale: [1, 1.05, 0.98, 1.02, 1],
    }}
    transition={{
      duration: 12,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg-hero">
      {/* Animated orbs */}
      <FloatingOrb 
        className="bg-primary -top-20 -left-20" 
        delay={0} 
        size="w-96 h-96"
      />
      <FloatingOrb 
        className="bg-secondary top-1/3 -right-32" 
        delay={2} 
        size="w-80 h-80"
      />
      <FloatingOrb 
        className="bg-accent bottom-20 left-1/4" 
        delay={4} 
        size="w-64 h-64"
      />
      <FloatingOrb 
        className="bg-primary/50 top-1/2 right-1/4" 
        delay={6} 
        size="w-48 h-48"
      />

      {/* Grid overlay for depth */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.div
            animate={{ 
              boxShadow: [
                "0 0 60px 20px hsl(var(--primary) / 0.2)",
                "0 0 80px 30px hsl(var(--primary) / 0.3)",
                "0 0 60px 20px hsl(var(--primary) / 0.2)",
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block rounded-full p-1 overflow-hidden w-32 h-32 md:w-40 md:h-40"
          >
            <img 
              src={philabsLogo} 
              alt="PhiLabs.studio Logo" 
              className="w-full h-full object-cover block"
              style={{ transform: 'scale(1.09)', transformOrigin: 'center' }}
            />
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="text-foreground">Phi</span>
          <span className="gradient-text">Labs</span>
          <span className="text-muted-foreground">.studio</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light mb-4 text-glow"
        >
          Building Tomorrow's Ecosystem
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg text-muted-foreground/70 max-w-2xl mx-auto"
        >
          A visionary multi-sector company crafting innovative solutions for the future
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground/50"
        >
          <span className="text-sm tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};
