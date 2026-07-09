import { Header } from "@/components/header";
import Image from "next/image";
import { Footer } from "@/components/footer";
import { Star, Quote, Calendar, MapPin, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const testimonials = [
  {
    id: 1,
    name: "Sarah T. Moyo",
    location: "Mbundane Branch",
    date: "January 2025",
    rating: 5,
    testimony:
      "Joining Redemption Apostolic Church transformed my life completely. The teachings on the Royal Blue Ribbon Covenant gave me a new understanding of God's love and purpose for my life. I've found a family that truly cares and supports my spiritual journey.",
    category: "Life Transformation",
    image: "/images/womens-ministry.png",
  },
  {
    id: 2,
    name: "John K. Ndlovu",
    location: "City Centre Branch",
    date: "December 2024",
    rating: 5,
    testimony:
      "The deliverance ministry at Cowdray Park B Branch set me free from years of bondage. The prayers and guidance from Pastor Khaks helped me rediscover my identity in Christ. Today, I'm serving in the men's ministry and helping others find freedom.",
    category: "Deliverance",
    image: "/images/mens-ministry.jpg",
  },
  {
    id: 3,
    name: "Grace P. Sibanda",
    location: "Gweru Branch",
    date: "November 2024",
    rating: 5,
    testimony:
      "As a young person struggling with direction, the youth ministry gave me purpose. The mentorship and teachings helped me discover my gifts. Now I'm leading the youth choir and seeing other young people transformed.",
    category: "Youth Ministry",
    image: "/images/youth-ministry.jpg",
  },
  {
    id: 4,
    name: "Michael & Rachel Chikowore",
    location: "Harare Branch",
    date: "October 2024",
    rating: 5,
    testimony:
      "Our marriage was failing when we joined the family ministry. The counseling and prayers restored our relationship. Today, we serve together in the family ministry and help other couples build strong, godly marriages.",
    category: "Family Restoration",
    image: "/images/community-outreach.jpg",
  },
  {
    id: 5,
    name: "Esther M. Dube",
    location: "Pumula Branch",
    date: "September 2024",
    rating: 5,
    testimony:
      "The women's ministry empowered me to overcome years of low self-esteem. Through the teachings and sisterhood, I discovered my worth in Christ. Now I'm a leader in the women's fellowship.",
    category: "Women's Ministry",
    image: "/images/womens-ministry.png",
  },
  {
    id: 6,
    name: "David L. Nkomo",
    location: "Kingsdale Branch",
    date: "August 2024",
    rating: 5,
    testimony:
      "I was lost in addiction when I found this church. The 24/7 prayer chain and deliverance services set me free. Today, I'm clean, serving God, and helping others find freedom through Christ.",
    category: "Addiction Recovery",
    image: "/images/church-building.jpg",
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const testimonialId = Number(id);
  const testimonial = testimonials.find((t) => t.id === testimonialId);

  if (!testimonial) {
    return {
      title: "Testimony Not Found | Redemption Apostolic Church",
      description: "The requested testimony could not be found.",
      alternates: {
        canonical: `/testimonials/${id}`,
      },
    };
  }

  const title = `${testimonial.name} | Testimony | Redemption Apostolic Church`;
  const description = testimonial.testimony;
  const canonical = `/testimonials/${testimonial.id}`;

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
      images: [{ url: testimonial.image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [testimonial.image],
    },
  };
}

export default async function TestimonialPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const testimonialId = Number(id);
  const testimonial = testimonials.find((t) => t.id === testimonialId);

  if (!testimonial) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-16 bg-background">
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8 flex items-center justify-between gap-4">
                <Button asChild variant="outline" className="gap-2">
                  <Link href="/testimonials">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Testimonials
                  </Link>
                </Button>

                <Button variant="outline" className="gap-2">
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border relative overflow-hidden">
                <Quote className="absolute -top-6 -left-6 w-20 h-20 text-primary/10" />

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
                  <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 relative">
                    <Image src={testimonial.image} alt={testimonial.name} fill sizes="80px" className="object-cover" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold">{testimonial.name}</h1>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mt-2">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {testimonial.location}
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {testimonial.date}
                      </span>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium self-start sm:self-auto">
                    {testimonial.category}
                  </span>
                </div>

                <p className="text-muted-foreground text-lg leading-relaxed">{testimonial.testimony}</p>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <Button size="lg" asChild>
                  <Link href="/prayer">Request Prayer</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Share Your Testimony</Link>
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
