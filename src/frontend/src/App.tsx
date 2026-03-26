import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  CheckCircle2,
  ChevronDown,
  Clock,
  Crown,
  Droplets,
  Instagram,
  Layers,
  Leaf,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  ScrollText,
  Shield,
  Shirt,
  Smile,
  Sofa,
  Sparkles,
  Star,
  SwatchBook,
  Target,
  Users,
  Wand2,
  Wind,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const PHONE = "8891109888";
const INSTAGRAM_URL = "https://www.instagram.com/saf.laundry";
const WHATSAPP_URL = `https://wa.me/918891109888?text=${encodeURIComponent("Hello Saf Laundry! I'd like to enquire about your services.")}`;
const MAPS_URL =
  "https://maps.google.com/?q=SAF+Building+East+Ottapalam+Palakkad+Kerala+679101";
const GOOGLE_REVIEW_URL = "https://g.page/r/CSaj0XetPJpTEAI/review";

const businessHours = [
  { day: "Monday", hours: "8:00 AM – 8:00 PM" },
  { day: "Tuesday", hours: "8:00 AM – 8:00 PM" },
  { day: "Wednesday", hours: "8:00 AM – 8:00 PM" },
  { day: "Thursday", hours: "8:00 AM – 8:00 PM" },
  { day: "Friday", hours: "8:00 AM – 8:00 PM" },
  { day: "Saturday", hours: "8:00 AM – 8:00 PM" },
  { day: "Sunday", hours: "8:00 AM – 1:00 PM", special: true },
];

const badgeStyles = [
  "bg-primary/10 text-primary border-primary/20",
  "bg-orange-100 text-orange-700 border-orange-200",
  "bg-amber-100 text-amber-700 border-amber-200",
  "bg-purple-100 text-purple-700 border-purple-200",
  "bg-emerald-100 text-emerald-700 border-emerald-200",
];

const iconGradients = [
  "hero-gradient",
  "gradient-coral",
  "gradient-amber",
  "gradient-violet",
  "gradient-emerald",
];

const services = [
  {
    id: 1,
    icon: Sparkles,
    title: "Dry Clean",
    description:
      "Expert dry cleaning for delicate fabrics, suits, sarees, and formal wear. Gentle solvents preserve colour and texture.",
    badge: "Premium",
    image: "/assets/uploads/Dry-Cleaners-in-Dwarka-1.jpeg",
  },
  {
    id: 2,
    icon: Wind,
    title: "Wet Clean (Softwash)",
    description:
      "Eco-friendly water-based cleaning for fabrics that need extra care. Safe for sensitive materials including silks and woolens.",
    badge: "Eco-Friendly",
    image: "/assets/generated/service-wetclean.dim_400x300.jpg",
  },
  {
    id: 3,
    icon: Shirt,
    title: "Steam Press",
    description:
      "Professional steam pressing for crisp, wrinkle-free results. Perfect for shirts, kurtas, trousers, and occasion wear.",
    badge: "Quick",
    image: "/assets/generated/service-steampress.dim_400x300.jpg",
  },
  {
    id: 4,
    icon: Layers,
    title: "Wash & Fold",
    description:
      "Full-service laundry — washed, dried, and neatly folded. Ideal for everyday clothing, bed linen, and bulk orders.",
    badge: "Best Value",
    image: "/assets/generated/service-washandfold.dim_400x300.jpg",
  },
  {
    id: 5,
    icon: Crown,
    title: "Wedding Dress Cleaning",
    description:
      "Delicate cleaning and preservation for bridal wear and wedding outfits. Restore the original shine and freshness.",
    badge: "Special Care",
    image: "/assets/generated/service-weddingdress.dim_400x300.jpg",
  },
  {
    id: 6,
    icon: ScrollText,
    title: "Saree Rolling",
    description:
      "Expert saree rolling to maintain the pleats and fabric integrity. Perfect finish for silk and designer sarees.",
    badge: "Specialist",
    image: "/assets/generated/service-sareerolling.dim_400x300.jpg",
  },
  {
    id: 7,
    icon: Wand2,
    title: "Saree Pre-Pleating",
    description:
      "Professional pre-pleating of sarees to set perfect pleats before wearing. Ideal for silk, chiffon, and designer sarees.",
    badge: "Specialist",
    image: "/assets/uploads/saree-draping--1.jpeg",
  },
  {
    id: 8,
    icon: SwatchBook,
    title: "Shoes Cleaning",
    description:
      "Deep cleaning for all types of footwear including leather, canvas, and sports shoes. Restored like new.",
    badge: "All Types",
    image: "/assets/generated/service-shoescleaning.dim_400x300.jpg",
  },
  {
    id: 9,
    icon: Shield,
    title: "Helmets Cleaning",
    description:
      "Thorough interior and exterior cleaning of helmets. Sanitised and odour-free for safe daily use.",
    badge: "Sanitised",
    image: "/assets/generated/service-helmetcleaning.dim_400x300.jpg",
  },
  {
    id: 10,
    icon: Wind,
    title: "Curtains Cleaning",
    description:
      "Professional curtain cleaning to remove dust, allergens, and stains. Returned neatly pressed and fresh.",
    badge: "Allergen-Free",
    image: "/assets/generated/service-curtainscleaning.dim_400x300.jpg",
  },
  {
    id: 11,
    icon: Layers,
    title: "Blankets Cleaning",
    description:
      "Gentle yet effective cleaning for all blanket types — wool, cotton, and synthetic. Fluffy and hygienically clean.",
    badge: "All Fabrics",
    image: "/assets/generated/service-blanketscleaning.dim_400x300.jpg",
  },
  {
    id: 12,
    icon: Smile,
    title: "Toys Cleaning",
    description:
      "Safe, child-friendly cleaning for soft toys and stuffed animals. Sanitised and soft for little ones.",
    badge: "Kid-Safe",
    image: "/assets/generated/service-toyscleaning.dim_400x300.jpg",
  },
  {
    id: 13,
    icon: Shirt,
    title: "Carpets Cleaning",
    description:
      "Deep cleaning for carpets and rugs to remove embedded dirt, stains, and odours. Refreshed and revived.",
    badge: "Deep Clean",
    image: "/assets/generated/service-carpetscleaning.dim_400x300.jpg",
  },
  {
    id: 14,
    icon: Sofa,
    title: "Sofa Cleaning",
    description:
      "Professional sofa and upholstery cleaning to remove grime, stains, and allergens. Looks and smells like new.",
    badge: "Upholstery",
    image: "/assets/generated/service-sofacleaning.dim_400x300.jpg",
  },
  {
    id: 15,
    icon: Layers,
    title: "Mattress Cleaning",
    description:
      "Professional mattress cleaning to eliminate dust mites, stains, and allergens. Restoring freshness and hygiene for better sleep.",
    badge: "Deep Clean",
    image: "/assets/generated/service-mattresscleaning.dim_400x300.jpg",
  },
  {
    id: 16,
    icon: Sofa,
    title: "Cushions Cleaning",
    description:
      "Thorough cleaning of cushions and pillows, removing dirt, odours, and allergens. Returned fluffy, fresh, and sanitised.",
    badge: "Fresh & Soft",
    image: "/assets/generated/service-cushionscleaning.dim_400x300.jpg",
  },
];

