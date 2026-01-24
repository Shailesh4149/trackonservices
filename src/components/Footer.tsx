import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import trackonLogo from "@/assets/trackon-logo.png";

const Footer = React.forwardRef<HTMLElement>((props, ref) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const getLink = (hash: string) => {
    return isHomePage ? hash : `/${hash}`;
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer ref={ref} className="bg-foreground text-background py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
            <img 
                src={trackonLogo} 
                alt="Trackon Courier - Swift. Safe. Sure." 
                className="h-12 w-auto"
              />
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
              <Link to={getLink("#services")} className="block text-background/70 hover:text-accent transition-colors">Our Services</Link>
              <Link to={getLink("#areas")} className="block text-background/70 hover:text-accent transition-colors">Service Areas</Link>
              <Link to="/about" className="block text-background/70 hover:text-accent transition-colors">About Us</Link>
              <Link to={getLink("#contact")} className="block text-background/70 hover:text-accent transition-colors">Contact</Link>
              <Link to={getLink("#enquiry")} className="block text-background/70 hover:text-accent transition-colors">Get Quote</Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Services</h4>
            <nav className="space-y-2">
              <Link to="/same-day-courier-andheri-west" className="block text-background/70 hover:text-accent transition-colors">Same Day Courier</Link>
              <Link to="/express-courier-mumbai" className="block text-background/70 hover:text-accent transition-colors">Express Courier</Link>
              <Link to="/pan-india-courier" className="block text-background/70 hover:text-accent transition-colors">Pan India Courier</Link>
              <Link to="/international-courier-mumbai" className="block text-background/70 hover:text-accent transition-colors">International Courier</Link>
              <Link to="/airport-courier-mumbai" className="block text-background/70 hover:text-accent transition-colors">Airport Courier</Link>
            </nav>
          </div>
        </div>

        {/* Service Areas */}
        <div className="border-t border-background/20 pt-8 mb-8">
          <h4 className="font-bold text-lg mb-4">Service Areas in Mumbai</h4>
          <nav className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            <Link to="/areas/courier-service-in-andheri" className="text-background/70 hover:text-accent transition-colors text-sm">Andheri</Link>
            <Link to="/areas/courier-service-in-andheri-west" className="text-background/70 hover:text-accent transition-colors text-sm">Andheri West</Link>
            <Link to="/areas/courier-service-in-andheri-east" className="text-background/70 hover:text-accent transition-colors text-sm">Andheri East</Link>
            <Link to="/areas/courier-service-in-andheri-station" className="text-background/70 hover:text-accent transition-colors text-sm">Andheri Station</Link>
            <Link to="/areas/courier-service-in-juhu" className="text-background/70 hover:text-accent transition-colors text-sm">Juhu</Link>
            <Link to="/areas/courier-service-in-dn-nagar" className="text-background/70 hover:text-accent transition-colors text-sm">DN Nagar</Link>
            <Link to="/areas/courier-service-in-azad-nagar" className="text-background/70 hover:text-accent transition-colors text-sm">Azad Nagar</Link>
            <Link to="/areas/courier-service-in-versova" className="text-background/70 hover:text-accent transition-colors text-sm">Versova</Link>
            <Link to="/areas/courier-service-in-juhu-versova-link-road" className="text-background/70 hover:text-accent transition-colors text-sm">Juhu Versova Link Road</Link>
            <Link to="/areas/courier-service-in-saki-naka" className="text-background/70 hover:text-accent transition-colors text-sm">Saki Naka</Link>
            <Link to="/areas/courier-service-in-marol" className="text-background/70 hover:text-accent transition-colors text-sm">Marol</Link>
            <Link to="/areas/courier-service-in-jogeshwari" className="text-background/70 hover:text-accent transition-colors text-sm">Jogeshwari</Link>
            <Link to="/areas/courier-service-in-kapaswadi" className="text-background/70 hover:text-accent transition-colors text-sm">Kapaswadi</Link>
            <Link to="/areas/courier-service-in-chakala" className="text-background/70 hover:text-accent transition-colors text-sm">Chakala</Link>
            <Link to="/areas/courier-service-in-vile-parle" className="text-background/70 hover:text-accent transition-colors text-sm">Vile Parle</Link>
            <Link to="/areas/courier-service-in-goregaon-west" className="text-background/70 hover:text-accent transition-colors text-sm">Goregaon West</Link>
            <Link to="/areas/courier-service-in-goregaon-east" className="text-background/70 hover:text-accent transition-colors text-sm">Goregaon East</Link>
            <Link to="/areas/courier-service-in-malad" className="text-background/70 hover:text-accent transition-colors text-sm">Malad</Link>
            <Link to="/areas/courier-service-in-kandivali" className="text-background/70 hover:text-accent transition-colors text-sm">Kandivali</Link>
            <Link to="/areas/courier-service-in-bandra-west" className="text-background/70 hover:text-accent transition-colors text-sm">Bandra West</Link>
            <Link to="/areas/courier-service-in-bandra-east" className="text-background/70 hover:text-accent transition-colors text-sm">Bandra East</Link>
            <Link to="/areas/courier-service-in-santacruz" className="text-background/70 hover:text-accent transition-colors text-sm">Santacruz</Link>
          </nav>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/50 text-sm">
          <p className="mb-2 text-background/70 font-medium">Trackon Courier – Courier Service in Andheri West, Mumbai</p>
          <p>© {currentYear} Trackon Courier. All rights reserved. | Courier Services in Mumbai | Trackon Courier Near Me</p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
