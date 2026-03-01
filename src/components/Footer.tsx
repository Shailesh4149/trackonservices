import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import trackonLogo from "@/assets/trackon-logo.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Footer = React.forwardRef<HTMLElement>((props, ref) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const sectionRef = useScrollAnimation();

  const getLink = (hash: string) => {
    return isHomePage ? hash : `/${hash}`;
  };

  const currentYear = new Date().getFullYear();

  const allMumbaiAreas = [
    { name: "Andheri", slug: "andheri" },
    { name: "Andheri West", slug: "andheri-west" },
    { name: "Andheri East", slug: "andheri-east" },
    { name: "Andheri Station", slug: "andheri-station" },
    { name: "Juhu", slug: "juhu" },
    { name: "DN Nagar", slug: "dn-nagar" },
    { name: "Azad Nagar", slug: "azad-nagar" },
    { name: "Versova", slug: "versova" },
    { name: "Juhu Versova Link Road", slug: "juhu-versova-link-road" },
    { name: "Saki Naka", slug: "saki-naka" },
    { name: "Marol", slug: "marol" },
    { name: "Jogeshwari", slug: "jogeshwari" },
    { name: "Kapaswadi", slug: "kapaswadi" },
    { name: "Chakala", slug: "chakala" },
    { name: "Vile Parle", slug: "vile-parle" },
    { name: "Goregaon West", slug: "goregaon-west" },
    { name: "Goregaon East", slug: "goregaon-east" },
    { name: "Malad", slug: "malad" },
    { name: "Kandivali", slug: "kandivali" },
    { name: "Bandra West", slug: "bandra-west" },
    { name: "Bandra East", slug: "bandra-east" },
    { name: "Bandra", slug: "bandra" },
    { name: "Santacruz", slug: "santacruz" },
    { name: "Lokhandwala", slug: "lokhandwala" },
    { name: "Oshiwara", slug: "oshiwara" },
    { name: "SEEPZ", slug: "seepz" },
    { name: "MIDC", slug: "midc" },
    { name: "Mahakali", slug: "mahakali" },
    { name: "Chandivali", slug: "chandivali" },
    { name: "Vikhroli", slug: "vikhroli" },
    { name: "Dadar", slug: "dadar" },
    { name: "CST", slug: "cst" },
    { name: "Shanti Nagar", slug: "shanti-nagar" },
    { name: "Airport Area", slug: "andheri-airport" },
    { name: "Airport T1", slug: "airport-terminal-1" },
    { name: "Airport T2", slug: "airport-terminal-2" },
    { name: "Vasai", slug: "vasai" },
    { name: "Virar", slug: "virar" },
    { name: "Nalasopara", slug: "nalasopara" },
  ];

  return (
    <footer ref={sectionRef} className="bg-foreground text-background py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8" data-animate>
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <img 
                src={trackonLogo} 
                alt="Trackon Courier - Swift. Safe. Sure." 
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-background/70 mb-4 max-w-md">
              Your trusted partner for fast, reliable, and secure courier services across Mumbai and Pan India. Same-day delivery, express shipping, and doorstep pickup available.
            </p>
            <div className="space-y-2 overflow-hidden">
              <a href="tel:8097512951" className="flex items-center gap-2 text-background/70 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>8097512951</span>
              </a>
              <a href="mailto:sonacourierservices@gmail.com" className="flex items-center gap-2 text-background/70 hover:text-accent transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="break-all">sonacourierservices@gmail.com</span>
              </a>
              <div className="flex items-start gap-2 text-background/70">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                <span className="break-words">Shop No. 1/2 Ever Shine Mens Wear, Juhu Versova Link Road, Kapaswadi Loknayak Nagar, Near Hotel Shankri, Andheri (W) Mumbai</span>
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
            {allMumbaiAreas.map((area) => (
              <Link 
                key={area.slug}
                to={`/areas/courier-service-in-${area.slug}`} 
                className="text-background/70 hover:text-accent transition-colors text-sm"
              >
                {area.name}
              </Link>
            ))}
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
