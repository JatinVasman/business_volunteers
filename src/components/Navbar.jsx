import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { useActiveSection } from "../hooks/useActiveSection";

const navItems = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Services", href: "#services", id: "services" },
  { name: "Work", href: "#work-section", id: "work-section" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  // Debounced scroll handler for performance
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 50;
    setIsScrolled(scrolled);
  }, []);

  // Scroll event listener with debouncing
  useEffect(() => {
    let timeoutId;
    const debouncedHandleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 10);
    };

    window.addEventListener("scroll", debouncedHandleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
      clearTimeout(timeoutId);
    };
  }, [handleScroll]);

  // Smooth scroll to section
  const scrollToSection = useCallback((href) => {
    const element = document.querySelector(href);
    if (element) {
      let targetPosition;
      
      // Special handling for home section - scroll to top
      if (href === "#home") {
        targetPosition = 0;
      } else {
        const navHeight = 100;
        targetPosition = Math.max(0, element.offsetTop - navHeight);
      }
      
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e, href) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      scrollToSection(href);
    }
  }, [scrollToSection]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);
  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled 
          ? "py-3 bg-background/80 backdrop-blur-md shadow-lg border-b border-border/50" 
          : "py-5 bg-transparent"
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("#home")}
          className="flex items-center focus:outline-hidden focus:ring-2 focus:ring-primary/50 rounded-md px-2 py-1 transition-all duration-300 hover:scale-105"
          aria-label="Go to home section"
        >
          <img
            src="/logo/Weblogo.png"
            alt="Harsh Portfolio Logo"
            className="h-10 w-auto object-contain dark:brightness-110"
          />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              onKeyDown={(e) => handleKeyDown(e, item.href)}
              className={cn(
                "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                "focus:outline-hidden focus:ring-2 focus:ring-primary/50",
                "hover:text-primary hover:bg-primary/10",
                activeSection === item.id
                  ? "text-primary bg-primary/10 shadow-md"
                  : "text-foreground/80"
              )}
              aria-label={`Navigate to ${item.name} section`}
            >
              {item.name}
              {/* Active indicator */}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-[60] rounded-md focus:outline-hidden focus:ring-2 focus:ring-primary/50 transition-colors duration-300 hover:bg-primary/10"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <div className="relative w-6 h-6">
            <Menu 
              size={24} 
              className={cn(
                "absolute inset-0 transition-all duration-300",
                isMenuOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
              )}
            />
            <X 
              size={24} 
              className={cn(
                "absolute inset-0 transition-all duration-300",
                isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"
              )}
            />
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <div
          id="mobile-menu"
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40",
            "flex flex-col items-center justify-center md:hidden",
            "transition-all duration-300",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
          aria-hidden={!isMenuOpen}
        >
          {/* Mobile Navigation Links */}
          <div className="flex flex-col space-y-8 text-center">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                onKeyDown={(e) => handleKeyDown(e, item.href)}
                className={cn(
                  "text-2xl font-medium transition-all duration-300",
                  "focus:outline-hidden focus:ring-2 focus:ring-primary/50 rounded-md px-4 py-2",
                  "hover:text-primary hover:scale-110",
                  activeSection === item.id
                    ? "text-primary"
                    : "text-foreground/80"
                )}
                style={{
                  animationDelay: `${index * 100}ms`,
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.3s ease-out',
                }}
                aria-label={`Navigate to ${item.name} section`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Background Decoration */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </nav>
  );
};
