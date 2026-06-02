import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Camera, Download, Heart, Share2, Filter, Search, Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Redemption Apostolic Church",
  description: "Explore our gallery of photos from church services, events, and activities. See the life and community of Redemption Apostolic Church through images.",
  alternates: {
    canonical: "/gallery",
  },
};

const galleryCategories = [
  { id: "all", name: "All Photos", count: 156 },
  { id: "services", name: "Services", count: 45 },
  { id: "events", name: "Events", count: 38 },
  { id: "outreach", name: "Outreach", count: 27 },
  { id: "leadership", name: "Leadership", count: 18 },
  { id: "youth", name: "Youth", count: 15 },
  { id: "branches", name: "Branches", count: 13 },
];

const galleryImages = [
  {
    id: 1,
    src: "/images/hero-worship.png",
    alt: "Sunday worship service",
    category: "services",
    title: "Sunday Morning Worship",
    date: "2025-01-19",
    location: "Main Sanctuary",
    featured: true,
  },
  {
    id: 2,
    src: "/images/apostle-chigome.png",
    alt: "Apostle R. Chigome preaching",
    category: "leadership",
    title: "Apostle Chigome Teaching",
    date: "2025-01-12",
    location: "City Centre Branch",
    featured: true,
  },
  {
    id: 3,
    src: "/images/womens-ministry.png",
    alt: "Women's ministry gathering",
    category: "events",
    title: "Women's Conference 2025",
    date: "2025-01-05",
    location: "All Branches",
    featured: true,
  },
  {
    id: 4,
    src: "/images/youth-ministry.jpg",
    alt: "Youth ministry activities",
    category: "youth",
    title: "Youth Explosion Concert",
    date: "2024-12-22",
    location: "Church Grounds",
    featured: false,
  },
  {
    id: 5,
    src: "/images/mens-ministry.jpg",
    alt: "Men's ministry meeting",
    category: "events",
    title: "Men's Leadership Summit",
    date: "2024-12-15",
    location: "Conference Center",
    featured: false,
  },
  {
    id: 6,
    src: "/images/childrens-ministry.jpg",
    alt: "Children's ministry activities",
    category: "youth",
    title: "Children's Easter Festival",
    date: "2024-12-08",
    location: "All Branches",
    featured: false,
  },
  {
    id: 7,
    src: "/images/community-outreach.jpg",
    alt: "Community outreach program",
    category: "outreach",
    title: "Community Food Drive",
    date: "2024-12-01",
    location: "Pumula Branch",
    featured: false,
  },
  {
    id: 8,
    src: "/images/church-building.jpg",
    alt: "Church building exterior",
    category: "branches",
    title: "Mbundane Branch Building",
    date: "2024-11-24",
    location: "Mbundane",
    featured: false,
  },
  {
    id: 9,
    src: "/images/hero-worship.png",
    alt: "Prayer meeting",
    category: "services",
    title: "Friday Prayer Service",
    date: "2024-11-17",
    location: "Main Sanctuary",
    featured: false,
  },
];

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="pt-14 sm:pt-16 md:pt-20">
        {/* Page Hero */}
        <section className="relative py-20 bg-gradient-to-br from-primary to-[oklch(0.35_0.2_260)] overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/hero-worship.png')] bg-cover bg-center opacity-10" />
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center text-primary-foreground">
              <Camera className="w-16 h-16 mx-auto mb-6 text-primary-foreground/50" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Gallery</h1>
              <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
                Capture the moments that define our journey. From powerful worship services to community outreach, see how God is moving through our church family.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Photos */}
        <section className="py-16 sm:py-20 lg:py-24 bg-background">
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Moments</h2>
              <p className="text-muted-foreground text-lg">Highlights from our recent activities</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.filter(img => img.featured).map((image) => (
                <div key={image.id} className="group relative rounded-2xl overflow-hidden">
                  <div className="aspect-square">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="font-bold text-lg mb-2">{image.title}</h3>
                      <div className="flex items-center gap-3 text-sm text-white/80">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{image.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{image.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      <Button size="sm" variant="secondary" className="gap-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="gap-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 lg:mb-0">All Photos</h2>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search photos..."
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
              {galleryCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={category.id === "all" ? "default" : "outline"}
                  size="sm"
                  className="rounded-full"
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>

            {/* Photos Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((image) => (
                <div key={image.id} className="group relative rounded-xl overflow-hidden">
                  <div className="aspect-square">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex gap-2">
                        <Button size="sm" variant="secondary" className="gap-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm">
                          <Download className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="secondary" className="gap-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm">
                          <Heart className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="secondary" className="gap-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm">
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-medium truncate">{image.title}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Photos
              </Button>
            </div>
          </div>
        </section>

        {/* Photo Submission */}
        <section className="py-16 sm:py-20 lg:py-24 bg-background">
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <Camera className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Share Your Photos</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Attended one of our events or services? Share your photos with our community and help us capture the memories of what God is doing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  <Camera className="w-4 h-4" />
                  Upload Photos
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

        {/* Gallery Stats */}
        <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1,500+</div>
                <div className="text-sm text-muted-foreground">Photos Captured</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Events Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10</div>
                <div className="text-sm text-muted-foreground">Branches Featured</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">New Updates</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
