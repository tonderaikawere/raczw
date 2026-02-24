"use client";

import Image from "next/image";
import { Crown, Shield, Mic, BookOpen, Heart, FileText, Building, Eye, Quote, Sparkles, GraduationCap, Home, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const leadershipRoles = [
  {
    icon: Crown,
    title: "Apostolic Office",
    leader: "Apostle R. Chigome",
    responsibilities: [
      "Provides overall visionary leadership and spiritual covering",
      "Ensures doctrinal purity and theological soundness",
      "Fathers other ministers and pastors in their calling",
      "Commissions new ministries and branches",
      "Receives and communicates divine direction",
      "Ordains and appoints all church leaders"
    ],
  },
  {
    icon: Shield,
    title: "Pastoral Team",
    leader: "10 Branch Pastors",
    responsibilities: [
      "Provide local spiritual oversight and pastoral care",
      "Preach, teach, and administer sacraments",
      "Conduct weddings, funerals, and dedications",
      "Lead local church councils and ministry teams",
      "Implement the apostolic vision at branch level",
      "Provide counseling and crisis intervention"
    ],
  },
  {
    icon: Mic,
    title: "Evangelists Department",
    leader: "Outreach Team",
    responsibilities: [
      "Lead organized outreach campaigns",
      "Train members in personal evangelism",
      "Conduct crusades and open-air meetings",
      "Follow up with new converts",
      "Maintain evangelism statistics and reports"
    ],
  },
  {
    icon: BookOpen,
    title: "Elders Council",
    leader: "12 Elders Total",
    responsibilities: [
      "Provide spiritual wisdom and godly counsel",
      "Assist with pastoral care and visitation",
      "Help resolve conflicts and disciplinary matters",
      "Model mature Christian character",
      "Pray specifically for church needs"
    ],
  },
  {
    icon: Heart,
    title: "Deacons & Deaconesses",
    leader: "25 Total",
    responsibilities: [
      "Manage practical church operations",
      "Oversee benevolence and welfare programs",
      "Coordinate church maintenance and facilities",
      "Assist during communion and offerings",
      "Support families during crises"
    ],
  },
  {
    icon: Eye,
    title: "Prophetic Ministry Team",
    leader: "8 Prophets/Prophetesses",
    responsibilities: [
      "Provide personal and corporate prophetic ministry",
      "Assist in discernment of spiritual matters",
      "Intercede with specific divine revelation",
      "Operate under strict accountability",
      "Conduct prophetic training workshops"
    ],
  },
  {
    icon: FileText,
    title: "Secretarial Administration",
    leader: "Admin Team",
    responsibilities: [
      "Maintain all church records and membership databases",
      "Handle church correspondence and communications",
      "Document minutes for all meetings",
      "Manage church calendar and scheduling",
      "Oversee legal and compliance documentation"
    ],
  },
  {
    icon: Building,
    title: "Project Management Office",
    leader: "PMO Team",
    responsibilities: [
      "Oversee church construction and development",
      "Manage the $1,000 monthly building fund",
      "Coordinate volunteer labor and skilled workers",
      "Source building materials and negotiate suppliers",
      "Provide regular progress reports"
    ],
  },
];

export function LeadershipSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedRole, setExpandedRole] = useState<number | null>(null);
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
    <section id="leadership" className="py-24 bg-background relative overflow-hidden" ref={sectionRef}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute -top-40 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div 
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm mb-6">
            <Crown className="w-4 h-4" />
            <span className="font-medium uppercase tracking-wider">Our Leadership</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Biblical Governance Structure
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We operate under a biblically-based apostolic governance model, guided by a comprehensive <span className="text-primary font-semibold">48-page constitution</span> ensuring transparency, accountability, and spiritual integrity.
          </p>
        </div>

        {/* Founder highlight card */}
        <div 
          className={`relative mb-20 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 rounded-3xl blur-3xl" />
          
          <div className="relative bg-card border border-border rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image side */}
              <div className="relative h-80 lg:h-auto">
                <Image
                  src="/images/apostle-chigome.png"
                  alt="Apostle R. Chigome - Founder of Redemption Apostolic Church"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 lg:bg-gradient-to-l" />
                
                {/* Overlay content for mobile */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end lg:hidden">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-5 h-5 text-accent" />
                    <span className="text-primary-foreground/80 text-sm font-medium">Founder & Apostolic Leader</span>
                  </div>
                  <h3 className="text-3xl font-bold text-primary-foreground">Apostle R. Chigome</h3>
                </div>
              </div>

              {/* Content side */}
              <div className="p-8 lg:p-12">
                {/* Desktop title */}
                <div className="hidden lg:block mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <span className="text-primary text-sm font-medium">Founder & Apostolic Leader</span>
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">Apostle R. Chigome</h3>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Born in rural Zimbabwe, Apostle Chigome experienced a dramatic conversion at age 22 while facing personal crisis. His theological training includes three years at Zimbabwe Christian College and ongoing mentorship under senior African apostles. He embodies the Royal Blue Ribbon values in his personal and ministerial life.
                </p>

                {/* Quote */}
                <div className="relative mb-8 bg-secondary rounded-xl p-6">
                  <Quote className="absolute -top-3 -left-3 w-8 h-8 text-primary/30" />
                  <p className="text-lg font-medium text-foreground italic leading-relaxed">
                    &quot;True leadership is measured not by how many follow you, but by how many you develop to lead others. My greatest achievement won&apos;t be buildings we erect, but leaders we raise.&quot;
                  </p>
                </div>

                {/* Info grid */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-secondary rounded-xl">
                    <Home className="w-5 h-5 text-primary mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">Married</p>
                    <p className="font-semibold text-foreground text-sm">18 Years</p>
                  </div>
                  <div className="text-center p-4 bg-secondary rounded-xl">
                    <Users className="w-5 h-5 text-primary mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">Children</p>
                    <p className="font-semibold text-foreground text-sm">3 Kids</p>
                  </div>
                  <div className="text-center p-4 bg-secondary rounded-xl">
                    <GraduationCap className="w-5 h-5 text-primary mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">Training</p>
                    <p className="font-semibold text-foreground text-sm">3 Years</p>
                  </div>
                </div>

                {/* Family */}
                <div className="mt-6 p-4 border border-border rounded-xl">
                  <p className="text-sm text-muted-foreground mb-2">Family Ministry Model</p>
                  <p className="text-sm text-foreground">
                    Married to <span className="font-semibold text-primary">Prophetess L. Chigome</span> for 18 years. Father to Emmanuel (16), David (14), and Grace (11). Family devotions are a non-negotiable daily practice in their home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership roles grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadershipRoles.map((role, index) => (
            <div
              key={role.title}
              className={`group relative transition-all duration-700 h-full ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${400 + index * 50}ms` }}
            >
              <div 
                className={`bg-card border rounded-2xl p-6 transition-all duration-500 cursor-pointer h-full flex flex-col ${
                  expandedRole === index 
                    ? "border-primary shadow-xl shadow-primary/10" 
                    : "border-border hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 hover:border-primary/30"
                }`}
                onClick={() => setExpandedRole(expandedRole === index ? null : index)}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                  <role.icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="font-bold text-foreground mb-1">{role.title}</h3>
                <p className="text-sm text-primary font-medium mb-3">{role.leader}</p>
                
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 flex-grow">
                  {role.responsibilities[0]}
                </p>

                {/* Expanded content */}
                {expandedRole === index && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Responsibilities</p>
                    <ul className="space-y-2">
                      {role.responsibilities.map((resp, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <button className="mt-4 text-xs text-primary font-medium self-start">
                  {expandedRole === index ? "Show less" : "View responsibilities"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
