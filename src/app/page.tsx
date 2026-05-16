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
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Features",
          id: "features",
        },
        {
          name: "Pricing",
          id: "pricing",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="EduManage"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "radial-gradient",
      }}
      title="Streamline Your School Management"
      description="Simplify student billing, grade management, and communications with our all-in-one education platform."
      kpis={[
        {
          value: "500+",
          label: "Schools Managed",
        },
        {
          value: "99.9%",
          label: "Billing Accuracy",
        },
        {
          value: "24/7",
          label: "Support Access",
        },
      ]}
      enableKpiAnimation={true}
      imageSrc="http://img.b2bpic.net/free-photo/training-study-knowledge-e-learning-concept_53876-120707.jpg"
      imageAlt="educational dashboard interface design"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/education-application-knowledge-development-concept_53876-105721.jpg",
          alt: "Education Application Knowledge Development Concept",
        },
        {
          src: "http://img.b2bpic.net/free-photo/programming-code-pc-display-used-developing-software_482257-122979.jpg",
          alt: "Programming code on PC display used for developing software",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-person-holding-smartphone_23-2148389008.jpg",
          alt: "Close-up person holding a smartphone",
        },
        {
          src: "http://img.b2bpic.net/free-photo/elegant-cozy-office-lifestyle_23-2149636247.jpg",
          alt: "Elegant and cozy office lifestyle",
        },
        {
          src: "http://img.b2bpic.net/free-photo/vintage-style-people-working-office-with-computers_23-2149850977.jpg",
          alt: "Vintage style people working in an office with computers",
        },
      ]}
      avatarText="Trusted by 500+ schools globally"
      marqueeItems={[
        {
          type: "text-icon",
          text: "Secure Billing",
          icon: ShieldCheck,
        },
        {
          type: "text-icon",
          text: "Parent Portal",
          icon: Users,
        },
        {
          type: "text-icon",
          text: "Grade Tracking",
          icon: GraduationCap,
        },
        {
          type: "text-icon",
          text: "Cloud Database",
          icon: Database,
        },
        {
          type: "text-icon",
          text: "API Support",
          icon: Code,
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="Trusted Platform"
      title="Built for Modern Education"
      description="Our software integrates seamlessly into daily school operations, reducing manual work and increasing transparency for parents."
      subdescription="With advanced security and intuitive design, managing school life has never been simpler."
      icon={ShieldCheck}
      imageSrc="http://img.b2bpic.net/free-photo/three-friends-studying-from-documents-notebooks-library_23-2149283307.jpg"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardNineteen
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          tag: "Finance",
          title: "Automated Billing",
          subtitle: "Simplified Payments",
          description: "Generate invoices and track payments automatically.",
          imageSrc: "http://img.b2bpic.net/free-vector/flat-icons-set-web-project-plan-interface-design-marketing-research_126523-1105.jpg",
        },
        {
          tag: "Engagement",
          title: "Parent Portal",
          subtitle: "Unified Updates",
          description: "Keep parents informed with real-time notifications.",
          imageSrc: "http://img.b2bpic.net/free-photo/crop-girl-fulfilling-exercise-mother_23-2147848710.jpg",
        },
        {
          tag: "Academic",
          title: "Grade Management",
          subtitle: "Secure Records",
          description: "Maintain organized student performance records.",
          imageSrc: "http://img.b2bpic.net/free-photo/clipboard-icon-front-side_187299-39412.jpg",
        },
      ]}
      title="Comprehensive Modules"
      description="Powerful tools to manage every aspect of your school."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "40%",
          title: "Admin Time Saved",
          description: "Reduce manual billing hours per week.",
          icon: Clock,
        },
        {
          id: "m2",
          value: "95%",
          title: "Parent Satisfaction",
          description: "Improved engagement rates reported.",
          icon: Smile,
        },
        {
          id: "m3",
          value: "$1M+",
          title: "Processed Annually",
          description: "Safe, secure, and reliable transaction volume.",
          icon: DollarSign,
        },
      ]}
      title="Proven Results"
      description="Efficiency driven metrics for our partners."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic",
          badge: "Essential",
          price: "$199/mo",
          name: "Basic Plan",
          buttons: [
            {
              text: "Get Started",
              href: "#",
            },
          ],
          features: [
            "Billing Automation",
            "Student Database",
            "Email Support",
          ],
        },
        {
          id: "pro",
          badge: "Popular",
          price: "$499/mo",
          name: "Professional",
          buttons: [
            {
              text: "Get Started",
              href: "#",
            },
          ],
          features: [
            "Everything in Basic",
            "Advanced Analytics",
            "Parent Portal App",
            "Priority Support",
          ],
        },
        {
          id: "enterprise",
          badge: "Custom",
          price: "Custom",
          name: "Enterprise",
          buttons: [
            {
              text: "Contact Us",
              href: "#",
            },
          ],
          features: [
            "All Pro Features",
            "Dedicated Account Manager",
            "SSO Integration",
            "API Access",
          ],
        },
      ]}
      title="Flexible Plans"
      description="Choose a plan that fits your school size."
    />
  </div>

  <div id="testimonial" data-section="testimonial">
      <TestimonialCardFifteen
      useInvertedBackground={true}
      testimonial="Our school’s billing process was a nightmare before we switched to EduManage. Everything is now handled automatically."
      rating={5}
      author="Sarah Jenkins, Principal"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/smiling-businessman-holding-jacket-shoulder_1262-3853.jpg",
          alt: "Sarah",
        },
        {
          src: "http://img.b2bpic.net/free-photo/closeup-portrait-caucasian-happy-teacher-glasses_74855-9736.jpg",
          alt: "Closeup portrait of Caucasian happy teacher in glasses",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-african-american-girl-sitting-cafe_1262-3083.jpg",
          alt: "Smiling African American girl sitting in cafe",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-smiley-man-library_23-2149204750.jpg",
          alt: "Close up smiley man at library",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-students-classroom_329181-13009.jpg",
          alt: "Young students in the classroom",
        },
      ]}
      ratingAnimation="blur-reveal"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "Is data secure?",
          content: "Yes, we use bank-grade 256-bit encryption for all records.",
        },
        {
          id: "2",
          title: "Can I integrate my bank?",
          content: "Yes, we support most major banking integrations.",
        },
        {
          id: "3",
          title: "Is training included?",
          content: "Absolutely, all plans come with onboarding support.",
        },
      ]}
      sideTitle="Common Questions"
      sideDescription="Everything you need to know."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Get a Consultation"
      description="See how EduManage can transform your school today."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
        },
        {
          name: "email",
          type: "email",
          placeholder: "Email Address",
        },
        {
          name: "school",
          type: "text",
          placeholder: "School Name",
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "How can we help?",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/audio-equipment-headset-with-mic-used-customer-support-job-workspace-closeup_482257-126144.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/serious-young-blonde-lady-walking-outdoors-looking-aside_171337-19432.jpg"
      logoText="EduManage"
      columns={[
        {
          title: "Product",
          items: [
            {
              label: "Features",
              href: "#features",
            },
            {
              label: "Pricing",
              href: "#pricing",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#",
            },
            {
              label: "Support",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2025 | EduManage Inc."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
