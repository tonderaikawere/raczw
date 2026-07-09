import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactSection } from "@/components/contact-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Redemption Apostolic Church",
  description: "Get in touch with Redemption Apostolic Church. Visit us, call, or send a message. We'd love to hear from you.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Redemption Apostolic Church",
    description: "Get in touch with Redemption Apostolic Church. Visit us, call, or send a message. We'd love to hear from you.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-14 sm:pt-16 md:pt-20">
        {/* Page Hero */}
        <section className="relative py-20 bg-gradient-to-br from-primary to-[oklch(0.35_0.2_260)] overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/community-outreach.jpg')] bg-cover bg-center opacity-10" />
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center text-primary-foreground">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
                Get in touch with Redemption Apostolic Church. We'd love to hear from you and welcome you to our family.
              </p>
            </div>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
