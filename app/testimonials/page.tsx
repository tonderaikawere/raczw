import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Star, Quote, Calendar, MapPin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials | Redemption Apostolic Church",
  description: "Read inspiring stories and testimonials from members of Redemption Apostolic Church. See how God is transforming lives through our ministry.",
  alternates: {
    canonical: "/testimonials",
  },
};

const testimonials = [
  {
    id: 1,
    name: "Sarah T. Moyo",
    location: "Mbundane Branch",
    date: "January 2025",
    rating: 5,
    testimony: "Joining Redemption Apostolic Church transformed my life completely. The teachings on the Royal Blue Ribbon Covenant gave me a new understanding of God's love and purpose for my life. I've found a family that truly cares and supports my spiritual journey.",
    category: "Life Transformation",
    image: "/images/womens-ministry.png",
    featured: true,
  },
  {
    id: 2,
    name: "John K. Ndlovu",
    location: "City Center Branch",
    date: "December 2024",
    rating: 5,
    testimony: "The deliverance ministry at Cowdry Park B Branch set me free from years of bondage. The prayers and guidance from Pastor Khaks helped me rediscover my identity in Christ. Today, I'm serving in the men's ministry and helping others find freedom.",
    category: "Deliverance",
    image: "/images/mens-ministry.jpg",
    featured: true,
  },
  {
    id: 3,
    name: "Grace P. Sibanda",
    location: "Gweru Branch",
    date: "November 2024",
    rating: 5,
    testimony: "As a young person struggling with direction, the youth ministry gave me purpose. The mentorship and teachings helped me discover my gifts. Now I'm leading the youth choir and seeing other young people transformed.",
    category: "Youth Ministry",
    image: "/images/youth-ministry.jpg",
    featured: false,
  },
  {
    id: 4,
    name: "Michael & Rachel Chikowore",
    location: "Harare Branch",
    date: "October 2024",
    rating: 5,
    testimony: "Our marriage was failing when we joined the family ministry. The counseling and prayers restored our relationship. Today, we serve together in the family ministry and help other couples build strong, godly marriages.",
    category: "Family Restoration",
    image: "/images/community-outreach.jpg",
    featured: false,
  },
  {
    id: 5,
    name: "Esther M. Dube",
    location: "Phumula Branch",
    date: "September 2024",
    rating: 5,
    testimony: "The women's ministry empowered me to overcome years of low self-esteem. Through the teachings and sisterhood, I discovered my worth in Christ. Now I'm a leader in the women's fellowship.",
    category: "Women's Ministry",
    image: "/images/womens-ministry.png",
    featured: false,
  },
  {
    id: 6,
    name: "David L. Nkomo",
    location: "Kingsdale Branch",
    date: "August 2024",
    rating: 5,
    testimony: "I was lost in addiction when I found this church. The 24/7 prayer chain and deliverance services set me free. Today, I'm clean, serving God, and helping others find freedom through Christ.",
    category: "Addiction Recovery",
    image: "/images/church-building.jpg",
    featured: false,
  },
];

const categories = ["All", "Life Transformation", "Deliverance", "Youth Ministry", "Family Restoration", "Women's Ministry", "Addiction Recovery"];

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <main className="pt-14 sm:pt-16 md:pt-20">
        {/* Page Hero */}
        <section className="relative py-20 bg-gradient-to-br from-primary to-[oklch(0.35_0.2_260)] overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/hero-worship.png')] bg-cover bg-center opacity-10" />
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center text-primary-foreground">
              <Quote className="w-16 h-16 mx-auto mb-6 text-primary-foreground/50" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Stories of Transformation</h1>
              <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
                Real stories from real people whose lives have been transformed by God's power through Redemption Apostolic Church.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Testimonials */}
        <section className="py-16 sm:py-20 lg:py-24 bg-background">
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Stories</h2>
              <p className="text-muted-foreground text-lg">Incredible testimonies of God's faithfulness</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {testimonials.filter(t => t.featured).map((testimonial) => (
                <div key={testimonial.id} className="relative h-full">
                  <div className="absolute -top-4 -left-4 text-6xl text-primary/20">"</div>
                  <div className="bg-card rounded-2xl p-8 border border-border relative h-full flex flex-col">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl mb-1">{testimonial.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <MapPin className="w-4 h-4" />
                          <span>{testimonial.location}</span>
                          <span>•</span>
                          <Calendar className="w-4 h-4" />
                          <span>{testimonial.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-4 flex-grow">
                      {testimonial.testimony}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-primary">{testimonial.category}</span>
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/testimonials/${testimonial.id}`}>Read More</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Testimonials */}
        <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">All Testimonials</h2>
              <p className="text-muted-foreground text-lg">More stories of God's transforming power</p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
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

            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.filter(t => !t.featured).map((testimonial) => (
                <div key={testimonial.id} className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-4 flex-grow">
                    {testimonial.testimony}
                  </p>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm truncate">{testimonial.name}</h4>
                      <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-primary">{testimonial.category}</span>
                    <span className="text-xs text-muted-foreground">{testimonial.date}</span>
                  </div>
                  <Button asChild size="sm" variant="outline" className="w-full mt-4">
                    <Link href={`/testimonials/${testimonial.id}`}>Read Full Story</Link>
                  </Button>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Testimonials
              </Button>
            </div>
          </div>
        </section>

        {/* Share Your Story */}
        <section className="py-16 sm:py-20 lg:py-24 bg-background">
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <Heart className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Share Your Story</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Has God transformed your life through Redemption Apostolic Church? We'd love to hear your story and share it to encourage others.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  <Quote className="w-4 h-4" />
                  Share Your Testimony
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
        <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Lives Transformed</h2>
              <p className="text-muted-foreground text-lg">By God's grace through our ministry</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1,200+</div>
                <div className="text-sm text-muted-foreground">Lives Changed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">350+</div>
                <div className="text-sm text-muted-foreground">Families Restored</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">200+</div>
                <div className="text-sm text-muted-foreground">Youth Empowered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">150+</div>
                <div className="text-sm text-muted-foreground">Deliverances</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
