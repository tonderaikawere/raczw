import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Calendar, Clock, User, ArrowLeft, Share2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const blogPosts = [
  {
    id: 1,
    title: "Royal Blue Covenant Conference 2025: A Life-Changing Experience",
    excerpt:
      "Over 3,000 attendees gathered for our annual Royal Blue Covenant Conference, experiencing powerful worship, life-changing teachings, and divine encounters.",
    author: "Media Team",
    date: "2025-01-20",
    readTime: "5 min read",
    category: "Conference",
    image: "/images/hero-worship.png",
    tags: ["conference", "covenant", "2025"],
  },
  {
    id: 2,
    title: "New Branch Opening in Kadoma: Expanding Our Reach",
    excerpt:
      "We're excited to announce the opening of our 10th branch in Kadoma, bringing the message of Love, Peace, and Unity to the mining community.",
    author: "Leadership Team",
    date: "2025-01-15",
    readTime: "3 min read",
    category: "Expansion",
    image: "/images/church-building.jpg",
    tags: ["expansion", "kadoma", "new-branch"],
  },
  {
    id: 3,
    title: "Youth Ministry Impact: 200 Young People Baptized This Year",
    excerpt:
      "Our youth ministry continues to make a significant impact, with over 200 young people making decisions for Christ and being baptized in 2024.",
    author: "Youth Department",
    date: "2025-01-10",
    readTime: "4 min read",
    category: "Youth",
    image: "/images/youth-ministry.jpg",
    tags: ["youth", "baptism", "impact"],
  },
  {
    id: 4,
    title: "Women's Conference: Empowered to Impact Generations",
    excerpt:
      "The annual women's conference brought together hundreds of women for empowerment, teaching, and fellowship across all our branches.",
    author: "Women's Ministry",
    date: "2025-01-05",
    readTime: "6 min read",
    category: "Events",
    image: "/images/womens-ministry.png",
    tags: ["women", "conference", "empowerment"],
  },
  {
    id: 5,
    title: "Community Outreach: Feeding 500 Families This Christmas",
    excerpt:
      "Through our Christmas outreach program, we were able to feed and bless over 500 families across Bulawayo and surrounding areas.",
    author: "Outreach Team",
    date: "2024-12-28",
    readTime: "4 min read",
    category: "Outreach",
    image: "/images/community-outreach.jpg",
    tags: ["outreach", "christmas", "community"],
  },
  {
    id: 6,
    title: "Leadership Training: Equipping the Next Generation",
    excerpt:
      "Our comprehensive leadership training program continues to equip and empower leaders across all branches for effective ministry.",
    author: "Leadership Development",
    date: "2024-12-20",
    readTime: "5 min read",
    category: "Training",
    image: "/images/apostle-chigome.png",
    tags: ["leadership", "training", "equipping"],
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const postId = Number(id);
  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
    return {
      title: "Post Not Found | Redemption Apostolic Church",
      description: "The requested post could not be found.",
      alternates: {
        canonical: `/blog/${id}`,
      },
    };
  }

  const title = `${post.title} | Redemption Apostolic Church`;
  const description = post.excerpt;
  const canonical = `/blog/${post.id}`;

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
      images: [{ url: post.image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const postId = Number(id);
  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
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
                  <Link href="/blog">
                    <ArrowLeft className="w-4 h-4" />
                    Back to News
                  </Link>
                </Button>
              </div>

              <div className="relative rounded-2xl overflow-hidden mb-8 border border-border">
                <img src={post.image} alt={post.title} className="w-full h-64 sm:h-96 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-flex px-3 py-1 bg-accent text-accent-foreground text-sm font-bold rounded-full mb-3">
                    {post.category}
                  </span>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">{post.title}</h1>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline" className="gap-2">
                    <Heart className="w-4 h-4" />
                    Like
                  </Button>
                  <Button size="sm" variant="outline" className="gap-2">
                    <Share2 className="w-4 h-4" />
                    Share
                  </Button>
                </div>
              </div>

              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">{post.excerpt}</p>
                <p className="text-muted-foreground leading-relaxed">
                  This article page is ready for full content. You can replace this placeholder with the complete story, scripture references,
                  and photos from the event.
                </p>
              </div>

              <div className="mt-12 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
