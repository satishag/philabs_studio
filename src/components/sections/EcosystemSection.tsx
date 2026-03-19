import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { Palette, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import comingSoon from "@/assets/coming-soon.png";

/* ---------------- TYPES ---------------- */

type Project =
  | {
      type: "card";
      icon: typeof Palette;
      title: string;
      description: string;
      status: "active" | "coming-soon";
      accentColor: "primary" | "secondary" | "accent";
    }
  | {
      type: "image";
      image: string;
    };

interface SectorCardProps {
  icon: typeof Palette;
  title: string;
  description: string;
  status: "active" | "coming-soon";
  accentColor: "primary" | "secondary" | "accent";
  index: number;
  onClick?: () => void;
}

/* ---------------- CARD ---------------- */

const SectorCard = ({
  icon: Icon,
  title,
  description,
  status,
  accentColor,
  index,
  onClick,
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
      className={`relative group glass rounded-5xl p-8 transition-all duration-500 h-full flex flex-col justify-between overflow-hidden
        ${status === "active" ? "cursor-pointer" : "cursor-default"}
        ${glowClasses[accentColor]}
      `}
    >
      {/* Status */}
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
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${colorClasses[accentColor]}`}>
        <Icon className="w-8 h-8" />
      </div>

      {/* Text */}
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>

      {/* CTA */}
      {status === "active" && (
        <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>Explore</span>
          <ExternalLink className="w-4 h-4" />
        </div>
      )}
    </motion.div>
  );
};

/* ---------------- MAIN SECTION ---------------- */

export const EcosystemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      type: "card",
      icon: Palette,
      title: "CreateEvo",
      description:
        "Customised merch, crafted with intent. We bring your brand and ideas to life.",
      status: "active",
      accentColor: "primary",
    },
    {
      type: "image",
      image: comingSoon,
    },
  ];

  const placementClasses = useMemo(() => {
    return [
      "md:col-span-2 md:row-span-2",
      "md:col-span-2 md:row-span-2",
    ];
  }, []);

  return (
<section className="relative pt-24 pb-10 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Multi-Sector <span className="gradient-text">Innovation</span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[180px] gap-8">

          {projects.map((project, index) => {
            const placeClass = placementClasses[index];

            return (
              <div key={index} className={`h-full ${placeClass}`}>

                {project.type === "image" ? (
                  <motion.div
                    className="h-full w-full rounded-5xl overflow-hidden"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  >
                    <img
                      src={project.image}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ) : (
                  <SectorCard
                    {...project}
                    index={index}
                    onClick={() => setIsModalOpen(true)}
                  />
                )}

              </div>
            );
          })}

        </div>
      </div>

      {/* MODAL */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>CreateEvo</DialogTitle>
          </DialogHeader>
          <Button onClick={() => setIsModalOpen(false)}>Close</Button>
        </DialogContent>
      </Dialog>
{/* ---------------- FOOTER / VISION ---------------- */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="mt-12 text-center"
>
  <div className="glass rounded-3xl pb-4 p-10 md:p-12 max-w-3xl mx-auto relative overflow-hidden">

    {/* Soft gradient glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

    <blockquote className="relative z-10">
      <p className="text-xl md:text-2xl lg:text-3xl font-light text-foreground leading-relaxed mb-6">
        "We believe every great product begins with the
        <span className="gradient-text font-medium"> ecosystems </span>
        right proportions — of ambition, empathy, and execution."
      </p>

      <footer className="text-muted-foreground text-sm md:text-base">
        — The PhiLabs.studio Team
      </footer>
    </blockquote>
  </div>
</motion.div>
</section> 
); 
};