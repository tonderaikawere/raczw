import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Calendar, MapPin, Clock, Users, Heart, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | Redemption Apostolic Church",
  description: "Join us for upcoming events, services, and activities at Redemption Apostolic Church. Connect with our community and grow in faith.",
  alternates: {
    canonical: "/events",
  },
};

const upcomingEvents = [
  {
    id: 1,
    title: "Annual Women's Conference 2025",
    date: "March 15-17, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Main Sanctuary, Bulawayo",
    description: "A powerful three-day conference for women to grow in faith, leadership, and sisterhood. Guest speakers from across Africa.",
    image: "/images/womens-ministry.png",
    category: "Conference",
    featured: true,
  },
  {
    id: 2,
    title: "Youth Explosion Concert",
    date: "March 22, 2025",
    time: "5:00 PM - 9:00 PM",
    location: "Church Grounds, All Branches",
    description: "An evening of worship, music, and inspiration for our youth. Featuring local Christian artists and testimonies.",
    image: "/images/youth-ministry.jpg",
    category: "Youth Event",
    featured: true,
  },
  {
    id: 3,
    title: "Men's Leadership Summit",
    date: "April 5-6, 2025",
    time: "8:00 AM - 4:00 PM",
    location: "Conference Center, Bulawayo",
    description: "Two-day intensive training for men in leadership positions. Topics include biblical leadership, family management, and spiritual warfare.",
    image: "/images/mens-ministry.jpg",
    category: "Leadership",
    featured: false,
  },
  {
    id: 4,
    title: "Children's Easter Festival",
    date: "April 19, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Church Grounds, All Branches",
    description: "A fun-filled Easter celebration for children with games, Bible stories, and activities. Open to the community.",
    image: "/images/childrens-ministry.jpg",
    category: "Children",
    featured: false,
  },
  {
    id: 5,
    title: "Royal Blue Partners Appreciation",
    date: "April 26, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "Main Sanctuary, Bulawayo",
    description: "Special dinner and appreciation service for our faithful monthly partners and supporters.",
    image: "/images/church-building.jpg",
    category: "Special Event",
    featured: false,
  },
];

const regularServices = [
  {
    title: "Sunday Main Service",
    schedule: "Every Sunday",
    time: "11:00 AM - 3:00 PM",
    description: "Our main worship service with powerful preaching, worship, and fellowship.",
    location: "All Branches",
  },
  {
    title: "Wednesday Bible Study",
    schedule: "Every Wednesday",
    time: "5:00 PM - 6:00 PM",
    description: "Deep dive into Scripture with practical application for daily living.",
    location: "All Branches",
  },
  {
    title: "Friday Prayer & Deliverance",
    schedule: "Every Friday",
    time: "5:00 PM - 6:00 PM",
    description: "Powerful prayer meeting for breakthrough and spiritual freedom.",
    location: "All Branches",
  },
  {
    title: "Sunday School",
    schedule: "Every Sunday",
    time: "9:00 AM - 10:30 AM",
    description: "Bible teaching for all ages from children to adults.",
    location: "All Branches",
  },
];

export default function EventsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Page Hero */}
        <section className="relative py-20 bg-gradient-to-br from-primary to-[oklch(0.35_0.2_260)] overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/youth-ministry.jpg')] bg-cover bg-center opacity-10" />
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center text-primary-foreground">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Events & Activities</h1>
              <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
                Join us for powerful events, services, and activities designed to help you grow in faith and connect with our church family.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Events */}
        <section className="py-24 bg-background">
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Featured Events</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Don't miss these special gatherings and conferences
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {upcomingEvents.filter(event => event.featured).map((event) => (
                <div key={event.id} className="bg-card rounded-2xl overflow-hidden border border-border shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
                  <div className="relative h-48">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                        {event.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6 line-clamp-3 flex-grow">{event.description}</p>
                    <Button asChild className="w-full gap-2">
                      <Link href={`/events/${event.id}`}>
                        View Details
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Events */}
        <section className="py-24 bg-muted/30">
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">All Upcoming Events</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Mark your calendar and join us for these upcoming activities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.filter(event => !event.featured).map((event) => (
                <div key={event.id} className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-bold rounded-full">
                      {event.category}
                    </span>
                    <Star className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{event.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-grow">{event.description}</p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href={`/events/${event.id}`}>Learn More</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Regular Services */}
        <section className="py-24 bg-background">
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Regular Services</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join us weekly for these regular gatherings
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {regularServices.map((service, index) => (
                <div key={index} className="bg-card rounded-xl p-6 border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{service.description}</p>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm">
                          <span className="font-medium text-primary">Schedule:</span>
                          <span>{service.schedule}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="font-medium text-primary">Time:</span>
                          <span>{service.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="font-medium text-primary">Location:</span>
                          <span>{service.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 bg-gradient-to-br from-primary to-[oklch(0.35_0.2_260)]">
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <Heart className="w-16 h-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Join Our Community
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-8">
                Experience the warmth and fellowship of our church family. We welcome everyone to join us for worship, growth, and service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild className="gap-2">
                  <Link href="/contact">
                    Get in Touch
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <Link href="/branches">
                    Find a Branch
                    <MapPin className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
