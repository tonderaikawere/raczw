"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight, MapPin, Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { allBranches } from "@/lib/branches-data";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent | PointerEvent) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node)) {
        setIsSuggestionsOpen(false);
        setActiveIndex(-1);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  const suggestedBranches = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    const base = allBranches.map((b) => ({
      ...b,
      haystack: `${b.name} ${b.location} ${b.pastor} ${b.focus} ${b.slug}`.toLowerCase(),
    }));

    if (!q) {
      return base
        .filter((b) => b.featured)
        .slice(0, 6)
        .map(({ haystack: _h, ...b }) => b);
    }

    const scored = base
      .map((b) => {
        let score = 0;
        if (b.name.toLowerCase().startsWith(q)) score += 5;
        if (b.name.toLowerCase().includes(q)) score += 3;
        if (b.location.toLowerCase().includes(q)) score += 2;
        if (b.pastor.toLowerCase().includes(q)) score += 1;
        if (b.focus.toLowerCase().includes(q)) score += 1;
        if (b.slug.toLowerCase().includes(q)) score += 1;
        if (!b.haystack.includes(q)) score = 0;
        return { ...b, score };
      })
      .filter((b) => b.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6);

    return scored.map(({ haystack: _h, score: _s, ...b }) => b);
  }, [searchQuery]);

  const navigateToBranch = (slug: string) => {
    setIsSuggestionsOpen(false);
    setActiveIndex(-1);
    router.push(`/branches/${slug}`);
  };

  const navigateToSearch = (q: string) => {
    setIsSuggestionsOpen(false);
    setActiveIndex(-1);
    router.push(`/branches?q=${encodeURIComponent(q)}`);
  };

  return (
    <section className="relative h-screen flex items-center justify-center px-safe pt-safe">
      {/* Responsive background with optimized image handling */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/hero-worship.png"
          alt="Redemption Apostolic Church congregation worshipping"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1920px"
          quality={90}
        />
        {/* Dynamic overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 
                      sm:from-black/65 sm:via-black/40 sm:to-black/75
                      lg:from-black/60 lg:via-black/35 lg:to-black/70" />
      </div>

      <div className="relative z-10 w-full max-w-[95vw] mx-auto px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 
                    2xl:max-w-7xl text-center">
        <div className="max-w-4xl mx-auto py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="bg-black/40 border border-white/10 rounded-3xl p-5 xs:p-6 shadow-[0_18px_60px_-24px_rgba(0,0,0,0.75)] sm:bg-transparent sm:border-0 sm:rounded-none sm:p-0 sm:shadow-none">
            {/* Responsive heading with fluid typography */}
            <h1 
              className={`font-bold text-white mb-3 xs:mb-4 sm:mb-5 md:mb-6 leading-tight transition-all duration-700 delay-100 
                        ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <span className="block text-sm xs:text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 
                            2xl:text-6xl font-medium text-white/85 mb-2 tracking-wide">
                Welcome to
              </span>
              <span className="block text-4xl xs:text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                            2xl:text-8xl font-extrabold bg-gradient-to-r from-blue-300 via-blue-200 to-cyan-300 
                            bg-clip-text text-transparent leading-[1.05]">
                Redemption
              </span>
              <span className="block text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
                            2xl:text-7xl font-extrabold bg-gradient-to-r from-blue-300 via-blue-200 to-cyan-300 
                            bg-clip-text text-transparent leading-[1.05]">
                Apostolic Church
              </span>
            </h1>

            {/* Responsive subtitle */}
            <p 
              className={`text-white/90 max-w-[90vw] sm:max-w-2xl md:max-w-3xl mx-auto mb-6 xs:mb-7 sm:mb-8 md:mb-10 lg:mb-12 
                        leading-relaxed transition-all duration-700 delay-200 
                        text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl 
                        px-2 xs:px-4 sm:px-0
                        ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              A sanctuary of hearts united in Love, Peace & Unity.
              <span className="hidden xs:inline"> Join our growing family of over 1,200 members across Zimbabwe.</span>
              <span className="xs:hidden"> Join 1,200+ members.</span>
            </p>

            {/* Branch Search Section */}
            <div className={`relative z-40 mb-8 xs:mb-10 sm:mb-12 transition-all duration-700 delay-300 
                           ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="max-w-md xs:max-w-lg sm:max-w-xl md:max-w-2xl mx-auto">
                <div className="relative z-30 bg-black/45 rounded-2xl p-1.5 border border-white/15 shadow-[0_16px_50px_-24px_rgba(0,0,0,0.75)] sm:bg-transparent sm:border-white/0 sm:shadow-none">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-white/60" />
                      <input
                        type="text"
                        placeholder="Search for a branch near you..."
                        value={searchQuery}
                        onChange={(e) => {
                          setSearchQuery(e.target.value);
                          setIsSuggestionsOpen(true);
                          setActiveIndex(-1);
                        }}
                        onFocus={() => {
                          setIsSuggestionsOpen(true);
                        }}
                        onKeyDown={(e) => {
                          if (!isSuggestionsOpen) {
                            if (e.key === "Enter" && searchQuery.trim()) {
                              navigateToSearch(searchQuery.trim());
                            }
                            return;
                          }

                          if (e.key === "Escape") {
                            setIsSuggestionsOpen(false);
                            setActiveIndex(-1);
                            return;
                          }

                          if (e.key === "ArrowDown") {
                            e.preventDefault();
                            setActiveIndex((prev) => Math.min(prev + 1, suggestedBranches.length - 1));
                            return;
                          }

                          if (e.key === "ArrowUp") {
                            e.preventDefault();
                            setActiveIndex((prev) => Math.max(prev - 1, -1));
                            return;
                          }

                          if (e.key === "Enter") {
                            e.preventDefault();
                            const selected = suggestedBranches[activeIndex];
                            if (selected) {
                              navigateToBranch(selected.slug);
                              return;
                            }
                            if (searchQuery.trim()) {
                              navigateToSearch(searchQuery.trim());
                            }
                          }
                        }}
                        className="w-full bg-black/40 text-white placeholder-white/55 px-10 py-3.5 sm:py-4 
                                 text-base sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400/70 
                                 rounded-xl"
                      />

                      {isSuggestionsOpen && suggestedBranches.length > 0 && (
                        <div
                          ref={suggestionsRef}
                          className="absolute z-50 left-0 right-0 top-full mt-2 bg-[rgba(10,12,16,0.95)] border border-white/10 rounded-2xl overflow-hidden shadow-2xl max-h-[50vh] overflow-auto"
                        >
                          <div className="px-3 pt-3 pb-2 text-xs font-medium text-white/60">
                            {searchQuery.trim() ? "Recommended" : "Featured branches"}
                          </div>
                          <div className="pb-2">
                            {suggestedBranches.map((b, idx) => (
                              <button
                                key={b.slug}
                                type="button"
                                className={`w-full text-left px-3 py-2.5 transition-colors ${
                                  idx === activeIndex ? "bg-white/10" : "hover:bg-white/5"
                                }`}
                                onMouseEnter={() => setActiveIndex(idx)}
                                onClick={() => navigateToBranch(b.slug)}
                              >
                                <div className="flex items-center justify-between gap-3">
                                  <div className="min-w-0">
                                    <div className="text-sm font-semibold text-white truncate">{b.name}</div>
                                    <div className="text-xs text-white/60 truncate">{b.location}</div>
                                  </div>
                                  <div className="shrink-0 text-white/50">
                                    <ArrowRight className="w-4 h-4" />
                                  </div>
                                </div>
                              </button>
                            ))}
                          </div>
                          {searchQuery.trim() && (
                            <button
                              type="button"
                              className="w-full text-left px-3 py-3 border-t border-white/10 hover:bg-white/5 transition-colors"
                              onClick={() => navigateToSearch(searchQuery.trim())}
                            >
                              <div className="text-sm font-semibold text-white">Search all branches</div>
                              <div className="text-xs text-white/60 truncate">&quot;{searchQuery.trim()}&quot;</div>
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                    <Button 
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700 text-white gap-2 
                              px-4 sm:px-6 py-3 sm:py-4 
                              text-base sm:text-base font-semibold 
                              rounded-xl shadow-lg shadow-blue-600/20 transition-all 
                              hover:translate-y-[-1px] active:translate-y-0 border-0
                              min-h-[48px] sm:min-h-[52px]"
                      asChild
                    >
                      <Link href="/branches">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                        Find Branch
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Responsive quick info grid */}
            <div className={`relative z-10 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 xs:gap-4 sm:gap-6 
                           mb-6 xs:mb-7 sm:mb-8 md:mb-10 lg:mb-12 max-w-md xs:max-w-lg sm:max-w-2xl mx-auto 
                           px-2 xs:px-0 transition-all duration-700 delay-250 
                           ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="flex items-center justify-center gap-2 text-white/90 bg-white/8 
                            rounded-2xl p-3 border border-white/10">
                <Calendar className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-blue-300 flex-shrink-0" />
                <span className="text-xs xs:text-sm sm:text-base font-semibold truncate">Sundays 11:00 AM</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-white/90 bg-white/8 
                            rounded-2xl p-3 border border-white/10">
                <MapPin className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-blue-300 flex-shrink-0" />
                <span className="text-xs xs:text-sm sm:text-base font-semibold truncate">10 Branches</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-white/90 bg-white/8 
                            rounded-2xl p-3 col-span-1 xs:col-span-2 sm:col-span-1 border border-white/10">
                <Clock className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-blue-300 flex-shrink-0" />
                <span className="text-xs xs:text-sm sm:text-base font-semibold truncate">24/7 Prayer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}