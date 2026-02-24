import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Heart, HandHelping as PrayerHands, Clock, Users, CheckCircle, Send, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prayer Requests | Redemption Apostolic Church",
  description: "Submit your prayer requests to Redemption Apostolic Church. Our 24/7 prayer chain is ready to pray with you and believe God for breakthrough in every situation.",
  alternates: {
    canonical: "/prayer",
  },
};

const prayerCategories = [
  { id: "healing", name: "Healing", icon: "🏥", description: "Physical, emotional, and spiritual healing" },
  { id: "family", name: "Family", icon: "👨‍👩‍👧‍👦", description: "Marriage, children, and family relationships" },
  { id: "financial", name: "Financial", icon: "💰", description: "Provision, debt freedom, and prosperity" },
  { id: "career", name: "Career", icon: "💼", description: "Jobs, business, and professional growth" },
  { id: "spiritual", name: "Spiritual", icon: "✨", description: "Salvation, deliverance, and spiritual growth" },
  { id: "guidance", name: "Guidance", icon: "🧭", description: "Wisdom, direction, and life decisions" },
];

const recentPrayers = [
  {
    id: 1,
    name: "Anonymous",
    category: "Healing",
    request: "Pray for my mother's recovery from surgery",
    date: "2 hours ago",
    status: "active",
    answers: 12,
  },
  {
    id: 2,
    name: "John M.",
    category: "Financial",
    request: "Need God's provision for job opportunity",
    date: "5 hours ago",
    status: "active",
    answers: 8,
  },
  {
    id: 3,
    name: "Sarah T.",
    category: "Family",
    request: "Pray for restoration of my marriage",
    date: "1 day ago",
    status: "answered",
    answers: 15,
  },
  {
    id: 4,
    name: "Anonymous",
    category: "Spiritual",
    request: "Seeking deliverance from anxiety and fear",
    date: "2 days ago",
    status: "active",
    answers: 20,
  },
];

export default function PrayerRequestPage() {
  return (
    <>
      <Header />
      <main className="pt-14 sm:pt-16 md:pt-20">
        {/* Page Hero */}
        <section className="relative py-20 bg-gradient-to-br from-primary to-[oklch(0.35_0.2_260)] overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/hero-worship.png')] bg-cover bg-center opacity-10" />
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center text-primary-foreground">
              <PrayerHands className="w-16 h-16 mx-auto mb-6 text-primary-foreground/50" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Prayer Requests</h1>
              <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
                Our 24/7 prayer chain is ready to stand with you in faith. Submit your prayer request and let us believe God together for your breakthrough.
              </p>
            </div>
          </div>
        </section>

        {/* Prayer Request Form */}
        <section className="py-16 sm:py-20 lg:py-24 bg-background">
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Submit Your Prayer Request</h2>
                <p className="text-muted-foreground text-lg">
                  Your prayer request will be handled with confidentiality and prayed for by our dedicated prayer team.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Your Name</label>
                      <input
                        type="text"
                        placeholder="Enter your name (or Anonymous)"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Prayer Category</label>
                    <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                      <option value="">Select a category</option>
                      {prayerCategories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Prayer Request</label>
                    <textarea
                      rows={6}
                      placeholder="Share your prayer request with us..."
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="urgent" className="rounded" />
                    <label htmlFor="urgent" className="text-sm text-muted-foreground">
                      Mark as urgent prayer request
                    </label>
                  </div>

                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="anonymous" className="rounded" />
                    <label htmlFor="anonymous" className="text-sm text-muted-foreground">
                      Submit anonymously
                    </label>
                  </div>

                  <Button type="submit" className="w-full gap-2" size="lg">
                    <Send className="w-4 h-4" />
                    Submit Prayer Request
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Prayer Categories */}
        <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Prayer Categories</h2>
              <p className="text-muted-foreground text-lg">We believe God for breakthrough in every area of life</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {prayerCategories.map((category) => (
                <div key={category.id} className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="font-bold text-xl mb-2">{category.name}</h3>
                  <p className="text-muted-foreground text-sm flex-grow">{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Prayer Requests */}
        <section className="py-16 sm:py-20 lg:py-24 bg-background">
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Prayer Requests</h2>
              <p className="text-muted-foreground text-lg">Join us in praying for these needs</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {recentPrayers.map((prayer) => (
                <div key={prayer.id} className="bg-card rounded-2xl p-6 border border-border h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Heart className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{prayer.name}</h4>
                        <p className="text-sm text-muted-foreground">{prayer.category}</p>
                      </div>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      prayer.status === 'answered' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {prayer.status === 'answered' ? 'Answered' : 'Active'}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 flex-grow">{prayer.request}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{prayer.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{prayer.answers} prayers</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4 gap-2">
                    <PrayerHands className="w-4 h-4" />
                    Pray for This
                  </Button>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                View All Prayer Requests
              </Button>
            </div>
          </div>
        </section>

        {/* 24/7 Prayer Chain */}
        <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-10 h-10 text-primary-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">24/7 Prayer Chain</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Our dedicated prayer team is available around the clock to pray with you. No matter the time or situation, we're here to stand in faith with you.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Call Us</h3>
                  <p className="text-muted-foreground mb-4">Immediate prayer support</p>
                  <a href="tel:+263771234567" className="text-primary font-medium">+263 77 123 4567</a>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Email Us</h3>
                  <p className="text-muted-foreground mb-4">Send your prayer request</p>
                  <a href="mailto:prayer@racchurch.org" className="text-primary font-medium">prayer@racchurch.org</a>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Visit Us</h3>
                  <p className="text-muted-foreground mb-4">In-person prayer ministry</p>
                  <Link href="/branches" className="text-primary font-medium">Find a Branch</Link>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border text-center">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">God Answers Prayer</h3>
                <p className="text-muted-foreground text-lg mb-6">
                  We've seen countless miracles and breakthroughs through prayer. Whatever you're facing, we believe that God is able to do exceedingly abundantly above all we ask or think.
                </p>
                <Button size="lg" className="gap-2">
                  <Heart className="w-4 h-4" />
                  Share Your Testimony
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
