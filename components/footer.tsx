import Link from "next/link";
import { Heart, Mail, MapPin, Clock, ArrowUpRight, Users, Building2, Book } from "lucide-react";
import Image from "next/image";

const quickLinks = [
  { href: "/about", label: "Our Story" },
  { href: "/beliefs", label: "What We Believe" },
  { href: "/branches", label: "Find a Branch" },
  { href: "/leadership", label: "Leadership" },
  { href: "/ministries", label: "Ministries" },
  { href: "/sermons", label: "Sermons" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/prayer", label: "Prayer Requests" },
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "Events" },
  { href: "/donate", label: "Partner With Us" },
  { href: "/contact", label: "Contact" },
];

const services = [
  { day: "Sunday Worship", time: "11:00 AM - 3:00 PM", note: "Main Service" },
  { day: "Wednesday Bible Study", time: "5:00 PM - 6:00 PM", note: "Discipleship" },
  { day: "Friday Prayer", time: "5:00 PM - 6:00 PM", note: "Deliverance" },
  { day: "Prayer Chain", time: "24/7", note: "Always Open" },
];

const stats = [
  { icon: Users, value: "1,200+", label: "Members" },
  { icon: Building2, value: "10", label: "Branches" },
  { icon: Book, value: "48", label: "Page Constitution" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Main footer content */}
      <div className="bg-[oklch(0.15_0.02_250)] text-[oklch(0.9_0_0)]">
        {/* Top decorative border */}
        <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-primary" />

        <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-8 mb-16 pb-16 border-b border-[oklch(0.25_0_0)]">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[oklch(0.98_0_0)]">{stat.value}</div>
                  <div className="text-sm text-[oklch(0.5_0_0)]">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center border border-white/20 shadow-lg">
                  <div className="relative w-10 h-10">
                    <Image
                      src="/logo.png"
                      alt="Redemption Apostolic Church"
                      fill
                      sizes="40px"
                      className="object-contain"
                    />
                  </div>
                </div>
                <div>
                  <span className="font-bold text-xl text-[oklch(0.98_0_0)]">Redemption</span>
                  <span className="text-sm block text-[oklch(0.6_0_0)]">Apostolic Church</span>
                </div>
              </div>
              <p className="text-[oklch(0.6_0_0)] text-sm leading-relaxed mb-6">
                A sanctuary not of bricks, but of hearts united in His name. From 8 faithful believers in 2018 to a thriving family across Zimbabwe.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Heart className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">Love, Peace & Unity</span>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="font-bold text-[oklch(0.98_0_0)] mb-6 text-lg">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-[oklch(0.6_0_0)] hover:text-primary transition-colors"
                    >
                      <span className="w-1.5 h-1.5 bg-primary/50 rounded-full group-hover:bg-primary transition-colors" />
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Schedule */}
            <div>
              <h3 className="font-bold text-[oklch(0.98_0_0)] mb-6 text-lg">Service Schedule</h3>
              <div className="space-y-4">
                {services.map((service) => (
                  <div key={service.day} className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm text-[oklch(0.9_0_0)] font-medium">{service.day}</p>
                      <p className="text-xs text-[oklch(0.5_0_0)]">{service.time} - {service.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-bold text-[oklch(0.98_0_0)] mb-6 text-lg">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <p className="text-sm text-[oklch(0.6_0_0)]">
                    Main Office: Mbundane, Bulawayo<br />
                    Building Site: Stand #247, Bulawayo
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shrink-0 border border-white/20 shadow-sm">
                    <div className="relative w-5 h-5">
                      <Image
                        src="/k-logo.png"
                        alt="Kawerify Tech"
                        fill
                        sizes="20px"
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">Developed by Kawerify Tech</p>
                    <a
                      href="mailto:kawerifytech@gmail.com"
                      className="text-sm text-primary hover:underline font-medium"
                    >
                      kawerifytech@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Ministry highlights */}
              <div className="mt-6 pt-6 border-t border-[oklch(0.25_0_0)]">
                <p className="text-xs text-[oklch(0.5_0_0)] mb-2">Active Ministries:</p>
                <div className="flex flex-wrap gap-2">
                  {["Women", "Men", "Youth", "Children", "Prayer"].map((ministry) => (
                    <span key={ministry} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                      {ministry}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Scripture quote */}
          <div className="relative mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent rounded-2xl" />
            <blockquote className="relative text-center py-8 px-4">
              <p className="text-lg md:text-xl text-[oklch(0.7_0_0)] italic max-w-3xl mx-auto leading-relaxed">
                &quot;Just as this ribbon has three strands woven into one strong cord, so we are called to weave Love, Peace, and Unity into every relationship, every decision, every ministry. This isn&apos;t just what we do—it&apos;s who we are becoming, together, by God&apos;s grace.&quot;
              </p>
              <cite className="block mt-4 text-primary font-medium text-sm">— The Royal Blue Ribbon Covenant</cite>
            </blockquote>
          </div>

          {/* Bible verse */}
          <div className="text-center mb-12 py-6 px-4 bg-primary/5 rounded-xl">
            <p className="text-[oklch(0.7_0_0)] italic">
              &quot;By this everyone will know that you are my disciples, if you love one another.&quot;
            </p>
            <cite className="text-accent font-medium text-sm">— John 13:35</cite>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-[oklch(0.25_0_0)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[oklch(0.5_0_0)]">
              &copy; {new Date().getFullYear()} Redemption Apostolic Church. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-sm text-[oklch(0.5_0_0)]">
                Made with <Heart className="w-3 h-3 inline text-primary mx-1" /> in Zimbabwe
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
