import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// SSG Plugin - Injects pre-rendered static HTML during build
function ssgPlugin(): Plugin {
  return {
    name: 'vite-plugin-ssg-inject',
    enforce: 'post',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        // Only inject during production build
        if (ctx.server) {
          return html; // Dev mode - return as-is
        }

        // Pre-rendered static HTML for SEO
        const staticHtml = getStaticHomepageHtml();
        
        return html.replace(
          '<div id="root"></div>',
          `<div id="root">${staticHtml}</div>`
        );
      },
    },
  };
}

function getStaticHomepageHtml(): string {
  return `
<header class="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
  <nav class="container flex items-center justify-between h-16 md:h-20" aria-label="Main navigation">
    <a href="/" class="flex items-center gap-2">
      <div class="w-10 h-10 rounded-lg bg-hero-gradient flex items-center justify-center">
        <span class="text-primary-foreground font-bold text-xl">T</span>
      </div>
      <span class="font-bold text-xl text-foreground">Trackon<span class="text-accent">Courier</span></span>
    </a>
    <div class="hidden md:flex items-center gap-8">
      <a href="/#services" class="text-muted-foreground hover:text-foreground transition-colors font-medium">Services</a>
      <a href="/#areas" class="text-muted-foreground hover:text-foreground transition-colors font-medium">Service Areas</a>
      <a href="/blog" class="text-muted-foreground hover:text-foreground transition-colors font-medium">Blog</a>
      <a href="/about" class="text-muted-foreground hover:text-foreground transition-colors font-medium">About Us</a>
      <a href="/faq" class="text-muted-foreground hover:text-foreground transition-colors font-medium">FAQ</a>
      <a href="/#contact" class="text-muted-foreground hover:text-foreground transition-colors font-medium">Contact</a>
    </div>
    <div class="hidden md:flex items-center gap-4">
      <a href="tel:8097512951" class="flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">8097512951</a>
      <a href="/#enquiry" class="inline-flex items-center justify-center rounded-md text-sm font-medium bg-accent text-accent-foreground hover:bg-accent/90 h-10 px-4 py-2">Get Quote</a>
    </div>
  </nav>
</header>

<main>
  <section id="hero" class="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
    <div class="container relative z-10">
      <article class="max-w-4xl">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
          Courier Service in Andheri West, Mumbai
        </h1>
        <p class="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
          Need fast and reliable courier delivery in Andheri West? Trackon Courier Mumbai offers same-day pickup and express delivery services across Mumbai. Whether you need to send documents, parcels, or bulk shipments — we ensure safe, on-time delivery with real-time tracking. Serving Andheri and nearby areas with doorstep pickup and affordable rates.
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <a href="tel:8097512951" class="inline-flex items-center justify-center rounded-md text-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8">
            Call Now – 8097512951
          </a>
          <a href="/#enquiry" class="inline-flex items-center justify-center rounded-md text-lg font-medium border border-accent bg-transparent hover:bg-accent/10 text-accent h-14 px-8">
            Request a Pickup
          </a>
        </div>
      </article>
    </div>
  </section>

  <section id="services" class="py-20 bg-muted/30">
    <div class="container">
      <header class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Courier Services in Andheri West</h2>
        <p class="text-lg text-muted-foreground max-w-2xl mx-auto">Professional courier solutions for every delivery need — from urgent same-day deliveries to international shipments.</p>
      </header>
      <ul class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0">
        <li class="bg-card rounded-xl p-6 shadow-sm border border-border">
          <h3 class="text-xl font-bold text-foreground mb-3"><a href="/same-day-courier-andheri-west" class="hover:text-primary">Same Day Courier Service</a></h3>
          <p class="text-muted-foreground">Book before 2 PM for guaranteed same-day delivery in Mumbai.</p>
          <a href="/same-day-courier-andheri-west" class="text-accent font-semibold text-sm">Learn More →</a>
        </li>
        <li class="bg-card rounded-xl p-6 shadow-sm border border-border">
          <h3 class="text-xl font-bold text-foreground mb-3"><a href="/express-courier-mumbai" class="hover:text-primary">Express Courier Service</a></h3>
          <p class="text-muted-foreground">Priority handling with 2-6 hour delivery across Mumbai.</p>
          <a href="/express-courier-mumbai" class="text-accent font-semibold text-sm">Learn More →</a>
        </li>
        <li class="bg-card rounded-xl p-6 shadow-sm border border-border">
          <h3 class="text-xl font-bold text-foreground mb-3"><a href="/pan-india-courier" class="hover:text-primary">Pan India Courier Service</a></h3>
          <p class="text-muted-foreground">Nationwide delivery to 500+ cities with real-time tracking.</p>
          <a href="/pan-india-courier" class="text-accent font-semibold text-sm">Learn More →</a>
        </li>
        <li class="bg-card rounded-xl p-6 shadow-sm border border-border">
          <h3 class="text-xl font-bold text-foreground mb-3"><a href="/international-courier-mumbai" class="hover:text-primary">International Courier Service</a></h3>
          <p class="text-muted-foreground">Ship to 200+ countries with customs clearance included.</p>
          <a href="/international-courier-mumbai" class="text-accent font-semibold text-sm">Learn More →</a>
        </li>
        <li class="bg-card rounded-xl p-6 shadow-sm border border-border">
          <h3 class="text-xl font-bold text-foreground mb-3"><a href="/airport-courier-mumbai" class="hover:text-primary">Airport Courier (Terminal 1 &amp; 2)</a></h3>
          <p class="text-muted-foreground">Quick pickup and delivery near Mumbai Airport.</p>
          <a href="/airport-courier-mumbai" class="text-accent font-semibold text-sm">Learn More →</a>
        </li>
        <li class="bg-card rounded-xl p-6 shadow-sm border border-border">
          <h3 class="text-xl font-bold text-foreground mb-3">Secure Document Courier</h3>
          <p class="text-muted-foreground">Safe handling of important documents with proof of delivery.</p>
        </li>
      </ul>
    </div>
  </section>

  <section id="areas" class="py-20 bg-background">
    <div class="container">
      <header class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4">Areas We Serve in Andheri &amp; Nearby Locations</h2>
        <p class="text-lg text-muted-foreground max-w-2xl mx-auto">Fast courier pickup and delivery across Western Mumbai suburbs.</p>
      </header>
      <article>
        <h3 class="text-2xl font-bold text-foreground mb-6">Primary Service Areas</h3>
        <ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 list-none p-0 mb-8">
          <li class="bg-card rounded-lg p-4 text-center border border-border"><a href="/areas/courier-service-in-andheri" class="text-foreground hover:text-primary font-medium">Andheri</a></li>
          <li class="bg-card rounded-lg p-4 text-center border border-border"><a href="/areas/courier-service-in-andheri-west" class="text-foreground hover:text-primary font-medium">Andheri West</a></li>
          <li class="bg-card rounded-lg p-4 text-center border border-border"><a href="/areas/courier-service-in-andheri-east" class="text-foreground hover:text-primary font-medium">Andheri East</a></li>
          <li class="bg-card rounded-lg p-4 text-center border border-border"><a href="/areas/courier-service-in-juhu" class="text-foreground hover:text-primary font-medium">Juhu</a></li>
          <li class="bg-card rounded-lg p-4 text-center border border-border"><a href="/areas/courier-service-in-dn-nagar" class="text-foreground hover:text-primary font-medium">DN Nagar</a></li>
          <li class="bg-card rounded-lg p-4 text-center border border-border"><a href="/areas/courier-service-in-versova" class="text-foreground hover:text-primary font-medium">Versova</a></li>
          <li class="bg-card rounded-lg p-4 text-center border border-border"><a href="/areas/courier-service-in-bandra-west" class="text-foreground hover:text-primary font-medium">Bandra West</a></li>
          <li class="bg-card rounded-lg p-4 text-center border border-border"><a href="/areas/courier-service-in-bandra-east" class="text-foreground hover:text-primary font-medium">Bandra East</a></li>
        </ul>
        <h3 class="text-2xl font-bold text-foreground mb-6">Additional Service Areas</h3>
        <ul class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 list-none p-0">
          <li class="text-muted-foreground text-sm"><a href="/areas/courier-service-in-andheri-station" class="hover:text-primary">Andheri Station</a></li>
          <li class="text-muted-foreground text-sm"><a href="/areas/courier-service-in-azad-nagar" class="hover:text-primary">Azad Nagar</a></li>
          <li class="text-muted-foreground text-sm"><a href="/areas/courier-service-in-juhu-versova-link-road" class="hover:text-primary">Juhu Versova Link Road</a></li>
          <li class="text-muted-foreground text-sm"><a href="/areas/courier-service-in-saki-naka" class="hover:text-primary">Saki Naka</a></li>
          <li class="text-muted-foreground text-sm"><a href="/areas/courier-service-in-marol" class="hover:text-primary">Marol</a></li>
          <li class="text-muted-foreground text-sm"><a href="/areas/courier-service-in-jogeshwari" class="hover:text-primary">Jogeshwari</a></li>
          <li class="text-muted-foreground text-sm"><a href="/areas/courier-service-in-kapaswadi" class="hover:text-primary">Kapaswadi</a></li>
          <li class="text-muted-foreground text-sm"><a href="/areas/courier-service-in-chakala" class="hover:text-primary">Chakala</a></li>
          <li class="text-muted-foreground text-sm"><a href="/areas/courier-service-in-vile-parle" class="hover:text-primary">Vile Parle</a></li>
          <li class="text-muted-foreground text-sm"><a href="/areas/courier-service-in-goregaon-west" class="hover:text-primary">Goregaon West</a></li>
          <li class="text-muted-foreground text-sm"><a href="/areas/courier-service-in-goregaon-east" class="hover:text-primary">Goregaon East</a></li>
          <li class="text-muted-foreground text-sm"><a href="/areas/courier-service-in-malad" class="hover:text-primary">Malad</a></li>
          <li class="text-muted-foreground text-sm"><a href="/areas/courier-service-in-kandivali" class="hover:text-primary">Kandivali</a></li>
          <li class="text-muted-foreground text-sm"><a href="/areas/courier-service-in-santacruz" class="hover:text-primary">Santacruz</a></li>
        </ul>
      </article>
    </div>
  </section>

  <section id="why-us" class="py-20 bg-muted/30">
    <div class="container">
      <header class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Trackon Courier Mumbai</h2>
        <p class="text-lg text-muted-foreground max-w-2xl mx-auto">Your trusted local courier partner for reliable and affordable delivery services.</p>
      </header>
      <ul class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0">
        <li class="flex items-start gap-4">
          <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0"><span class="text-2xl">⚡</span></div>
          <div><h3 class="text-lg font-bold text-foreground mb-2">Fast Pickup Within Andheri</h3><p class="text-muted-foreground">Quick pickup within 1-2 hours in Andheri West, Andheri East, and surrounding areas.</p></div>
        </li>
        <li class="flex items-start gap-4">
          <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0"><span class="text-2xl">🤝</span></div>
          <div><h3 class="text-lg font-bold text-foreground mb-2">Trusted Local Partner</h3><p class="text-muted-foreground">Years of experience serving businesses and individuals in Mumbai with reliable courier services.</p></div>
        </li>
        <li class="flex items-start gap-4">
          <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0"><span class="text-2xl">💰</span></div>
          <div><h3 class="text-lg font-bold text-foreground mb-2">Affordable Courier Charges</h3><p class="text-muted-foreground">Competitive rates for local, domestic, and international courier services. No hidden fees.</p></div>
        </li>
        <li class="flex items-start gap-4">
          <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0"><span class="text-2xl">📍</span></div>
          <div><h3 class="text-lg font-bold text-foreground mb-2">Real-Time Tracking</h3><p class="text-muted-foreground">Track your shipment status online with our easy-to-use tracking system.</p></div>
        </li>
        <li class="flex items-start gap-4">
          <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0"><span class="text-2xl">📞</span></div>
          <div><h3 class="text-lg font-bold text-foreground mb-2">Dedicated Support</h3><p class="text-muted-foreground">Friendly customer support available to assist with your courier needs. Call 8097512951.</p></div>
        </li>
        <li class="flex items-start gap-4">
          <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0"><span class="text-2xl">🔒</span></div>
          <div><h3 class="text-lg font-bold text-foreground mb-2">Secure Handling</h3><p class="text-muted-foreground">Safe handling of your valuable documents and parcels with proper packaging and care.</p></div>
        </li>
      </ul>
    </div>
  </section>

  <section id="trust" class="py-20 bg-background">
    <div class="container">
      <article class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-6">Trusted Courier Service in Andheri West</h2>
        <p class="text-lg text-muted-foreground mb-6">Trackon Courier has been serving the Andheri West community for several years, building a reputation for reliable and timely courier deliveries. Our team understands the local area thoroughly, ensuring efficient pickup and delivery routes.</p>
        <p class="text-lg text-muted-foreground mb-8">We have successfully delivered thousands of shipments for local businesses, e-commerce sellers, and individual customers across Mumbai. Our commitment to safe handling and on-time delivery has made us a preferred choice for courier services in Andheri and surrounding areas.</p>
        <ul class="grid grid-cols-2 md:grid-cols-4 gap-6 list-none p-0">
          <li class="text-center"><p class="text-4xl font-bold text-primary mb-2">5+</p><p class="text-muted-foreground">Years of Experience</p></li>
          <li class="text-center"><p class="text-4xl font-bold text-primary mb-2">2000+</p><p class="text-muted-foreground">Happy Customers</p></li>
          <li class="text-center"><p class="text-4xl font-bold text-primary mb-2">98%</p><p class="text-muted-foreground">On-Time Delivery</p></li>
          <li class="text-center"><p class="text-4xl font-bold text-primary mb-2">100%</p><p class="text-muted-foreground">Secure Handling</p></li>
        </ul>
      </article>
    </div>
  </section>

  <section id="contact" class="py-20 bg-muted/30">
    <div class="container">
      <header class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4">Contact Trackon Courier Andheri West</h2>
        <p class="text-lg text-muted-foreground max-w-2xl mx-auto">Get in touch for courier pickup, delivery enquiries, or rate information.</p>
      </header>
      <article class="max-w-2xl mx-auto">
        <address class="not-italic bg-card rounded-xl p-8 shadow-sm border border-border mb-8">
          <h3 class="text-xl font-bold text-foreground mb-4">Trackon Courier Mumbai</h3>
          <p class="text-muted-foreground mb-2"><strong>Address:</strong> Shop No. 1/2, Ever Shine Mens Wear, Juhu Versova Link Road, Andheri West, Mumbai - 400053</p>
          <p class="text-muted-foreground mb-2"><strong>Phone:</strong> <a href="tel:8097512951" class="text-primary hover:underline">8097512951</a></p>
          <p class="text-muted-foreground mb-2"><strong>Email:</strong> <a href="mailto:sonacourierservices@gmail.com" class="text-primary hover:underline">sonacourierservices@gmail.com</a></p>
          <p class="text-muted-foreground"><strong>Service Area:</strong> Andheri West, Mumbai &amp; surrounding areas</p>
        </address>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:8097512951" class="inline-flex items-center justify-center rounded-md text-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8">Call Now – 8097512951</a>
          <a href="https://wa.me/918097512951" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-md text-lg font-medium bg-green-600 text-white hover:bg-green-700 h-14 px-8">WhatsApp Us</a>
        </div>
      </article>
    </div>
  </section>
</main>

<footer class="bg-card border-t border-border py-12">
  <div class="container">
    <div class="grid md:grid-cols-4 gap-8">
      <div><h3 class="font-bold text-lg text-foreground mb-4">Trackon Courier Mumbai</h3><p class="text-muted-foreground text-sm">Your trusted courier partner for same-day, express, and international delivery services in Mumbai.</p></div>
      <nav aria-label="Quick links"><h3 class="font-bold text-lg text-foreground mb-4">Quick Links</h3><ul class="space-y-2 list-none p-0"><li><a href="/" class="text-muted-foreground hover:text-primary text-sm">Home</a></li><li><a href="/about" class="text-muted-foreground hover:text-primary text-sm">About Us</a></li><li><a href="/blog" class="text-muted-foreground hover:text-primary text-sm">Blog</a></li><li><a href="/faq" class="text-muted-foreground hover:text-primary text-sm">FAQ</a></li><li><a href="/sitemap" class="text-muted-foreground hover:text-primary text-sm">Sitemap</a></li></ul></nav>
      <nav aria-label="Services"><h3 class="font-bold text-lg text-foreground mb-4">Our Services</h3><ul class="space-y-2 list-none p-0"><li><a href="/services/same-day-courier" class="text-muted-foreground hover:text-primary text-sm">Same Day Courier</a></li><li><a href="/services/express-courier" class="text-muted-foreground hover:text-primary text-sm">Express Courier</a></li><li><a href="/services/pan-india-courier" class="text-muted-foreground hover:text-primary text-sm">Pan India Courier</a></li><li><a href="/services/international-courier" class="text-muted-foreground hover:text-primary text-sm">International Courier</a></li></ul></nav>
      <div><h3 class="font-bold text-lg text-foreground mb-4">Contact Us</h3><address class="not-italic text-muted-foreground text-sm space-y-2"><p><a href="tel:8097512951" class="hover:text-primary">8097512951</a></p><p><a href="mailto:sonacourierservices@gmail.com" class="hover:text-primary">sonacourierservices@gmail.com</a></p><p>Andheri West, Mumbai - 400053</p></address></div>
    </div>
    <div class="border-t border-border mt-8 pt-8 text-center"><p class="text-muted-foreground text-sm">© 2024 Trackon Courier Mumbai. All rights reserved.</p></div>
  </div>
</footer>
`;
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(), 
    mode === "development" && componentTagger(),
    mode === "production" && ssgPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