const testimonials = [
  {
    name: "Priya Menon",
    text: "My sarees come back perfectly pressed every time. Saf Laundry is the best in Ottapalam!",
    stars: 5,
  },
  {
    name: "Rahul Krishnan",
    text: "Quick turnaround and amazing results. My suits look brand new after their dry clean service.",
    stars: 5,
  },
  {
    name: "Aisha Fathima",
    text: "Their softwash service for my woollens is excellent. Very gentle and thorough — highly recommend!",
    stars: 5,
  },
];

const coreValues = [
  {
    icon: Sparkles,
    title: "Uncompromising Quality",
    description:
      'We don\'t just "wash" clothes; we care for them. We utilize premium, fabric-safe detergents and state-of-the-art equipment to ensure that every item leaves our facility in better condition than it arrived.',
    gradient: "hero-gradient",
    shadow: "shadow-teal",
  },
  {
    icon: Shield,
    title: "Radical Reliability",
    description:
      "Trust is our most important currency. When we promise a pickup or delivery time, we keep it. You can count on Saf Laundry to be consistent, punctual, and dependable, every single time.",
    gradient: "gradient-coral",
    shadow: "shadow-coral",
  },
  {
    icon: Target,
    title: "Customer-Centric Convenience",
    description:
      "We believe service should adapt to your life, not the other way around. Every decision we make is designed to make your life easier and your chores disappear.",
    gradient: "gradient-amber",
    shadow: "shadow-amber",
  },
  {
    icon: CheckCircle2,
    title: "Integrity & Transparency",
    description:
      "We treat your belongings as if they were our own. We are committed to honest pricing, clear communication, and accountability that ensures your wardrobe is always in safe hands.",
    gradient: "gradient-violet",
    shadow: "shadow-violet",
  },
  {
    icon: Leaf,
    title: "Sustainability & Care",
    description:
      "We are dedicated to minimizing our environmental footprint. By optimizing water usage and choosing eco-friendly cleaning options, we protect both your clothes and the planet.",
    gradient: "gradient-emerald",
    shadow: "shadow-teal",
  },
];

