"use client";

import Image from "next/image";
import { Heart, Leaf, Users, Quote, Star, CheckCircle2, Target, Eye } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const values = [
  {
    icon: Heart,
    title: "Love",
    scripture: "1 Corinthians 13:13",
    points: [
      "Unconditional Acceptance - Welcoming all people regardless of background",
      "Practical Compassion - Meeting tangible needs in our communities",
      "Sacrificial Service - Putting others' needs before our own",
      "Family Commitment - Strengthening marriages and parent-child relationships",
      "Forgiveness Culture - Creating safe spaces for restoration"
    ],
    gradient: "from-rose-500/20 to-pink-500/20",
  },
  {
    icon: Leaf,
    title: "Peace",
    scripture: "Matthew 5:9",
    points: [
      "Personal Peace - Helping individuals find inner peace with God",
      "Relational Peace - Facilitating reconciliation between people",
      "Community Peace - Being agents of harmony in our neighborhoods",
      "Spiritual Peace - Teaching believers to live in shalom",
      "Peacemaking Training - Equipping members to resolve conflicts biblically"
    ],
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    icon: Users,
    title: "Unity",
    scripture: "Psalm 133:1",
    points: [
      "Doctrinal Unity - Agreement on essential biblical truths",
      "Relational Unity - Commitment to maintain the bond of peace",
      "Purpose Unity - Alignment with the church's vision and mission",
      "Cross-cultural Unity - Embracing diversity across tribes",
      "Generational Unity - Valuing both wisdom of age and energy of youth"
    ],
    gradient: "from-primary/20 to-[oklch(0.55_0.18_260)]/20",
  },
];

const testimonies = [
  "A woman healed of chronic arthritis after six years of pain",
  "A man who found employment after three years of struggle following prayer",
  "Multiple marriages rescued from the brink of collapse"
];

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
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
    <section id="about" className="py-24 bg-background relative overflow-hidden" ref={sectionRef}>
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div 
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm mb-6">
            <Star className="w-4 h-4" />
            <span className="font-medium uppercase tracking-wider">Our Divine Beginning</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
            A Story of Miracles & Revelation
          </h2>
        </div>

        {/* Story content with image */}
        <div 
          className={`grid lg:grid-cols-2 gap-12 items-center mb-24 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="order-2 lg:order-1 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              In <span className="text-primary font-semibold">February 2018</span>, Apostle R. Chigome experienced a profound spiritual awakening that would forever change his life and the spiritual landscape of Zimbabwe. For three consecutive nights, he received vivid dreams and visions from God showing him gatherings of people worshiping under a sky illuminated by a soft, heavenly light.
            </p>
            
            {/* Quote block */}
            <div className="relative my-8">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary rounded-full" />
              <blockquote className="pl-8 py-4">
                <Quote className="w-8 h-8 text-primary/30 mb-2" />
                <p className="text-xl md:text-2xl font-medium text-foreground italic leading-relaxed">
                  &quot;Build a sanctuary not of bricks, but of hearts united in my name.&quot;
                </p>
              </blockquote>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              With this divine mandate, Apostle Chigome gathered his wife, children, and seven faithful believers in their modest Bulawayo home. What began as a Tuesday night prayer circle quickly transformed into a conduit for miracles.
            </p>

            {/* Early testimonies */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                Early Miracles & Testimonies
              </h4>
              <ul className="space-y-3">
                {testimonies.map((testimony, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    {testimony}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image with decorative elements */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/community-outreach.jpg"
                alt="Redemption Apostolic Church community outreach"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-primary-foreground font-semibold text-lg">Serving Our Community</p>
                <p className="text-primary-foreground/80 text-sm">Monthly food distribution to 50 vulnerable families</p>
              </div>
            </div>
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-5 shadow-xl border border-border">
              <div className="text-3xl font-bold text-primary">From 8</div>
              <div className="text-muted-foreground">to 1,200+ members</div>
            </div>
          </div>
        </div>

        {/* The Royal Blue Ribbon Vision */}
        <div className={`bg-gradient-to-r from-primary to-[oklch(0.4_0.2_260)] rounded-3xl p-8 md:p-12 mb-24 relative overflow-hidden transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Pattern overlay */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          
          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm mb-6">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="font-medium">July 2018 - The Defining Moment</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                The Royal Blue Ribbon Vision
              </h3>
              <p className="text-primary-foreground/90 text-lg leading-relaxed mb-6">
                During an all-night prayer vigil, as the group prayed fervently asking &quot;God, what can we do differently in a world with so many churches?&quot;, a collective spiritual experience occurred.
              </p>
              <p className="text-primary-foreground/80 leading-relaxed mb-8">
                Multiple members, independently, reported seeing the same vision: <span className="text-accent font-semibold">a radiant Royal Blue ribbon descending from above</span>, with the words &quot;LOVE, PEACE, AND UNITY&quot; shining as if written in gold thread. This wasn&apos;t merely a motto—it was a divine blueprint for ministry.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Love", "Peace", "Unity"].map((word) => (
                  <span key={word} className="px-4 py-2 rounded-full bg-accent/20 text-accent font-semibold text-sm">
                    {word}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Visual ribbon */}
            <div className="flex justify-center">
              <div className="relative w-48 h-72">
                <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.5_0.22_260)] via-primary to-[oklch(0.4_0.2_260)] rounded-lg shadow-2xl transform rotate-3" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-lg transform -skew-x-6 animate-pulse" style={{ animationDuration: "3s" }} />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-primary-foreground p-6">
                  <span className="text-xs uppercase tracking-[0.2em] mb-3 opacity-80">The</span>
                  <span className="text-xl font-bold tracking-wide">ROYAL BLUE</span>
                  <span className="text-xl font-bold tracking-wide mb-4">RIBBON</span>
                  <div className="w-16 h-px bg-accent mb-4" />
                  <span className="text-accent text-sm font-semibold tracking-wider">LOVE</span>
                  <span className="text-accent text-sm font-semibold tracking-wider">PEACE</span>
                  <span className="text-accent text-sm font-semibold tracking-wider">UNITY</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className={`grid md:grid-cols-2 gap-8 mb-24 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              &quot;To establish a global network of apostolic centers that transform communities through the demonstration of God&apos;s love, reconciliation, and unity—raising disciples who manifest Kingdom authority in every sphere of society.&quot;
            </p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              &quot;To evangelize the lost with compassion, disciple believers with biblical integrity, worship God in spirit and truth, serve communities with practical love, and nurture families with generational vision—all under the banner of Love, Peace, and Unity.&quot;
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className={`text-center mb-12 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h3>
          <p className="text-muted-foreground text-lg">The Royal Blue Ribbon Mandate</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`group relative transition-all duration-700 h-full ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative bg-card border border-border rounded-2xl p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-primary text-sm font-medium mb-6">{value.scripture}</p>
                
                <ul className="space-y-3 flex-grow">
                  {value.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
