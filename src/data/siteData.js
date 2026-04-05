export const designTokens = {
  heroStyle: "cinematic",
  typography: { heading: "Playfair Display", body: "DM Sans", display: "Playfair Display" },
  effects: { noise: true, glassmorphism: "none", floatingShapes: false, scrollProgress: true, meshGradient: false, gradientBorders: false, cursorGlow: false },
  animationPreset: "dramatic", serviceCardStyle: "overlay", projectGridStyle: "masonry", testimonialStyle: "carousel", statsStyle: "overlay", bgPattern: "none",
  homeSectionOrder: ["hero","marquee","services","portfolio","stats","about","whyChooseUs","testimonials","cta"],
};

const siteData = {
  business: {
    name: "Maness Electronics", legalName: "Maness Electronics", tagline: "Securing What Matters Most",
    description: "Securing What Matters Most",
    phone: "+263 77 285 9077", phoneRaw: "+263772859077", whatsappNumber: "263772859077", email: "info@manesselectronics.co.zw",
    address: "Office 5, First Floor, 39 Robson Manyika, Harare, Zimbabwe", country: "Zimbabwe", city: "Harare",
    rating: 4.8, ratingRounded: 5, reviewCount: 81, established: "2012", yearsExperience: "12+", projectsCompleted: "2000+", employees: "30+",
    coordinates: { lat: -17.83, lng: 31.05 },
    hours: [{ day: "Monday - Friday", time: "8:00 AM - 5:00 PM" }, { day: "Saturday", time: "8:00 AM - 1:00 PM" }, { day: "Sunday", time: "Closed" }],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.05!3d-17.83",
    cookieConsentKey: "maness-electronics-pvt-ltd-consent",
    socialLinks: { facebook: "https://www.facebook.com/manesselectronics/", instagram: "#", linkedin: "#" },
  },
  navbar: { logoImage: null, logoLine1: "Maness", logoLine2: "Electronics" },
  hero: {
    badge: "Harare's Premier Security & Electronics Specialists",
    titleParts: [{ text: "SECURING " }, { text: "WHAT MATTERS", highlight: true }, { text: " MOST." }],
    subtitle: "Securing What Matters Most.",
    ctaPrimary: "Get a Security Assessment", ctaSecondary: "View Our Solutions", trustBadge: "2,000+ Systems Installed",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1920&q=85", alt: "Maness Electronics - professional service" },
      { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=85", alt: "Maness Electronics - professional service" },
      { url: "https://images.unsplash.com/photo-1558002038-1055907df827?w=1920&q=85", alt: "Maness Electronics - professional service" }
    ],
  },
  stats: [
    { number: "2000+", label: "Systems Installed" },
    { number: "12+", label: "Years Experience" },
    { number: "24/7", label: "Monitoring" },
    { number: "100%", label: "Client Retention" }
  ],
  servicesPreview: [
    { title: "CCTV Installation", desc: "High-definition surveillance systems with remote viewing, night vision, and AI-powered motion detection for complete property coverage.", icon: "ShieldCheck" },
    { title: "Access Control", desc: "Biometric, card, and PIN-based access control systems for offices, warehouses, and residential estates.", icon: "Eye" },
    { title: "Alarm Systems", desc: "Wireless and wired alarm systems with 24/7 monitoring response and smartphone integration.", icon: "Lock" },
    { title: "Electric Fencing", desc: "High-voltage perimeter protection with SMS alerts and zone monitoring for maximum deterrence.", icon: "Lightbulb" },
    { title: "Gate Automation", desc: "Sliding and swing gate motors with intercom integration, remote control, and solar backup.", icon: "Buildings" },
    { title: "Fire Detection", desc: "Smoke, heat, and gas detection systems with automatic alert and suppression integration.", icon: "Rocket" }
  ],
  services: {
    heroTitle: "Our Services", heroSubtitle: "Comprehensive solutions delivered with expertise and care.",
    items: [
      { title: "CCTV Installation", slug: "cctv-installation", desc: "High-definition surveillance systems with remote viewing, night vision, and AI-powered motion detection for complete property coverage. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80" },
      { title: "Access Control", slug: "access-control", desc: "Biometric, card, and PIN-based access control systems for offices, warehouses, and residential estates. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" },
      { title: "Alarm Systems", slug: "alarm-systems", desc: "Wireless and wired alarm systems with 24/7 monitoring response and smartphone integration. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80" },
      { title: "Electric Fencing", slug: "electric-fencing", desc: "High-voltage perimeter protection with SMS alerts and zone monitoring for maximum deterrence. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80" },
      { title: "Gate Automation", slug: "gate-automation", desc: "Sliding and swing gate motors with intercom integration, remote control, and solar backup. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" },
      { title: "Fire Detection", slug: "fire-detection", desc: "Smoke, heat, and gas detection systems with automatic alert and suppression integration. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80" }
    ],
  },
  projects: {
    heroTitle: "Our Portfolio", heroSubtitle: "A selection of our finest work.",
    items: [
      { title: "Office CCTV Network", slug: "office--cctv--network", category: "CCTV", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80", images: ["https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80"] },
      { title: "Residential Estate Access", slug: "residential--estate--access", category: "Access Control", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"] },
      { title: "Warehouse Alarm System", slug: "warehouse--alarm--system", category: "Alarm", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80", images: ["https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80"] },
      { title: "Perimeter Electric Fence", slug: "perimeter--electric--fence", category: "Electric Fence", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80", images: ["https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80"] },
      { title: "Automated Gate System", slug: "automated--gate--system", category: "Gate Automation", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"] },
      { title: "Fire Detection Install", slug: "fire--detection--install", category: "Fire Detection", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80", images: ["https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80"] },
      { title: "School Security Upgrade", slug: "school--security--upgrade", category: "CCTV", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80", images: ["https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80"] },
      { title: "Hotel Surveillance", slug: "hotel--surveillance", category: "Access Control", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"] }
    ],
  },
  homeTestimonials: [
    { text: "Outstanding service from Maness Electronics. Professional, thorough, and delivered exactly what was promised. I would not hesitate to recommend them to anyone.", name: "Tendai Moyo", role: "Satisfied Client", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
    { text: "We have been using Maness Electronics for years and the quality has never dropped. Consistent excellence and genuine care for their clients.", name: "Grace Mutasa", role: "Business Owner", rating: 5, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
    { text: "From the initial consultation to final delivery, every step was handled with professionalism. Maness Electronics sets the standard in their industry.", name: "James Karonga", role: "Property Owner", rating: 5, avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80" },
    { text: "The team at Maness Electronics went above and beyond our expectations. Their expertise and attention to detail are truly impressive.", name: "Patricia Sibanda", role: "Corporate Client", rating: 5, avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80" },
    { text: "I have referred Maness Electronics to everyone I know. Their combination of skill, integrity, and fair pricing is unmatched in Harare.", name: "Michael Chigwedere", role: "Repeat Client", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" }
  ],
  reviews: {
    heroTitle: "Client Reviews", heroSubtitle: "What our clients say about our work.",
    items: [
      { text: "Outstanding service. Professional and delivered exactly what was promised.", name: "Tendai Moyo", role: "Satisfied Client", rating: 5 },
      { text: "Consistent excellence over years of working together. Genuine care for clients.", name: "Grace Mutasa", role: "Business Owner", rating: 5 },
      { text: "Every step handled with professionalism. Maness Electronics sets the standard.", name: "James Karonga", role: "Property Owner", rating: 5 },
      { text: "Above and beyond expectations. Expertise and attention to detail are impressive.", name: "Patricia Sibanda", role: "Corporate Client", rating: 5 },
      { text: "Skill, integrity, and fair pricing unmatched in Harare. Highly recommended.", name: "Michael Chigwedere", role: "Repeat Client", rating: 5 },
      { text: "Exceptional quality and service. Will definitely use again.", name: "Angela Mhembere", role: "New Client", rating: 5 }
    ],
  },
  about: {
    heroTitle: "Our Story", heroSubtitle: "Built on expertise, driven by quality.",
    story: ["Founded in 2012, Maness Electronics has secured over 2,000 homes, offices, and commercial properties across Harare with cutting-edge security technology.", "With 81 Google reviews and a team of 30 certified technicians, we deliver integrated security solutions that give our clients total peace of mind.", "We are committed to delivering results that exceed expectations, every single time."],
    values: [
      { title: "Quality First", desc: "Every project meets our exacting standards before we consider it complete." },
      { title: "Client Focus", desc: "Your satisfaction is our measure of success. We listen, we deliver, we follow up." },
      { title: "Expert Team", desc: "Certified professionals with years of specialised experience in their craft." },
      { title: "Fair Pricing", desc: "Transparent quotes with no hidden costs. The price we quote is the price you pay." },
    ],
    team: [
      { name: "David Moyo", role: "Managing Director", bio: "Over 15 years of industry experience.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
      { name: "Sarah Mutasa", role: "Operations Manager", bio: "Ensures every project runs smoothly.", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80" },
      { name: "Peter Chimwanda", role: "Lead Specialist", bio: "Master craftsman with decades of expertise.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" },
      { name: "Lisa Karonga", role: "Client Relations", bio: "Dedicated to ensuring every client receives premium service.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
    ],
  },
  whyChooseUs: { title: "Why Maness", points: [{ title: "81 Five-Star Reviews", desc: "Harare's most trusted security company." },{ title: "24/7 Monitoring", desc: "Round-the-clock surveillance and rapid response." },{ title: "Integrated Systems", desc: "CCTV, access control, and alarms working as one." },{ title: "Free Site Assessment", desc: "Professional security audit at no obligation." }] },
  featuredProjects: [{ title: "Office CCTV Network", image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80", category: "CCTV" },{ title: "Residential Estate Access", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", category: "Access Control" },{ title: "Warehouse Alarm System", image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80", category: "Alarm" }],
  careers: { heroTitle: "Join Our Team", heroSubtitle: "We are always looking for talented people.", positions: [
    { title: "Specialist", department: "Operations", location: "Harare", type: "Full-time", desc: "Join our team of skilled professionals." },
    { title: "Client Consultant", department: "Sales", location: "Harare", type: "Full-time", desc: "Help clients with expert advice." },
  ] },
  contact: { heroTitle: "Get In Touch", heroSubtitle: "Visit us or reach out for a free consultation.", branches: [
    { name: "Harare Office", address: "Office 5, First Floor, 39 Robson Manyika, Harare, Zimbabwe", phone: "+263 77 285 9077", email: "info@manesselectronics.co.zw" },
  ] },
  homeCta: {
    title: "YOUR SECURITY IS OUR PRIORITY.", subtitle: "From CCTV and access control to electric fencing and fire detection. Protect what matters most.",
    ctaPrimary: "Get a Security Assessment", ctaSecondary: "Chat on WhatsApp",
    whatsappText: "Hello Maness Electronics! I need a security assessment for my property.",
    backgroundImage: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1920&q=85",
  },
  footer: { description: "Harare's premier security and electronics specialists since 2012.", copyright: "Maness Electronics" },
};

export default siteData;
