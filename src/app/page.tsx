"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Clock, Code, Database, DollarSign, GraduationCap, ShieldCheck, Smile, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="mediumLarge"
        background="noiseDiagonalGradient"
        cardStyle="subtle-shadow"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        { name: "Home", id: "hero" },
        { name: "About", id: "about" },
        { name: "Amenities", id: "features" },
        { name: "Rooms", id: "pricing" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Singh Thakuri House"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{ variant: "radial-gradient" }}
      title="Welcome to Singh Thakuri House"
      description="Experience authentic hospitality at our charming 2-star hotel. Comfortable stays, local warmth, and a perfect home base for your adventures."
      kpis={[
        { value: "2-Star", label: "Comfort Rated" },
        { value: "100%", label: "Guest Care" },
        { value: "Central", label: "Location" },
      ]}
      enableKpiAnimation={true}
      imageSrc="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
      imageAlt="Singh Thakuri House exterior"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="Our Story"
      title="Your Home Away From Home"
      description="Singh Thakuri House offers travelers a cozy retreat with all the essential comforts. We pride ourselves on creating a friendly, family-like atmosphere for every guest."
      subdescription="Conveniently located to help you explore local attractions while providing a peaceful sanctuary to rest."
      icon={ShieldCheck}
      imageSrc="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardNineteen
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        { tag: "Stay", title: "Comfortable Rooms", subtitle: "Relax & Unwind", description: "Clean, well-maintained rooms designed for a restful sleep.", imageSrc: "https://images.unsplash.com/photo-1590490360170-077553f19114?q=80&w=2070&auto=format&fit=crop" },
        { tag: "Dining", title: "Local Breakfast", subtitle: "Fresh Morning", description: "Start your day with homemade local delights prepared fresh daily.", imageSrc: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=2070&auto=format&fit=crop" },
        { tag: "Service", title: "24/7 Support", subtitle: "Always Available", description: "Our dedicated staff is here to ensure your stay is seamless.", imageSrc: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop" },
      ]}
      title="Hotel Amenities"
      description="We offer essential services to ensure your stay is enjoyable."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        { id: "standard", badge: "Essential", price: "$45/night", name: "Standard Room", buttons: [{ text: "Book Now", href: "#contact" }], features: ["Free Wi-Fi", "Breakfast Included", "Daily Housekeeping"] },
        { id: "deluxe", badge: "Best Value", price: "$65/night", name: "Deluxe Room", buttons: [{ text: "Book Now", href: "#contact" }], features: ["Everything in Standard", "Mountain View", "Premium Toiletries"] },
        { id: "suite", badge: "Premium", price: "$90/night", name: "Executive Suite", buttons: [{ text: "Contact Us", href: "#contact" }], features: ["Everything in Deluxe", "Spacious Living Area", "Personalized Concierge"] },
      ]}
      title="Stay Options"
      description="Find the perfect room for your needs."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Book Your Stay"
      description="Reach out to us directly for inquiries or to book your room at Singh Thakuri House."
      inputs={[
        { name: "name", type: "text", placeholder: "Your Name", required: true },
        { name: "email", type: "email", placeholder: "Email Address", required: true },
        { name: "dates", type: "text", placeholder: "Preferred Dates" },
      ]}
      textarea={{ name: "message", placeholder: "Special requests? Let us know!" }}
      imageSrc="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2070&auto=format&fit=crop"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2074&auto=format&fit=crop"
      logoText="Singh Thakuri House"
      columns={[
        { title: "Stay", items: [{ label: "Rooms", href: "#pricing" }, { label: "Amenities", href: "#features" }] },
        { title: "Connect", items: [{ label: "About Us", href: "#about" }, { label: "Contact", href: "#contact" }] },
      ]}
      copyrightText="© 2025 Singh Thakuri House. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}