import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { MapPin, Phone, MessageCircle, Clock, CheckCircle, ArrowLeft, Star, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

interface AreaData {
  name: string;
  description: string;
  metaDescription: string;
  keywords: string;
  content: string;
  features: string[];
  nearbyAreas: string[];
  latitude: number;
  longitude: number;
  pincode: string;
  // New fields for Phase 3B
  landmarks?: string[];
  pickupTime?: string;
  isMumbaiArea?: boolean;
}

const areasData: Record<string, AreaData> = {
  "andheri": {
    name: "Andheri",
    description: "Fast & Reliable Courier Services in Andheri, Mumbai",
    metaDescription: "Fast & reliable courier service in Andheri, Mumbai. Same-day pickup, express delivery, Pan India & international shipping. Call 8097512951.",
    keywords: "courier service in Andheri, courier services Andheri Mumbai, same day courier Andheri, express courier Andheri, Trackon Courier Andheri",
    content: "Trackon Courier provides comprehensive courier services across Andheri covering both Andheri East and Andheri West. Located in the heart of Mumbai's western suburbs, we offer fast pickup and reliable delivery for businesses and residents. Our team is familiar with every lane and locality in Andheri, ensuring your parcels reach their destination quickly and safely.",
    features: ["Same-day delivery within Mumbai", "Express shipping to Pan India", "Local area expertise", "Doorstep pickup", "Real-time tracking", "Affordable rates"],
    nearbyAreas: ["Andheri West", "Andheri East", "Jogeshwari", "Goregaon", "Vile Parle"],
    latitude: 19.1197,
    longitude: 72.8468,
    pincode: "400058",
    landmarks: ["Andheri Railway Station", "Andheri Sports Complex", "D.N. Nagar Metro Station"],
    pickupTime: "45-90 minutes",
    isMumbaiArea: true
  },
  "andheri-east": {
    name: "Andheri East",
    description: "Fast & Reliable Courier Services in Andheri East, Mumbai",
    metaDescription: "Trackon Courier - Best courier services in Andheri East, Mumbai. Same-day delivery, express shipping, doorstep pickup. Call 8097512951 for fast courier near MIDC, Chakala, Marol.",
    keywords: "courier services in Andheri East, courier near Andheri East, fast delivery Andheri East, Trackon courier Andheri East, same day courier Andheri East, parcel delivery MIDC, courier Chakala",
    content: "Trackon Courier provides premium courier services in Andheri East covering MIDC, Chakala, Marol Industrial Area, and surrounding localities. Our experienced delivery partners ensure your parcels reach their destination safely and on time.",
    features: ["Same-day delivery within Mumbai", "Express shipping to Pan India", "Corporate bulk shipping", "E-commerce logistics", "Document courier", "Fragile item handling"],
    nearbyAreas: ["Marol", "Saki Naka", "Chakala", "MIDC", "Andheri West"],
    latitude: 19.1136,
    longitude: 72.8697,
    pincode: "400069",
    landmarks: ["MIDC Industrial Area", "Western Express Highway", "SEEPZ"],
    pickupTime: "60-90 minutes",
    isMumbaiArea: true
  },
  "andheri-west": {
    name: "Andheri West",
    description: "Premium Courier Services in Andheri West, Mumbai – Our Headquarters",
    metaDescription: "Best courier services in Andheri West, Mumbai. Trackon Courier HQ offers same-day delivery, doorstep pickup near Versova, DN Nagar, Lokhandwala. Call 8097512951.",
    keywords: "courier services in Andheri West, courier near Versova, fast delivery DN Nagar, Trackon courier Lokhandwala, same day courier Andheri West, parcel delivery Four Bungalows, Trackon Courier headquarters",
    content: "Welcome to Trackon Courier headquarters in Andheri West! Located at Juhu Versova Link Road near Kapaswadi, we are the central hub for all courier operations across Mumbai. We cover Versova, DN Nagar, Lokhandwala, Four Bungalows, and all nearby areas with the fastest pickup times in the city.",
    features: ["Fastest pickup (30-60 mins)", "HQ location advantage", "Residential & commercial pickup", "Secure packaging available", "Real-time tracking", "24/7 customer support"],
    nearbyAreas: ["DN Nagar", "Versova", "Lokhandwala", "Four Bungalows", "Juhu"],
    latitude: 19.1365,
    longitude: 72.8296,
    pincode: "400053",
    landmarks: ["Juhu Versova Link Road", "DN Nagar Metro Station", "Lokhandwala Complex"],
    pickupTime: "30-60 minutes",
    isMumbaiArea: true
  },
  "andheri-station": {
    name: "Andheri Station",
    description: "Courier Services Near Andheri Railway Station",
    metaDescription: "Courier services near Andheri Station, Mumbai. Fast pickup & delivery near Andheri railway station. Call 8097512951 for express courier services.",
    keywords: "courier near Andheri Station, courier services Andheri railway station, fast delivery near Andheri station, parcel pickup Andheri station",
    content: "Located near Andheri Railway Station? Trackon Courier offers convenient pickup and delivery services for commuters and businesses near the station area. Quick turnaround for urgent shipments.",
    features: ["Station area pickup", "Express local delivery", "Evening pickups available", "Corporate accounts", "Bulk shipping discounts", "COD services"],
    nearbyAreas: ["Andheri East", "Andheri West", "Jogeshwari", "Goregaon"],
    latitude: 19.1197,
    longitude: 72.8468,
    pincode: "400058",
    landmarks: ["Andheri Railway Station East", "Andheri Railway Station West", "Metro Station"],
    pickupTime: "45-75 minutes",
    isMumbaiArea: true
  },
  "bandra": {
    name: "Bandra",
    description: "Premium Courier Services in Bandra, Mumbai",
    metaDescription: "Trackon Courier Bandra - Best courier services in Bandra West & East. Same-day delivery, express shipping. Near Linking Road, Hill Road, BKC. Call 8097512951.",
    keywords: "courier services in Bandra, courier near Linking Road, fast delivery Bandra West, Trackon courier BKC, same day courier Bandra East, parcel delivery Hill Road",
    content: "Trackon Courier provides premium courier services in Bandra covering Bandra West, Bandra East, BKC, Linking Road, Hill Road, and Carter Road. We specialize in fashion, e-commerce, and corporate deliveries.",
    features: ["Fashion & lifestyle logistics", "BKC corporate services", "Same-day Bandra delivery", "E-commerce returns", "Secure document courier", "Premium packaging"],
    nearbyAreas: ["Khar", "Santacruz", "BKC", "Linking Road", "Kurla"],
    latitude: 19.0596,
    longitude: 72.8295,
    pincode: "400050",
    landmarks: ["Linking Road", "Bandra Bandstand", "Mount Mary Church"],
    pickupTime: "60-90 minutes",
    isMumbaiArea: true
  },
  "bandra-west": {
    name: "Bandra West",
    description: "Premium Courier Services in Bandra West, Mumbai",
    metaDescription: "Fast & reliable courier service in Bandra West, Mumbai. Same-day pickup, express delivery near Linking Road, Hill Road. Call 8097512951.",
    keywords: "courier service in Bandra West, courier services Bandra West Mumbai, same day courier Bandra West, express courier Linking Road",
    content: "Trackon Courier is your trusted courier partner in Bandra West. We serve the prestigious localities near Linking Road, Hill Road, Pali Hill, and Carter Road with premium courier services. Whether you need same-day delivery within Mumbai or express shipping across India, our experienced team ensures safe and timely delivery of your parcels.",
    features: ["Linking Road coverage", "Premium residential service", "Same-day delivery", "Fashion logistics", "Secure handling", "Real-time tracking"],
    nearbyAreas: ["Bandra East", "Khar West", "Santacruz", "Juhu", "Linking Road"],
    latitude: 19.0596,
    longitude: 72.8295,
    pincode: "400050",
    landmarks: ["Linking Road", "Hill Road", "Carter Road Promenade"],
    pickupTime: "60-90 minutes",
    isMumbaiArea: true
  },
  "bandra-east": {
    name: "Bandra East",
    description: "Express Courier Services in Bandra East, Mumbai",
    metaDescription: "Fast & reliable courier service in Bandra East, Mumbai. Same-day pickup, express delivery near BKC. Call 8097512951.",
    keywords: "courier service in Bandra East, courier services Bandra East Mumbai, same day courier BKC, express courier Bandra East",
    content: "Trackon Courier provides efficient courier services in Bandra East covering BKC (Bandra Kurla Complex), Kalanagar, and surrounding business districts. Our corporate courier solutions are trusted by businesses in the BKC financial hub for document delivery, e-commerce logistics, and express shipping needs.",
    features: ["BKC corporate service", "Financial district coverage", "Same-day express", "Document courier", "Corporate accounts", "Secure packaging"],
    nearbyAreas: ["Bandra West", "BKC", "Kurla", "Santacruz East", "Kalina"],
    latitude: 19.0596,
    longitude: 72.8697,
    pincode: "400051",
    landmarks: ["Bandra Kurla Complex (BKC)", "Kalanagar Junction", "MMRDA Grounds"],
    pickupTime: "60-90 minutes",
    isMumbaiArea: true
  },
  "santacruz": {
    name: "Santacruz",
    description: "Reliable Courier Services in Santacruz, Mumbai",
    metaDescription: "Fast & reliable courier service in Santacruz, Mumbai. Same-day pickup, express delivery near Santacruz Station. Call 8097512951.",
    keywords: "courier service in Santacruz, courier services Santacruz Mumbai, same day courier Santacruz, express courier Santacruz East West",
    content: "Trackon Courier offers reliable courier services in Santacruz covering both Santacruz East and Santacruz West. Located close to the domestic airport, we provide quick pickup and delivery services for residents, businesses, and travelers. Our team ensures your parcels are handled with care and delivered on time.",
    features: ["Airport proximity service", "Residential coverage", "Same-day delivery", "Business logistics", "Secure handling", "Affordable rates"],
    nearbyAreas: ["Vile Parle", "Bandra", "Khar", "Juhu", "Santacruz Station"],
    latitude: 19.0833,
    longitude: 72.8416,
    pincode: "400054",
    landmarks: ["Santacruz Railway Station", "Domestic Airport T1", "Vakola Junction"],
    pickupTime: "60-90 minutes",
    isMumbaiArea: true
  },
  "chakala": {
    name: "Chakala",
    description: "Corporate Courier Services in Chakala, Mumbai",
    metaDescription: "Fast & reliable courier service in Chakala, Mumbai. Same-day pickup, express delivery for IT parks & offices. Call 8097512951.",
    keywords: "courier service in Chakala, courier services Chakala Mumbai, same day courier Chakala, express courier Chakala Andheri",
    content: "Trackon Courier specializes in corporate courier services in Chakala, the bustling commercial hub near Andheri East. We serve IT parks, corporate offices, MIDC industrial area, and business establishments with reliable same-day and express delivery. Our proximity to the airport makes us ideal for urgent shipments.",
    features: ["IT Park coverage", "Corporate accounts", "Airport connectivity", "Same-day express", "Bulk shipping", "Regular pickup schedules"],
    nearbyAreas: ["Andheri East", "Marol", "MIDC", "SEEPZ", "Saki Naka"],
    latitude: 19.1091,
    longitude: 72.8656,
    pincode: "400059",
    landmarks: ["Chakala Junction", "MIDC Industrial Estate", "Airport Road"],
    pickupTime: "60-90 minutes",
    isMumbaiArea: true
  },
  "juhu": {
    name: "Juhu",
    description: "Express Courier Services in Juhu, Mumbai",
    metaDescription: "Fast courier services in Juhu, Mumbai. Trackon Courier offers same-day delivery near Juhu Beach, JVPD, Juhu Tara Road. Call 8097512951 for instant pickup.",
    keywords: "courier services in Juhu, courier near Juhu Beach, fast delivery JVPD, Trackon courier Juhu, same day courier Juhu Tara Road, parcel delivery Juhu",
    content: "Trackon Courier serves the prestigious Juhu area with premium courier services. We cover Juhu Beach, JVPD Scheme, Juhu Tara Road, and Gulmohar Road with specialized handling for valuable items.",
    features: ["Premium residential service", "Valuable item handling", "Same-day beach area delivery", "Corporate pickups", "International shipping", "Insurance available"],
    nearbyAreas: ["Vile Parle", "Andheri West", "Santacruz", "Versova", "JVPD"],
    latitude: 19.1075,
    longitude: 72.8263,
    pincode: "400049",
    landmarks: ["Juhu Beach", "JVPD Scheme", "Juhu Tara Road"],
    pickupTime: "45-75 minutes",
    isMumbaiArea: true
  },
  "dn-nagar": {
    name: "DN Nagar",
    description: "Reliable Courier Services in DN Nagar, Andheri West",
    metaDescription: "Courier services in DN Nagar, Andheri West. Fast delivery, doorstep pickup. Trackon Courier near DN Nagar Metro. Call 8097512951 for best rates.",
    keywords: "courier services in DN Nagar, courier near DN Nagar Metro, fast delivery DN Nagar, Trackon courier DN Nagar, same day courier Andheri West DN Nagar",
    content: "DN Nagar residents trust Trackon Courier for all their shipping needs. Located near DN Nagar Metro Station, we offer convenient pickup and delivery services for the entire DN Nagar locality.",
    features: ["Metro station area pickup", "Local same-day delivery", "Affordable rates", "Residential service", "Small business logistics", "Weekly pickup schedules"],
    nearbyAreas: ["Andheri West", "Azad Nagar", "Versova", "Lokhandwala", "Four Bungalows"],
    latitude: 19.1269,
    longitude: 72.8355,
    pincode: "400053",
    landmarks: ["DN Nagar Metro Station", "Bhavan's College", "Lokhandwala Market"],
    pickupTime: "30-60 minutes",
    isMumbaiArea: true
  },
  "azad-nagar": {
    name: "Azad Nagar",
    description: "Courier Services in Azad Nagar, Andheri West",
    metaDescription: "Best courier services in Azad Nagar, Andheri West. Same-day delivery, express shipping. Near Azad Nagar Metro. Call 8097512951.",
    keywords: "courier services in Azad Nagar, courier near Azad Nagar Metro, fast delivery Azad Nagar Andheri, Trackon courier Azad Nagar",
    content: "Trackon Courier provides efficient courier services in Azad Nagar. Our proximity to Azad Nagar Metro makes us the preferred choice for quick pickups and deliveries in the area.",
    features: ["Metro-accessible pickup", "Express local delivery", "Business courier services", "Secure handling", "Tracking available", "Competitive pricing"],
    nearbyAreas: ["DN Nagar", "Andheri West", "Versova", "Jogeshwari"],
    latitude: 19.1322,
    longitude: 72.8384,
    pincode: "400053",
    landmarks: ["Azad Nagar Metro Station", "Andheri Link Road", "Four Bungalows"],
    pickupTime: "30-60 minutes",
    isMumbaiArea: true
  },
  "versova": {
    name: "Versova",
    description: "Fast Courier Services in Versova, Mumbai",
    metaDescription: "Courier services in Versova, Andheri West. Trackon Courier offers fast delivery near Versova Beach, Seven Bungalows. Call 8097512951 for same-day courier.",
    keywords: "courier services in Versova, courier near Versova Beach, fast delivery Seven Bungalows, Trackon courier Versova, parcel delivery Versova",
    content: "Versova residents enjoy premium courier services from Trackon Courier. We serve Versova Beach area, Seven Bungalows, Yari Road, and connect you to Pan India destinations.",
    features: ["Beach area coverage", "Residential pickups", "Artist community specials", "Same-day Mumbai delivery", "International shipping", "Fragile item care"],
    nearbyAreas: ["Andheri West", "DN Nagar", "Four Bungalows", "Lokhandwala", "Juhu"],
    latitude: 19.1376,
    longitude: 72.8139,
    pincode: "400061",
    landmarks: ["Versova Beach", "Seven Bungalows", "Yari Road"],
    pickupTime: "30-60 minutes",
    isMumbaiArea: true
  },
  "vile-parle": {
    name: "Vile Parle",
    description: "Trusted Courier Services in Vile Parle, Mumbai",
    metaDescription: "Best courier services in Vile Parle East & West. Trackon Courier offers same-day delivery near Vile Parle Station, NMIMS. Call 8097512951.",
    keywords: "courier services in Vile Parle, courier near Vile Parle Station, fast delivery Vile Parle East, Trackon courier Vile Parle West, NMIMS courier",
    content: "Trackon Courier is the preferred courier service in Vile Parle. We cover Vile Parle East, Vile Parle West, and areas near the railway station with reliable and affordable shipping solutions.",
    features: ["Student-friendly rates", "College area pickup", "Same-day local delivery", "Exam material courier", "Bulk academic shipping", "Document attestation courier"],
    nearbyAreas: ["Santacruz", "Andheri", "Juhu", "Parle Point", "NMIMS Area"],
    latitude: 19.0968,
    longitude: 72.8432,
    pincode: "400057",
    landmarks: ["Vile Parle Railway Station", "NMIMS University", "Mithibai College"],
    pickupTime: "45-75 minutes",
    isMumbaiArea: true
  },
  "goregaon-east": {
    name: "Goregaon East",
    description: "Express Courier Services in Goregaon East, Mumbai",
    metaDescription: "Fast courier services in Goregaon East. Trackon Courier near Film City, Oberoi Mall, NESCO. Same-day delivery. Call 8097512951.",
    keywords: "courier services in Goregaon East, courier near Film City, fast delivery NESCO, Trackon courier Oberoi Mall, same day courier Goregaon East",
    content: "Goregaon East businesses and residents trust Trackon Courier for reliable shipping. We cover Film City, Oberoi Mall, NESCO, and all industrial and residential areas with express delivery.",
    features: ["Film City area service", "Corporate logistics", "E-commerce fulfillment", "Same-day express", "Bulk shipping", "Exhibition courier"],
    nearbyAreas: ["Goregaon West", "Malad", "Jogeshwari", "Aarey Colony", "Film City"],
    latitude: 19.1663,
    longitude: 72.8526,
    pincode: "400063",
    landmarks: ["Film City", "Oberoi Mall", "NESCO Exhibition Centre"],
    pickupTime: "60-90 minutes",
    isMumbaiArea: true
  },
  "goregaon-west": {
    name: "Goregaon West",
    description: "Reliable Courier Services in Goregaon West, Mumbai",
    metaDescription: "Courier services in Goregaon West. Trackon Courier near Infinity Mall, Link Road. Same-day delivery, doorstep pickup. Call 8097512951.",
    keywords: "courier services in Goregaon West, courier near Infinity Mall, fast delivery Link Road Goregaon, Trackon courier Goregaon West",
    content: "Trackon Courier provides comprehensive courier services in Goregaon West. From Infinity Mall to Link Road and beyond, we ensure your packages reach their destination quickly and safely.",
    features: ["Link Road coverage", "Mall area pickup", "Residential service", "Same-day delivery", "Affordable rates", "Weekend pickups"],
    nearbyAreas: ["Goregaon East", "Malad West", "Jogeshwari West", "Oshiwara"],
    latitude: 19.1550,
    longitude: 72.8347,
    pincode: "400062",
    landmarks: ["Infinity Mall", "SV Road", "Goregaon Railway Station"],
    pickupTime: "60-90 minutes",
    isMumbaiArea: true
  },
  "malad": {
    name: "Malad",
    description: "Fast Courier Services in Malad, Mumbai",
    metaDescription: "Best courier services in Malad East & West. Trackon Courier offers same-day delivery near Inorbit Mall, Mindspace. Call 8097512951.",
    keywords: "courier services in Malad, courier near Inorbit Mall, fast delivery Malad West, Trackon courier Mindspace Malad, same day courier Malad",
    content: "Malad's trusted courier partner - Trackon Courier. We serve Malad East, Malad West, Inorbit Mall area, Mindspace, and Link Road with reliable same-day and express delivery services.",
    features: ["IT Park coverage", "Mall area service", "Same-day delivery", "Corporate accounts", "E-commerce logistics", "Return pickups"],
    nearbyAreas: ["Goregaon", "Kandivali", "Borivali", "Mindspace", "Inorbit"],
    latitude: 19.1874,
    longitude: 72.8484,
    pincode: "400064",
    landmarks: ["Inorbit Mall", "Mindspace IT Park", "Malad Railway Station"],
    pickupTime: "75-120 minutes",
    isMumbaiArea: true
  },
  "kandivali": {
    name: "Kandivali",
    description: "Express Courier Services in Kandivali, Mumbai",
    metaDescription: "Courier services in Kandivali East & West. Trackon Courier offers fast delivery, doorstep pickup. Near Thakur Village, Raghuleela Mall. Call 8097512951.",
    keywords: "courier services in Kandivali, courier near Raghuleela Mall, fast delivery Thakur Village, Trackon courier Kandivali West, same day courier Kandivali East",
    content: "Kandivali residents and businesses choose Trackon Courier for reliable shipping. We cover Thakur Village, Mahavir Nagar, Raghuleela Mall area, and all Kandivali localities.",
    features: ["Residential area coverage", "Mall pickups", "Student courier rates", "Same-day Mumbai delivery", "Pan India express", "Secure packaging"],
    nearbyAreas: ["Malad", "Borivali", "Dahisar", "Thakur Village", "Charkop"],
    latitude: 19.2047,
    longitude: 72.8567,
    pincode: "400067",
    landmarks: ["Raghuleela Mall", "Thakur Village", "Kandivali Railway Station"],
    pickupTime: "75-120 minutes",
    isMumbaiArea: true
  },
  "jogeshwari": {
    name: "Jogeshwari",
    description: "Affordable Courier Services in Jogeshwari, Mumbai",
    metaDescription: "Best courier services in Jogeshwari East & West. Trackon Courier offers same-day delivery, express shipping. Near Jogeshwari Station. Call 8097512951.",
    keywords: "courier services in Jogeshwari, courier near Jogeshwari Station, fast delivery Jogeshwari East, Trackon courier Jogeshwari West",
    content: "Jogeshwari's preferred courier service - Trackon Courier. We provide affordable and reliable courier services in Jogeshwari East, Jogeshwari West, and near the railway station.",
    features: ["Station area pickup", "Affordable pricing", "Same-day delivery", "Small business specials", "Bulk discounts", "COD available"],
    nearbyAreas: ["Andheri", "Goregaon", "Oshiwara", "Lokhandwala"],
    latitude: 19.1362,
    longitude: 72.8498,
    pincode: "400060"
  },
  "saki-naka": {
    name: "Saki Naka",
    description: "Industrial Courier Services in Saki Naka, Mumbai",
    metaDescription: "Courier services in Saki Naka, Mumbai. Trackon Courier for industrial & commercial shipping. Near MTNL, LBS Road. Call 8097512951.",
    keywords: "courier services in Saki Naka, courier near MTNL Saki Naka, fast delivery LBS Road, Trackon courier Saki Naka, industrial courier Mumbai",
    content: "Saki Naka's industrial hub trusts Trackon Courier for commercial shipping needs. We specialize in B2B logistics, bulk shipments, and regular pickup schedules for businesses.",
    features: ["Industrial area service", "B2B logistics", "Bulk shipping", "Regular pickup schedules", "Warehouse delivery", "Commercial rates"],
    nearbyAreas: ["Andheri East", "Marol", "Kurla", "Powai", "Chandivali"],
    latitude: 19.0895,
    longitude: 72.8882,
    pincode: "400072"
  },
  "marol": {
    name: "Marol",
    description: "Corporate Courier Services in Marol, Mumbai",
    metaDescription: "Courier services in Marol, Andheri East. Trackon Courier for IT parks, MIDC area. Same-day business delivery. Call 8097512951.",
    keywords: "courier services in Marol, courier near MIDC Marol, fast delivery Marol Naka, Trackon courier IT Park, business courier Marol",
    content: "Marol's IT and industrial corridor relies on Trackon Courier for professional shipping services. We serve MIDC, IT parks, and commercial establishments with priority handling.",
    features: ["IT Park specialization", "Corporate accounts", "Same-day business delivery", "Secure document courier", "International shipping", "Timed deliveries"],
    nearbyAreas: ["Andheri East", "Saki Naka", "Chakala", "Powai", "SEEPZ"],
    latitude: 19.1091,
    longitude: 72.8796,
    pincode: "400059"
  },
  "kapaswadi": {
    name: "Kapaswadi",
    description: "Local Courier Services in Kapaswadi, Mumbai",
    metaDescription: "Courier services in Kapaswadi, Andheri. Trackon Courier offers doorstep pickup, same-day delivery. Call 8097512951.",
    keywords: "courier services in Kapaswadi, courier near Kapaswadi, fast delivery Kapaswadi Andheri, Trackon courier Kapaswadi",
    content: "Kapaswadi residents enjoy convenient courier services from Trackon Courier. We provide doorstep pickup and delivery with affordable rates for local and Pan India shipping.",
    features: ["Doorstep pickup", "Local delivery", "Affordable rates", "Same-day service", "Pan India shipping", "Friendly service"],
    nearbyAreas: ["Andheri West", "DN Nagar", "Azad Nagar", "Versova"],
    latitude: 19.1285,
    longitude: 72.8342,
    pincode: "400053"
  },
  "juhu-versova-link-road": {
    name: "Juhu Versova Link Road",
    description: "Courier Services on Juhu Versova Link Road",
    metaDescription: "Courier services on Juhu Versova Link Road. Trackon Courier for fast delivery along Link Road corridor. Call 8097512951.",
    keywords: "courier services Juhu Versova Link Road, courier near Link Road Andheri, fast delivery Link Road, Trackon courier JVLR",
    content: "Businesses and residents along Juhu Versova Link Road trust Trackon Courier for reliable shipping. We cover the entire Link Road corridor with convenient pickup points.",
    features: ["Link Road coverage", "Multiple pickup points", "Same-day delivery", "Commercial service", "Residential pickup", "Express options"],
    nearbyAreas: ["Juhu", "Versova", "Andheri West", "DN Nagar", "Four Bungalows"],
    latitude: 19.1156,
    longitude: 72.8241,
    pincode: "400053"
  },
  "andheri-airport": {
    name: "Andheri Airport",
    description: "Airport Courier Services Near Andheri Airport",
    metaDescription: "Courier services near Andheri Airport, Mumbai. Trackon Courier for urgent airport deliveries, air cargo support. Call 8097512951.",
    keywords: "courier services Andheri Airport, courier near Mumbai Airport, fast delivery airport area, airport courier services, air cargo courier Mumbai",
    content: "Trackon Courier specializes in airport area courier services near Andheri Airport. We offer express pickup and delivery for travelers, businesses, and air cargo requirements.",
    features: ["Airport area coverage", "Express delivery", "Air cargo support", "24/7 availability", "Urgent document courier", "International connections"],
    nearbyAreas: ["Terminal 1", "Terminal 2", "Vile Parle", "Andheri East", "Santacruz"],
    latitude: 19.0896,
    longitude: 72.8656,
    pincode: "400099"
  },
  "airport-terminal-1": {
    name: "Airport Terminal 1",
    description: "Courier Services at Mumbai Airport Terminal 1",
    metaDescription: "Courier services at Mumbai Airport Terminal 1. Trackon Courier for domestic terminal area. Express pickup & delivery. Call 9864251628.",
    keywords: "courier services Terminal 1 Mumbai, courier near domestic airport, fast delivery T1 Mumbai, airport courier Terminal 1",
    content: "Need courier services near Mumbai Airport Terminal 1? Trackon Courier provides express pickup and delivery services for the domestic terminal area and surrounding localities.",
    features: ["Terminal 1 area service", "Domestic flight coordination", "Express pickup", "Document courier", "Parcel holding", "Traveler assistance"],
    nearbyAreas: ["Vile Parle", "Santacruz", "Andheri Airport", "Terminal 2"],
    latitude: 19.0968,
    longitude: 72.8517,
    pincode: "400099"
  },
  "airport-terminal-2": {
    name: "Airport Terminal 2",
    description: "Courier Services at Mumbai Airport Terminal 2",
    metaDescription: "Courier services at Mumbai Airport Terminal 2. Trackon Courier for international terminal. Express international shipping. Call 9864251628.",
    keywords: "courier services Terminal 2 Mumbai, courier near international airport, fast delivery T2 Mumbai, international airport courier",
    content: "Trackon Courier offers premium courier services near Mumbai Airport Terminal 2. Ideal for international travelers and businesses requiring express international shipping coordination.",
    features: ["International terminal service", "Express global shipping", "Customs documentation support", "Premium handling", "24/7 service", "Multi-language support"],
    nearbyAreas: ["Andheri Airport", "Terminal 1", "Sahar", "Vile Parle"],
    latitude: 19.0886,
    longitude: 72.8679,
    pincode: "400099"
  },
  "airport-road": {
    name: "Airport Road",
    description: "Courier Services on Airport Road, Mumbai",
    metaDescription: "Courier services on Airport Road, Mumbai. Trackon Courier for businesses along Airport Road. Same-day delivery. Call 9864251628.",
    keywords: "courier services Airport Road Mumbai, courier near Airport Road Andheri, fast delivery Airport Road, business courier airport area",
    content: "Businesses along Airport Road rely on Trackon Courier for efficient shipping. We serve hotels, offices, and commercial establishments with express pickup and delivery.",
    features: ["Commercial corridor service", "Hotel partnerships", "Business accounts", "Express delivery", "Bulk shipping", "Regular pickups"],
    nearbyAreas: ["Andheri Airport", "Vile Parle", "Santacruz", "Andheri East"],
    latitude: 19.0932,
    longitude: 72.8589,
    pincode: "400099"
  },
  "dadar": {
    name: "Dadar",
    description: "Reliable Courier Services in Dadar, Mumbai",
    metaDescription: "Best courier services in Dadar East & West. Trackon Courier offers same-day delivery near Dadar Station, Shivaji Park. Call 9864251628.",
    keywords: "courier services in Dadar, courier near Dadar Station, fast delivery Shivaji Park, Trackon courier Dadar West, same day courier Dadar East",
    content: "Dadar's central location makes it a key hub for Trackon Courier services. We cover Dadar East, Dadar West, Shivaji Park, and the station area with reliable daily pickups.",
    features: ["Central Mumbai hub", "Station area service", "Market area coverage", "Same-day delivery", "Business corridor", "Flower market specials"],
    nearbyAreas: ["Prabhadevi", "Matunga", "Mahim", "Shivaji Park", "Parel"],
    latitude: 19.0176,
    longitude: 72.8562,
    pincode: "400014"
  },
  "cst": {
    name: "CST",
    description: "Courier Services Near CST Station, Mumbai",
    metaDescription: "Courier services near CST, Mumbai. Trackon Courier for Fort area, Ballard Estate. Express document courier. Call 9864251628.",
    keywords: "courier services near CST, courier Fort Mumbai, fast delivery Ballard Estate, Trackon courier VT Station, business courier South Mumbai",
    content: "Trackon Courier serves the business heart of Mumbai near CST (VT Station). We specialize in document courier, legal deliveries, and corporate shipping for Fort and Ballard Estate.",
    features: ["Business district service", "Legal document courier", "Corporate accounts", "Express delivery", "Fort area coverage", "Secure handling"],
    nearbyAreas: ["Fort", "Ballard Estate", "Churchgate", "Marine Lines", "Colaba"],
    latitude: 18.9398,
    longitude: 72.8355,
    pincode: "400001"
  },
  "delhi": {
    name: "Delhi NCR",
    description: "Express Courier Services to Delhi NCR",
    metaDescription: "Fast courier services from Mumbai to Delhi NCR. Trackon Courier offers express delivery to Delhi, Gurgaon, Noida. Call 9864251628.",
    keywords: "courier services to Delhi, Mumbai to Delhi courier, fast delivery Delhi NCR, Trackon courier Delhi, express shipping Gurgaon Noida",
    content: "Send parcels from Mumbai to Delhi NCR with Trackon Courier. We offer express 24-48 hour delivery to Delhi, Gurgaon, Noida, and the entire NCR region.",
    features: ["24-48 hour delivery", "NCR-wide coverage", "Corporate logistics", "E-commerce shipping", "Bulk discounts", "Track & trace"],
    nearbyAreas: ["Gurgaon", "Noida", "Faridabad", "Ghaziabad", "New Delhi"],
    latitude: 28.6139,
    longitude: 77.2090,
    pincode: "110001"
  },
  "bengaluru": {
    name: "Bengaluru",
    description: "Express Courier Services to Bengaluru",
    metaDescription: "Fast courier from Mumbai to Bengaluru. Trackon Courier offers express delivery to Bangalore. Call 9864251628 for same-day dispatch.",
    keywords: "courier services to Bengaluru, Mumbai to Bangalore courier, fast delivery Bengaluru, Trackon courier Bangalore, express shipping Karnataka",
    content: "Trackon Courier connects Mumbai to Bengaluru with express delivery services. Ideal for IT businesses, e-commerce, and personal shipments to Karnataka's capital.",
    features: ["Express to Bangalore", "IT corridor service", "E-commerce logistics", "48-hour delivery", "Tech hub coverage", "Secure packaging"],
    nearbyAreas: ["Electronic City", "Whitefield", "Koramangala", "Indiranagar", "MG Road"],
    latitude: 12.9716,
    longitude: 77.5946,
    pincode: "560001"
  },
  "chennai": {
    name: "Chennai",
    description: "Express Courier Services to Chennai",
    metaDescription: "Fast courier from Mumbai to Chennai. Trackon Courier offers express delivery to Tamil Nadu. Call 9864251628.",
    keywords: "courier services to Chennai, Mumbai to Chennai courier, fast delivery Tamil Nadu, Trackon courier Chennai, express shipping Chennai",
    content: "Trackon Courier provides reliable Mumbai to Chennai shipping. We serve automotive, manufacturing, and IT sectors with express delivery options.",
    features: ["48-72 hour delivery", "Industrial shipping", "Automotive sector", "Port connectivity", "Bulk cargo", "Temperature controlled"],
    nearbyAreas: ["T Nagar", "Anna Nagar", "Adyar", "Velachery", "OMR"],
    latitude: 13.0827,
    longitude: 80.2707,
    pincode: "600001"
  },
  "kolkata": {
    name: "Kolkata",
    description: "Express Courier Services to Kolkata",
    metaDescription: "Fast courier from Mumbai to Kolkata. Trackon Courier offers express delivery to West Bengal. Call 9864251628.",
    keywords: "courier services to Kolkata, Mumbai to Kolkata courier, fast delivery West Bengal, Trackon courier Kolkata",
    content: "Connect Mumbai to Kolkata with Trackon Courier. We offer reliable express shipping to West Bengal's capital and surrounding areas.",
    features: ["Express delivery", "Eastern India hub", "Manufacturing logistics", "Document courier", "E-commerce shipping", "Festival season specials"],
    nearbyAreas: ["Salt Lake", "Park Street", "Howrah", "New Town", "Rajarhat"],
    latitude: 22.5726,
    longitude: 88.3639,
    pincode: "700001"
  },
  "hyderabad": {
    name: "Hyderabad",
    description: "Express Courier Services to Hyderabad",
    metaDescription: "Fast courier from Mumbai to Hyderabad. Trackon Courier offers express delivery to Telangana. Call 9864251628.",
    keywords: "courier services to Hyderabad, Mumbai to Hyderabad courier, fast delivery Telangana, Trackon courier Hyderabad, HITEC City courier",
    content: "Trackon Courier connects Mumbai to Hyderabad with express shipping. We serve HITEC City, Gachibowli, and the entire Hyderabad metropolitan area.",
    features: ["IT corridor service", "48-hour express", "Pharma shipping", "Tech sector logistics", "Bulk shipping", "Return logistics"],
    nearbyAreas: ["HITEC City", "Gachibowli", "Banjara Hills", "Jubilee Hills", "Secunderabad"],
    latitude: 17.3850,
    longitude: 78.4867,
    pincode: "500001"
  },
  "pune": {
    name: "Pune",
    description: "Express Courier Services to Pune",
    metaDescription: "Fast courier from Mumbai to Pune. Trackon Courier offers same-day and express delivery to Pune. Call 9864251628.",
    keywords: "courier services to Pune, Mumbai to Pune courier, fast delivery Pune, Trackon courier Pune, express shipping Maharashtra",
    content: "Mumbai to Pune is our fastest route! Trackon Courier offers same-day and express delivery between Mumbai and Pune, serving IT parks and industrial areas.",
    features: ["Same-day available", "IT Park coverage", "Industrial logistics", "4-6 hour express", "Student specials", "Regular routes"],
    nearbyAreas: ["Hinjewadi", "Kothrud", "Viman Nagar", "Magarpatta", "Koregaon Park"],
    latitude: 18.5204,
    longitude: 73.8567,
    pincode: "411001"
  },
  "ahmedabad": {
    name: "Ahmedabad",
    description: "Express Courier Services to Ahmedabad",
    metaDescription: "Fast courier from Mumbai to Ahmedabad. Trackon Courier offers express delivery to Gujarat. Call 9864251628.",
    keywords: "courier services to Ahmedabad, Mumbai to Ahmedabad courier, fast delivery Gujarat, Trackon courier Ahmedabad",
    content: "Trackon Courier provides express shipping from Mumbai to Ahmedabad. We serve textile, diamond, and manufacturing industries with reliable delivery.",
    features: ["Textile industry specials", "Diamond trade courier", "Express 24-48 hours", "Industrial areas", "GIDC coverage", "Bulk shipping"],
    nearbyAreas: ["SG Highway", "Prahlad Nagar", "Satellite", "Navrangpura", "Vastrapur"],
    latitude: 23.0225,
    longitude: 72.5714,
    pincode: "380001"
  },
  "rajasthan": {
    name: "Rajasthan",
    description: "Courier Services to Rajasthan",
    metaDescription: "Courier services from Mumbai to Rajasthan. Trackon Courier delivers to Jaipur, Jodhpur, Udaipur. Call 9864251628.",
    keywords: "courier services to Rajasthan, Mumbai to Jaipur courier, fast delivery Rajasthan, Trackon courier Jodhpur Udaipur",
    content: "Trackon Courier connects Mumbai to all major cities in Rajasthan including Jaipur, Jodhpur, Udaipur, and Ajmer with reliable express shipping.",
    features: ["State-wide coverage", "Tourist areas", "Handicraft shipping", "48-72 hour delivery", "Fragile handling", "Insurance options"],
    nearbyAreas: ["Jaipur", "Jodhpur", "Udaipur", "Ajmer", "Kota"],
    latitude: 26.9124,
    longitude: 75.7873,
    pincode: "302001"
  },
  "valsad": {
    name: "Valsad",
    description: "Express Courier Services to Valsad",
    metaDescription: "Fast courier from Mumbai to Valsad, Gujarat. Trackon Courier offers quick delivery. Call 9864251628.",
    keywords: "courier services to Valsad, Mumbai to Valsad courier, fast delivery Valsad Gujarat, Trackon courier Valsad",
    content: "Trackon Courier provides quick shipping from Mumbai to Valsad. Being close to Mumbai, we offer same-day and next-day delivery options.",
    features: ["Next-day delivery", "Close proximity service", "Industrial shipping", "Agricultural products", "Affordable rates", "Regular routes"],
    nearbyAreas: ["Vapi", "Silvassa", "Navsari", "Surat", "Daman"],
    latitude: 20.5992,
    longitude: 72.9342,
    pincode: "396001"
  },
  "south-india": {
    name: "South India",
    description: "Courier Services to South India",
    metaDescription: "Courier services from Mumbai to South India. Trackon Courier delivers to all southern states. Call 9864251628.",
    keywords: "courier services to South India, Mumbai to South India courier, fast delivery Karnataka Kerala Tamil Nadu, Trackon courier South",
    content: "Trackon Courier connects Mumbai to all of South India including Karnataka, Kerala, Tamil Nadu, Andhra Pradesh, and Telangana with express delivery options.",
    features: ["Multi-state coverage", "Express shipping", "IT sector logistics", "Manufacturing support", "48-72 hour delivery", "Regional hubs"],
    nearbyAreas: ["Bengaluru", "Chennai", "Hyderabad", "Kochi", "Coimbatore"],
    latitude: 12.9716,
    longitude: 77.5946,
    pincode: "560001"
  },
  "goa": {
    name: "Goa",
    description: "Express Courier Services to Goa",
    metaDescription: "Fast courier from Mumbai to Goa. Trackon Courier offers express delivery to Panaji, Margao. Call 9864251628.",
    keywords: "courier services to Goa, Mumbai to Goa courier, fast delivery Panaji, Trackon courier Margao, express shipping Goa",
    content: "Trackon Courier provides fast shipping from Mumbai to Goa. We serve Panaji, Margao, and tourist destinations with reliable express delivery.",
    features: ["Tourist area service", "Hotel deliveries", "Express 24-48 hours", "Festival shipments", "Beach area coverage", "Same-day dispatch"],
    nearbyAreas: ["Panaji", "Margao", "Vasco", "Calangute", "Mapusa"],
    latitude: 15.2993,
    longitude: 74.1240,
    pincode: "403001"
  },
  "lucknow": {
    name: "Lucknow",
    description: "Express Courier Services to Lucknow",
    metaDescription: "Fast courier from Mumbai to Lucknow. Trackon Courier offers express delivery to UP. Call 9864251628.",
    keywords: "courier services to Lucknow, Mumbai to Lucknow courier, fast delivery Uttar Pradesh, Trackon courier Lucknow",
    content: "Trackon Courier connects Mumbai to Lucknow with express delivery. We serve the capital of Uttar Pradesh and surrounding areas with reliable shipping.",
    features: ["UP capital coverage", "Express 48-72 hours", "Government courier", "Bulk shipping", "E-commerce logistics", "Return services"],
    nearbyAreas: ["Kanpur", "Varanasi", "Allahabad", "Agra", "Noida"],
    latitude: 26.8467,
    longitude: 80.9462,
    pincode: "226001"
  },
  "chandigarh": {
    name: "Chandigarh",
    description: "Express Courier Services to Chandigarh",
    metaDescription: "Fast courier from Mumbai to Chandigarh. Trackon Courier offers express delivery to Punjab & Haryana. Call 9864251628.",
    keywords: "courier services to Chandigarh, Mumbai to Chandigarh courier, fast delivery Punjab, Trackon courier Chandigarh",
    content: "Trackon Courier provides express shipping from Mumbai to Chandigarh and the tri-city area including Mohali and Panchkula.",
    features: ["Tri-city coverage", "IT sector service", "Express delivery", "Corporate logistics", "Student courier", "Bulk discounts"],
    nearbyAreas: ["Mohali", "Panchkula", "Zirakpur", "Ludhiana", "Amritsar"],
    latitude: 30.7333,
    longitude: 76.7794,
    pincode: "160001"
  },
  "indore": {
    name: "Indore",
    description: "Express Courier Services to Indore",
    metaDescription: "Fast courier from Mumbai to Indore. Trackon Courier offers express delivery to Madhya Pradesh. Call 9864251628.",
    keywords: "courier services to Indore, Mumbai to Indore courier, fast delivery MP, Trackon courier Indore",
    content: "Trackon Courier connects Mumbai to Indore, the commercial capital of Madhya Pradesh. We serve businesses with reliable express shipping.",
    features: ["Commercial hub service", "48-hour delivery", "Industrial logistics", "IT Park coverage", "Textile shipping", "Regular routes"],
    nearbyAreas: ["Bhopal", "Ujjain", "Dewas", "Ratlam", "Dhar"],
    latitude: 22.7196,
    longitude: 75.8577,
    pincode: "452001"
  },
  "nagpur": {
    name: "Nagpur",
    description: "Express Courier Services to Nagpur",
    metaDescription: "Fast courier from Mumbai to Nagpur. Trackon Courier offers express delivery to Vidarbha. Call 9864251628.",
    keywords: "courier services to Nagpur, Mumbai to Nagpur courier, fast delivery Vidarbha, Trackon courier Nagpur",
    content: "Trackon Courier provides express shipping from Mumbai to Nagpur and the Vidarbha region. Central India hub for reliable deliveries.",
    features: ["Central India hub", "Vidarbha coverage", "Express 24-48 hours", "Orange trade specials", "Industrial shipping", "Return logistics"],
    nearbyAreas: ["Wardha", "Amravati", "Chandrapur", "Gondia", "Yavatmal"],
    latitude: 21.1458,
    longitude: 79.0882,
    pincode: "440001"
  },
  "chandivali": {
    name: "Chandivali",
    description: "Fast Courier Services in Chandivali, Mumbai",
    metaDescription: "Trackon Courier Chandivali - Best courier services in Chandivali, Powai. Same-day delivery, express shipping. Call 9864251628.",
    keywords: "courier services in Chandivali, courier near Chandivali, fast delivery Chandivali Mumbai, Trackon courier Chandivali, same day courier Powai",
    content: "Trackon Courier provides reliable courier services in Chandivali covering residential complexes, IT parks, and commercial areas. Our experienced delivery partners ensure your parcels reach safely.",
    features: ["Same-day delivery within Mumbai", "Residential complex service", "IT Park coverage", "E-commerce logistics", "Document courier", "Secure packaging"],
    nearbyAreas: ["Powai", "Saki Naka", "Andheri East", "Vikhroli", "Hiranandani"],
    latitude: 19.0990,
    longitude: 72.8895,
    pincode: "400072"
  },
  "vikhroli": {
    name: "Vikhroli",
    description: "Reliable Courier Services in Vikhroli, Mumbai",
    metaDescription: "Trackon Courier Vikhroli - Best courier services in Vikhroli East & West. Same-day delivery, express shipping. Call 9864251628.",
    keywords: "courier services in Vikhroli, courier near Vikhroli, fast delivery Vikhroli Mumbai, Trackon courier Vikhroli, same day courier Vikhroli",
    content: "Trackon Courier is your trusted partner for courier services in Vikhroli. We cover Vikhroli East, Vikhroli West, industrial areas, and residential zones with reliable same-day delivery.",
    features: ["Same-day local delivery", "Industrial area service", "Corporate pickups", "Secure handling", "Real-time tracking", "Affordable rates"],
    nearbyAreas: ["Vikhroli East", "Vikhroli West", "Kanjurmarg", "Bhandup", "Powai"],
    latitude: 19.1120,
    longitude: 72.9260,
    pincode: "400079"
  },
  "vikhroli-east": {
    name: "Vikhroli East",
    description: "Express Courier Services in Vikhroli East, Mumbai",
    metaDescription: "Fast courier services in Vikhroli East, Mumbai. Trackon Courier near Godrej, LBS Marg. Same-day delivery. Call 9864251628.",
    keywords: "courier services in Vikhroli East, courier near Godrej Vikhroli, fast delivery LBS Marg, Trackon courier Vikhroli East",
    content: "Vikhroli East businesses and residents trust Trackon Courier for reliable shipping. We cover Godrej complex, LBS Marg, and all industrial and residential areas with express delivery.",
    features: ["Godrej area coverage", "Industrial logistics", "Corporate accounts", "Same-day express", "Bulk shipping", "Regular pickups"],
    nearbyAreas: ["Vikhroli West", "Vikhroli", "Kanjurmarg", "Powai", "Bhandup"],
    latitude: 19.1150,
    longitude: 72.9310,
    pincode: "400079"
  },
  "vikhroli-west": {
    name: "Vikhroli West",
    description: "Premium Courier Services in Vikhroli West, Mumbai",
    metaDescription: "Courier services in Vikhroli West, Mumbai. Trackon Courier offers same-day delivery, doorstep pickup. Call 9864251628.",
    keywords: "courier services in Vikhroli West, courier near Vikhroli West, fast delivery Vikhroli West Mumbai, Trackon courier Vikhroli West",
    content: "Trackon Courier provides premium courier services in Vikhroli West. We serve residential societies, commercial establishments, and connect you to Pan India destinations.",
    features: ["Residential area coverage", "Commercial service", "Same-day delivery", "Doorstep pickup", "Affordable rates", "Weekend pickups"],
    nearbyAreas: ["Vikhroli East", "Vikhroli", "Ghatkopar", "Kanjurmarg", "Powai"],
    latitude: 19.1100,
    longitude: 72.9200,
    pincode: "400083"
  },
  "seepz": {
    name: "SEEPZ",
    description: "Corporate Courier Services in SEEPZ, Mumbai",
    metaDescription: "Courier services in SEEPZ, Andheri East. Trackon Courier for SEZ, export-import courier. Same-day business delivery. Call 9864251628.",
    keywords: "courier services in SEEPZ, courier near SEEPZ Mumbai, fast delivery SEZ Andheri, Trackon courier SEEPZ, export import courier",
    content: "SEEPZ's Special Economic Zone relies on Trackon Courier for professional shipping services. We serve export-import businesses, IT companies, and commercial establishments with priority handling.",
    features: ["SEZ specialization", "Export-Import courier", "Corporate accounts", "Same-day business delivery", "International shipping", "Customs support"],
    nearbyAreas: ["Andheri East", "Marol", "MIDC", "Chakala", "Saki Naka"],
    latitude: 19.1180,
    longitude: 72.8750,
    pincode: "400096"
  },
  "mahakali": {
    name: "Mahakali",
    description: "Express Courier Services in Mahakali, Mumbai",
    metaDescription: "Courier services in Mahakali, Andheri East. Trackon Courier for Mahakali Caves Road. Same-day delivery. Call 9864251628.",
    keywords: "courier services in Mahakali, courier near Mahakali Caves Road, fast delivery Mahakali Mumbai, Trackon courier Mahakali",
    content: "Trackon Courier provides express courier services in Mahakali area. We cover Mahakali Caves Road, corporate offices, and residential areas with reliable same-day delivery.",
    features: ["Corporate corridor service", "Caves Road coverage", "Same-day express", "Business accounts", "Document courier", "Secure handling"],
    nearbyAreas: ["Andheri East", "SEEPZ", "Marol", "Chakala", "MIDC"],
    latitude: 19.1140,
    longitude: 72.8680,
    pincode: "400093"
  },
  "shanti-nagar": {
    name: "Shanti Nagar",
    description: "Local Courier Services in Shanti Nagar, Mumbai",
    metaDescription: "Courier services in Shanti Nagar, Mumbai. Trackon Courier offers doorstep pickup, same-day delivery. Call 9864251628.",
    keywords: "courier services in Shanti Nagar, courier near Shanti Nagar, fast delivery Shanti Nagar Mumbai, Trackon courier Shanti Nagar",
    content: "Shanti Nagar residents enjoy convenient courier services from Trackon Courier. We provide doorstep pickup and delivery with affordable rates for local and Pan India shipping.",
    features: ["Doorstep pickup", "Local delivery", "Affordable rates", "Same-day service", "Pan India shipping", "Friendly service"],
    nearbyAreas: ["Andheri", "Jogeshwari", "Goregaon", "Malad", "Kandivali"],
    latitude: 19.1350,
    longitude: 72.8450,
    pincode: "400053"
  },
  "lokhandwala": {
    name: "Lokhandwala",
    description: "Premium Courier Services in Lokhandwala, Mumbai",
    metaDescription: "Courier services in Lokhandwala, Andheri West. Trackon Courier for Lokhandwala Complex. Same-day delivery. Call 9864251628.",
    keywords: "courier services in Lokhandwala, courier near Lokhandwala Complex, fast delivery Lokhandwala Andheri, Trackon courier Lokhandwala",
    content: "Trackon Courier is the preferred courier service in Lokhandwala. We cover Lokhandwala Complex, residential towers, and commercial establishments with premium handling.",
    features: ["Complex-wide coverage", "Premium residential service", "Same-day delivery", "Secure packaging", "Real-time tracking", "Weekend pickups"],
    nearbyAreas: ["Andheri West", "Versova", "Oshiwara", "DN Nagar", "Four Bungalows"],
    latitude: 19.1400,
    longitude: 72.8280,
    pincode: "400053"
  },
  "oshiwara": {
    name: "Oshiwara",
    description: "Fast Courier Services in Oshiwara, Mumbai",
    metaDescription: "Courier services in Oshiwara, Andheri West. Trackon Courier offers fast delivery, doorstep pickup. Call 9864251628.",
    keywords: "courier services in Oshiwara, courier near Oshiwara, fast delivery Oshiwara Andheri, Trackon courier Oshiwara",
    content: "Oshiwara residents trust Trackon Courier for all their shipping needs. We serve the entire Oshiwara area with convenient pickup and delivery services.",
    features: ["Residential coverage", "Commercial service", "Same-day delivery", "Affordable rates", "E-commerce returns", "Regular pickups"],
    nearbyAreas: ["Lokhandwala", "Andheri West", "Goregaon West", "Jogeshwari", "Versova"],
    latitude: 19.1480,
    longitude: 72.8350,
    pincode: "400053"
  },
  "midc": {
    name: "MIDC",
    description: "Industrial Courier Services in MIDC, Mumbai",
    metaDescription: "Courier services in MIDC, Andheri. Trackon Courier for industrial & commercial shipping. Same-day delivery. Call 9864251628.",
    keywords: "courier services in MIDC, courier near MIDC Andheri, fast delivery MIDC Mumbai, Trackon courier MIDC, industrial courier",
    content: "MIDC's industrial hub trusts Trackon Courier for commercial shipping needs. We specialize in B2B logistics, bulk shipments, and regular pickup schedules for manufacturing businesses.",
    features: ["Industrial area service", "B2B logistics", "Bulk shipping", "Regular pickup schedules", "Warehouse delivery", "Commercial rates"],
    nearbyAreas: ["Andheri East", "Marol", "SEEPZ", "Chakala", "Saki Naka"],
    latitude: 19.1130,
    longitude: 72.8700,
    pincode: "400093"
  },
  "vasai": {
    name: "Vasai",
    description: "Express Courier Services in Vasai, Mumbai",
    metaDescription: "Courier services in Vasai, Mumbai. Trackon Courier offers express delivery, doorstep pickup. Call 9864251628.",
    keywords: "courier services in Vasai, courier near Vasai, fast delivery Vasai Mumbai, Trackon courier Vasai, same day courier Vasai",
    content: "Trackon Courier provides reliable courier services in Vasai covering Vasai Road, Vasai East, Vasai West, and surrounding areas. We connect you to Mumbai and Pan India destinations.",
    features: ["Same-day dispatch", "Suburban coverage", "Residential service", "Commercial logistics", "Affordable rates", "Regular routes"],
    nearbyAreas: ["Virar", "Nalasopara", "Mira Road", "Bhayander", "Naigaon"],
    latitude: 19.3919,
    longitude: 72.8397,
    pincode: "401202"
  },
  "virar": {
    name: "Virar",
    description: "Reliable Courier Services in Virar, Mumbai",
    metaDescription: "Courier services in Virar, Mumbai. Trackon Courier offers same-day delivery, express shipping. Call 9864251628.",
    keywords: "courier services in Virar, courier near Virar, fast delivery Virar Mumbai, Trackon courier Virar, same day courier Virar",
    content: "Virar residents and businesses choose Trackon Courier for reliable shipping. We cover Virar East, Virar West, and connect you to Mumbai and all India destinations.",
    features: ["Suburban express", "Residential coverage", "Commercial service", "Same-day Mumbai delivery", "Pan India shipping", "Affordable rates"],
    nearbyAreas: ["Vasai", "Nalasopara", "Arnala", "Nallasopara", "Bolinj"],
    latitude: 19.4559,
    longitude: 72.8111,
    pincode: "401303"
  },
  "nalasopara": {
    name: "Nalasopara",
    description: "Fast Courier Services in Nalasopara, Mumbai",
    metaDescription: "Courier services in Nalasopara, Mumbai. Trackon Courier offers fast delivery, doorstep pickup. Call 9864251628.",
    keywords: "courier services in Nalasopara, courier near Nalasopara, fast delivery Nalasopara Mumbai, Trackon courier Nalasopara",
    content: "Trackon Courier provides fast courier services in Nalasopara covering Nalasopara East, Nalasopara West, and surrounding areas. Quick connect to Mumbai and Pan India.",
    features: ["Suburban coverage", "Same-day dispatch", "Residential areas", "Commercial service", "Affordable pricing", "Regular routes"],
    nearbyAreas: ["Vasai", "Virar", "Mira Road", "Bhayander", "Achole"],
    latitude: 19.4177,
    longitude: 72.8242,
    pincode: "401209"
  }
};

const AreaDetail = () => {
  const { slug, areaSlug } = useParams<{ slug?: string; areaSlug?: string }>();
  
  // Extract area slug - handle both /area/:slug and /areas/courier-service-in-:slug formats
  const extractedSlug = slug || (areaSlug?.replace('courier-service-in-', '') || '');
  const area = extractedSlug ? areasData[extractedSlug] : null;

  useEffect(() => {
    if (area) {
      // Update document title
      document.title = `Courier Service in ${area.name}, Mumbai | Same Day Pickup – Trackon Courier`;

      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", area.metaDescription);
      }

      // Update meta keywords
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute("content", area.keywords);
      } else {
        const keywords = document.createElement("meta");
        keywords.name = "keywords";
        keywords.content = area.keywords;
        document.head.appendChild(keywords);
      }

      // Update GEO meta tags
      const updateOrCreateMeta = (name: string, content: string) => {
        let meta = document.querySelector(`meta[name="${name}"]`);
        if (meta) {
          meta.setAttribute("content", content);
        } else {
          meta = document.createElement("meta");
          meta.setAttribute("name", name);
          meta.setAttribute("content", content);
          document.head.appendChild(meta);
        }
      };

      updateOrCreateMeta("geo.region", "IN-MH");
      updateOrCreateMeta("geo.placename", `${area.name}, Mumbai, Maharashtra`);
      updateOrCreateMeta("geo.position", `${area.latitude};${area.longitude}`);
      updateOrCreateMeta("ICBM", `${area.latitude}, ${area.longitude}`);

      // Add/Update JSON-LD structured data
      const existingScript = document.querySelector('script[data-area-schema="true"]');
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-area-schema", "true");
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `Trackon Courier - ${area.name}`,
        "description": area.description,
        "telephone": "+91-8097512951",
        "email": "sonacourierservices@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": area.name,
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "postalCode": area.pincode,
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": area.latitude,
          "longitude": area.longitude
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        },
        "priceRange": "$$",
        "areaServed": {
          "@type": "Place",
          "name": area.name
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "500"
        }
      });
      document.head.appendChild(script);

      // Scroll to top
      window.scrollTo(0, 0);
    }

    return () => {
      const areaScript = document.querySelector('script[data-area-schema="true"]');
      if (areaScript) {
        areaScript.remove();
      }
    };
  }, [area]);

  if (!area) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Area Not Found</h1>
            <Link to="/" className="text-accent hover:underline">
              Return to Home
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-hero-gradient py-16 md:py-24">
          <div className="container">
            <Link 
              to="/#areas" 
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Areas</span>
            </Link>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-accent font-semibold">{area.name}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
                Courier Service in {area.name}, Mumbai
              </h1>
              <p className="text-lg text-primary-foreground/90 mb-6">
                {area.description}. Fast pickup within 1-2 hours, same-day delivery across Mumbai, and express shipping to all India destinations. Call 8097512951 for instant service.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:8097512951">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
                    <Phone className="w-5 h-5" />
                    Call 8097512951
                  </Button>
                </a>
                <a 
                  href={`https://wa.me/918097512951?text=Hi, I need courier services in ${area.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Enquiry
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <article className="bg-card rounded-2xl p-6 md:p-8 shadow-card">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    About Our Courier Services in {area.name}
                  </h2>
                  
                  {/* HQ Reference for Mumbai Areas */}
                  {area.isMumbaiArea && slug !== 'andheri-west' && (
                    <div className="flex items-start gap-3 p-4 bg-accent/10 rounded-xl mb-6">
                      <Building2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <p className="text-foreground">
                        <strong>Based in Andheri West</strong>, we provide fast courier pickup and delivery in {area.name} and nearby locations. 
                        {area.pickupTime && <span> Estimated pickup time: <strong>{area.pickupTime}</strong>.</span>}
                      </p>
                    </div>
                  )}
                  
                  <p className="text-muted-foreground mb-4">
                    {area.content}
                  </p>
                  
                  {/* Landmarks Section */}
                  {area.landmarks && area.landmarks.length > 0 && (
                    <div className="mb-4">
                      <p className="text-muted-foreground">
                        <strong>Key landmarks we serve:</strong> {area.landmarks.join(', ')}.
                      </p>
                    </div>
                  )}
                  
                  <p className="text-muted-foreground">
                    Whether you need same-day delivery within Mumbai, express shipping to Pan India destinations, or 
                    international courier services, Trackon Courier in {area.name} has you covered. 
                    Call <a href="tel:8097512951" className="text-accent font-semibold hover:underline">8097512951</a> for 
                    instant quotes and doorstep pickup.
                  </p>
                </article>

                {/* Services Section */}
                <article className="bg-card rounded-2xl p-6 md:p-8 shadow-card">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Services Available in {area.name}
                  </h2>
                  <ul className="grid sm:grid-cols-2 gap-4 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <Link to="/same-day-courier-andheri-west" className="text-foreground hover:text-accent transition-colors">Same Day Courier Service</Link>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <Link to="/express-courier-mumbai" className="text-foreground hover:text-accent transition-colors">Express Courier Service</Link>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <Link to="/pan-india-courier" className="text-foreground hover:text-accent transition-colors">Pan India Courier</Link>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <Link to="/international-courier-mumbai" className="text-foreground hover:text-accent transition-colors">International Courier</Link>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Secure Document Courier</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <Link to="/airport-courier-mumbai" className="text-foreground hover:text-accent transition-colors">Airport Courier (T1 & T2)</Link>
                    </li>
                  </ul>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {area.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </article>

                {/* Why Choose Section */}
                <article className="bg-card rounded-2xl p-6 md:p-8 shadow-card">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Why Choose Trackon Courier in {area.name}
                  </h2>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-foreground">Fast Pickup (1-2 hours)</span>
                        <p className="text-muted-foreground text-sm">Quick doorstep pickup available throughout {area.name}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-foreground">Local Area Familiarity</span>
                        <p className="text-muted-foreground text-sm">Our delivery partners know every lane in {area.name}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-foreground">Affordable Rates</span>
                        <p className="text-muted-foreground text-sm">Competitive pricing for all courier services</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-foreground">Real-Time Tracking</span>
                        <p className="text-muted-foreground text-sm">Track your shipment status anytime</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-foreground">Secure Handling</span>
                        <p className="text-muted-foreground text-sm">Safe packaging and careful handling of all items</p>
                      </div>
                    </li>
                  </ul>
                </article>

                {/* Nearby Areas Section */}
                <article className="bg-card rounded-2xl p-6 md:p-8 shadow-card">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Areas Covered Near {area.name}
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Besides {area.name}, Trackon Courier also provides courier services in these nearby areas:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {area.nearbyAreas.slice(0, 3).map((nearby, index) => {
                      const nearbySlug = nearby.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
                      return (
                        <Link 
                          key={index}
                          to={`/areas/courier-service-in-${nearbySlug}`}
                          className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm hover:bg-accent/20 transition-colors"
                        >
                          Courier in {nearby}
                        </Link>
                      );
                    })}
                    {area.nearbyAreas.slice(3).map((nearby, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-secondary text-foreground rounded-full text-sm"
                      >
                        {nearby}
                      </span>
                    ))}
                  </div>
                </article>

                {/* Internal Links Section */}
                <article className="bg-card rounded-2xl p-6 md:p-8 shadow-card">
                  <h3 className="text-xl font-bold text-foreground mb-4">Quick Links</h3>
                  <nav className="grid sm:grid-cols-2 gap-3">
                    <Link to="/" className="text-accent hover:underline flex items-center gap-2">
                      <ArrowLeft className="w-4 h-4" /> Back to Home
                    </Link>
                    <Link to="/courier-service-mumbai" className="text-accent hover:underline">Courier Service in Mumbai</Link>
                    {area.isMumbaiArea && slug !== 'andheri-west' && (
                      <Link to="/areas/courier-service-in-andheri-west" className="text-accent hover:underline font-semibold">
                        Courier Service in Andheri West (HQ)
                      </Link>
                    )}
                    <Link to="/#contact" className="text-accent hover:underline">Contact Trackon Courier</Link>
                    <Link to="/pan-india-courier" className="text-accent hover:underline">Pan India Courier Service</Link>
                    <Link to="/same-day-courier-andheri-west" className="text-accent hover:underline">Same Day Courier</Link>
                  </nav>
                </article>
              </div>

              {/* Sidebar */}
              <aside className="space-y-6">
                <div className="bg-card rounded-2xl p-6 shadow-card sticky top-24">
                  <h3 className="text-xl font-bold text-foreground mb-4">Contact Us</h3>
                  <div className="space-y-4">
                    <a 
                      href="tel:8097512951"
                      className="flex items-center gap-3 p-4 bg-accent/10 rounded-xl hover:bg-accent/20 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                        <Phone className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Call Now</p>
                        <p className="text-accent font-bold">8097512951</p>
                      </div>
                    </a>
                    
                    <a 
                      href={`https://wa.me/918097512951?text=Hi, I need courier services in ${area.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-green-500/10 rounded-xl hover:bg-green-500/20 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">WhatsApp</p>
                        <p className="text-green-600 font-bold">Quick Enquiry</p>
                      </div>
                    </a>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Service Hours</span>
                    </div>
                    <p className="font-semibold text-foreground">24/7 Available</p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-4 h-4 text-accent" />
                      <span className="text-sm text-muted-foreground">Customer Rating</span>
                    </div>
                    <p className="font-semibold text-foreground">4.8/5 (500+ reviews)</p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Local SEO Footer Block */}
        <section className="py-8 bg-secondary">
          <div className="container">
            <p className="text-center text-muted-foreground">
              <strong>Service Area:</strong> {area.name}, Mumbai – {area.pincode} | 
              Serving nearby locations including {area.nearbyAreas.slice(0, 3).join(', ')}
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-accent">
          <div className="container text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-accent-foreground mb-4">
              Need Courier Service in {area.name}?
            </h2>
            <p className="text-accent-foreground/90 mb-6 max-w-2xl mx-auto">
              Get instant quotes and same-day pickup. Trackon Courier Mumbai - Your trusted delivery partner in {area.name} and nearby areas.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:8097512951">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                  <Phone className="w-5 h-5" />
                  Call 8097512951
                </Button>
              </a>
              <a 
                href={`https://wa.me/918097512951?text=Hi, I need courier service in ${area.name}. Please share rates.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10 gap-2">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp for Rates
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
};

export default AreaDetail;