import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Download, Book, FileText, Video, Music, Users, Calendar, Search, Filter, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Redemption Apostolic Church",
  description: "Access spiritual resources including sermons, study guides, worship music, and more. Download materials to help you grow in your faith journey.",
  alternates: {
    canonical: "/resources",
  },
};

const resources = [
  {
    id: 1,
    title: "Royal Blue Covenant Study Guide",
    description: "Comprehensive study guide on the Royal Blue Ribbon Covenant with scripture references and discussion questions.",
    type: "PDF",
    category: "Study Guides",
    size: "2.4 MB",
    downloads: 1250,
    icon: Book,
    featured: true,
  },
  {
    id: 2,
    title: "Foundations of Faith Course",
    description: "Complete 12-week course covering foundational Christian doctrines and beliefs.",
    type: "PDF",
    category: "Courses",
    size: "8.7 MB",
    downloads: 890,
    icon: Book,
    featured: true,
  },
  {
    id: 3,
    title: "Worship Album - Songs of Zion",
    description: "Collection of worship songs from our church services and conferences.",
    type: "MP3",
    category: "Music",
    size: "45.2 MB",
    downloads: 2100,
    icon: Music,
    featured: false,
  },
  {
    id: 4,
    title: "Prayer Journal Template",
    description: "Structured prayer journal to help you maintain a consistent prayer life.",
    type: "PDF",
    category: "Prayer",
    size: "1.2 MB",
    downloads: 670,
    icon: FileText,
    featured: false,
  },
  {
    id: 5,
    title: "Leadership Training Manual",
    description: "Essential guide for church leaders and those aspiring to leadership roles.",
    type: "PDF",
    category: "Leadership",
    size: "5.6 MB",
    downloads: 450,
    icon: Book,
    featured: false,
  },
  {
    id: 6,
    title: "Youth Ministry Resources",
    description: "Games, activities, and teaching materials for youth ministry.",
    type: "ZIP",
    category: "Youth",
    size: "12.3 MB",
    downloads: 320,
    icon: Users,
    featured: false,
  },
  {
    id: 7,
    title: "Family Devotional Guide",
    description: "Weekly family devotional guides for spiritual growth at home.",
    type: "PDF",
    category: "Family",
    size: "3.1 MB",
    downloads: 580,
    icon: Book,
    featured: false,
  },
  {
    id: 8,
    title: "Sermon Outlines Collection",
    description: "Collection of sermon outlines from Apostle R. Chigome and guest speakers.",
    type: "PDF",
    category: "Sermons",
    size: "4.8 MB",
    downloads: 920,
    icon: FileText,
    featured: false,
  },
];

const categories = ["All", "Study Guides", "Courses", "Music", "Prayer", "Leadership", "Youth", "Family", "Sermons"];

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main className="pt-14 sm:pt-16 md:pt-20">
        {/* Page Hero */}
        <section className="relative py-20 bg-gradient-to-br from-primary to-[oklch(0.35_0.2_260)] overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/hero-worship.png')] bg-cover bg-center opacity-10" />
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center text-primary-foreground">
              <Book className="w-16 h-16 mx-auto mb-6 text-primary-foreground/50" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Resources</h1>
              <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
                Access spiritual resources to help you grow in your faith journey. Download sermons, study guides, worship music, and more.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="py-16 sm:py-20 lg:py-24 bg-background">
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Resources</h2>
              <p className="text-muted-foreground text-lg">Popular downloads and essential materials</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {resources.filter(resource => resource.featured).map((resource) => (
                <div key={resource.id} className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="flex items-start gap-4 flex-grow">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <resource.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                      <p className="text-muted-foreground mb-4">{resource.description}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="px-2 py-1 bg-secondary rounded">{resource.category}</span>
                        <span>{resource.type}</span>
                        <span>{resource.size}</span>
                        <span>{resource.downloads} downloads</span>
                      </div>
                    </div>
                  </div>
                  <Button className="gap-2 mt-6 self-start">
                    <Download className="w-4 h-4" />
                    Download
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Resources */}
        <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 lg:mb-0">All Resources</h2>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search resources..."
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

            {/* Resources Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.filter(resource => !resource.featured).map((resource) => (
                <div key={resource.id} className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <resource.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg mb-1 truncate">{resource.title}</h3>
                      <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                        {resource.category}
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-grow">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <span>{resource.type}</span>
                    <span>{resource.size}</span>
                    <span>{resource.downloads} downloads</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    <Download className="w-4 h-4" />
                    Download
                  </Button>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Resources
              </Button>
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-16 sm:py-20 lg:py-24 bg-background">
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Resource Categories</h2>
              <p className="text-muted-foreground text-lg">Explore resources by category</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.slice(1).map((category) => (
                <div key={category} className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Book className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg">{category}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm flex-grow">
                    {resources.filter(r => r.category === category).length} resources available
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Request Resources */}
        <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Specific Resources?</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Can't find what you're looking for? Let us know what resources would help you in your spiritual journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Request a Resource
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

        {/* Statistics */}
        <section className="py-16 sm:py-20 lg:py-24 bg-background">
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Resource Impact</h2>
              <p className="text-muted-foreground text-lg">How our resources are helping people grow</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15,000+</div>
                <div className="text-sm text-muted-foreground">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Resources</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">9</div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Availability</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
