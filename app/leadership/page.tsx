import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LeadershipSection } from "@/components/leadership-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership | Redemption Apostolic Church",
  description: "Meet our leadership team led by Apostle R. Chigome. Discover our governance structure and the departments serving our church family.",
  alternates: {
    canonical: "/leadership",
  },
};

export default function LeadershipPage() {
  return (
    <>
      <Header />
      <main className="pt-14 sm:pt-16 md:pt-20">
        {/* Page Hero */}
        <section className="relative py-20 bg-gradient-to-br from-primary to-[oklch(0.35_0.2_260)] overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/apostle-chigome.png')] bg-cover bg-center opacity-10" />
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center text-primary-foreground">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Leadership</h1>
              <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
                Meet our dedicated leadership team led by Apostle R. Chigome, serving with integrity and divine wisdom.
              </p>
            </div>
          </div>
        </section>
        <LeadershipSection />
      </main>
      <Footer />
    </>
  );
}
