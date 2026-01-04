import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState ,useEffect} from "react";
import { Lightbulb, Target, Rocket, Globe, Linkedin, Twitter, ChevronLeft, ChevronRight } from "lucide-react";
import monika_photo from "@/assets/monika.jpeg";
import varsha_photo from "@/assets/varsha.jpeg";
/* ---------------- TEAM DATA ---------------- */

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Founder & CEO",
    bio: "Visionary entrepreneur with 10+ years in tech innovation. Passionate about building products that shape the future.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Sarah Mitchell",
    role: "Chief Financial Officer",
    bio: "Marketing Lead and Promotion. Leading creative vision across all PhiLabs ventures.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Varsha Shubhashri M",
    role: "Head of Operations",
    bio: "Strategic leader driving scalable growth systems. Building the infrastructure for global expansion.",
    image: varsha_photo,
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Monika R",
    role: "Chief Creative Officer",
    bio: "Award-winning designer shaping brand experiences. Leading creative vision across all PhiLabs ventures.",
    image: monika_photo,
    linkedin: "#",
    twitter: "#",
  },
];

/* ---------------- SINE WAVE COMPONENT ---------------- */

const TeamCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
  const interval = setInterval(() => {
    setActiveIndex((prev) => (prev + 1) % teamMembers.length);
  }, 3000); // 3 seconds

  return () => clearInterval(interval);
}, []);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const nextMember = () =>
    setActiveIndex((i) => (i + 1) % teamMembers.length);
  const prevMember = () =>
    setActiveIndex((i) => (i - 1 + teamMembers.length) % teamMembers.length);

  /* PAGE-TURN LOGIC (NO SLIDING) */
  const getCardStyle = (index: number) => {
    if (index === activeIndex) {
      return {
        rotateY: 0,
        opacity: 1,
        zIndex: 30,
      };
    }

    if (index < activeIndex) {
      return {
        rotateY: -90,
        opacity: 0,
        zIndex: 10,
      };
    }

    return {
      rotateY: 90,
      opacity: 0,
      zIndex: 10,
    };
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

      {/* MAIN LAYOUT */}
      <div className="relative flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
        {/* IMAGE AREA */}
        <div className="relative w-full max-w-md h-[500px] perspective-1000">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              animate={getCardStyle(index)}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
              style={{
                transformStyle: "preserve-3d",
                transformOrigin: "right center",
              }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover rounded-3xl"
              />
            </motion.div>
          ))}
        </div>

        {/* INFO PANEL (NO OVERLAP) */}
        <div className="flex-1 max-w-md text-center lg:text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-3xl md:text-4xl font-bold mb-2">
                {teamMembers[activeIndex].name}
              </h4>
              <p className="text-primary text-lg font-medium mb-4">
                {teamMembers[activeIndex].role}
              </p>
              <p className="text-muted-foreground text-lg mb-6">
                {teamMembers[activeIndex].bio}
              </p>

              {/* SOCIAL */}
              <div className="flex justify-center lg:justify-start gap-4 mb-6">
                <a href={teamMembers[activeIndex].linkedin}>
                  <Linkedin />
                </a>
                <a href={teamMembers[activeIndex].twitter}>
                  <Twitter />
                </a>
              </div>

              {/* STATIC DOTTED LINE */}
              <svg width="280" height="40" viewBox="0 0 280 40">
  <g>
    {Array.from({ length: 11 }).map((_, i) => (
      <motion.circle
        key={i}
        cx={20 + i * 25}
        cy={20}
        r={2.5}
        fill="#999"
        animate={{
          y: [0, -8, 0, 8, 0],
          opacity: i === activeIndex ? 1 : 0.6,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: i * 0.15,
          ease: "easeInOut",
        }}
      />
    ))}
  </g>
  </svg>
  </motion.div>
  </AnimatePresence>
 </div>
 </div>
</motion.div>
);
};

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Pushing boundaries with cutting-edge solutions",
  },
  {
    icon: Target,
    title: "Precision Focus",
    description: "Delivering excellence in every detail",
  },
  {
    icon: Rocket,
    title: "Rapid Growth",
    description: "Scaling ideas into impactful realities",
  },
  {
    icon: Globe,
    title: "Global Vision",
    description: "Building for a worldwide ecosystem",
  },
];

const ValueCard = ({ 
  icon: Icon, 
  title, 
  description, 
  index 
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

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 px-6 gradient-bg-section overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Vision statement */}
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
              PhiLabs.studio is a fast-growing venture studio building innovative products 
              across multiple sectors. We combine bold vision with meticulous execution 
              to create solutions that shape tomorrow's landscape.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground/80 leading-relaxed"
            >
              From customizable merchandise to emerging technologies, we're not just 
              following trends—we're setting them. Every venture we launch carries 
              our commitment to quality, innovation, and global impact.
            </motion.p>
          </div>

          {/* Right: Animated visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Spinning ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-primary/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border border-secondary/20"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-16 rounded-full border border-accent/20"
              />
              
              {/* Center glow */}
              <div className="absolute inset-24 rounded-full bg-primary/10 blur-2xl" />
              <div className="absolute inset-28 rounded-full bg-secondary/10 blur-xl" />
              
              {/* Orbiting dots */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary glow-violet" />
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-secondary glow-cyan" />
              </motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                className="absolute inset-16"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent glow-orange" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Value cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
          {values.map((value, index) => (
            <ValueCard key={value.title} {...value} index={index} />
          ))}
        </div>
        

        {/* Team Carousel */}
        <TeamCarousel />
      </div>
    </section>
  );
};
