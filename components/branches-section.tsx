"use client";

import Image from "next/image";
import { MapPin, Users, ChevronRight, Building2, Star } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { allBranches, bulawayoBranches, otherBranches, totalMembers } from "@/lib/branches-data";

type BranchesSectionProps = {
  query?: string;
};

export function BranchesSection({ query }: BranchesSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const q = (query || "").trim();

  const { filteredBulawayoBranches, filteredOtherBranches } = useMemo(() => {
    const term = q.toLowerCase();
    const matches = (branch: { name: string; location: string; pastor: string; focus: string }) => {
      if (!term) return true;
      return (
        branch.name.toLowerCase().includes(term) ||
        branch.location.toLowerCase().includes(term) ||
        branch.pastor.toLowerCase().includes(term) ||
        branch.focus.toLowerCase().includes(term)
      );
    };

    return {
      filteredBulawayoBranches: bulawayoBranches.filter(matches),
      filteredOtherBranches: otherBranches.filter(matches),
    };
  }, [q]);

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
    <section id="branches" className="py-24 bg-secondary relative overflow-hidden" ref={sectionRef}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-50">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header with image */}
        <div className={`grid lg:grid-cols-2 gap-12 items-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm mb-6">
              <Building2 className="w-4 h-4" />
              <span className="font-medium uppercase tracking-wider">Our Locations</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              10 Branches Across Zimbabwe
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              From those eight original members in Bulawayo, Redemption Apostolic Church has experienced exponential growth through divine favor. Each branch serves as an <span className="text-primary font-semibold">embassy of God&apos;s Kingdom</span> in its region.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-4">
              <div className="bg-card border border-border rounded-2xl p-5 text-center min-w-[120px]">
                <div className="text-3xl font-bold text-primary">{allBranches.length}</div>
                <div className="text-sm text-muted-foreground mt-1">Branches</div>
              </div>
              <div className="bg-primary text-primary-foreground rounded-2xl p-5 text-center min-w-[120px]">
                <div className="text-3xl font-bold">{totalMembers.toLocaleString()}</div>
                <div className="text-sm text-primary-foreground/70 mt-1">Members</div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-5 text-center min-w-[120px]">
                <div className="text-3xl font-bold text-accent">4</div>
                <div className="text-sm text-muted-foreground mt-1">Provinces</div>
              </div>
            </div>
          </div>

          {/* Church building image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/church-building.jpg"
                alt="Redemption Apostolic Church building"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-primary-foreground font-semibold text-lg">Building Project in Progress</p>
                <p className="text-primary-foreground/80 text-sm">Stand #247, Bulawayo - Foundation & Framework Phase</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bulawayo Region */}
        <div className={`mb-12 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <MapPin className="w-6 h-6 text-primary" />
            Bulawayo Region
            <span className="text-sm font-normal text-muted-foreground">(5 branches)</span>
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBulawayoBranches.map((branch, index) => (
              <BranchCard 
                key={branch.name} 
                branch={branch} 
                index={index}
                isVisible={isVisible}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
              />
            ))}
          </div>
        </div>

        {/* Other Regions */}
        <div className={`transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <MapPin className="w-6 h-6 text-primary" />
            Other Regions
            <span className="text-sm font-normal text-muted-foreground">(Gweru, Kadoma, Harare, Kingsdale)</span>
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredOtherBranches.map((branch, index) => (
              <BranchCard 
                key={branch.name} 
                branch={branch} 
                index={index + bulawayoBranches.length}
                isVisible={isVisible}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface BranchCardProps {
  branch: {
    name: string;
    location: string;
    pastor: string;
    members: number;
    focus: string;
    featured: boolean;
    slug: string;
  };
  index: number;
  isVisible: boolean;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}

function BranchCard({ branch, index, isVisible, hoveredIndex, setHoveredIndex }: BranchCardProps) {
  return (
    <Link href={`/branches/${branch.slug}`} className="block h-full">
      <div
        className={`group relative transition-all duration-700 cursor-pointer h-full ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        style={{ transitionDelay: `${index * 50}ms` }}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <div className={`absolute inset-0 bg-primary/20 rounded-2xl blur-xl transition-opacity duration-500 ${hoveredIndex === index ? "opacity-100" : "opacity-0"}`} />
        
        <div className={`relative bg-card border rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col ${branch.featured ? "border-primary/30" : "border-border"} ${hoveredIndex === index ? "shadow-2xl shadow-primary/10" : ""}`}>
          {branch.featured && (
            <div className="absolute -top-3 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full flex items-center gap-1">
              <Star className="w-3 h-3" />
              Featured
            </div>
          )}

          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                {branch.name}
              </h3>
              <div className="inline-flex items-center gap-1.5 mt-2 px-2 py-1 bg-primary/10 rounded-full">
                <Users className="h-3.5 w-3.5 text-primary" />
                <span className="text-sm font-medium text-primary">{branch.members} members</span>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2 text-sm text-muted-foreground mb-3">
            <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-primary/50" />
            <span>{branch.location}</span>
          </div>

          <p className="text-sm text-muted-foreground mb-4 flex-grow">{branch.focus}</p>

          <div className="pt-4 border-t border-border flex items-center justify-between">
            <p className="text-sm font-medium text-foreground">{branch.pastor}</p>
            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
              <ChevronRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