const statsData = [
  {
    icon: Users,
    value: "3,204",
    label: "Satisfied Customers",
    color: "hero-gradient",
  },
  {
    icon: Shirt,
    value: "1,19,604",
    label: "Garments Cleaned",
    color: "gradient-coral",
  },
  {
    icon: SwatchBook,
    value: "1000+",
    label: "Shoes Cleaned",
    color: "gradient-amber",
  },
];

const NAV_SECTIONS = ["services", "rates", "about", "contact"] as const;
const FEATURES = [
  "Expert Care",
  "Quick Turnaround",
  "Affordable Prices",
  "Doorstep Pickup",
];

type PolicyModal = "faq" | "cancellation" | "privacy" | "terms" | null;

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: star rating is purely presentational
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

function getTodayName() {
  return new Date().toLocaleDateString("en-US", { weekday: "long" });
}

function FAQContent() {
  const faqs = [
    {
      q: "What areas do you serve?",
      a: "We currently serve Ottapalam and surrounding areas in Palakkad District, Kerala. Contact us to confirm if we cover your location.",
    },
    {
      q: "Do you offer doorstep pickup and delivery?",
      a: "Yes, we offer convenient doorstep pickup and delivery. Call us or WhatsApp to schedule a pickup time that suits you.",
    },
    {
      q: "How long does it take to clean my clothes?",
      a: "Standard laundry takes 24-48 hours. Dry cleaning and specialty items like sarees or wedding dresses may take 2-3 business days. We offer express service on request.",
    },
    {
      q: "Is it safe to send delicate fabrics like silk sarees?",
      a: "Absolutely. We specialise in handling delicate fabrics using eco-friendly wet cleaning and dry cleaning methods. Your garments are treated with the utmost care.",
    },
    {
      q: "How do I pay for the service?",
      a: "We accept cash on delivery as well as UPI and online bank transfers. Payment is collected at the time of delivery.",
    },
    {
      q: "What if my clothes are damaged?",
      a: "We take every precaution to care for your garments. In the unlikely event of damage caused by us, please contact us within 24 hours of delivery and we will resolve the issue promptly.",
    },
    {
      q: "Do you clean household items like curtains, sofas, and mattresses?",
      a: "Yes! We offer cleaning for curtains, blankets, carpets, sofas, mattresses, cushions, and more. Call us for pricing and scheduling.",
    },
  ];
  return (
    <div className="space-y-5">
      {faqs.map((faq) => (
        <div
          key={faq.q}
          className="border-b border-border pb-4 last:border-0 last:pb-0"
        >
          <p className="font-semibold text-foreground mb-1">{faq.q}</p>
          <p className="text-gray-700 text-sm leading-relaxed">{faq.a}</p>
        </div>
      ))}
    </div>
  );
}

function CancellationContent() {
  return (
    <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
      <p className="text-foreground font-semibold">Cancellation Policy</p>
      <p>
        You may cancel your order before pickup is collected. To cancel, please
        call or WhatsApp us at{" "}
        <strong className="text-foreground">8891109888</strong> as soon as
        possible.
      </p>
      <p>
        Once items have been picked up and processing has begun, cancellations
        are not accepted.
      </p>
      <p className="text-foreground font-semibold mt-4">Refund Policy</p>
      <p>
        We strive for 100% customer satisfaction. If you are not satisfied with
        our service, please contact us within{" "}
        <strong className="text-foreground">24 hours of delivery</strong> with
        details of your concern.
      </p>
      <p>Refunds are considered in the following cases:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Garments returned in worse condition than received.</li>
        <li>Service not delivered as agreed.</li>
        <li>Order cancelled before pickup is collected.</li>
      </ul>
      <p>
        Refunds, if approved, will be processed within 3-5 business days via the
        original payment method or cash as applicable.
      </p>
      <p>
        Saf Laundry reserves the right to investigate all refund requests before
        processing.
      </p>
      <p className="mt-4">
        For any queries, contact us at{" "}
        <strong className="text-foreground">8891109888</strong> or WhatsApp us
        directly.
      </p>
    </div>
  );
}

function PrivacyContent() {
  return (
    <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
      <p>
        At Saf Laundry, we are committed to protecting your personal
        information. This Privacy Policy explains how we collect, use, and
        safeguard your data.
      </p>
      <p className="text-foreground font-semibold">Information We Collect</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Name and contact details (phone number, address) provided when you
          place an order.
        </li>
        <li>Pickup and delivery address for scheduling purposes.</li>
        <li>Payment information (we do not store card details).</li>
      </ul>
      <p className="text-foreground font-semibold">
        How We Use Your Information
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>To process and fulfil your laundry orders.</li>
        <li>To contact you about pickup, delivery, or service updates.</li>
        <li>To improve our services based on feedback.</li>
      </ul>
      <p className="text-foreground font-semibold">Data Sharing</p>
      <p>
        We do not sell or share your personal information with third parties for
        marketing purposes. Your information is used solely for delivering our
        services.
      </p>
      <p className="text-foreground font-semibold">Data Security</p>
      <p>
        We take reasonable measures to protect your personal information from
        unauthorised access or disclosure.
      </p>
      <p className="text-foreground font-semibold">Contact</p>
      <p>
        For privacy-related concerns, contact us at{" "}
        <strong className="text-foreground">8891109888</strong>.
      </p>
      <p className="text-xs mt-4">Last updated: March 2026</p>
    </div>
  );
}

