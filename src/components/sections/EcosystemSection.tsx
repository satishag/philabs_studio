import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { Palette, Cpu, Sparkles, ExternalLink, X, Shell, EarthLock, BarChart } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface SectorCardProps {
  icon: typeof Palette;
  title: string;
  description: string;
  status: "active" | "coming-soon";
  accentColor: "primary" | "secondary" | "accent";
  index: number;
  onClick?: () => void;
}

const SectorCard = ({ 
  icon: Icon, 
  title, 
  description, 
  status, 
  accentColor,
  index,
  onClick 
}: SectorCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const colorClasses = {
    primary: "bg-primary/10 text-primary border-primary/20 hover:border-primary/40",
    secondary: "bg-secondary/10 text-secondary border-secondary/20 hover:border-secondary/40",
    accent: "bg-accent/10 text-accent border-accent/20 hover:border-accent/40",
  };

  const glowClasses = {
    primary: "group-hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.3)]",
    secondary: "group-hover:shadow-[0_20px_60px_-15px_hsl(var(--secondary)/0.3)]",
    accent: "group-hover:shadow-[0_20px_60px_-15px_hsl(var(--accent)/0.3)]",
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      onClick={status === "active" ? onClick : undefined}
      className={`
        relative group glass rounded-5xl p-8 transition-all duration-500 h-full flex flex-col justify-between overflow-hidden
        ${status === "active" ? "cursor-pointer" : "cursor-default"}
        ${glowClasses[accentColor]}
      `}
    >
      {/* Status badge */}
      <div className="absolute top-6 right-6">
        {status === "active" ? (
          <span className="flex items-center gap-2 text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Active
          </span>
        ) : (
          <span className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
            Coming 2025
          </span>
        )}
      </div>

      {/* Icon */}
      <div className={`
        w-16 h-16 rounded-2xl flex items-center justify-center mb-6
        ${colorClasses[accentColor]}
        transition-all duration-300 group-hover:scale-110
      `}>
        <Icon className="w-8 h-8" />
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>

      {/* Action hint */}
      {status === "active" && (
        <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>Explore</span>
          <ExternalLink className="w-4 h-4" />
        </div>
      )}
    </motion.div>
  );
};

export const EcosystemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sectors = [
    {
      icon: Palette,
      title: "CreateEvo",
      description: "Customised merch, crafted with intent\nCreateEvo brings your brand and ideas to life through premium customised merchandise. From apparel to accessories, every product is made with precision, style, and a personal touch. Whether you're a startup, a college club, or a creator — we make your vision wearable.",
      status: "active" as const,
      accentColor: "primary" as const,
    },
    {
      icon: Cpu,
      title: "VyaparaAI",
      description: "CRM built for the backbone of the economy\nVyapara AI is an intelligent CRM platform designed specifically for small, medium businesses.\nPowered by AI, built for Karnataka.",
      status: "coming-soon" as const,
      accentColor: "secondary" as const,
    },
    /*{
      icon: Sparkles,
      title: "Creative Studio",
      description: "Where imagination meets execution. Design, branding, and creative services that make an impact.",
      status: "coming-soon" as const,
      accentColor: "accent" as const,
    },
    {
      icon: Shell,
      title: "Supply Chain",
      description: "End-to-end logistics and fulfillment ensuring timely delivery and scalable operations.",
      status: "coming-soon" as const,
      accentColor: "secondary" as const,
    },
    {
      icon: EarthLock,
      title: "Community Hub",
      description: "Platform for creators and users to collaborate, share, and grow together.",
      status: "coming-soon" as const,
      accentColor: "accent" as const,
    },
    {
      icon: BarChart,
      title: "Analytics",
      description: "Data-driven insights and dashboards to power decisions across the ecosystem.",
      status: "coming-soon" as const,
      accentColor: "primary" as const,
    },*/
  ];

  // keep active sectors first so actives are shown before coming-soon
  const sortedSectors = useMemo(() => {
    return [...sectors].sort((a, b) => {
      if (a.status === "active" && b.status !== "active") return -1;
      if (b.status === "active" && a.status !== "active") return 1;
      return 0;
    });
  }, [sectors]);

  // Fixed deterministic placements to match the bentobox layout (md+)
  const placementClasses = useMemo(() => {
    // Order matches `sortedSectors` so active sectors come first
    return [
      // Large hero block on the left (spans 2 cols x 2 rows)
      "md:col-start-1 md:col-span-2 md:row-start-1 md:row-span-2",
      // Top-right two cells
      "md:col-start-3 md:row-start-1",
      "md:col-start-4 md:row-start-1",
      // Middle-right two cells
      "md:col-start-1 md:row-start-2",
      "md:col-start-2 md:row-start-2",
      // Bottom-left under hero (spans 2 cols)
      "md:col-start-3 md:col-span-2 md:row-start-2",
    ];
  }, []);

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-secondary font-medium tracking-widest uppercase text-sm mb-4 block"
          >
            Our Ecosystem
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            Multi-Sector
            <span className="gradient-text"> Innovation</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Building ventures at perfect proportion<br></br>
PhiLabs is a student-led innovation collective — four engineering minds crafting products that balance form, function, and impact.
          </motion.p>
        </div>

        {/* Sector cards - Bentobox layout with randomized sizes (md+) */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[180px] gap-8 items-stretch">  {sortedSectors.map((sector, index) => {
            const placeClass = placementClasses[index] ?? "md:col-span-1 md:row-span-1";

            return (
              <div key={sector.title} className={`h-full min-h-[180px] max-h-[360px] overflow-hidden ${placeClass}`}>
                <SectorCard
                  {...sector}
                  index={index}
                  onClick={() => setIsModalOpen(true)}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Merchandise Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-2xl glass border-primary/20">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold gradient-text">
              Custom Merchandise
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            {/* Hero image placeholder */}
            <div className="relative aspect-video rounded-xl overflow-hidden bg-muted">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Palette className="w-16 h-16 text-primary/50" />
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Transform your ideas into premium merchandise. Our customizable products 
                range from high-quality apparel to unique accessories, all crafted with 
                attention to detail and delivered with excellence.
              </p>

              <div className="grid grid-cols-3 gap-4">
                {["Premium Quality", "Custom Designs", "Fast Delivery"].map((feature) => (
                  <div 
                    key={feature}
                    className="text-center p-4 rounded-xl bg-primary/5 border border-primary/10"
                  >
                    <span className="text-sm text-foreground font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
              onClick={() => {
                // Link will be added later
                setIsModalOpen(false);
              }}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit Store (Coming Soon)
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      {/* Vision statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 text-center"
        >
          <div className="glass rounded-3xl p-12 max-w-3xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
            <blockquote className="relative z-10">
              <p className="text-2xl md:text-3xl font-light text-foreground leading-relaxed mb-6">
               "We believe every great product begins with the 
                <span className="gradient-text font-medium"> ecosystems </span>
                right proportions — of ambition, empathy, and execution."
              </p>
              <footer className="text-muted-foreground">
                — The PhiLabs.studio Team
              </footer>
            </blockquote>
          </div>
        </motion.div>
    </section>
  );
};
