import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AboutSection } from "@/components/about-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Redemption Apostolic Church",
  description: "Learn about our divine origin, the Royal Blue Ribbon vision, our mission, vision, and core values of Love, Peace, and Unity.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-14 sm:pt-16 md:pt-20">
        {/* Page Hero */}
        <section className="relative py-20 bg-gradient-to-br from-primary to-[oklch(0.35_0.2_260)] overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/hero-worship.png')] bg-cover bg-center opacity-10" />
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center text-primary-foreground">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Our Church</h1>
              <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
                Discover the divine story behind Redemption Apostolic Church and our mission to spread Love, Peace, and Unity across Zimbabwe.
              </p>
            </div>
          </div>
        </section>
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
