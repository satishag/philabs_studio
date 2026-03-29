import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, ArrowRight, Linkedin,} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import philabsLogo from "@/assets/philabs-logo.png";

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer className="relative py-24 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-card via-background to-background" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left: CTA */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block"
            >
              Get In Touch
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              Let's Build
              <span className="gradient-text"> Together</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8"
            >
              Interested in collaborating or learning more about our ventures? 
              We'd love to hear from you.
            </motion.p>

            {/* Email signup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex gap-3 max-w-md"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-muted/50 border-border/50 focus:border-primary"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6">
                <Mail className="w-4 h-4 mr-2" />
                Connect
              </Button>
            </motion.div>
          </div>

          {/* Right: Social & Contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:text-right"
          >
            <div className="glass rounded-2xl p-8 inline-block">
              <h3 className="text-xl font-semibold text-foreground mb-4">Follow Our Journey</h3>
              <p className="text-muted-foreground mb-6">
                Stay updated with our latest ventures and announcements.
              </p>
              
              <div className="flex gap-4 lg:justify-end">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-8 border-t border-border/30"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img 
                src={philabsLogo} 
                alt="PhiLabs.studio" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-foreground font-semibold">PhiLabs.studio</span>
            </div>

            {/* Links */}
            <nav className="flex items-center gap-8 text-sm text-muted-foreground">
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#ecosystem" className="hover:text-primary transition-colors">Ecosystem</a>
              <a href="#vision" className="hover:text-primary transition-colors">Vision</a>
            </nav>

            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} PhiLabs.studio. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
