import { Header } from "@/components/header";
import Image from "next/image";
import { Footer } from "@/components/footer";
import { Calendar, MapPin, Clock, ArrowLeft, Users, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const upcomingEvents = [
  {
    id: 1,
    title: "Annual Women's Conference 2025",
    date: "March 15-17, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Main Sanctuary, Bulawayo",
    description:
      "A powerful three-day conference for women to grow in faith, leadership, and sisterhood. Guest speakers from across Africa.",
    image: "/images/womens-ministry.png",
    category: "Conference",
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
  },
  {
    id: 3,
    title: "Men's Leadership Summit",
    date: "April 5-6, 2025",
    time: "8:00 AM - 4:00 PM",
    location: "Conference Center, Bulawayo",
    description:
      "Two-day intensive training for men in leadership positions. Topics include biblical leadership, family management, and spiritual warfare.",
    image: "/images/mens-ministry.jpg",
    category: "Leadership",
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
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const eventId = Number(id);
  const event = upcomingEvents.find((e) => e.id === eventId);

  if (!event) {
    return {
      title: "Event Not Found | Redemption Apostolic Church",
      description: "The requested event could not be found.",
      alternates: {
        canonical: `/events/${id}`,
      },
    };
  }

  const title = `${event.title} | Redemption Apostolic Church`;
  const description = event.description;
  const canonical = `/events/${event.id}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "article",
      url: canonical,
      title,
      description,
      images: [{ url: event.image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [event.image],
    },
  };
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const eventId = Number(id);
  const event = upcomingEvents.find((e) => e.id === eventId);

  if (!event) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-16 bg-background">
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <Button asChild variant="outline" className="gap-2">
                  <Link href="/events">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Events
                  </Link>
                </Button>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-border mb-8 h-64 sm:h-96">
                <Image src={event.image} alt={event.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-flex px-3 py-1 bg-accent text-accent-foreground text-sm font-bold rounded-full mb-3">
                    {event.category}
                  </span>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">{event.title}</h1>
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6 mb-10">
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-muted-foreground">Date</div>
                      <div className="font-semibold text-foreground">{event.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-muted-foreground">Time</div>
                      <div className="font-semibold text-foreground">{event.time}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-muted-foreground">Location</div>
                      <div className="font-semibold text-foreground">{event.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-muted-foreground">Who should attend</div>
                      <div className="font-semibold text-foreground">Everyone is welcome</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-muted-foreground text-lg leading-relaxed">{event.description}</p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg" className="gap-2">
                    Register / RSVP
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2">
                    <Share2 className="w-4 h-4" />
                    Share
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/contact">Ask a Question</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
