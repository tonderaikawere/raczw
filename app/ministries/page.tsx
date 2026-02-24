import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MinistriesSection } from "@/components/ministries-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ministries | Redemption Apostolic Church",
  description: "Explore our vibrant ministries including Women's, Men's, Youth, Children's, and Prayer ministries. Find your place to serve and grow.",
  alternates: {
    canonical: "/ministries",
  },
};

export default function MinistriesPage() {
  return (
    <>
      <Header />
      <main className="pt-14 sm:pt-16 md:pt-20">
        {/* Page Hero */}
        <section className="relative py-20 bg-gradient-to-br from-primary to-[oklch(0.35_0.2_260)] overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/youth-ministry.jpg')] bg-cover bg-center opacity-10" />
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center text-primary-foreground">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Ministries</h1>
              <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
                Explore our vibrant ministries designed to help you grow, serve, and connect with our church family.
              </p>
            </div>
          </div>
        </section>
        <MinistriesSection />
      </main>
      <Footer />
    </>
  );
}
