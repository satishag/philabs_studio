import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const timelineItems = [
  {
    year: "2024",
    title: "Foundation",
    description: "PhiLabs.studio established with our first venture in customizable merchandise.",
    status: "complete",
  },
  {
    year: "2025",
    title: "Expansion",
    description: "Launching new verticals in technology and creative services.",
    status: "current",
  },
  {
    year: "2026",
    title: "Global Reach",
    description: "Scaling our ecosystem internationally with strategic partnerships.",
    status: "future",
  },
  {
    year: "Beyond",
    title: "Infinite Possibilities",
    description: "Continuously innovating and exploring new frontiers.",
    status: "future",
  },
];

export const VisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 px-6 overflow-hidden gradient-bg-section">
      {/* Cinematic overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
        <motion.div
          animate={{ 
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-30"
          style={{
            background: "linear-gradient(90deg, transparent 0%, hsl(var(--primary) / 0.1) 50%, transparent 100%)",
            backgroundSize: "200% 100%",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div ref={ref} className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block"
          >
            Our Vision
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            The Road
            <span className="gradient-text"> Ahead</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Our journey is just beginning. Here's how we're building a global 
            ecosystem of innovation.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {timelineItems.map((item, index) => {
              const itemRef = useRef(null);
              const itemInView = useInView(itemRef, { once: true, margin: "-50px" });
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.year}
                  ref={itemRef}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={itemInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  className={`
                    relative md:flex items-center
                    ${isEven ? "md:flex-row" : "md:flex-row-reverse"}
                    ${index > 0 ? "md:mt-8" : ""}
                  `}
                >
                  {/* Content */}
                  <div className={`md:w-1/2 ${isEven ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <div className="glass rounded-2xl p-6 inline-block">
                      <span className={`
                        text-sm font-bold tracking-wider
                        ${item.status === "complete" ? "text-primary" : 
                          item.status === "current" ? "text-secondary" : "text-muted-foreground"}
                      `}>
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-foreground mt-2 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 items-center justify-center z-10 bg-background">
                    <div className={`
                      w-2 h-2 rounded-full
                      ${item.status === "complete" ? "bg-primary" : 
                        item.status === "current" ? "bg-secondary animate-pulse" : "bg-muted-foreground/50"}
                    `} />
                  </div>

                  {/* Empty space for other side */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>

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
                "We don't just build products—we build
                <span className="gradient-text font-medium"> ecosystems </span>
                that transform industries."
              </p>
              <footer className="text-muted-foreground">
                — The PhiLabs.studio Team
              </footer>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
