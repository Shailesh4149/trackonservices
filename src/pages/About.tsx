import { useEffect } from "react";
import { Users, Award, Clock, MapPin, Target, Heart, Shield, Truck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Breadcrumb from "@/components/seo/Breadcrumb";
import StatsInfographic from "@/components/infographics/StatsInfographic";

const About = () => {
  useEffect(() => {
    document.title = "About Trackon Courier | Mumbai's Trusted Courier Service Since 2010";
    
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

    updateMeta("description", "Learn about Trackon Courier - Mumbai's trusted courier service since 2010. 50,000+ happy customers, 500+ cities covered, 99% on-time delivery rate.");
    updateMeta("og:title", "About Trackon Courier | Mumbai's Trusted Courier Service", true);
    updateMeta("og:description", "Learn about Trackon Courier - Mumbai's trusted courier service since 2010.", true);
  }, []);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "About Us" }
  ];

  const milestones = [
    { year: "2010", title: "Founded", description: "Started operations in Mumbai with a vision to revolutionize courier services" },
    { year: "2013", title: "Pan India Expansion", description: "Extended services to 100+ cities across India" },
    { year: "2016", title: "International Launch", description: "Began international shipping to 50+ countries" },
    { year: "2019", title: "Tech Integration", description: "Launched real-time tracking and mobile app" },
    { year: "2022", title: "500+ Cities", description: "Expanded network to cover 500+ cities nationwide" },
    { year: "2024", title: "200+ Countries", description: "Now shipping to over 200 countries worldwide" },
  ];

  const values = [
    { icon: Target, title: "Reliability", description: "We deliver on our promises, every single time" },
    { icon: Clock, title: "Speed", description: "Time-sensitive deliveries handled with urgency" },
    { icon: Shield, title: "Security", description: "Your packages are safe and insured" },
    { icon: Heart, title: "Customer First", description: "Your satisfaction is our top priority" },
  ];

  const team = [
    { role: "Operations Team", count: "50+", description: "Dedicated professionals managing logistics" },
    { role: "Delivery Partners", count: "200+", description: "Trained delivery executives across Mumbai" },
    { role: "Support Staff", count: "24/7", description: "Round-the-clock customer assistance" },
  ];

  return (
    <>
      <Header />
      <main className="bg-background">
        {/* Hero Section */}
        <section className="bg-primary/5 py-12 md:py-20">
          <div className="container">
            <Breadcrumb items={breadcrumbItems} />
            
            <div className="max-w-4xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                About Trackon Courier
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Mumbai's trusted courier partner since 2010. We've built our reputation on reliability, 
                speed, and exceptional customer service across India and 200+ countries worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12">
          <div className="container">
            <StatsInfographic />
          </div>
        </section>

        {/* Our Story */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Trackon Courier was founded in 2010 with a simple mission: to make courier services 
                    accessible, reliable, and affordable for everyone in Mumbai. What started as a small 
                    operation with just three delivery executives has grown into one of Mumbai's most 
                    trusted courier networks.
                  </p>
                  <p>
                    Over the years, we've expanded our services to cover all major cities across India 
                    and now offer international shipping to over 200 countries. Our growth has been 
                    fueled by our unwavering commitment to customer satisfaction and on-time delivery.
                  </p>
                  <p>
                    Today, we serve thousands of customers daily, from individuals sending personal 
                    packages to businesses managing complex logistics needs. Our team of 250+ 
                    professionals works tirelessly to ensure your parcels reach their destination 
                    safely and on time.
                  </p>
                </div>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-accent-gradient flex items-center justify-center">
                    <Truck className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Our Mission</h3>
                    <p className="text-muted-foreground">Delivering trust, one package at a time</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  To provide fast, secure, and affordable courier services that exceed customer 
                  expectations while maintaining the highest standards of professionalism and care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-12 md:py-16 bg-secondary/30">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Our Journey</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {milestones.map((milestone) => (
                <div key={milestone.year} className="bg-card rounded-xl p-6 border border-border">
                  <span className="text-2xl font-bold text-accent">{milestone.year}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-2">{milestone.title}</h3>
                  <p className="text-muted-foreground mt-2">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-12 md:py-16">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Our Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="text-center">
                    <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-12 md:py-16 bg-primary/5">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {team.map((member) => (
                <div key={member.role} className="bg-card rounded-xl p-6 border border-border text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-accent-gradient flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <span className="text-3xl font-bold text-accent">{member.count}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-2">{member.role}</h3>
                  <p className="text-muted-foreground mt-2 text-sm">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
};

export default About;
