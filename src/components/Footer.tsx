import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent-gradient flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">T</span>
              </div>
              <span className="font-bold text-xl">Trackon<span className="text-accent">Courier</span></span>
            </div>
            <p className="text-background/70 mb-4 max-w-md">
              Your trusted partner for fast, reliable, and secure courier services across Mumbai and Pan India. Same-day delivery, express shipping, and doorstep pickup available.
            </p>
            <div className="space-y-2">
              <a href="tel:8097512951" className="flex items-center gap-2 text-background/70 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" />
                <span>8097512951</span>
              </a>
              <a href="mailto:sonacourierservices@gmail.com" className="flex items-center gap-2 text-background/70 hover:text-accent transition-colors">
                <Mail className="w-4 h-4" />
                <span>sonacourierservices@gmail.com</span>
              </a>
              <div className="flex items-start gap-2 text-background/70">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                <span>Shop No. 1/2 Ever Shine Mens Wear, Juhu Versova Link Road, Kapaswadi Loknayak Nagar, Near Hotel Shankri, Andheri (W) Mumbai</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#services" className="block text-background/70 hover:text-accent transition-colors">Our Services</a>
              <a href="#areas" className="block text-background/70 hover:text-accent transition-colors">Service Areas</a>
              <a href="#about" className="block text-background/70 hover:text-accent transition-colors">About Us</a>
              <a href="#contact" className="block text-background/70 hover:text-accent transition-colors">Contact</a>
              <a href="#enquiry" className="block text-background/70 hover:text-accent transition-colors">Get Quote</a>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Services</h4>
            <nav className="space-y-2">
              <a href="#services" className="block text-background/70 hover:text-accent transition-colors">Domestic Courier</a>
              <a href="#services" className="block text-background/70 hover:text-accent transition-colors">International Shipping</a>
              <a href="#services" className="block text-background/70 hover:text-accent transition-colors">Express Delivery</a>
              <a href="#services" className="block text-background/70 hover:text-accent transition-colors">Same Day Delivery</a>
              <a href="#services" className="block text-background/70 hover:text-accent transition-colors">Doorstep Pickup</a>
            </nav>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/50 text-sm">
          <p>© {currentYear} Trackon Courier. All rights reserved. | Courier Services in Mumbai | Trackon Courier Near Me</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
