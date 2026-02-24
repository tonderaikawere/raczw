"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Heart, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/branches", label: "Branches" },
  { href: "/sermons", label: "Sermons" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

const moreLinks = [
  { href: "/beliefs", label: "Beliefs" },
  { href: "/leadership", label: "Leadership" },
  { href: "/ministries", label: "Ministries" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/prayer", label: "Prayer" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "News" },
  { href: "/resources", label: "Resources" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setIsMoreOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-lg shadow-primary/5"
          : "bg-background/95 backdrop-blur-lg border-b border-border shadow-lg shadow-primary/5"
      }`}
    >
      <div className="w-full max-w-screen-2xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex h-14 sm:h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            <div className="relative w-28 h-8 sm:w-32 sm:h-10 md:w-40 md:h-12">              <Image
                src="/logo.png"
                alt="Redemption Apostolic Church"
                fill
                priority
                sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, 160px"
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  pathname === link.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* More Dropdown */}
            <div className="relative" ref={moreRef}>
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className={`px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1 ${
                  pathname === "/more" || moreLinks.some(link => pathname === link.href)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                More
                <ChevronDown className={`w-4 h-4 transition-transform ${isMoreOpen ? "rotate-180" : ""}`} />
              </button>
              
              {isMoreOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
                  {moreLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-4 py-2 text-sm hover:bg-secondary transition-colors ${
                        pathname === link.href ? "text-primary bg-primary/10" : "text-muted-foreground"
                      }`}
                      onClick={() => setIsMoreOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Button 
              asChild 
              className="ml-2 sm:ml-4 gap-2 shadow-lg transition-all hover:scale-105 shadow-primary/20"
            >
              <Link href="/donate">
                <Heart className="w-4 h-4" />
                <span className="hidden sm:inline">Donate</span>
              </Link>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg transition-colors text-foreground hover:bg-secondary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden transition-all duration-300 ${
            isOpen
              ? "max-h-[calc(100vh-3.5rem)] opacity-100 overflow-y-auto"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="border-t border-border pt-2 mt-2">
              <Link
                href="/more"
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  pathname === "/more"
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                More
              </Link>
            </div>
            
            <Button 
              asChild 
              className="w-full gap-2 shadow-lg transition-all hover:scale-105 shadow-primary/20"
            >
              <Link href="/donate" onClick={() => setIsOpen(false)}>
                <Heart className="w-4 h-4" />
                Donate
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
