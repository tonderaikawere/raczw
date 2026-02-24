import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { BranchesSection } from "@/components/branches-section";
import { LeadershipSection } from "@/components/leadership-section";
import { MinistriesSection } from "@/components/ministries-section";
import { DonateSection } from "@/components/donate-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-14 sm:pt-16 md:pt-20">
        <HeroSection />
        <AboutSection />
        <BranchesSection />
        <LeadershipSection />
        <MinistriesSection />
        <DonateSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
