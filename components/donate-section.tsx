"use client";

import { Building, Heart, GraduationCap, Package, Wrench, Users, ArrowRight, Sparkles, HandHeart, CheckCircle2, Target, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const donationCategories = [
  {
    icon: Building,
    title: "Building Fund",
    description: "Support our temple construction project. Land is fully paid at Stand #247 in Bulawayo's approved residential zone. Architectural plans completed and approved.",
    target: "$1,000/month",
    progress: "65% consistency",
    highlight: true,
  },
  {
    icon: Heart,
    title: "General Ministry",
    description: "Support daily operations, worship materials, pastoral care, and church activities across all 10 branches.",
    target: "Any amount",
    highlight: false,
  },
  {
    icon: Users,
    title: "Humanitarian Aid",
    description: "Monthly food distribution to 50 vulnerable families, school supplies for 200 children annually, and clothing bank operations.",
    target: "Any amount",
    highlight: false,
  },
  {
    icon: GraduationCap,
    title: "Leadership Development",
    description: "Training pastors, elders, and ministers. Supporting our Bible training institute and lay leader development programs.",
    target: "Any amount",
    highlight: false,
  },
];

const materialDonations = [
  "Groceries and non-perishable food items",
  "Clothing (new or gently used, all sizes)",
  "Building materials (cement, bricks, roofing)",
  "Office equipment and supplies",
  "Children's educational materials",
];

const skillDonations = [
  { icon: Wrench, text: "Professional services (legal, accounting, architectural)" },
  { icon: Building, text: "Technical skills (construction, electrical, plumbing)" },
  { icon: GraduationCap, text: "Training and workshop facilitation" },
  { icon: Users, text: "Mentorship programs" },
];

const givingPrograms = [
  { name: "Royal Blue Partners", description: "Monthly committed givers who sustain our ministry", icon: Heart },
  { name: "Kingdom Builders", description: "One-time major gifts for specific projects", icon: Building },
  { name: "Legacy Givers", description: "Estate planning and wills for lasting impact", icon: Target },
];

const developmentGoals = {
  immediate: [
    "Building Project Phase 1: Foundation & Framework by Dec 2025",
    "Monthly food distribution to 50 vulnerable families",
    "School supplies for 200 underprivileged children annually",
    "Skills training program for unemployed youth"
  ],
  medium: [
    "Complete main sanctuary seating 800 people",
    "Establish Bible training institute for lay leaders",
    "Launch community development center with library",
    "Plant 5 additional branches in underserved areas"
  ],
  longTerm: [
    "Build fully-equipped headquarters with conference facilities",
    "Establish orphan care and senior citizen programs",
    "Create missionary sending agency for regional outreach",
    "Develop media ministry with production studio"
  ]
};

export function DonateSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeGoals, setActiveGoals] = useState<"immediate" | "medium" | "longTerm">("immediate");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="donate" className="py-24 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[oklch(0.35_0.2_260)]" />
      
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="absolute top-20 left-10 w-64 h-64 bg-accent/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary-foreground/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div 
          className={`max-w-3xl mx-auto text-center mb-16 text-primary-foreground transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-sm mb-6">
            <HandHeart className="w-4 h-4 text-accent" />
            <span className="font-medium uppercase tracking-wider">Partner With Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Support Our Mission
          </h2>
          <p className="text-lg text-primary-foreground/70 leading-relaxed">
            Every contribution is meticulously recorded, acknowledged with an official receipt, and deployed according to donor designation. We believe in stewarding every resource as unto the Lord.
          </p>
        </div>

        {/* Donation categories */}
        <div 
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {donationCategories.map((category, index) => (
            <div
              key={category.title}
              className={`group relative rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col ${
                category.highlight
                  ? "bg-accent text-accent-foreground"
                  : "bg-primary-foreground/10 backdrop-blur-md text-primary-foreground border border-primary-foreground/10"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {category.highlight && (
                <div className="absolute -top-3 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Priority
                </div>
              )}

              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${
                category.highlight 
                  ? "bg-accent-foreground/10" 
                  : "bg-primary-foreground/10"
              }`}>
                <category.icon className="h-7 w-7" />
              </div>

              <h3 className="font-bold text-xl mb-2">{category.title}</h3>
              <p className={`text-sm leading-relaxed mb-4 flex-grow ${
                category.highlight ? "text-accent-foreground/80" : "text-primary-foreground/70"
              }`}>
                {category.description}
              </p>

              <div className="pt-4 border-t border-current/10">
                <div className={`text-sm font-semibold ${
                  category.highlight ? "text-accent-foreground" : "text-accent"
                }`}>
                  Target: {category.target}
                </div>
                {category.progress && (
                  <div className="text-xs mt-1 opacity-70">Currently at {category.progress}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Giving Programs */}
        <div className={`bg-primary-foreground/10 backdrop-blur-md rounded-2xl p-8 border border-primary-foreground/10 mb-16 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h3 className="text-2xl font-bold text-primary-foreground mb-6 text-center">Regular Giving Programs</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {givingPrograms.map((program) => (
              <div key={program.name} className="text-center p-6 bg-primary-foreground/5 rounded-xl">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <program.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-bold text-primary-foreground mb-2">{program.name}</h4>
                <p className="text-sm text-primary-foreground/70">{program.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Development Goals */}
        <div className={`mb-16 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h3 className="text-2xl font-bold text-primary-foreground mb-6 text-center">Strategic Development Goals</h3>
          
          {/* Timeline tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { key: "immediate" as const, label: "2024-2025", desc: "Immediate" },
              { key: "medium" as const, label: "2026-2028", desc: "Medium-Term" },
              { key: "longTerm" as const, label: "2029-2033", desc: "Long-Term" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveGoals(tab.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeGoals === tab.key
                    ? "bg-accent text-accent-foreground"
                    : "bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
                }`}
              >
                <span className="text-sm">{tab.desc}</span>
                <span className="block text-xs opacity-70">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Goals list */}
          <div className="bg-primary-foreground/10 backdrop-blur-md rounded-2xl p-8 border border-primary-foreground/10">
            <ul className="space-y-4">
              {developmentGoals[activeGoals].map((goal, index) => (
                <li key={index} className="flex items-start gap-4 text-primary-foreground">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Material and Skills donations */}
        <div 
          className={`grid md:grid-cols-2 gap-8 mb-16 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="bg-primary-foreground/10 backdrop-blur-md rounded-2xl p-8 border border-primary-foreground/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                <Package className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary-foreground">Material Donations</h3>
            </div>
            <ul className="space-y-4">
              {materialDonations.map((item) => (
                <li key={item} className="flex items-center gap-3 text-primary-foreground/80">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-primary-foreground/10 backdrop-blur-md rounded-2xl p-8 border border-primary-foreground/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                <Wrench className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary-foreground">Skills-Based Partnership</h3>
            </div>
            <ul className="space-y-4">
              {skillDonations.map((item) => (
                <li key={item.text} className="flex items-center gap-3 text-primary-foreground/80">
                  <div className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-4 w-4 text-accent" />
                  </div>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div 
          className={`text-center transition-all duration-700 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-primary-foreground/70 mb-6 max-w-xl mx-auto">
            &quot;Just as this ribbon has three strands woven into one strong cord, so we are called to weave Love, Peace, and Unity into every relationship, every decision, every ministry.&quot;
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            asChild 
            className="gap-2 text-base px-8 py-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            <Link href="/donate">
              Give Now
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
