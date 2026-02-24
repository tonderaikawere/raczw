"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronDown, Clock, Calendar, Users, Heart, Flame, Baby, HandHeart, Sun, Moon, CheckCircle2 } from "lucide-react";

const ministries = [
  {
    title: "Women's Ministry",
    subtitle: "Daughters of Royal Blue",
    icon: Heart,
    image: "/images/womens-ministry.png",
    schedule: "Tuesdays, 10 AM - 12 PM",
    description: "Empowering women to live out their God-given potential through fellowship, teaching, and practical skills development.",
    programs: ["Marriage enrichment seminars", "Parenting workshops", "Skills training (sewing, cooking)", "Bible studies", "Widow support program"],
    events: ["Annual Women's Conference", "Mother-Daughter Banquet", "Community Service Day"],
    color: "from-rose-500 to-pink-500",
  },
  {
    title: "Men's Ministry",
    subtitle: "Royal Blue Brotherhood",
    icon: Users,
    image: "/images/mens-ministry.jpg",
    schedule: "Saturdays, 7 AM - 9 AM",
    description: "Building men of integrity who lead their families, serve their communities, and honor God in every sphere of life.",
    programs: ["Leadership training", "Financial stewardship classes", "Fatherhood development", "Accountability groups", "Prison ministry outreach"],
    events: ["Annual Men's Retreat", "Father-Son Camping Trip", "Business Networking Breakfast"],
    color: "from-primary to-[oklch(0.35_0.2_260)]",
  },
  {
    title: "Youth Ministry",
    subtitle: "NextGen Royal Blue",
    icon: Flame,
    image: "/images/youth-ministry.jpg",
    schedule: "Fridays, 5 PM - 7 PM",
    description: "Raising the next generation of leaders through discipleship, talent development, and Christ-centered community.",
    programs: ["Teen discipleship groups (13-17)", "Young adults fellowship (18-30)", "Talent development program", "Career guidance", "Purity seminars", "Mission trips"],
    events: ["Youth Explosion Concert", "Career Fair", "Leadership Summit"],
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "Children's Ministry",
    subtitle: "Royal Blue Kids",
    icon: Baby,
    image: "/images/childrens-ministry.jpg",
    schedule: "Sundays, 11 AM - 1 PM",
    description: "Nurturing young hearts with the love of Jesus through age-appropriate teaching, worship, and creative activities.",
    programs: ["Nursery (0-2 years)", "Toddlers class (3-5)", "Juniors class (6-12)", "Bible stories & memorization", "Worship & crafts", "Character building"],
    events: ["Vacation Bible School", "Children's Christmas Pageant", "Safety Training Program"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Prayer Ministry",
    subtitle: "Royal Blue Intercessors",
    icon: HandHeart,
    schedule: "24/7 Prayer Chain Coverage",
    description: "Standing in the gap through fervent, focused intercession for personal, church, and national breakthrough.",
    programs: ["Healing prayer team", "Financial breakthrough prayer", "Marital restoration intercession", "Daily scheduled prayer slots", "Emergency prayer response"],
    events: ["Monthly All-Night Prayer Vigil (Last Friday of each month)"],
    color: "from-violet-500 to-purple-500",
  },
];

const weeklyServices = [
  {
    day: "Sundays",
    name: "Worship Celebration",
    time: "11:00 AM - 3:00 PM",
    icon: Sun,
    schedule: [
      { time: "10:30 AM", activity: "Doors open, fellowship and pre-service prayer" },
      { time: "11:00 AM", activity: "Praise and worship session" },
      { time: "11:45 AM", activity: "Welcome and announcements" },
      { time: "12:00 PM", activity: "Scripture reading and offering" },
      { time: "12:20 PM", activity: "Sermon (rotating between Apostle and Pastors)" },
      { time: "1:30 PM", activity: "Ministry time (prayer for needs, altar call)" },
      { time: "2:00 PM", activity: "Communion (first Sunday of month)" },
      { time: "2:30 PM", activity: "Fellowship lunch (every 3rd Sunday)" },
    ],
    highlight: true,
  },
  {
    day: "Wednesdays",
    name: "Bible Study & Discipleship",
    time: "5:00 PM - 6:00 PM",
    icon: Calendar,
    schedule: [
      { time: "5:00 PM", activity: "Worship and opening prayer" },
      { time: "5:20 PM", activity: "Verse-by-verse Bible teaching" },
      { time: "5:50 PM", activity: "Small group discussions" },
      { time: "6:00 PM", activity: "Closing prayer" },
    ],
    highlight: false,
  },
  {
    day: "Fridays",
    name: "Prayer & Deliverance Service",
    time: "5:00 PM - 6:00 PM",
    icon: Moon,
    schedule: [
      { time: "5:00 PM", activity: "Intensive praise and worship" },
      { time: "5:30 PM", activity: "Corporate prayer for national, community, personal needs" },
      { time: "5:50 PM", activity: "Deliverance ministry for those needing breakthrough" },
      { time: "6:00 PM", activity: "Anointing and blessing service" },
    ],
    highlight: false,
  },
];

export function MinistriesSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const [selectedService, setSelectedService] = useState(0);
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
    <section id="ministries" className="py-24 bg-secondary relative overflow-hidden" ref={sectionRef}>
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--border) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="absolute top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div 
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm mb-6">
            <Users className="w-4 h-4" />
            <span className="font-medium uppercase tracking-wider">Get Involved</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Ministry Departments
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Specialized programs designed to nurture every member of our church family—from women and men to youth and children.
          </p>
        </div>

        {/* Ministries grid with images */}
        <div className={`mb-24 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {ministries.map((ministry, index) => (
            <div
              key={ministry.title}
              className={`bg-card border rounded-2xl overflow-hidden transition-all duration-500 mb-4 ${
                openIndex === index ? "border-primary shadow-xl shadow-primary/10" : "border-border"
              }`}
            >
              <button
                className="w-full px-6 py-5 flex items-center gap-4 text-left hover:bg-secondary/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ministry.color} flex items-center justify-center shrink-0`}>
                  <ministry.icon className="w-6 h-6 text-white" />
                </div>

                <div className="flex-grow">
                  <h3 className="font-bold text-foreground text-lg">{ministry.title}</h3>
                  <p className="text-sm text-primary">{ministry.subtitle}</p>
                </div>

                <div className="hidden sm:flex items-center gap-2 text-muted-foreground text-sm mr-4">
                  <Clock className="w-4 h-4" />
                  {ministry.schedule}
                </div>

                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-500 ease-out ${
                  openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 border-t border-border pt-6">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Image */}
                      {ministry.image && (
                        <div className="relative aspect-video lg:aspect-square rounded-xl overflow-hidden">
                          <Image
                            src={ministry.image || "/placeholder.svg"}
                            alt={ministry.title}
                            fill
                            className="object-cover"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t ${ministry.color} opacity-20`} />
                        </div>
                      )}

                      {/* Description and programs */}
                      <div className={ministry.image ? "lg:col-span-2" : "lg:col-span-3"}>
                        <p className="text-muted-foreground mb-6 leading-relaxed">{ministry.description}</p>

                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-primary" />
                              Programs
                            </h4>
                            <ul className="space-y-2">
                              {ministry.programs.map((program) => (
                                <li key={program} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                                  {program}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-accent" />
                              Annual Events
                            </h4>
                            <ul className="space-y-2">
                              {ministry.events.map((event) => (
                                <li key={event} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 shrink-0" />
                                  {event}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Weekly Schedule Section */}
        <div className={`transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Weekly Service Schedule</h3>
            <p className="text-muted-foreground text-lg">Join us for worship, teaching, and fellowship</p>
          </div>

          {/* Service tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {weeklyServices.map((service, index) => (
              <button
                key={service.day}
                onClick={() => setSelectedService(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                  selectedService === index
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-card border border-border text-muted-foreground hover:border-primary/30"
                }`}
              >
                <service.icon className="w-5 h-5" />
                {service.day}
              </button>
            ))}
          </div>

          {/* Selected service details */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden max-w-3xl mx-auto">
            <div className={`p-6 ${weeklyServices[selectedService].highlight ? "bg-gradient-to-r from-primary to-[oklch(0.5_0.22_260)]" : "bg-gradient-to-r from-muted to-secondary"}`}>
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${weeklyServices[selectedService].highlight ? "bg-primary-foreground/20 text-primary-foreground" : "bg-card text-foreground"}`}>
                  {(() => {
                    const Icon = weeklyServices[selectedService].icon;
                    return <Icon className="w-7 h-7" />;
                  })()}
                </div>
                <div>
                  <h4 className={`text-xl font-bold ${weeklyServices[selectedService].highlight ? "text-primary-foreground" : "text-foreground"}`}>
                    {weeklyServices[selectedService].name}
                  </h4>
                  <p className={weeklyServices[selectedService].highlight ? "text-primary-foreground/80" : "text-muted-foreground"}>
                    {weeklyServices[selectedService].day} | {weeklyServices[selectedService].time}
                  </p>
                </div>
                {weeklyServices[selectedService].highlight && (
                  <span className="ml-auto px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                    MAIN SERVICE
                  </span>
                )}
              </div>
            </div>

            <div className="p-6">
              <h5 className="font-semibold text-foreground mb-4">Service Timeline</h5>
              <div className="space-y-4">
                {weeklyServices[selectedService].schedule.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-20 shrink-0">
                      <span className="text-sm font-semibold text-primary">{item.time}</span>
                    </div>
                    <div className="flex-1 flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                      <p className="text-muted-foreground">{item.activity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
