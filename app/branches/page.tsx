import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BranchesSection } from "@/components/branches-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Branches | Redemption Apostolic Church",
  description:
    "Find a Redemption Apostolic Church branch near you. We have 10 branches across Zimbabwe serving over 1,200 members.",
  alternates: {
    canonical: "/branches",
  },
};

export default async function BranchesPage({
  searchParams,
}: {
  searchParams?: Promise<{ q?: string }> | { q?: string };
}) {
  const params = await searchParams;

  return (
    <>
      <Header />
      <main className="pt-14 sm:pt-16 md:pt-20">
        {/* Page Hero */}
        <section className="relative py-20 bg-linear-to-br from-primary to-[oklch(0.35_0.2_260)] overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/church-building.jpg')] bg-cover bg-center opacity-10" />
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center text-primary-foreground">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Our Branches
              </h1>
              <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
                Find a Redemption Apostolic Church branch near you. We have 10
                strategically located branches across Zimbabwe.
              </p>
            </div>
          </div>
        </section>
        <BranchesSection query={params?.q} />
      </main>
      <Footer />
    </>
  );
}