function TermsContent() {
  return (
    <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
      <p>
        By using the services of Saf Laundry, you agree to the following terms
        and conditions.
      </p>
      <p className="text-foreground font-semibold">Services</p>
      <p>
        Saf Laundry provides laundry, dry cleaning, and fabric care services as
        listed on our website. We reserve the right to refuse service for items
        that are heavily soiled, damaged, or pose a safety risk.
      </p>
      <p className="text-foreground font-semibold">Liability</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          We take care of all garments with professional diligence. However, SAF
          Laundry is not liable for pre-existing damage, colour fading due to
          fabric quality, or damage caused by items left in pockets.
        </li>
        <li>
          Our liability for any damaged item is limited to a maximum of 10x the
          service charge for that item.
        </li>
      </ul>
      <p className="text-foreground font-semibold">Uncollected Items</p>
      <p>
        Items not collected within 30 days of completion will be donated to
        charity. Saf Laundry will not be liable for uncollected items after this
        period.
      </p>
      <p className="text-foreground font-semibold">Pricing</p>
      <p>
        All prices are subject to change without prior notice. Final pricing is
        confirmed at the time of order placement.
      </p>
      <p className="text-foreground font-semibold">Governing Law</p>
      <p>
        These terms are governed by the laws of India. Any disputes shall be
        subject to the jurisdiction of courts in Palakkad District, Kerala.
      </p>
      <p className="text-foreground font-semibold">Contact</p>
      <p>
        For any queries regarding these terms, contact us at{" "}
        <strong className="text-foreground">8891109888</strong>.
      </p>
      <p className="text-xs mt-4">Last updated: March 2026</p>
    </div>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [openModal, setOpenModal] = useState<PolicyModal>(null);
  const todayName = getTodayName();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const policyLinks: { key: PolicyModal; label: string }[] = [
    { key: "faq", label: "FAQ" },
    { key: "cancellation", label: "Cancellation & Refund" },
    { key: "privacy", label: "Privacy Policy" },
    { key: "terms", label: "Terms & Conditions" },
  ];

  const modalTitles: Record<Exclude<PolicyModal, null>, string> = {
    faq: "Frequently Asked Questions",
    cancellation: "Cancellation & Refund Policy",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
  };

  return (
    <div className="min-h-screen bg-background font-body overflow-x-hidden">
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[oklch(42%_0.24_228)]/95 backdrop-blur-md shadow-sm border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img
              src="/assets/uploads/Saf-Logo-1--1.png"
              alt="Saf Laundry Logo"
              className="h-10 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {NAV_SECTIONS.map((section) => (
              <button
                type="button"
                key={section}
                data-ocid={`nav.${section}.link`}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium capitalize transition-colors hover:opacity-80 ${scrolled ? "text-white" : "text-white"}`}
              >
                {section === "rates"
                  ? "Rates"
                  : section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
            <a href={`tel:${PHONE}`} data-ocid="nav.call.button">
              <Button
                size="sm"
                className="hero-gradient text-white border-0 hover:opacity-90 rounded-full px-4 shadow-teal"
              >
                <Phone className="w-3.5 h-3.5 mr-1.5" />
                Call Now
              </Button>
            </a>
          </nav>
          <a
            href={`tel:${PHONE}`}
            data-ocid="nav.mobile.call.button"
            className="md:hidden"
          >
            <Button
              size="sm"
              className="hero-gradient text-white border-0 rounded-full px-3"
            >
              <Phone className="w-3.5 h-3.5" />
            </Button>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-100"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-laundry-colorful.dim_1920x1080.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bubble-pattern" />
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-white/5 animate-float" />
        <div
          className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-white/5 animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full bg-white/5 animate-float"
          style={{ animationDelay: "1s" }}
        />

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Badge className="bg-amber-400/25 text-amber-100 border-amber-300/40 mb-6 px-4 py-1 text-sm font-medium">
              ✦ Trusted Laundry Service in the City
            </Badge>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            className="text-xl sm:text-2xl text-white/85 mb-2 font-light"
          >
            Professional Laundry &amp; Dry Clean Services
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href={`tel:${PHONE}`} data-ocid="hero.call.primary_button">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-6 rounded-full shadow-2xl transition-all duration-200 hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                {PHONE}
              </Button>
            </a>
            <button
              type="button"
              data-ocid="hero.services.secondary_button"
              onClick={() => scrollToSection("services")}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-base font-medium"
            >
              See our services
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
          >
            {FEATURES.map((f) => (
              <div
                key={f}
                className="flex items-center gap-2 text-white/75 text-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-white/60" />
                {f}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-20 sm:py-28"
        style={{ background: "oklch(22% 0.18 228)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <Badge className="bg-amber-800/60 text-amber-100 border-amber-700 mb-4 px-4 py-1">
              Our Services
            </Badge>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              What We Do Best
            </h2>
            <p className="text-gray-200 text-lg max-w-xl mx-auto">
              From delicate silks to everyday wear, we handle all your laundry
              needs with professional expertise.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                data-ocid={`service.item.${service.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 4) * 0.1 }}
                className="card-hover group bg-white/10 rounded-2xl overflow-hidden shadow-xs border border-white/10"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <Badge
                      className={`${badgeStyles[idx % badgeStyles.length]} border text-xs font-semibold`}
                    >
                      {service.badge}
                    </Badge>
                  </div>
                </div>
                <div className="p-5">
                  <div
                    className={`w-8 h-8 ${iconGradients[idx % iconGradients.length]} rounded-lg flex items-center justify-center mb-3`}
                  >
                    <service.icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-display font-semibold text-base text-white leading-tight mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RATES */}
      <section id="rates" className="py-20 sm:py-28 bg-[oklch(25%_0.18_228)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-emerald-400 mb-3">
              Transparent Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Rates &amp; Packages
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto text-base sm:text-lg">
              Simple, affordable pricing for every garment. No hidden charges —
              what you see is what you pay.
            </p>
          </motion.div>

          {/* Annual Package Banner */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="relative mb-8 rounded-2xl overflow-hidden shadow-lg border-2 border-emerald-600 bg-emerald-600 text-white"
          >
            <div className="absolute top-4 right-4">
              <span className="bg-amber-400 text-amber-900 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                Best Value
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6 px-8 py-8">
              <div className="text-5xl sm:text-6xl select-none">🏅</div>
              <div className="flex-1 text-center sm:text-left">
                <p className="text-xs font-semibold uppercase tracking-widest text-white mb-1">
                  Annual Package
                </p>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-1">
                  1 Year Package
                </h3>
                <p className="text-white text-sm mb-3">
                  Gents Daily Wear &nbsp;·&nbsp; 730 pieces
                </p>
                <div className="flex flex-wrap items-center gap-3 justify-center sm:justify-start">
                  <span className="text-3xl sm:text-4xl font-extrabold">
                    ₹29,000
                  </span>
                  <span className="text-white/70 text-sm line-through">
                    ₹51,100
                  </span>
                  <span className="bg-white/20 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    Save ~43%
                  </span>
                </div>
              </div>
              <div className="shrink-0">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="rates.package.button"
                >
                  <button
                    type="button"
                    className="bg-white text-primary font-bold px-6 py-3 rounded-full shadow hover:bg-emerald-50 transition-colors text-sm whitespace-nowrap"
                  >
                    Book This Package
                  </button>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Sub Packages: 6 months and 3 months */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {/* 6 Month Package */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative rounded-2xl overflow-hidden shadow border-2 border-emerald-400 bg-white"
            >
              <div className="absolute top-4 right-4">
                <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  6 Months
                </span>
              </div>
              <div className="flex flex-col items-start gap-2 px-7 py-7">
                <div className="text-4xl mb-1 select-none">📦</div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-700 mb-0.5">
                  6 Month Package
                </p>
                <h3 className="text-xl font-extrabold tracking-tight text-foreground">
                  Gents Daily Wear
                </h3>
                <p className="text-gray-700 text-sm">366 pieces</p>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-2xl font-extrabold text-gray-800">
                    ₹16,470
                  </span>
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 w-full"
                >
                  <button
                    type="button"
                    className="w-full bg-emerald-600 text-white font-bold px-5 py-2.5 rounded-full shadow hover:bg-emerald-700 transition-colors text-sm"
                  >
                    Book This Package
                  </button>
                </a>
              </div>
            </motion.div>

            {/* 3 Month Package */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow border-2 border-emerald-400 bg-white"
            >
              <div className="absolute top-4 right-4">
                <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  3 Months
                </span>
              </div>
              <div className="flex flex-col items-start gap-2 px-7 py-7">
                <div className="text-4xl mb-1 select-none">🗓️</div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-700 mb-0.5">
                  3 Month Package
                </p>
                <h3 className="text-xl font-extrabold tracking-tight text-foreground">
                  Gents Daily Wear
                </h3>
                <p className="text-gray-700 text-sm">182 pieces</p>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-2xl font-extrabold text-gray-800">
                    ₹8,700
                  </span>
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 w-full"
                >
                  <button
                    type="button"
                    className="w-full bg-emerald-600 text-white font-bold px-5 py-2.5 rounded-full shadow hover:bg-emerald-700 transition-colors text-sm"
                  >
                    Book This Package
                  </button>
                </a>
              </div>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 max-w-3xl mx-auto w-full">
            {/* Garments */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden"
            >
              <div className="bg-emerald-600 px-6 py-4 flex items-center gap-3">
                <span className="text-2xl">👕</span>
                <h3 className="text-lg font-bold text-white">Garments</h3>
              </div>
              <ul className="divide-y divide-border">
                {[
                  { name: "Shirts", price: "₹70" },
                  { name: "Pants", price: "₹80" },
                  { name: "Jeans", price: "₹100" },
                  { name: "Kamees", price: "₹150" },
                  { name: "Sarees", price: "₹200" },
                ].map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center justify-between px-6 py-3.5"
                  >
                    <span className="text-sm text-gray-800 font-medium">
                      {item.name}
                    </span>
                    <span className="text-sm font-bold text-emerald-700">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Specialty Cleaning */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden"
            >
              <div className="bg-emerald-600 px-6 py-4 flex items-center gap-3">
                <span className="text-2xl">✨</span>
                <h3 className="text-lg font-bold text-white">
                  Specialty Cleaning
                </h3>
              </div>
              <ul className="divide-y divide-border">
                {[{ name: "Shoes & Helmets Cleaning", price: "₹250" }].map(
                  (item) => (
                    <li
                      key={item.name}
                      className="flex items-center justify-between px-6 py-3.5"
                    >
                      <span className="text-sm text-gray-800 font-medium">
                        {item.name}
                      </span>
                      <span className="text-sm font-bold text-emerald-700">
                        {item.price}
                      </span>
                    </li>
                  ),
                )}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <p className="text-xs text-gray-100 mb-6">
              * Prices may vary based on garment type and condition. Contact us
              for a custom quote.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="rates.whatsapp.button"
            >
              <Button
                size="lg"
                className="hero-gradient text-white border-0 hover:opacity-90 rounded-full px-8 shadow-teal gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.122 1.523 5.858L.044 23.5l5.78-1.516A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.65-.493-5.178-1.355l-.37-.22-3.433.9.914-3.347-.24-.386A9.933 9.933 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                Get a Custom Quote
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 sm:py-28 bg-[oklch(22%_0.18_228)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <Badge className="bg-purple-800/60 text-purple-100 border-purple-700 mb-4 px-4 py-1">
              About Us
            </Badge>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              About Saf Laundry
            </h2>
            <p className="text-gray-200 text-lg max-w-2xl mx-auto">
              At Saf Laundry, we believe that clean clothes are about more than
              just hygiene — they are about reclaiming your most valuable asset:
              time.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 mb-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="/assets/uploads/my-photo-1-1-1.jpeg"
                  alt="Mr. Rashid Pulikkal, Founder of Saf Laundry"
                  className="w-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-5 left-5 text-white">
                  <p className="font-display font-bold text-lg">
                    Mr. Rashid Pulikkal
                  </p>
                  <p className="text-white/80 text-sm">Founder, Saf Laundry</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col gap-5 md:col-span-2"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 hero-gradient rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Droplets className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white text-lg mb-1">
                    Pioneers in Modern Laundry
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    When we started Saf Laundry, live laundry concepts and
                    modern services like wet cleaning were virtually unheard of
                    in this region. We brought these innovations to Ottapalam,
                    setting a new standard for professional fabric care.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 gradient-coral rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white text-lg mb-1">
                    Professional Team
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    Our dedicated team of laundry professionals specialises in
                    cleaning and finishing, combining technical expertise with a
                    personal touch to deliver results that exceed expectations.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 gradient-amber rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white text-lg mb-1">
                    Founded on Excellence
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    Built on the principles of reliability, care, and efficiency
                    — Saf Laundry was created to take the &ldquo;chore&rdquo;
                    out of your week. Every garment, from your everyday tee to
                    your most delicate silk blouse, receives the royal
                    treatment.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[oklch(30%_0.18_228)] rounded-3xl border border-white/10 p-8 sm:p-12 mb-12 text-center"
          >
            <div className="w-14 h-14 gradient-violet rounded-2xl flex items-center justify-center mx-auto mb-5">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
              Our Mission
            </h3>
            <p className="text-gray-200 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-6">
              To provide a flawless laundry experience that gives you the
              freedom to focus on what matters most. Whether you are a busy
              professional, a parent juggling a million tasks, or someone who
              simply values a crisp, professional finish — Saf Laundry is here
              to lighten your load.
            </p>
            <blockquote className="border-l-4 border-primary pl-5 text-left max-w-lg mx-auto">
              <p className="font-display text-white font-semibold text-lg italic">
                &ldquo;Clean clothes, clear mind. We handle the steam so you can
                live your dream.&rdquo;
              </p>
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
              Our Core Values
            </h3>
            <p className="text-gray-200">The foundation of everything we do.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, idx) => (
              <motion.div
                key={value.title}
                data-ocid={`about.value.item.${idx + 1}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                className="bg-[oklch(30%_0.18_228)] rounded-2xl border border-white/10 p-6 hover:shadow-md transition-shadow"
              >
                <div
                  className={`w-10 h-10 ${value.gradient} rounded-xl flex items-center justify-center mb-4`}
                >
                  <value.icon className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-display font-semibold text-white mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section
        data-ocid="stats.section"
        className="py-16 sm:py-20"
        style={{
          background: "oklch(18% 0.18 228)",
          borderTop: "1px solid oklch(30% 0.15 228)",
          borderBottom: "1px solid oklch(30% 0.15 228)",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge
              className="mb-4 px-4 py-1"
              style={{
                background: "oklch(52% 0.22 225 / 0.12)",
                color: "oklch(90% 0.02 225)",
                border: "1px solid oklch(52% 0.22 225 / 0.25)",
              }}
            >
              Our Impact
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-2">
              Trusted by Thousands
            </h2>
            <p className="text-gray-200 text-base sm:text-lg">
              Numbers that speak for our commitment to quality and care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {statsData.map((stat, idx) => (
              <motion.div
                key={stat.label}
                data-ocid={`stats.item.${idx + 1}`}
                initial={{ opacity: 0, y: 32, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.12,
                  ease: "easeOut",
                }}
                className="relative bg-[oklch(30%_0.18_228)] rounded-3xl p-8 text-center shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
                style={{ border: "1px solid oklch(40% 0.1 228)" }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 0%, oklch(52% 0.22 225 / 0.06) 0%, transparent 70%)",
                  }}
                />
                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-md`}
                  >
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                  <p className="font-display font-extrabold text-4xl sm:text-5xl mb-2 tracking-tight text-white">
                    {stat.value}
                  </p>
                  <p className="text-gray-200 font-medium text-base">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        className="py-16 sm:py-24"
        style={{
          background:
            "linear-gradient(135deg, oklch(52% 0.22 225), oklch(42% 0.24 228))",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
              What Our Customers Say
            </h2>
            <p className="text-white/75">
              Trusted by hundreds of families in Ottapalam
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.name}
                data-ocid={`testimonial.item.${idx + 1}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <StarRating count={t.stars} />
                <p className="text-white/90 mt-3 mb-4 text-sm leading-relaxed italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="text-white font-semibold text-sm">{t.name}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="testimonials.google_review.button"
            >
              <Button
                size="lg"
                className="bg-white text-gray-800 hover:bg-white/90 font-bold px-8 py-5 rounded-full shadow-lg transition-all hover:scale-105 gap-2"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Leave a Review on Google
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 sm:py-28 bg-[oklch(22%_0.18_228)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-primary/20 text-white border-white/20 mb-4 px-4 py-1">
              Get In Touch
            </Badge>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              Contact Us
            </h2>
            <p className="text-gray-200 text-lg mb-10">
              Reach out to book a pickup, ask about our services, or visit us in
              Ottapalam, Kerala.
            </p>
            <div className="bg-[oklch(30%_0.18_228)] rounded-3xl border border-white/10 shadow-xs p-8 sm:p-12 mb-8">
              <div className="flex flex-col items-center gap-6">
                <div className="w-20 h-20 gradient-coral rounded-full flex items-center justify-center shadow-coral">
                  <Phone className="w-9 h-9 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm font-medium mb-2 uppercase tracking-widest">
                    Call or WhatsApp
                  </p>
                  <a
                    href={`tel:${PHONE}`}
                    data-ocid="contact.call.primary_button"
                    className="block"
                  >
                    <span className="font-display text-4xl sm:text-5xl font-bold text-white hover:text-primary transition-colors">
                      {PHONE}
                    </span>
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={`tel:${PHONE}`} data-ocid="contact.call.button">
                    <Button
                      size="lg"
                      className="hero-gradient text-white border-0 hover:opacity-90 text-lg font-bold px-10 py-6 rounded-full shadow-teal transition-all hover:scale-105"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Tap to Call
                    </Button>
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="contact.whatsapp.button"
                  >
                    <Button
                      size="lg"
                      className="bg-[#25D366] hover:bg-[#20bc5a] text-white border-0 text-lg font-bold px-10 py-6 rounded-full shadow-lg transition-all hover:scale-105"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* BUSINESS HOURS */}
            <motion.div
              data-ocid="contact.hours.card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[oklch(30%_0.18_228)] rounded-3xl border border-white/10 shadow-xs p-8 mb-8 text-left"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 gradient-amber rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  Business Hours
                </h3>
              </div>
              <div className="divide-y divide-white/10">
                {businessHours.map((entry) => {
                  const isToday = entry.day === todayName;
                  return (
                    <div
                      key={entry.day}
                      className={`flex items-center justify-between py-3 ${
                        isToday
                          ? "text-amber-300 font-semibold"
                          : "text-gray-200"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm">{entry.day}</span>
                        {isToday && (
                          <Badge className="bg-amber-800 text-amber-100 border-amber-700 text-xs px-2 py-0">
                            Today
                          </Badge>
                        )}
                        {entry.special && !isToday && (
                          <Badge className="bg-orange-800 text-orange-100 border-orange-700 text-xs px-2 py-0">
                            Short Day
                          </Badge>
                        )}
                        {entry.special && isToday && (
                          <Badge className="bg-orange-800 text-orange-100 border-orange-700 text-xs px-2 py-0">
                            Short Day
                          </Badge>
                        )}
                      </div>
                      <span className="text-sm">{entry.hours}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact.instagram.button"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white bg-transparent hover:bg-white/20 hover:text-white hover:border-white rounded-full px-8 font-semibold transition-all hover:scale-105"
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  Follow @saf.laundry
                </Button>
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact.maps.button"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white bg-transparent hover:bg-white/20 hover:text-white hover:border-white rounded-full px-8 font-semibold transition-all hover:scale-105"
                >
                  <Navigation className="w-5 h-5 mr-2" />
                  Get Directions
                </Button>
              </a>
              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact.google_review.button"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white bg-transparent hover:bg-white/20 hover:text-white hover:border-white rounded-full px-8 font-semibold transition-all hover:scale-105 gap-2"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Review on Google
                </Button>
              </a>
            </div>
            <div className="mt-10 flex items-center justify-center gap-2 text-gray-300">
              <MapPin className="w-4 h-4" />
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact.address.link"
                className="hover:text-primary transition-colors underline-offset-2 hover:underline"
              >
                SAF Building, East Ottapalam, Palakkad District, Kerala - 679101
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* POLICY LINKS SECTION */}
      <section
        data-ocid="policy.section"
        className="py-10 bg-[oklch(20%_0.18_228)] border-t border-white/10"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs text-gray-300 uppercase tracking-widest mb-5 font-medium">
            Customer Information
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {policyLinks.map((link) => (
              <button
                key={link.key}
                type="button"
                data-ocid={`policy.${link.key}.open_modal_button`}
                onClick={() => setOpenModal(link.key)}
                className="px-5 py-2 rounded-full border-2 border-white/40 bg-white/10 text-white text-sm font-medium hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-8"
        style={{
          backgroundColor: "oklch(20% 0.12 225)",
          borderTop: "3px solid transparent",
          borderImage:
            "linear-gradient(90deg, oklch(52% 0.22 225), oklch(65% 0.22 40), oklch(75% 0.2 80), oklch(52% 0.08 250), oklch(62% 0.18 155)) 1",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <img
                src="/assets/uploads/Saf-Logo-1--1.png"
                alt="Saf Laundry Logo"
                className="h-8 w-auto"
              />
              <span className="text-white text-sm">
                &nbsp;&middot;&nbsp;East Ottapalam, Kerala
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm text-white">
              <a
                href={`tel:${PHONE}`}
                data-ocid="footer.call.button"
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                {PHONE}
              </a>
              <span>|</span>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.whatsapp.button"
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp
              </a>
              <span>|</span>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.maps.link"
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                Directions
              </a>
              <span>|</span>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.instagram.link"
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
                @saf.laundry
              </a>
              <span>|</span>
              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.google_review.link"
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                <Star className="w-3.5 h-3.5" />
                Review Us
              </a>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-white/20 text-center text-xs text-gray-200">
            &copy;2026 Saf Laundry . All rights reserved.
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="floating.whatsapp.button"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20bc5a] rounded-full flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>

      {/* POLICY MODALS */}
      <Dialog
        open={openModal !== null}
        onOpenChange={(open) => !open && setOpenModal(null)}
      >
        <DialogContent
          className="max-w-lg max-h-[80vh] overflow-y-auto"
          data-ocid="policy.dialog"
        >
          <DialogHeader>
            <DialogTitle className="font-display text-xl">
              {openModal ? modalTitles[openModal] : ""}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-2">
            {openModal === "faq" && <FAQContent />}
            {openModal === "cancellation" && <CancellationContent />}
            {openModal === "privacy" && <PrivacyContent />}
            {openModal === "terms" && <TermsContent />}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
