import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Lightbulb, Target, Rocket, Globe, Linkedin } from "lucide-react";
import monika_photo from "@/assets/monika.jpeg";
import varsha_photo from "@/assets/varsha.jpeg";
import yashaswini_photo from "@/assets/yashaswini.jpeg";
import satish_photo from "@/assets/satish.jpeg";

/* ---------------- TEAM DATA ---------------- */

const teamMembers = [
  {
    name: "Yashaswini C Rao",
    role: "Co-Founder",
    image: yashaswini_photo,
    linkedin: "https://www.linkedin.com/in/yashaswini-c-rao/",
    color: "#0891B2",
    accent: "#22D3EE",
  },
  {
    name: "Varsha Shubhashri M",
    role: "Co-Founder",
    image: varsha_photo,
    linkedin: "https://www.linkedin.com/in/varsha-shubhashri-m-089893286/",
    color: "#D97706",
    accent: "#FCD34D",
  },
  {
    name: "Monika R",
    role: "Co-Founder",
    image: monika_photo,
    linkedin: "https://www.linkedin.com/in/monika-r-33a0192b9/",
    color: "#059669",
    accent: "#34D399",
  },
  {
    name: "Satish A G",
    role: "Co-Founder",
    image: satish_photo,
    linkedin: "https://www.linkedin.com/in/satish-ag/",
    color: "#7C3AED",
    accent: "#A78BFA",
  },
];

/* ---------------- TEAM CAROUSEL ---------------- */

const TeamCarousel = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleCardClick = (i: number) => {
    setActiveIndex((prev) => (prev === i ? null : i));
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="mt-32"
    >
      {/* HEADER */}
      <div className="text-center mb-16">
        <span className="text-primary tracking-widest uppercase text-sm block mb-4">
          Our Team
        </span>
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
          Meet The <span className="gradient-text italic">Visionaries</span>
        </h3>
      </div>

      {/* PORTRAIT CARD STRIP — bleeds past container edges like the reference */}
      <div
        style={{
          marginLeft: "calc(-1 * max(0px, (100vw - 1152px) / 2 + 24px))",
          marginRight: "calc(-1 * max(0px, (100vw - 1152px) / 2 + 24px))",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 14,
            overflowX: "auto",
            paddingLeft: "max(24px, calc((100vw - 1152px) / 2 + 24px))",
            paddingRight: "max(24px, calc((100vw - 1152px) / 2 + 24px))",
            paddingBottom: 4,
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style>{`
            .team-strip::-webkit-scrollbar { display: none; }
            .team-card-img { filter: grayscale(55%); transition: filter 0.4s ease; }
            .team-card-img:hover, .team-card-img.active { filter: grayscale(0%); }
          `}</style>

          {teamMembers.map((member, i) => {
            const isActive = activeIndex === i;
            return (
              <motion.div
                key={member.name}
                onClick={() => handleCardClick(i)}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                style={{
                  position: "relative",
                  flexShrink: 0,
                  width: 260,
                  height: 340,
                  borderRadius: 18,
                  overflow: "hidden",
                  cursor: "pointer",
                  outline: isActive
                    ? `2px solid ${member.accent}`
                    : "2px solid transparent",
                  boxShadow: isActive
                    ? `0 8px 40px ${member.color}55`
                    : "0 4px 20px rgba(0,0,0,0.4)",
                  transition: "outline-color 0.3s, box-shadow 0.3s",
                }}
              >
                {/* Portrait */}
                <img
                  src={member.image}
                  alt={member.name}
                  className={`team-card-img${isActive ? " active" : ""}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top center",
                    display: "block",
                  }}
                />

                {/* Bottom gradient */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(8,8,18,0.95) 0%, rgba(8,8,18,0.55) 40%, transparent 70%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Colored bar at very bottom */}
                <motion.div
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  initial={{ scaleX: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: `linear-gradient(90deg, ${member.color}, ${member.accent})`,
                    transformOrigin: "left center",
                  }}
                />

                {/* Name + role */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "0 18px 16px",
                  }}
                >
                  <p
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: "#f1f5f9",
                      margin: "0 0 3px",
                      letterSpacing: -0.2,
                    }}
                  >
                    {member.name}
                  </p>
                  <p
                    style={{
                      fontSize: 11,
                      color: member.accent,
                      margin: 0,
                      fontFamily: "monospace",
                      letterSpacing: 0.6,
                    }}
                  >
                    {member.role}
                  </p>
                </div>

                {/* LinkedIn — appears on active */}
                <motion.a
                  href={member.linkedin}
                  onClick={(e) => e.stopPropagation()}
                  animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.7 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    width: 30,
                    height: 30,
                    borderRadius: 8,
                    background: `${member.color}dd`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    pointerEvents: isActive ? "auto" : "none",
                    textDecoration: "none",
                  }}
                >
                  <Linkedin style={{ width: 13, height: 13, color: "#fff" }} />
                </motion.a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

/* ---------------- VALUES ---------------- */

const values = [
  { icon: Lightbulb, title: "Innovation First", description: "Pushing boundaries with cutting-edge solutions" },
  { icon: Target, title: "Precision Focus", description: "Delivering excellence in every detail" },
  { icon: Rocket, title: "Rapid Growth", description: "Scaling ideas into impactful realities" },
  { icon: Globe, title: "Glocal Vision", description: "Driven Globally,\nRooted Locally" },
];

const ValueCard = ({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: typeof Lightbulb;
  title: string;
  description: string;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="glass glass-hover rounded-2xl p-6 group cursor-default"
    >
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </motion.div>
  );
};

/* ---------------- ABOUT SECTION ---------------- */

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 pb-5 px-6 gradient-bg-section overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={ref}>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block"
            >
              About Us
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight"
            >
              We Build
              <span className="gradient-text block">The Future</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed mb-6"
            >
              PhiLabs.studio is a growing venture studio building innovative products
              across multiple sectors. Four engineers, one guiding ratio
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground/80 leading-relaxed"
            >
              PhiLabs was born from a simple belief: the best products, like nature's most
              beautiful structures, follow principles of harmony and proportion. We're a
              tight-knit team — four engineerers with a drive to build real things. We don't
              just prototype. We ship. Every venture we launch carries the DNA of our founding
              philosophy — precision, beauty, and purpose in equal measure.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border border-primary/20" />
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute inset-8 rounded-full border border-secondary/20" />
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute inset-16 rounded-full border border-accent/20" />
              <div className="absolute inset-24 rounded-full bg-primary/10 blur-2xl" />
              <div className="absolute inset-28 rounded-full bg-secondary/10 blur-xl" />
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute inset-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary glow-violet" />
              </motion.div>
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} className="absolute inset-8">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-secondary glow-cyan" />
              </motion.div>
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 16, repeat: Infinity, ease: "linear" }} className="absolute inset-16">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent glow-orange" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
          {values.map((value, index) => (
            <ValueCard key={value.title} {...value} index={index} />
          ))}
        </div>

        <TeamCarousel />
      </div>
    </section>
  );
};