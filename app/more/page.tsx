import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "More | Redemption Apostolic Church",
  description: "Explore additional pages and resources from Redemption Apostolic Church.",
  alternates: {
    canonical: "/more",
  },
};

const moreLinks = [
  { href: "/beliefs", label: "Beliefs" },
  { href: "/leadership", label: "Leadership" },
  { href: "/ministries", label: "Ministries" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/prayer", label: "Prayer" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "News" },
  { href: "/resources", label: "Resources" },
];

export default function MorePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-background">
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">More</h1>
              <p className="text-muted-foreground text-lg">Quick access to additional pages and resources.</p>
            </div>

            <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {moreLinks.map((link) => (
                <Button
                  key={link.href}
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-16 justify-start"
                >
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
