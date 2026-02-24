import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Play, Calendar, Clock, Download, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const sermons = [
  {
    id: 1,
    title: "The Power of the Royal Blue Ribbon Covenant",
    speaker: "Apostle R. Chigome",
    date: "2025-01-19",
    duration: "45:32",
    description:
      "Discover the divine significance of the Royal Blue Ribbon Covenant and how it transforms our lives and communities.",
    category: "Covenant",
    scripture: "John 13:35",
    audioUrl: "/sermons/royal-blue-ribbon.mp3",
    videoUrl: "/sermons/royal-blue-ribbon.mp4",
    thumbnail: "/images/apostle-chigome.png",
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
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const sermonId = Number(id);
  const sermon = sermons.find((s) => s.id === sermonId);

  if (!sermon) {
    return {
      title: "Sermon Not Found | Redemption Apostolic Church",
      description: "The requested sermon could not be found.",
      alternates: {
        canonical: `/sermons/${id}`,
      },
    };
  }

  const title = `${sermon.title} | Redemption Apostolic Church`;
  const description = sermon.description;
  const canonical = `/sermons/${sermon.id}`;

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
      images: [{ url: sermon.thumbnail }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [sermon.thumbnail],
    },
  };
}

export default async function SermonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const sermonId = Number(id);
  const sermon = sermons.find((s) => s.id === sermonId);

  if (!sermon) {
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
                  <Link href="/sermons">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Sermons
                  </Link>
                </Button>
              </div>

              <div className="grid lg:grid-cols-5 gap-8 items-start">
                <div className="lg:col-span-3">
                  <div className="relative rounded-2xl overflow-hidden border border-border">
                    <img src={sermon.thumbnail} alt={sermon.title} className="w-full h-64 sm:h-96 object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Button size="lg" className="gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30">
                        <Play className="w-5 h-5" />
                        Play
                      </Button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">{sermon.title}</h1>
                    <p className="text-muted-foreground text-lg leading-relaxed">{sermon.description}</p>
                  </div>
                </div>

                <aside className="lg:col-span-2">
                  <div className="bg-card border border-border rounded-2xl p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        {sermon.category}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">{sermon.scripture}</span>
                    </div>

                    <div className="space-y-3 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center justify-between">
                        <span>Speaker</span>
                        <span className="text-foreground font-medium">{sermon.speaker}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          Date
                        </span>
                        <span className="text-foreground font-medium">{sermon.date}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          Duration
                        </span>
                        <span className="text-foreground font-medium">{sermon.duration}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button className="w-full gap-2">
                        <Play className="w-4 h-4" />
                        Watch Video
                      </Button>
                      <Button variant="outline" className="w-full gap-2">
                        <Download className="w-4 h-4" />
                        Download Audio
                      </Button>
                      <Button variant="outline" className="w-full gap-2">
                        <Share2 className="w-4 h-4" />
                        Share
                      </Button>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
