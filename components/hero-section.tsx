"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Clock, ArrowRight, Search } from "lucide-react";
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
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node)
      ) {
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
      haystack:
        `${b.name} ${b.location} ${b.pastor} ${b.focus} ${b.slug}`.toLowerCase(),
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
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-worship.png"
          alt="Redemption Apostolic Church worship"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={90}
        />
        {/* Clean overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Main Heading - Clean and simple */}
          <h1 className="text-white mb-4 sm:mb-6">
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2">
              Redemption
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-200">
              Apostolic Church
            </span>
          </h1>

          {/* Tagline - One line only */}
          <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-10">
            A sanctuary of hearts united in Love, Peace & Unity
          </p>

          {/* Search Bar - Clean design */}
          <div className="max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="relative">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Find your local branch..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setIsSuggestionsOpen(true);
                      setActiveIndex(-1);
                    }}
                    onFocus={() => setIsSuggestionsOpen(true)}
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
                        setActiveIndex((prev) =>
                          Math.min(prev + 1, suggestedBranches.length - 1),
                        );
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
                    className="w-full bg-white text-gray-900 placeholder:text-gray-400 pl-12 pr-4 py-3 text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  {/* Suggestions Dropdown */}
                  {isSuggestionsOpen && suggestedBranches.length > 0 && (
                    <div
                      ref={suggestionsRef}
                      className="absolute z-50 left-0 right-0 top-full mt-2 bg-white rounded-lg shadow-xl border border-gray-200 max-h-96 overflow-auto"
                    >
                      <div className="px-4 pt-3 pb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        {searchQuery.trim()
                          ? "Search Results"
                          : "Featured Branches"}
                      </div>
                      {suggestedBranches.map((b, idx) => (
                        <button
                          key={b.slug}
                          type="button"
                          className={`w-full text-left px-4 py-3 transition-colors ${
                            idx === activeIndex
                              ? "bg-gray-100"
                              : "hover:bg-gray-50"
                          }`}
                          onMouseEnter={() => setActiveIndex(idx)}
                          onClick={() => navigateToBranch(b.slug)}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-sm font-semibold text-gray-900">
                                {b.name}
                              </div>
                              <div className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                                <MapPin className="w-3 h-3" />
                                {b.location}
                              </div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-400" />
                          </div>
                        </button>
                      ))}
                      {searchQuery.trim() && (
                        <button
                          type="button"
                          className="w-full text-left px-4 py-3 border-t border-gray-200 hover:bg-gray-50 transition-colors"
                          onClick={() => navigateToSearch(searchQuery.trim())}
                        >
                          <div className="text-sm font-semibold text-blue-600">
                            View all results
                          </div>
                          <div className="text-xs text-gray-500">
                            Search for "{searchQuery.trim()}"
                          </div>
                        </button>
                      )}
                    </div>
                  )}
                </div>
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 h-auto rounded-lg shadow-lg shadow-blue-600/20 transition-all hover:scale-105 active:scale-95"
                  asChild
                >
                  <Link href="/branches">
                    <MapPin className="w-4 h-4 mr-2" />
                    Browse All
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Simple Info Chips */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-white/80">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-full backdrop-blur-sm">
              <Calendar className="w-3.5 h-3.5" />
              <span>Sundays 11AM</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-full backdrop-blur-sm">
              <MapPin className="w-3.5 h-3.5" />
              <span>10 Branches</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-full backdrop-blur-sm">
              <Clock className="w-3.5 h-3.5" />
              <span>24/7 Prayer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
