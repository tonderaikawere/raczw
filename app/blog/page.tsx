import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Calendar, Clock, User, ArrowRight, Search, Filter, Share2, Heart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Updates | Redemption Apostolic Church",
  description: "Stay updated with the latest news, announcements, and events from Redemption Apostolic Church. Read inspiring stories and important updates from our church family.",
  alternates: {
    canonical: "/blog",
  },
};

const blogPosts = [
  {
    id: 1,
    title: "Royal Blue Covenant Conference 2025: A Life-Changing Experience",
    excerpt: "Over 3,000 attendees gathered for our annual Royal Blue Covenant Conference, experiencing powerful worship, life-changing teachings, and divine encounters.",
    author: "Media Team",
    date: "2025-01-20",
    readTime: "5 min read",
    category: "Conference",
    image: "/images/hero-worship.png",
    featured: true,
    tags: ["conference", "covenant", "2025"],
  },
  {
    id: 2,
    title: "New Branch Opening in Kadoma: Expanding Our Reach",
    excerpt: "We're excited to announce the opening of our 10th branch in Kadoma, bringing the message of Love, Peace, and Unity to the mining community.",
    author: "Leadership Team",
    date: "2025-01-15",
    readTime: "3 min read",
    category: "Expansion",
    image: "/images/church-building.jpg",
    featured: true,
    tags: ["expansion", "kadoma", "new-branch"],
  },
  {
    id: 3,
    title: "Youth Ministry Impact: 200 Young People Baptized This Year",
    excerpt: "Our youth ministry continues to make a significant impact, with over 200 young people making decisions for Christ and being baptized in 2024.",
    author: "Youth Department",
    date: "2025-01-10",
    readTime: "4 min read",
    category: "Youth",
    image: "/images/youth-ministry.jpg",
    featured: false,
    tags: ["youth", "baptism", "impact"],
  },
  {
    id: 4,
    title: "Women's Conference: Empowered to Impact Generations",
    excerpt: "The annual women's conference brought together hundreds of women for empowerment, teaching, and fellowship across all our branches.",
    author: "Women's Ministry",
    date: "2025-01-05",
    readTime: "6 min read",
    category: "Events",
    image: "/images/womens-ministry.png",
    featured: false,
    tags: ["women", "conference", "empowerment"],
  },
  {
    id: 5,
    title: "Community Outreach: Feeding 500 Families This Christmas",
    excerpt: "Through our Christmas outreach program, we were able to feed and bless over 500 families across Bulawayo and surrounding areas.",
    author: "Outreach Team",
    date: "2024-12-28",
    readTime: "4 min read",
    category: "Outreach",
    image: "/images/community-outreach.jpg",
    featured: false,
    tags: ["outreach", "christmas", "community"],
  },
  {
    id: 6,
    title: "Leadership Training: Equipping the Next Generation",
    excerpt: "Our comprehensive leadership training program continues to equip and empower leaders across all branches for effective ministry.",
    author: "Leadership Development",
    date: "2024-12-20",
    readTime: "5 min read",
    category: "Training",
    image: "/images/apostle-chigome.png",
    featured: false,
    tags: ["leadership", "training", "equipping"],
  },
];

const categories = ["All", "Conference", "Expansion", "Youth", "Events", "Outreach", "Training"];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="pt-14 sm:pt-16 md:pt-20">
        {/* Page Hero */}
        <section className="relative py-20 bg-gradient-to-br from-primary to-[oklch(0.35_0.2_260)] overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/hero-worship.png')] bg-cover bg-center opacity-10" />
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center text-primary-foreground">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">News & Updates</h1>
              <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
                Stay informed about what's happening in our church family. Read inspiring stories, important announcements, and testimonies of God's faithfulness.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16 sm:py-20 lg:py-24 bg-background">
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Stories</h2>
              <p className="text-muted-foreground text-lg">Important updates and inspiring testimonies</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {blogPosts.filter(post => post.featured).map((post) => (
                <article key={post.id} className="group">
                  <div className="relative rounded-2xl overflow-hidden mb-6 h-64 sm:h-80">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{post.author}</span>
                      </div>
                      <Button asChild variant="ghost" className="gap-2 group-hover:gap-3 transition-all">
                        <Link href={`/blog/${post.id}`}>
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 lg:mb-0">All Posts</h2>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search posts..."
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

            {/* Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.filter(post => !post.featured).map((post) => (
                <article key={post.id} className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{post.author}</span>
                      </div>
                      <Button asChild size="sm" variant="ghost" className="gap-1">
                        <Link href={`/blog/${post.id}`}>
                          Read
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Posts
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 sm:py-20 lg:py-24 bg-background">
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Get the latest news and updates delivered directly to your inbox. Never miss an important announcement or inspiring story.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="gap-2">
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Submit Story */}
        <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Share Your Story</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Have a story or testimony to share? We'd love to hear how God is working in your life and through our church.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Submit Your Story
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">
                    Contact Us
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
