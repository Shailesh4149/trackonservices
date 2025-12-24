import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <nav className="container flex items-center justify-between h-16 md:h-20" aria-label="Main navigation">
        <a href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-hero-gradient flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">T</span>
          </div>
          <span className="font-bold text-xl text-foreground">Trackon<span className="text-accent">Courier</span></span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Services</a>
          <a href="#areas" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Service Areas</a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors font-medium">About Us</a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Contact</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:9864251628" className="flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
            <Phone className="w-5 h-5" />
            <span>9864251628</span>
          </a>
          <Button variant="accent" asChild>
            <a href="#enquiry">Get Quote</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-b border-border">
          <div className="container py-4 flex flex-col gap-4">
            <a href="#services" className="py-2 text-muted-foreground hover:text-foreground transition-colors font-medium">Services</a>
            <a href="#areas" className="py-2 text-muted-foreground hover:text-foreground transition-colors font-medium">Service Areas</a>
            <a href="#about" className="py-2 text-muted-foreground hover:text-foreground transition-colors font-medium">About Us</a>
            <a href="#contact" className="py-2 text-muted-foreground hover:text-foreground transition-colors font-medium">Contact</a>
            <a href="tel:9864251628" className="flex items-center gap-2 text-primary font-bold py-2">
              <Phone className="w-5 h-5" />
              <span>9864251628</span>
            </a>
            <Button variant="accent" className="w-full" asChild>
              <a href="#enquiry">Get Quote</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
