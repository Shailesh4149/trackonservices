import { Star, MapPin, Quote } from "lucide-react";
import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface CustomerReviewsProps {
  areaName?: string;
}

const CustomerReviews = React.forwardRef<HTMLElement, CustomerReviewsProps>(
  ({ areaName = "Andheri West & Mumbai" }, ref) => {
  const sectionRef = useScrollAnimation();

  const reviews = [
    {
      text: "Excellent service! Pickup was within an hour and delivery was same-day. Highly recommended for urgent documents.",
      author: "Business Owner",
      location: "Andheri West"
    },
    {
      text: "Reliable and professional. Have been using Trackon Courier for my e-commerce business for over a year now.",
      author: "E-commerce Seller",
      location: "Mumbai"
    },
    {
      text: "Great rates and trustworthy handling. My international shipments always arrive safely and on time.",
      author: "Regular Customer",
      location: "Andheri"
    }
  ];

  const slideDirections = ["slide-left", "scale", "slide-right"] as const;

  return (
    <section className="py-12 md:py-16 bg-card" aria-labelledby="reviews-heading" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-10" data-animate>
          <span className="inline-block text-accent font-semibold mb-3">Customer Reviews</span>
          <h2 id="reviews-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Trusted by Local Customers
          </h2>
          <p className="text-lg text-muted-foreground flex items-center justify-center gap-2">
            Rated <span className="text-accent font-bold">★★★★★</span> by local customers in {areaName}
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Average Rating: <strong className="text-foreground">5.0 / 5.0</strong> based on customer feedback
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <article 
              key={index} 
              className="bg-secondary rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow duration-300 relative"
              data-animate={slideDirections[index]}
            >
              <Quote className="w-8 h-8 text-accent/20 absolute top-4 right-4" aria-hidden="true" />
              <div className="flex items-center gap-1 mb-3 text-accent" role="img" aria-label="5 star rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-medium text-foreground">— {review.author}</span>
                <span className="text-muted-foreground flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {review.location}
                </span>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8" data-animate>
          Find us on Google • Trusted by local customers in {areaName}
        </p>
      </div>
    </section>
  );
});

CustomerReviews.displayName = "CustomerReviews";

export default CustomerReviews;
