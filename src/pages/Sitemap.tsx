import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Package, Truck, Plane, Clock, Shield, MapPin, FileText, HelpCircle, Info, Home, Newspaper } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Breadcrumb from "@/components/seo/Breadcrumb";

const Sitemap = () => {
  useEffect(() => {
    document.title = "Sitemap | Trackon Courier - All Pages";
    
    const updateMeta = (name: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);
      if (meta) {
        meta.setAttribute("content", content);
      } else {
        meta = document.createElement("meta");
        if (isProperty) {
          meta.setAttribute("property", name);
        } else {
          meta.setAttribute("name", name);
        }
        meta.setAttribute("content", content);
        document.head.appendChild(meta);
      }
    };

    updateMeta("description", "Complete sitemap of Trackon Courier website. Find all pages including services, areas, blog articles, and more.");
  }, []);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Sitemap" }
  ];

  const mainPages = [
    { name: "Home", href: "/", icon: Home, description: "Main landing page with all services overview" },
    { name: "About Us", href: "/about", icon: Info, description: "Our story, mission, and team" },
    { name: "FAQ", href: "/faq", icon: HelpCircle, description: "Frequently asked questions" },
    { name: "Blog", href: "/blog", icon: Newspaper, description: "Courier tips and industry insights" },
  ];

  const services = [
    { name: "Domestic Courier", href: "/services/domestic-courier", icon: Package },
    { name: "International Shipping", href: "/services/international-shipping", icon: Plane },
    { name: "Express Delivery", href: "/services/express-delivery", icon: Truck },
    { name: "Same Day Delivery", href: "/services/same-day-delivery", icon: Clock },
    { name: "Secure Packaging", href: "/services/secure-packaging", icon: Shield },
    { name: "Doorstep Pickup", href: "/services/doorstep-pickup", icon: MapPin },
  ];

  const areas = [
    "Andheri", "Bandra", "Borivali", "Churchgate", "Colaba",
    "Dadar", "Goregaon", "Juhu", "Kandivali", "Kurla",
    "Malad", "Mulund", "Navi Mumbai", "Powai", "Thane",
    "Vashi", "Vikhroli", "Worli"
  ];

  const blogPosts = [
    { title: "Fastest Courier Service in Mumbai: Complete Guide 2025", slug: "fastest-courier-service-mumbai-guide" },
    { title: "How to Choose the Best Tracking Service for Your Parcels", slug: "best-tracking-service-parcels" },
    { title: "10 Ways to Improve Logistics Efficiency for Small Businesses", slug: "improve-logistics-efficiency-small-business" },
    { title: "Same Day Delivery vs Express Courier: Which is Right for You?", slug: "same-day-delivery-vs-express-courier" },
    { title: "International Shipping from India: Complete Cost & Time Guide", slug: "international-shipping-india-guide" },
    { title: "How to Pack Fragile Items for Safe Courier Delivery", slug: "pack-fragile-items-courier-delivery" },
    { title: "E-commerce Shipping Solutions in Mumbai: A Business Guide", slug: "ecommerce-shipping-solutions-mumbai" },
    { title: "Document Courier Services: Why Speed & Security Matter", slug: "document-courier-speed-security" },
  ];

  return (
    <>
      <Header />
      <main className="bg-background">
        {/* Hero Section */}
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="container">
            <Breadcrumb items={breadcrumbItems} />
            
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sitemap
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Navigate through all pages of Trackon Courier website. Find services, 
              service areas, blog articles, and more.
            </p>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Main Pages */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-accent" />
                  Main Pages
                </h2>
                <nav className="space-y-3">
                  {mainPages.map((page) => {
                    const Icon = page.icon;
                    return (
                      <Link 
                        key={page.href}
                        to={page.href}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                      >
                        <Icon className="w-5 h-5 text-muted-foreground group-hover:text-accent mt-0.5" />
                        <div>
                          <span className="font-medium text-foreground group-hover:text-accent">{page.name}</span>
                          <p className="text-sm text-muted-foreground">{page.description}</p>
                        </div>
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Services */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Package className="w-5 h-5 text-accent" />
                  Our Services
                </h2>
                <nav className="space-y-2">
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <Link 
                        key={service.href}
                        to={service.href}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/50 transition-colors text-muted-foreground hover:text-accent"
                      >
                        <Icon className="w-4 h-4" />
                        <span>{service.name}</span>
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Service Areas */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-accent" />
                  Service Areas
                </h2>
                <nav className="grid grid-cols-2 gap-2">
                  {areas.map((area) => (
                    <Link 
                      key={area}
                      to={`/areas/${area.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm text-muted-foreground hover:text-accent transition-colors p-1"
                    >
                      {area}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Blog Posts */}
              <div className="bg-card rounded-xl p-6 border border-border md:col-span-2 lg:col-span-3">
                <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Newspaper className="w-5 h-5 text-accent" />
                  Blog Articles
                </h2>
                <nav className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {blogPosts.map((post) => (
                    <Link 
                      key={post.slug}
                      to={`/blog/${post.slug}`}
                      className="text-muted-foreground hover:text-accent transition-colors text-sm"
                    >
                      {post.title}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
};

export default Sitemap;
