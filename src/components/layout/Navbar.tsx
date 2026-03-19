import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle"; // Theme toggle button
import philabsLogo from "@/assets/philabs-logo.png";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Vision", href: "#vision" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      <motion.header
        // Suspended pill header: outer fixed area centers an inner container
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="fixed top-6 inset-x-0 z-50 pointer-events-none"
      >
        {/* Inner pill is pointer-events-auto so content is interactive and aligns with site container */}
        <div className="pointer-events-auto w-full max-w-5xl mx-auto px-6">
          <div className="w-full transition-all duration-500 glass rounded-full px-4 py-2 shadow-lg">
            <div className="flex items-center justify-between gap-4 transition-colors">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src={philabsLogo} 
              alt="PhiLabs.studio" 
              className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-foreground font-bold text-lg hidden sm:block">
              Phi<span className="gradient-text">Labs</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 px-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
          {/* Right-side actions: CTA + Theme toggle + Mobile menu */}
          <div className="flex items-center gap-3">

            {/* Theme toggle (reusable) */}
            <div className="flex items-center">
              <ThemeToggle />
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 md:hidden"
      >
        <div 
          className="absolute inset-0 bg-background/80 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <motion.nav
          initial={false}
          animate={{ 
            x: isMobileMenuOpen ? 0 : "100%",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute right-0 top-0 bottom-0 w-3/4 max-w-sm glass border-l border-border/50 pt-24 px-8"
        >
          <div className="flex flex-col gap-6">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: isMobileMenuOpen ? 1 : 0, 
                  x: isMobileMenuOpen ? 0 : 20 
                }}
                transition={{ delay: index * 0.1 }}
                className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <Button 
              className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </motion.nav>
      </motion.div>
    </>
  );
};
