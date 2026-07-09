import { Header } from "@/components/header";
import Image from "next/image";
import { Footer } from "@/components/footer";
import { Play, Clock, Calendar, Download, Share2, Heart, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sermons | Redemption Apostolic Church",
  description: "Listen to powerful sermons and teachings from Redemption Apostolic Church. Grow in faith with messages from Apostle R. Chigome and our pastors.",
  alternates: {
    canonical: "/sermons",
  },
};

const sermons = [
  {
    id: 1,
    title: "The Power of the Royal Blue Ribbon Covenant",
    speaker: "Apostle R. Chigome",
    date: "2025-01-19",
    duration: "45:32",
    description: "Discover the divine significance of the Royal Blue Ribbon Covenant and how it transforms our lives and communities.",
    category: "Covenant",
    scripture: "John 13:35",
    audioUrl: "/sermons/royal-blue-ribbon.mp3",
    videoUrl: "/sermons/royal-blue-ribbon.mp4",
    thumbnail: "/images/apostle-chigome.png",
    featured: true,
  },
  {
    id: 2,
    title: "Walking in Unity: The Foundation of Our Church",
    speaker: "Apostle R. Chigome",
    date: "2025-01-12",
    duration: "38:45",
    description: "A powerful message on the importance of unity in the body of Christ and how it strengthens our witness.",
    category: "Unity",
    scripture: "Ephesians 4:3",
    audioUrl: "/sermons/walking-in-unity.mp3",
    videoUrl: "/sermons/walking-in-unity.mp4",
    thumbnail: "/images/apostle-chigome.png",
    featured: true,
  },
  {
    id: 3,
    title: "Love That Transforms Communities",
    speaker: "Pastor Mukorowerwa",
    date: "2025-01-05",
    duration: "42:18",
    description: "How God's love through us can bring transformation to our families and communities.",
    category: "Love",
    scripture: "1 Corinthians 13",
    audioUrl: "/sermons/love-transforms.mp3",
    videoUrl: "/sermons/love-transforms.mp4",
    thumbnail: "/images/church-building.jpg",
    featured: false,
  },
  {
    id: 4,
    title: "Finding Peace in Troubled Times",
    speaker: "Pastor Maks",
    date: "2024-12-29",
    duration: "35:22",
    description: "Biblical principles for maintaining God's peace regardless of circumstances.",
    category: "Peace",
    scripture: "Philippians 4:6-7",
    audioUrl: "/sermons/finding-peace.mp3",
    videoUrl: "/sermons/finding-peace.mp4",
    thumbnail: "/images/church-building.jpg",
    featured: false,
  },
  {
    id: 5,
    title: "The Power of Persistent Prayer",
    speaker: "Pastor Jakc",
    date: "2024-12-22",
    duration: "40:15",
    description: "Understanding the importance and power of consistent, faith-filled prayer.",
    category: "Prayer",
    scripture: "Luke 18:1-8",
    audioUrl: "/sermons/persistent-prayer.mp3",
    videoUrl: "/sermons/persistent-prayer.mp4",
    thumbnail: "/images/church-building.jpg",
    featured: false,
  },
  {
    id: 6,
    title: "Building Strong Families",
    speaker: "Pastor Vkas",
    date: "2024-12-15",
    duration: "37:48",
    description: "Biblical principles for establishing and maintaining strong, godly families.",
    category: "Family",
    scripture: "Joshua 24:15",
    audioUrl: "/sermons/strong-families.mp3",
    videoUrl: "/sermons/strong-families.mp4",
    thumbnail: "/images/church-building.jpg",
    featured: false,
  },
];

const categories = ["All", "Covenant", "Unity", "Love", "Peace", "Prayer", "Family"];

export default function SermonsPage() {
  return (
    <>
      <Header />
      <main className="pt-14 sm:pt-16 md:pt-20">
        {/* Page Hero */}
        <section className="relative py-20 bg-gradient-to-br from-primary to-[oklch(0.35_0.2_260)] overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/hero-worship.png')] bg-cover bg-center opacity-10" />
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center text-primary-foreground">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Sermons & Teachings</h1>
              <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
                Be inspired and equipped through powerful messages from our leadership team. Grow in faith with teachings rooted in God's Word.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Sermon */}
        <section className="py-16 sm:py-20 lg:py-24 bg-background">
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Sermon</h2>
              <p className="text-muted-foreground text-lg">This week's powerful message</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 lg:h-96">
                <Image
                  src={sermons[0].thumbnail}
                  alt={sermons[0].title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Button size="lg" className="gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30">
                    <Play className="w-6 h-6" />
                    Play Sermon
                  </Button>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {sermons[0].category}
                  </span>
                  <span className="text-muted-foreground text-sm">{sermons[0].date}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{sermons[0].title}</h3>
                <p className="text-muted-foreground text-lg mb-4">{sermons[0].description}</p>
                <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                  <span>Speaker: {sermons[0].speaker}</span>
                  <span>•</span>
                  <span>{sermons[0].duration}</span>
                  <span>•</span>
                  <span>{sermons[0].scripture}</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button className="gap-2">
                    <Play className="w-4 h-4" />
                    Watch Video
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Download className="w-4 h-4" />
                    Download Audio
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Share2 className="w-4 h-4" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All Sermons */}
        <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 lg:mb-0">All Sermons</h2>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search sermons..."
                    className="pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <Button variant="outline" className="gap-2">
                  <Filter className="w-4 h-4" />
                  Filter
                </Button>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Sermons Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sermons.slice(1).map((sermon) => (
                <div key={sermon.id} className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={sermon.thumbnail}
                      alt={sermon.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <Button asChild size="sm" className="gap-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30">
                        <Link href={`/sermons/${sermon.id}`}>
                          <Play className="w-4 h-4" />
                          Open
                        </Link>
                      </Button>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        {sermon.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 line-clamp-2">{sermon.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{sermon.description}</p>
                    
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                      <span>{sermon.speaker}</span>
                      <span>•</span>
                      <span>{sermon.date}</span>
                      <span>•</span>
                      <span>{sermon.duration}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{sermon.scripture}</span>
                      <div className="flex gap-2">
                        <Button asChild size="sm" variant="outline" className="gap-1">
                          <Link href={`/sermons/${sermon.id}`}>
                            <Play className="w-3 h-3" />
                          </Link>
                        </Button>
                        <Button size="sm" variant="outline" className="gap-1" disabled>
                          <Download className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Sermons
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 sm:py-20 lg:py-24 bg-background">
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-2xl mx-auto">
              <Heart className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Connected</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Get the latest sermons and updates delivered directly to your inbox. Never miss a message that could transform your life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="gap-2">
                  Subscribe
                  <Heart className="w-4 h-4" />
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
