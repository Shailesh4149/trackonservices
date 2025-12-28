export interface FAQ {
  question: string;
  answer: string;
}

export interface ServiceFAQData {
  faqs: FAQ[];
  howItWorks: {
    step: number;
    title: string;
    description: string;
  }[];
  useCases: {
    title: string;
    description: string;
  }[];
  benefits: {
    title: string;
    description: string;
  }[];
  comparison?: {
    feature: string;
    thisService: string;
    alternative: string;
  }[];
  relatedServices: string[];
}

export const serviceFAQs: Record<string, ServiceFAQData> = {
  "domestic-courier": {
    faqs: [
      {
        question: "How long does domestic courier delivery take?",
        answer: "Domestic courier delivery typically takes 1-3 business days depending on the destination. Metro cities like Delhi, Bangalore, and Chennai receive deliveries within 1-2 days, while remote areas may take 3-5 days."
      },
      {
        question: "What is the weight limit for domestic parcels?",
        answer: "Standard domestic parcels can weigh up to 30 kg per package. For shipments exceeding this weight, we offer special cargo services. Documents are typically limited to 2 kg under document rates."
      },
      {
        question: "Is COD (Cash on Delivery) available for domestic shipping?",
        answer: "Yes, COD is available for domestic shipments across most pin codes in India. COD amount is remitted within 3-5 business days after successful delivery."
      },
      {
        question: "How do I track my domestic courier?",
        answer: "You'll receive a tracking number via SMS after booking. Track your shipment through our website, or WhatsApp us the tracking number for instant updates."
      },
      {
        question: "What items are prohibited for domestic shipping?",
        answer: "Prohibited items include hazardous materials, explosives, live animals, currency, illegal substances, and perishable goods without proper packaging. Contact us for a complete list."
      },
      {
        question: "Do you provide packaging for domestic shipments?",
        answer: "Yes, we provide free packaging for shipments over ₹500. For smaller orders, packaging materials are available at nominal charges. We also offer secure packaging for fragile items."
      }
    ],
    howItWorks: [
      {
        step: 1,
        title: "Book Your Shipment",
        description: "Call us or book online. Provide pickup address, delivery details, and package information."
      },
      {
        step: 2,
        title: "Schedule Pickup",
        description: "Choose a convenient pickup time. Our executive will arrive at your doorstep."
      },
      {
        step: 3,
        title: "Package Collection",
        description: "We collect your package, verify details, and provide a receipt with tracking number."
      },
      {
        step: 4,
        title: "In-Transit Processing",
        description: "Your package is transported through our network with updates at each checkpoint."
      },
      {
        step: 5,
        title: "Delivery",
        description: "Package delivered to recipient. You receive confirmation via SMS/WhatsApp."
      }
    ],
    useCases: [
      {
        title: "E-commerce Shipments",
        description: "Perfect for online sellers shipping products to customers across India with COD options."
      },
      {
        title: "Business Documents",
        description: "Contracts, invoices, legal papers delivered securely to business partners and clients."
      },
      {
        title: "Personal Packages",
        description: "Gifts, clothing, electronics sent to family and friends in other cities."
      },
      {
        title: "Medical Supplies",
        description: "Medicines and medical documents delivered with care and proper handling."
      }
    ],
    benefits: [
      {
        title: "Pan India Coverage",
        description: "Delivery to 19,000+ pin codes across all states and union territories."
      },
      {
        title: "Affordable Rates",
        description: "Competitive pricing starting from ₹50 for documents with no hidden charges."
      },
      {
        title: "Real-Time Tracking",
        description: "Track your shipment at every stage from pickup to delivery."
      },
      {
        title: "Doorstep Service",
        description: "Free pickup from your location – no need to visit our office."
      }
    ],
    comparison: [
      {
        feature: "Delivery Time",
        thisService: "1-3 days",
        alternative: "Express: 2-6 hours"
      },
      {
        feature: "Starting Price",
        thisService: "₹50",
        alternative: "Express: ₹150"
      },
      {
        feature: "Coverage",
        thisService: "Pan India",
        alternative: "Express: Metro cities"
      },
      {
        feature: "Best For",
        thisService: "Regular shipments",
        alternative: "Urgent packages"
      }
    ],
    relatedServices: ["express-delivery", "same-day-delivery", "doorstep-pickup"]
  },
  "international-shipping": {
    faqs: [
      {
        question: "Which countries do you ship to?",
        answer: "We ship to 200+ countries worldwide including USA, UK, Canada, Australia, UAE, Singapore, Germany, Japan, and more. Contact us for specific country availability."
      },
      {
        question: "How long does international shipping take?",
        answer: "International delivery times vary: USA/UK takes 3-5 business days for express, UAE/Singapore 2-3 days. Economy options take 7-14 days. Actual delivery depends on customs clearance."
      },
      {
        question: "What documents are needed for international shipping?",
        answer: "You'll need a commercial invoice (3 copies), packing list, and shipper's declaration. For specific items, additional documents like Certificate of Origin may be required."
      },
      {
        question: "How are customs duties handled?",
        answer: "Customs duties are typically paid by the recipient. We can provide estimated duties for most destinations. Some items may require export licenses."
      },
      {
        question: "What items cannot be shipped internationally?",
        answer: "Prohibited items include dangerous goods, counterfeit products, currency, live animals, and country-specific restrictions like food items to USA or meat to UAE."
      },
      {
        question: "Is insurance included for international shipments?",
        answer: "Basic insurance is included with all shipments. Enhanced coverage up to full declared value is available for valuable items at additional cost."
      }
    ],
    howItWorks: [
      {
        step: 1,
        title: "Get a Quote",
        description: "Call us with destination country, weight, and dimensions for instant pricing."
      },
      {
        step: 2,
        title: "Prepare Documents",
        description: "Complete commercial invoice and packing list. We'll guide you through the process."
      },
      {
        step: 3,
        title: "Schedule Pickup",
        description: "We collect the package with all required documentation from your location."
      },
      {
        step: 4,
        title: "Customs Clearance",
        description: "We handle export customs in India. Import clearance at destination is standard process."
      },
      {
        step: 5,
        title: "Global Delivery",
        description: "Package delivered to recipient's door. Full tracking available throughout journey."
      }
    ],
    useCases: [
      {
        title: "Business Exports",
        description: "Commercial samples, products, and business documents to international clients."
      },
      {
        title: "Personal Gifts",
        description: "Send gifts and personal items to family and friends living abroad."
      },
      {
        title: "Document Delivery",
        description: "Passport, visa applications, legal documents to embassies and foreign offices."
      },
      {
        title: "E-commerce International",
        description: "Ship products to international customers from your Indian e-commerce store."
      }
    ],
    benefits: [
      {
        title: "200+ Countries",
        description: "Global network reaching every major country and most remote destinations."
      },
      {
        title: "Customs Support",
        description: "Expert guidance on documentation, duties, and compliance requirements."
      },
      {
        title: "Door-to-Door",
        description: "Complete service from your doorstep to recipient's address abroad."
      },
      {
        title: "Full Tracking",
        description: "Real-time visibility throughout the international journey."
      }
    ],
    relatedServices: ["domestic-courier", "secure-packaging", "express-delivery"]
  },
  "express-delivery": {
    faqs: [
      {
        question: "How fast is express delivery?",
        answer: "Express delivery guarantees delivery within 2-6 hours within Mumbai. For other metro cities, express options deliver within 12-24 hours depending on distance."
      },
      {
        question: "What is the cutoff time for express delivery?",
        answer: "There's no strict cutoff for express delivery – we accept bookings throughout the day. However, for guaranteed same-evening delivery, booking before 4 PM is recommended."
      },
      {
        question: "Is express delivery available on weekends?",
        answer: "Yes, express delivery is available 7 days a week including Sundays and holidays. Premium charges may apply for holiday deliveries."
      },
      {
        question: "What areas are covered under express delivery?",
        answer: "Express delivery covers all of Mumbai including Thane, Navi Mumbai, and surrounding areas. For inter-city express, we cover all metro cities."
      },
      {
        question: "Can I schedule a specific delivery time?",
        answer: "Yes, you can request specific delivery windows. While we try our best to accommodate, exact times cannot always be guaranteed due to traffic and other factors."
      },
      {
        question: "What if express delivery is delayed?",
        answer: "If we fail to meet the promised express delivery time due to our fault, we offer a full refund of the express premium charged."
      }
    ],
    howItWorks: [
      {
        step: 1,
        title: "Urgent Booking",
        description: "Call our express line for immediate booking. Share pickup and delivery details."
      },
      {
        step: 2,
        title: "Priority Pickup",
        description: "Dedicated delivery person dispatched immediately to collect your package."
      },
      {
        step: 3,
        title: "Direct Transport",
        description: "Package moves directly to destination without hub processing delays."
      },
      {
        step: 4,
        title: "Express Delivery",
        description: "Delivered within 2-6 hours with real-time updates throughout."
      }
    ],
    useCases: [
      {
        title: "Legal Emergencies",
        description: "Court filing deadlines, urgent legal documents that cannot wait."
      },
      {
        title: "Medical Urgency",
        description: "Medical reports, test samples, or medicines needed immediately."
      },
      {
        title: "Business Critical",
        description: "Contracts, tenders, or documents with strict submission deadlines."
      },
      {
        title: "Event Materials",
        description: "Last-minute event supplies, marketing materials, or gifts."
      }
    ],
    benefits: [
      {
        title: "2-6 Hour Delivery",
        description: "The fastest delivery option for truly urgent packages in Mumbai."
      },
      {
        title: "Priority Handling",
        description: "Your package bypasses standard processing for immediate attention."
      },
      {
        title: "Dedicated Delivery",
        description: "Single delivery person handles your package from pickup to delivery."
      },
      {
        title: "Live Tracking",
        description: "Real-time GPS tracking so you know exactly where your package is."
      }
    ],
    comparison: [
      {
        feature: "Delivery Time",
        thisService: "2-6 hours",
        alternative: "Same-Day: By 8 PM"
      },
      {
        feature: "Booking Deadline",
        thisService: "Anytime",
        alternative: "Same-Day: Before 2 PM"
      },
      {
        feature: "Starting Price",
        thisService: "₹150",
        alternative: "Same-Day: ₹100"
      },
      {
        feature: "Best For",
        thisService: "True emergencies",
        alternative: "Planned urgent needs"
      }
    ],
    relatedServices: ["same-day-delivery", "domestic-courier", "doorstep-pickup"]
  },
  "same-day-delivery": {
    faqs: [
      {
        question: "What is the deadline for same-day delivery?",
        answer: "For guaranteed same-day delivery, you must book before 2 PM. Orders placed after 2 PM will be delivered the next business day."
      },
      {
        question: "By what time will my package be delivered?",
        answer: "Same-day packages are delivered by 8 PM the same day within Mumbai city limits. Suburban areas may have delivery by 9 PM."
      },
      {
        question: "What areas are covered for same-day delivery?",
        answer: "Same-day delivery covers entire Mumbai city including Western Suburbs, Central Mumbai, South Mumbai, Eastern Suburbs, and Harbour Line areas."
      },
      {
        question: "Is same-day delivery available on Sundays?",
        answer: "Same-day delivery is available Monday to Saturday. Sunday same-day service is available with premium charges in select areas."
      },
      {
        question: "Can I track my same-day delivery?",
        answer: "Yes, you'll receive SMS updates at key stages. You can also call our helpline for real-time location updates."
      },
      {
        question: "What if I miss the 2 PM deadline?",
        answer: "If you need urgent delivery after 2 PM, we recommend our Express Delivery service which operates without cutoff times."
      }
    ],
    howItWorks: [
      {
        step: 1,
        title: "Book Before 2 PM",
        description: "Call or WhatsApp us before 2 PM with pickup and delivery details."
      },
      {
        step: 2,
        title: "Quick Pickup",
        description: "We collect your package within 1-2 hours of booking confirmation."
      },
      {
        step: 3,
        title: "Same-Day Processing",
        description: "Package processed immediately and routed for delivery."
      },
      {
        step: 4,
        title: "Evening Delivery",
        description: "Delivered by 8 PM same day with SMS confirmation."
      }
    ],
    useCases: [
      {
        title: "Last-Minute Gifts",
        description: "Birthday presents, anniversary gifts that need to reach by evening."
      },
      {
        title: "Forgotten Documents",
        description: "Papers left at home needed at office, or vice versa."
      },
      {
        title: "Same-Day Returns",
        description: "Return packages that need to reach the seller quickly."
      },
      {
        title: "Business Documents",
        description: "Contracts, cheques, or papers needed by end of business day."
      }
    ],
    benefits: [
      {
        title: "Guaranteed Evening Delivery",
        description: "Book before 2 PM, receive before 8 PM – guaranteed."
      },
      {
        title: "Affordable Urgent Service",
        description: "Faster than standard courier, more affordable than express."
      },
      {
        title: "City-Wide Coverage",
        description: "All Mumbai areas covered for same-day delivery."
      },
      {
        title: "SMS Notifications",
        description: "Stay informed with delivery updates throughout the day."
      }
    ],
    relatedServices: ["express-delivery", "domestic-courier", "doorstep-pickup"]
  },
  "secure-packaging": {
    faqs: [
      {
        question: "What types of packaging do you provide?",
        answer: "We offer bubble wrap, custom boxes, foam padding, corrugated sheets, thermocol, and specialized packaging for electronics, glass, and artwork."
      },
      {
        question: "Is packaging free?",
        answer: "Packaging is free for shipments over ₹500. For smaller orders, packaging charges start from ₹50 depending on requirements."
      },
      {
        question: "Can you pack fragile items like glass and electronics?",
        answer: "Yes, we specialize in packaging fragile items. Our trained staff uses appropriate materials and techniques to ensure safe transit."
      },
      {
        question: "How long does packaging take?",
        answer: "Standard packaging takes 15-30 minutes. Complex items like artwork or multiple fragile pieces may take up to an hour."
      },
      {
        question: "Do you guarantee against damage?",
        answer: "With our secure packaging service and declared insurance, items are covered against transit damage. We maintain less than 0.5% damage rate."
      },
      {
        question: "Can I bring items to you for packaging?",
        answer: "Yes, you can visit our office for packaging services. We also offer doorstep packaging where we come to your location with materials."
      }
    ],
    howItWorks: [
      {
        step: 1,
        title: "Assessment",
        description: "We evaluate your items and recommend appropriate packaging solutions."
      },
      {
        step: 2,
        title: "Material Selection",
        description: "Choose from our range of packaging materials suited to your items."
      },
      {
        step: 3,
        title: "Professional Packing",
        description: "Our trained staff carefully pack your items using best practices."
      },
      {
        step: 4,
        title: "Quality Check",
        description: "Final inspection to ensure packaging meets safety standards."
      },
      {
        step: 5,
        title: "Ready for Shipping",
        description: "Package sealed, labeled, and ready for courier pickup."
      }
    ],
    useCases: [
      {
        title: "Fragile Items",
        description: "Glass, ceramics, porcelain, and delicate decorative pieces."
      },
      {
        title: "Electronics",
        description: "Laptops, cameras, phones, and sensitive equipment."
      },
      {
        title: "Artwork & Antiques",
        description: "Paintings, sculptures, collectibles, and valuable antiques."
      },
      {
        title: "Medical Equipment",
        description: "Lab instruments, medical devices, and sensitive equipment."
      }
    ],
    benefits: [
      {
        title: "Professional Handling",
        description: "Trained packaging specialists handle your items with care."
      },
      {
        title: "Quality Materials",
        description: "Premium packaging materials for maximum protection."
      },
      {
        title: "Damage Prevention",
        description: "Significantly reduces risk of damage during transit."
      },
      {
        title: "Peace of Mind",
        description: "Know your valuables are protected for the journey."
      }
    ],
    relatedServices: ["domestic-courier", "international-shipping", "express-delivery"]
  },
  "doorstep-pickup": {
    faqs: [
      {
        question: "Is doorstep pickup really free?",
        answer: "Yes, doorstep pickup is completely free for all orders across Mumbai, Thane, Navi Mumbai, and surrounding areas."
      },
      {
        question: "How do I schedule a pickup?",
        answer: "Call us, WhatsApp, or book online. Share your address and preferred time slot, and we'll confirm your pickup."
      },
      {
        question: "What time slots are available for pickup?",
        answer: "We offer flexible time slots from 9 AM to 8 PM. Morning (9-12), Afternoon (12-3), and Evening (3-8) slots are available."
      },
      {
        question: "Can I schedule a pickup for later dates?",
        answer: "Yes, you can schedule pickups up to 7 days in advance. Great for planning business shipments or vacation travel."
      },
      {
        question: "What if I'm not available at the scheduled time?",
        answer: "You can reschedule up to 1 hour before the pickup. Alternatively, leave the package with a family member or neighbor."
      },
      {
        question: "Do you pickup from office addresses?",
        answer: "Yes, we pickup from homes, offices, shops, warehouses – any address in our service area. Corporate accounts get dedicated pickup support."
      }
    ],
    howItWorks: [
      {
        step: 1,
        title: "Schedule Pickup",
        description: "Call, WhatsApp, or book online with your address and preferred time."
      },
      {
        step: 2,
        title: "Receive Confirmation",
        description: "Get SMS confirmation with pickup details and executive information."
      },
      {
        step: 3,
        title: "Executive Arrives",
        description: "Our pickup executive arrives at your doorstep during the scheduled slot."
      },
      {
        step: 4,
        title: "Package Handover",
        description: "Hand over package, receive receipt with tracking number."
      },
      {
        step: 5,
        title: "Tracking Begins",
        description: "Start tracking your shipment from the moment it leaves your hands."
      }
    ],
    useCases: [
      {
        title: "Busy Professionals",
        description: "Schedule pickups around your work hours without leaving office."
      },
      {
        title: "Home-Based Business",
        description: "Ship products directly from home without daily trips to courier office."
      },
      {
        title: "Bulk Shipments",
        description: "Multiple packages picked up in one visit for efficient processing."
      },
      {
        title: "Regular Shippers",
        description: "Set up recurring pickup schedules for consistent shipping needs."
      }
    ],
    benefits: [
      {
        title: "Save Time",
        description: "No travel to courier offices – we come to you."
      },
      {
        title: "Flexible Timing",
        description: "Choose a time slot that fits your schedule."
      },
      {
        title: "Free Service",
        description: "No charges for pickup – it's included with all shipments."
      },
      {
        title: "Convenience",
        description: "Ship from home, office, or anywhere in our service area."
      }
    ],
    relatedServices: ["domestic-courier", "same-day-delivery", "express-delivery"]
  }
};

export const getServiceFAQ = (slug: string): ServiceFAQData | undefined => {
  return serviceFAQs[slug];
};
