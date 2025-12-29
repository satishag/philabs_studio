import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Target, Rocket, Globe, Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Founder & CEO",
    bio: "Visionary entrepreneur with 10+ years in tech innovation",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Sarah Mitchell",
    role: "Chief Creative Officer",
    bio: "Award-winning designer shaping brand experiences",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Marcus Johnson",
    role: "Head of Operations",
    bio: "Strategic leader driving scalable growth systems",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
  },
];

const TeamCard = ({
  member,
  index,
}: {
  member: typeof teamMembers[0];
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
      className="glass glass-hover rounded-2xl p-6 group text-center"
    >
      <div className="relative w-24 h-24 mx-auto mb-4">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent opacity-50 blur-md group-hover:opacity-80 transition-opacity duration-300" />
        <img
          src={member.image}
          alt={member.name}
          className="relative w-24 h-24 rounded-full object-cover border-2 border-primary/30 group-hover:border-primary/60 transition-colors duration-300"
        />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
      <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
      <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
      <div className="flex justify-center gap-3">
        <a
          href={member.linkedin}
          className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
        >
          <Linkedin className="w-4 h-4 text-primary" />
        </a>
        <a
          href={member.twitter}
          className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
        >
          <Twitter className="w-4 h-4 text-primary" />
        </a>
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

        {/* Team section */}
        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">
              Our Team
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              The Minds Behind
              <span className="gradient-text"> PhiLabs</span>
            </h3>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
